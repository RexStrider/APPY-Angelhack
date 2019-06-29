const express = require('express');
const {
    signup,
    signin,
    signout,
    forgotPassword,
    resetPassword
} = require('../controllers/auth');


const { userSignupValidator, passwordResetValidator } = require('../validator');
const { userById } = require("../controllers/user");

// Express 
const router = express.Router();

// Auth Routes
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

// Password Reset/Forgot routes
router.put("/forgot-password", forgotPassword);
router.put('/reset-password', passwordResetValidator, resetPassword);


// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
