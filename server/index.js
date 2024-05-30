const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const popularBooksRoute = require("./routes/popularbooks");
const freeEbooksRoute = require("./routes/freeebooks");
const paidEbooksRoute = require("./routes/paidebooks");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/api", popularBooksRoute);
app.use("/api", freeEbooksRoute);
app.use("/api", paidEbooksRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
