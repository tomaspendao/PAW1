var express = require("express");
var router = express.Router();
var promoterController = require("../controllers/promoterController");

router.get("/", promoterController.showAll);
router.get("/show/:id", promoterController.show);
router.get("/create", promoterController.createForm);
router.post("/create", promoterController.create);
//router.post("/edit/:id", promoterController.edit);
//router.get("/edit/:id", promoterController.editForm);
//router.get("/delete/:id", promoterController.delete);

router.get("/log", promoterController.logForm);
router.post("/log", promoterController.log);


router.get("/events", promoterController.showAllEvents);
router.get("/events/show/:id", promoterController.showEvent);

router.get("/events/create", promoterController.createFormEvent);
router.post("/events/create", promoterController.createEvent);

router.post("/events/edit/:id", promoterController.editEvent);
router.get("/events/edit/:id", promoterController.editFormEvent);

router.get("/events/delete/:id", promoterController.deleteEvent);

module.exports = router;
