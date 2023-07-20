const { Pool } = require("pg");

const pool = new Pool({
  host: "DATABASE_HOST",
  port: 5432,
  database: "DATABASE_NAME",
  user: "DATABASE_USERNAME",
  password: "DATABASE_PASSWORD",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;
