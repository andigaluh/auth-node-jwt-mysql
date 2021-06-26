require("dotenv").config();
module.exports = {
  secret: process.env.APP_SECRET,
  CORSURL: process.env.APP_CORSURL,
  URL: process.env.APP_URL,
  PORT: process.env.APP_PORT,
};
