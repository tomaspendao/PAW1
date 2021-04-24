var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("promotermain", { title: 'Promoter' });

});

router.post("/criarEvent", function (req, res, next) {
    res.render("locais/eventos/criar", { title: 'Promoter' });
    console.log(req.body);
  });


  router.post("/criarLocal", function (req, res, next) {
    res.render("locais/createLocal", { title: 'Promoter' });
    console.log(req.body);
  });

module.exports = router;
