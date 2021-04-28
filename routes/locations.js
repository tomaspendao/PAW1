var express = require("express");
var router = express.Router();
var locationController = require("../controllers/locationController");

router.get("/", locationController.showAll);
router.get("/show/:id", locationController.show);
//router.get("/create", locationController.createForm);
//router.post("/create", locationController.create);
//router.post("/edit/:id", locationController.edit);
//router.get("/edit/:id", locationController.editForm);
//router.get("/delete/:id", locationController.delete);

router.get("/back", locationController.back); //para todos

module.exports = router;
