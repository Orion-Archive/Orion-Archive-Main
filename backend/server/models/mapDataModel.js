<<<<<<< HEAD
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = "postgres://ayovbbcq:OwwUoR79RTyNzEG9hIHpH_apreH5KLfL@lallah.db.elephantsql.com:5432/ayovbbcq";
=======
import env from '../../../client/config/env';
>>>>>>> 26f05e31956dd8182d79633955c8fd3ed5bb9c64

const { Pool } = require('pg');

const URI = env.PG_URI;

<<<<<<< HEAD
const { Pool } = require("pg");
=======
>>>>>>> 26f05e31956dd8182d79633955c8fd3ed5bb9c64
const pool = new Pool({ connectionString: URI });

module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback);
	},
}; // <-- export your model
