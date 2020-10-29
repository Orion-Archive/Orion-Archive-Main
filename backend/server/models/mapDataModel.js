require('dotenv').config();

const { Pool } = require('pg');

const { PG_URI } = process.env;

const URI = PG_URI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}; // <-- export your model
