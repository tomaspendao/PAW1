var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("promotermain", { title: 'Promoter' });

});

router.post("/criar", function (req, res, next) {
    res.render("eventos/criar", { title: 'Promoter' });
    console.log(req.body);
  });

module.exports = router;
