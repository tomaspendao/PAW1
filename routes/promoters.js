var express = require("express");
var router = express.Router();
var promoterController = require("../controllers/promoterController");
//===================================
//NEW STARTS
//===================================
let multer = require('multer');
let DIR = './uploads/';
//===================================
//NEW ENDS
//===================================

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
//===================================
//NEW STARTS
//===================================
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname.toLowerCase().split(' ').join('-');
		cb(null, fileName);
	},
});
var upload = multer({
	storage: storage,
	// limits: {
	//   fileSize: 1024 * 1024 * 5
	// },
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == 'image/png' ||
			file.mimetype == 'image/jpg' ||
			file.mimetype == 'image/jpeg'
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
		}
	},
});
router.post('/events/create', upload.single('poster'), (req, res, next) => {
    console.log(req.file);
	promoterController.createEvent(req, res, next);
});

router.get("/events/edit/:id", promoterController.editFormEvent);
router.post('/events/edit/:id', upload.single('poster'), (req, res, next) => {
    console.log(req.file);
	promoterController.editEvent(req, res, next);
});
//===================================
//NEW ENDS
//===================================

router.get("/events/delete/:id", promoterController.deleteEvent);

module.exports = router;
