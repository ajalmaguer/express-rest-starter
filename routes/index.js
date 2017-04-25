var express = require('express');
var router = express.Router();
var computersController = require('../computers/computers.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('hello world')
});

// Computer Routes
router.get('/computers', 		computersController.getComputerList)
router.get('/computers/:id', 	computersController.getComputerDetails)
router.put('/computers/:id', 	computersController.editComputer)
router.post('/computers', 		computersController.addNewComputer)
router.delete('/computers/:id', computersController.deleteComputer)

module.exports = router;
