const express = require("express");
const { addWishlistItem, getWishlistItem } = require("../controllers/wishlist");
const checkFirebaseToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/wishlist", checkFirebaseToken, addWishlistItem);
router.get("/wishlist", checkFirebaseToken, getWishlistItem);

module.exports = router;
