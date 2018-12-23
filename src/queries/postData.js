'use strict';
const databaseConnection = require('../database/db_connection');
const nodemailer = require('nodemailer');

const postFormData = (name, email, message, cb) => {
    databaseConnection.query(
        'INSERT INTO contact_form (name, email, message) VALUES ($1, $2, $3)',
        [name, email, message],
        (err, res) => {
            if(err) {
                return cb(err);
            } else {
                cb(null, res);
            }
        }
    );
};

module.exports = {
    postFormData
}