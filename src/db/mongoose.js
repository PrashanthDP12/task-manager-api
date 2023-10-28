const mongoose = require("mongoose");
const validator = require("validator");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
