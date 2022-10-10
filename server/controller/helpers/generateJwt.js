const jwt = require("jsonwebtoken");
require("dotenv").config();

const options = {
  expiresIn: "1h",
};

async function generateJwt(email, userId) {
  try {
    console.log("Generating JWT "+email+" and "+userId);
    const payload = { email: email, id: userId };//Data stored in payload
    const token = await jwt.sign(payload, process.env.JWT_SECRET, options);
    return { error: false, token: token };
  } 
 
  
  catch (error) {
    return { error: true };
  }
}

module.exports = { generateJwt };
