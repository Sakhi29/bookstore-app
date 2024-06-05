const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const popularBooksRoute = require("./routes/popularbooks");
const freeEbooksRoute = require("./routes/freeebooks");
const paidEbooksRoute = require("./routes/paidebooks");
const wishlistRoute = require("./routes/wishlist");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, console.log("connected mongodb"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", popularBooksRoute);
app.use("/api", freeEbooksRoute);
app.use("/api", paidEbooksRoute);
app.use("/api", wishlistRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
