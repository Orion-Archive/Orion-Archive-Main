const db = require("../models/mapDataModel.js");

module.exports = {
	putMarker: (req, res, next) => {
		const { eventName, latitude, longitude, eventDescription } = req.body;

		QUERYSTRING = `INSERT INTO events (event_name, event_description, latitude, longitude, time) VALUES ($1, $2, $3, $4, now()) RETURNING *;`;
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

	// getEventsByTime: (req, res, next) => {
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
