const tape = require("tape");
const dbBuild = require("../database/db_build");
const getData = require("../queries/getData");
const postData = require("../queries/postData");

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

const post = {
  name: "Second name",
  email: "Second email",
  message: "Second message"
};

tape("test postData function to posts name of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    postData.postFormData(
      post.name,
      post.email,
      post.message,
      (err, response) => {
        if (err) {
          return console.log(err, "Error posting rest data");
        }
        getData.getFormData(function(err, res) {
          if (err) return console.log("ERROR IN GETDATA: " + err);
          t.equals(
            res[1].name,
            "Second name",
            "Name of second contact form should be 'Second name'"
          );
          t.end();
        });
      }
    );
  });
});

tape("test postData function to posts email of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    postData.postFormData(
      post.name,
      post.email,
      post.message,
      (err, response) => {
        if (err) {
          return console.log(err, "Error posting rest data");
        }
        getData.getFormData(function(err, res) {
          if (err) return console.log("ERROR IN GETDATA: " + err);
          t.equals(
            res[1].email,
            "Second email",
            "Email of second contact form should be 'Second email'"
          );
          t.end();
        });
      }
    );
  });
});

tape("test postData function to posts message of user", t => {
  dbBuild(function(error, response) {
    if (error) return console.log("ERROR IN DBBUILD: " + error);
    postData.postFormData(
      post.name,
      post.email,
      post.message,
      (err, response) => {
        if (err) {
          return console.log(err, "Error posting rest data");
        }
        getData.getFormData(function(err, res) {
          if (err) return console.log("ERROR IN GETDATA: " + err);
          t.equals(
            res[1].message,
            "Second message",
            "Message of second contact form should be 'Second message'"
          );
          t.end();
        });
      }
    );
  });
});
