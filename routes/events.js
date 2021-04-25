var express = require('express');
var router = express.Router();
var eventController = require('../controllers/eventController');
var locationController = require('../controllers/locationController');

router.get('/',eventController.showAll);
router.get('/show/:id', eventController.show);

router.get('/create',eventController.createForm);
router.post('/create',eventController.create);

router.post('/edit/:id', eventController.edit);
router.get('/edit/:id', eventController.editForm);

router.get('/delete/:id',eventController.delete);


module.exports = router;