const db = require("../models/mapDataModel.js");

module.exports = {
	putMarker: (req, res, next) => {
		console.log("In putMarker middleware")
		const { eventName, latitude, longitude, eventDescription } = req.body;

		QUERYSTRING = `INSERT INTO events (event_name, latitude, longitude, event_description) VALUES ($1, $2, $3, $4) RETURNING *;`;
		VALUES = [eventName, latitude, longitude, eventDescription];

		db.query(QUERYSTRING, VALUES, (err, response) => {
			if (err) return next(err);
			else {
				console.log("Response from INSERT: ", response.rows[0]);
				res.locals.insertedEvent = response.rows[0];
				return next();
			}
		});
	},

	getMarkers: (req, res, next) => {
	    QUERYSTRING = `SELECT * FROM events`;
	    VALUES = [];

	    db.query(QUERYSTRING, VALUES, (err, response) => {
	        if (err) return next(err);
	        else {
	            res.locals.markers = response.rows;
	            return next();
	        }
	    })
	},

	// getAllEvents: (req, res, next) => {
	//     QUERYSTRING = ``;
	//     VALUES = [];

	//     db.query(QUERYSTRING, VALUES, (err, response) => {
	//         if (err) return next(err);
	//         else {
	//             res.locals.messages = response.rows;
	//             return next();
	//         }
	//     })
	// },

	// deleteEvent: (req, res, next) => {
	//     const messageId = req.body.messageId;

	//     QUERYSTRING = `DELETE FROM messages WHERE message_id=$1 RETURNING *`;
	//     VALUES = [messageId];

	//     db.query(QUERYSTRING, VALUES, (err, response) => {
	//         if (err) return next(err);
	//         else {
	//             console.log('Response from DELETE: ', response.rows)
	//             res.locals.messages = response.rows;
	//             return next();
	//         }
	//     })
	// }
};
