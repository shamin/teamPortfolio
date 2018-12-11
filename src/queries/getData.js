const dbConnection = require('../database/db_connection.js');

const getFormData = cb => {
  dbConnection.query(`SELECT * FROM contact_form`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = {
    getFormData
};