const express = require("express");
const { getFreeEbooks } = require("../controllers/freeebooks");

const router = express.Router();

router.get("/free-ebooks", getFreeEbooks);

module.exports = router;
