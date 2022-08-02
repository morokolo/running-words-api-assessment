const { createPool } = require("mysql2");

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST, // Replace with your host name
  user: process.env.DB_USER, // Replace with your database username
  password: process.env.DB_PASS, // Replace with your database password
  database: process.env.DB_NAME, // // Replace with your database Name
});

module.exports = pool;
