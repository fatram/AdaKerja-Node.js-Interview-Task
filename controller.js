'use strict';

var response = require('./res');
var connection = require('./conn');
const INTERNAL_ERROR = 'Internal Server Error';

exports.getMessages = function (req, res) {
    connection.query('SELECT * FROM messages', function (error, rows, fields) {
        if (error) {
            console.log(error);
            response.fail(INTERNAL_ERROR, res);
        } else {
            response.ok(rows, res);
        }

    });
}

exports.getMessageById = function (req, res) {
    let mid = req.query.id;
    console.log(mid);
    connection.query('SELECT * FROM messages WHERE message_id = ?', [mid], function (error, rows, fields) {
        if (error) {
            console.log(error);
            response.fail(INTERNAL_ERROR, res);
        } else {
            response.ok(rows, res);
        }

    });
}

exports.removeMessageById = function (req, res) {
    let mid = req.query.id;
    connection.query('DELETE FROM messages WHERE message_id = ?', [mid], function (error, rows, fields) {
        if (error) {
            console.log(error);
            response.fail(INTERNAL_ERROR, res);
        } else {
            response.ok(rows, res);
        }

    });
}