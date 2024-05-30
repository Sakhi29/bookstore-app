const express = require("express");
const { getPopularBooks } = require("../controllers/popularbooks");

const router = express.Router();

router.get("/popular-books", getPopularBooks);

module.exports = router;
