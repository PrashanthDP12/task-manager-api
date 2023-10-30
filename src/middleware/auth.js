const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();
// This function is to check if token coming in from request is valid or not.
// In this TaskManager setup, Single user can have multiple tokens if he logined via different devices
// Here it will check if token from request is from anyone of the valida tokens of that users
// Note : Tokens are saved in db in this setup.
// This funtion can be used in middleware when we want to authorise incoming request from user to perform certain action.
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

module.exports = auth;
