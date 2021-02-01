const express = require('express');
const router = express.Router();
const db = require('../db');
const controllers = require('../controllers/user.controller');

// home users
router.get('/',controllers.index);

  
// create user
router.get('/create', controllers.create);

router.get('/add/user', controllers.addUser);

// update user
router.get('/update/:id', controllers.update);

router.get('/update/updateuser/:id', controllers.updateUser);

// delete user
router.get('/delete/:id', controllers.delete);

// View user
router.get('/view/:id', controllers.view);

module.exports = router;