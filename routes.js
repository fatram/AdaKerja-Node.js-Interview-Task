const processPostback = require('./processes/postback');
const processMessage = require('./processes/messages');
const cntlr = require('./controller');
const request = require('request');

module.exports = function(app, chalk){

   app.get('/setup',function(req,res){
      var messageData = {
         "get_started":{
               "payload":"getstarted"
         }
      };
      // Start the request
      request({
      url: "https://graph.facebook.com/v2.6/me/messenger_profile?access_token="+ process.env.PAGE_ACCESS_TOKEN,
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      form: messageData
      },
      function (error, response, body) {
      if (!error && response.statusCode == 200) {
         // Print out the response body
         res.send(body);

      } else { 
         // TODO: Handle errors
         res.send(body);
      }
      });
  });

  app.get('/webhook', function(req, res) {
    if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN){
       console.log('webhook verified');
       res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error('verification failed. Token mismatch.');
        res.sendStatus(403);
     }
  });
  
  app.post('/webhook', function(req, res) {
    //checking for page subscription.
    if (req.body.object === 'page'){
       
       /* Iterate over each entry, there can be multiple entries 
       if callbacks are batched. */
       req.body.entry.forEach(function(entry) {
       // Iterate over each messaging event
          entry.messaging.forEach(function(event) {
          console.log(event);
          if (event.postback){
             processPostback(event);
          } else if (event.message){
             processMessage(event);
          }
      });
    });
    res.sendStatus(200);
   }
  });

  app.route('/messages').get(cntlr.getMessages);
  app.route('/messages/message').get(cntlr.getMessageById);
  app.route('/messages/delete').get(cntlr.removeMessageById);
}