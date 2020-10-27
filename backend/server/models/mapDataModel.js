import env from '../../../client/config/env';

const { Pool } = require('pg');

const URI = env.PG_URI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}; // <-- export your model
