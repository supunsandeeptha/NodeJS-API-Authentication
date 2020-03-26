const express = require('express');
const router = require('express-promise-router')();
//adding the route helper
const {validateBody, schemas } = require('../helpers/routerHelpers.js');
// controller 
const UsersController = require('../controllers/users.controllers.js');

// Signup Route wit validation
router.route('/signup')
.post(validateBody(schemas.authSchema),UsersController.signUp);

// Signin Route
router.route('/signin')
.post(UsersController.signIn);

// To get the secret
router.route('/secret')
.get(UsersController.secret);

// exporting the router
module.exports = router;