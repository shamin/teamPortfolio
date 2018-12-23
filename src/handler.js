const fs = require("fs");
const path = require("path");
const postData = require("./queries/postData");
const qs = require("querystring");

const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error: ${error}`);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we'v had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handler404 = (request, response) => {
  const url = request.url;
  const filePath = path.join(__dirname, "..", "public", "404.html");
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error: ${error}`);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we'v had a problem on our end</h1>");
    } else {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.end(file);
    }
  });
};

const handlerPublic = (request, response, url) => {
  const extension = url.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript"
  };

  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(`Error: ${error}`);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1>Sorry, we'v had a problem on our end</h1>");
    } else {
      response.writeHead(200, { "Content-Type": extensionType[extension] });
      response.end(file);
    }
  });
};

const handlerSubmit = (req, res) => {
  let body = "";
  req.on("data", data => {
    body += data;
  });
  req.on("end", function() {
    const post = qs.parse(body);
    postData.postFormData(
      post.name,
      post.email,
      post.message,
      (err, response) => {
        if (err) {
          return console.log(err, "Error posting rest data");
        }
        res.writeHead(302, {
          Location: "/#contact-section"
        });
        res.end();
      }
    );
  });
};

module.exports = {
  handlerHome,
  handler404,
  handlerPublic,
  handlerSubmit
};
