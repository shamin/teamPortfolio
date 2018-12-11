const handler = require("./handler");

const router = (req, res) => {
  const url = req.url;
  
  if (req.method == 'POST') {
    handler.handlerSubmit(req, res);
  } 
  else {
    if (url === "/") {
      handler.handlerHome(req, res);
    } else if (url.indexOf("public") !== -1) {
      handler.handlerPublic(req, res, url);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("404 not found!");
    }
  }
};

module.exports = router;
