const express = require('express');
const router = express.Router();
const db = require('../db');
const controllers = require('../controllers/transaction.controller');



// home transaction
router.get('/', controllers.index);
router.post('/', controllers.indexPost);
  


// create transaction
router.get('/create', controllers.create);
  
router.post('/create', controllers.createPost);




// isComplete
router.get('/:id/complete', controllers.iscomplete);




// exports
module.exports = router;