const PG_URI  = `postgres://ayovbbcq:OwwUoR79RTyNzEG9hIHpH_apreH5KLfL@lallah.db.elephantsql.com:5432/ayovbbcq`

const { Pool } = require('pg');

const URI = PG_URI;

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}; // <-- export your model
