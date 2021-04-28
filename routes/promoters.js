var express = require("express");
var router = express.Router();
var promoterController = require("../controllers/promoterController");

router.get("/", promoterController.showAll);
router.get("/show/:id", promoterController.show);
//router.get("/create", promoterController.createForm);
//router.post("/create", promoterController.create);
//router.post("/edit/:id", promoterController.edit);
//router.get("/edit/:id", promoterController.editForm);
//router.get("/delete/:id", promoterController.delete);

module.exports = router;
