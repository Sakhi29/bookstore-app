const User = require("../models/user");

const addWishlistItem = async (req, res) => {
  try {
    console.log("Incoming wishlist item", req.body);

    let user = await User.findOne({ uid: req.user.uid });

    if (!user) {
      user = new User({
        uid: req.user.uid,
        wishlist: [],
      });
    }

    user.wishlist.push(req.body);

    await user.save();

    res.status(200).send("Wishlist item added");
  } catch (error) {
    console.error("Error adding wishlist item:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getWishlistItem = async (req, res) => {
  try {
    const userId = req.user.uid;
    const user = await User.findOne({ uid: userId });
    if (!user) {
      return res.status(404).send("User not found");
    }

    const wishlistItems = Array.isArray(user.wishlist)
      ? user.wishlist.filter((item) => item !== null)
      : [];

    console.log(wishlistItems);
    res.json(wishlistItems);
  } catch (error) {
    console.log("Error while fetching items", error);
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  addWishlistItem,
  getWishlistItem,
};
