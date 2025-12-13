// config.js
const dotenv = require("dotenv");
dotenv.config();

// METHOD NUMBER. 1 //

// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;

// METHOD NUMBER. 1 //

// METHOD NUMBER. 2//

module.exports = {
  endpoint: process.env.API_URL,
  masterKey: process.env.API_KEY,
  port: process.env.PORT,
  DB_HOST: process.env.DB_HOST, // Database host
  DB_USERNAME: process.env.DB_USERNAME, // Database username
  DB_PASSWORD: process.env.DB_PASSWORD, // Database password
  DB_DATABASE: process.env.DB_DATABASE, // Name of the database
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  TOKEN_HEADER_KEY: process.env.TOKEN_HEADER_KEY,
};

// METHOD NUMBER. 2//
