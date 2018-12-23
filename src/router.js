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
      handler.handler404(req, res);
    }
  }
};

module.exports = router;
