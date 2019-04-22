var express = require('express');
var router = express.Router();
var db = require('./queries');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/laptops', db.getAllLaptops);
router.get('/api/distinctlaptops', db.getAllLaptopsDistinct);
router.get('/api/laptops/:id', db.getLaptopById)
router.get('/api/distinctlaptops/:id', db.getLaptopByDistinctId)
module.exports = router;