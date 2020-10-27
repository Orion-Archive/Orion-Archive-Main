const { Pool } = require('pg');

require('dotenv').config();

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = '';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}; // <-- export your model
