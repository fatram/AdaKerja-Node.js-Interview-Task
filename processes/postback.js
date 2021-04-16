const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');

module.exports = function processPostback(event) {
  const senderID = event.sender.id;
  const payload = event.postback.payload;
  if (payload === 'getstarted') {
    addUserId(senderID); // Add sender id to the database once user get started with bot
    let message = "Hi, welcome to Askbot. Hope you are doing good today";
    let message2 = "I am your friendly neighborhood bot :D";
    let message3 = "May I know your first name?";
    senderAction(senderID);
    sendMessage(senderID, {text: message}).then(() => {
    sendMessage(senderID, { text: message2 }).then(() => {
        sendMessage(senderID, {text: message3});
    })
   });
 }
}

function addUserId(uid) {
    var mysql = require('mysql');

    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "askbot"
    });

    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT IGNORE INTO user_info (id) VALUES (?)";
    var vals = [uid];
    con.query(sql, vals, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    });
}