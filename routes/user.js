const express = require("express");
const {
    userById,
    getUser,
    allUsers,
    updateUser,
    deleteUser,
    userPhoto,
    hasAuthorization
} = require('../controllers/user');
const { requireSignin } = require("../controllers/auth");


// Express
const router = express.Router();


// User Info
router.get("/matching", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, hasAuthorization, updateUser);
router.delete("/user/:userId", requireSignin, hasAuthorization, deleteUser);

// User Photo
router.get("/user/photo/:userId", userPhoto);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
