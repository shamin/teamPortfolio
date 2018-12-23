const tape = require("tape");
const dbBuild = require("../database/db_build.js");
const getData = require("../queries/getData.js");

tape("test getData function to get a name of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData.getFormData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[0].name,
        "Example",
        "Name of first user should be 'Example'"
      );
      t.end();
    });
  });
});

tape("test getData function to get email of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData.getFormData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[0].email,
        "example@gmail.com",
        "Email of first contact form should be 'example@gmail.com'"
      );
      t.end();
    });
  });
});

tape("test getData function to get message of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    getData.getFormData(function(err, res) {
      if (err) return console.log("ERROR IN GETDATA: " + err);
      t.equals(
        res[0].message,
        "Get in touch about working together, cheers! Example",
        "Message of first contact form should be 'Get in touch about working together, cheers! Example'"
      );
      t.end();
    });
  });
});