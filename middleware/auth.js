const jwt = require("jsonwebtoken");
const Stg = require("../Modules/StagiaireModule");
require("dotenv/config");
exports.verifyToken =  (req, res, next) => {
  const token =req.headers.authorization.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
   jwt.verify(token,process.env.TOKEN_KEY);
   console.log(jwt.verify(token,process.env.TOKEN_KEY))
    next()
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
};