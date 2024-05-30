const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const api_key = process.env.GOOGLE_BOOKS_API_KEY;

const getFreeEbooks = async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=filter=free-ebooks&key=${api_key}`
    );
    res.json(response.data.items);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

module.exports = { getFreeEbooks };
