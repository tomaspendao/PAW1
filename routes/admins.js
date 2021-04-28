var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminController");

router.get("/", adminController.mainPage);

//Promoter/////

router.get("/promoters/", adminController.showAllPromoters);
router.get("/promoters/show/:id", adminController.showPromoter);

router.get("/promoters/create", adminController.createFormPromoter);
router.post("/promoters/create", adminController.createPromoter);

router.post("/promoters/edit/:id", adminController.editPromoter);
router.get("/promoters/edit/:id", adminController.editFormPromoter);

router.get("/promoters/delete/:id", adminController.deletePromoter);

//Events/////

router.get("/events", adminController.showAllEvents);
router.get("/events/show/:id", adminController.showEvent);

router.get("/events/create", adminController.createFormEvent);
router.post("/events/create", adminController.createEvent);

router.post("/events/edit/:id", adminController.editEvent);
router.get("/events/edit/:id", adminController.editFormEvent);

router.get("/events/delete/:id", adminController.deleteEvent);

//Locations/////

router.get("/locations", adminController.showAllLocations);
router.get("/locations/show/:id", adminController.showLocation);

router.get("/locations/create", adminController.createFormLocation);
router.post("/locations/create", adminController.createLocation);

router.post("/locations/edit/:id", adminController.editLocation);
router.get("/locations/edit/:id", adminController.editFormLocation);

router.get("/locations/delete/:id", adminController.deleteLocation);

module.exports = router;
