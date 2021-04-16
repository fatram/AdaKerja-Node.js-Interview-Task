const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');

const askTemplate = (text) => {
    return {
        "text": text,
        "quick_replies":[
        {
            "content_type":"text",
            "title":"Yes",
            "payload":"POSTBACK_PAYLOAD"
        },{
            "content_type":"text",
            "title":"No",
            "payload":"POSTBACK_PAYLOAD"
        }
        ]
    }
}

const yesWords = ['yes', 'yeah', 'yup', 'sure', 'okay', 'yea', 'ok']
const noWords = ['no', 'nope', 'nah']

module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        console.log("Received message from senderId: " + senderID);
        console.log("Message is: " + JSON.stringify(message));
        if (message.text) {
            let text = message.text;
            saveMessage(senderID, text, Date.now());
            var request = require("request");
            if (Date.parse(text)) {
                updateBirthday(senderID, new Date(text));
                response = askTemplate('Do you want to know how many days till your next birthday?');
                senderAction(senderID);
                sendMessage(senderID, response);
            } else if (noWords.includes(text.toLowerCase())) {
                let msg = "Goodbye";
                senderAction(senderID);
                sendMessage(senderID, {text: msg});
            } else if (yesWords.includes(text.toLowerCase())) {
                findDiffBirthday(senderID);
            } else {
                let msg = "Hello " + text;
                updateFirstName(senderID, text);
                console.log(senderID);
                senderAction(senderID);
                sendMessage(senderID, {text: msg}).then(() => {
                    let msg2 = "What is your birthday?";
                    sendMessage(senderID, ({text: msg2}));
                });
            }

        }
    }
}

function saveMessage(uid, msg, timestamp) {
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
    var sql = "INSERT INTO messages (user_id, message, timestamp) VALUES (?, ?, ?)";
    var vals = [uid, msg, timestamp];
    con.query(sql, vals, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
    });
}

function updateFirstName(uid, firstName) {
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
    var sql = "UPDATE user_info SET first_name = ? WHERE id = ?";
    var vals = [firstName, uid];
    con.query(sql, vals, function (err, result) {
        if (err) {
            addUserId(uid);
        };
        console.log("1 record updated");
    });
    });
}

function updateBirthday(uid, birthday) {
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
    var sql = "UPDATE user_info SET birthday = ? WHERE id = ?";
    var vals = [birthday, uid];
    con.query(sql, vals, function (err, result) {
        if (err) {
            addUserId(uid);
        };
        console.log("1 record updated");
    });
    });
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

function findDiffBirthday(uid) {
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
    var sql = "SELECT * FROM user_info WHERE id = ?";
    var vals = [uid];
    con.query(sql, vals, function (err, result) {
        if (err) throw err;
        let nextBirthday = new Date(result[0].birthday);
        let today = new Date();
        nextBirthday.setFullYear(today.getFullYear() + 1);   
        let diffTime = Math.abs(nextBirthday - today);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        let msg = "There are " + diffDays + " days left until your next birthday"
        senderAction(uid);
        sendMessage(uid, {text: msg});
    });
    });
}