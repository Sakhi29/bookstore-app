const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: { type: [String], required: true },
  description: { type: String, required: false },
  thumbnail: { type: String, required: false },
  amount: { type: String, required: false },
});

const userSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  wishlist: [wishlistSchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
