const express = require("express");
const { getPaidEbooks } = require("../controllers/paidebooks");

const router = express.Router();

router.get("/paid-ebooks", getPaidEbooks);

module.exports = router;
