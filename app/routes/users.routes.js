const express = require('express');
const router = express.Router;
// controller 
const UsersController = require('../controllers/users.controllers.js');

// Signup Route
router.route('/signup')
.post(UsersController.signUp);

// Signin Route
router.route('/signin')
.post(UsersController.singIn);

// To get the secret
router.route('/secret')
.get(UsersController.secret);

// exporting the router
module.exports = router;