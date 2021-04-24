var express = require('express');
var router = express.Router();

const promoter = require('./promoter');
const main = require('./main');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', null);
});

router.get('/criar', function(req, res, next) {
  res.render('criar', null);
});*/

router.use('/',main)

router.use('/promoter',promoter);

module.exports = router;
