import { PG_URI } from '@env';

const { Pool } = require('pg');

const URI = PG_URI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}; // <-- export your model
