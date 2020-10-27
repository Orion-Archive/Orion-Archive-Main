const db = require('../models/mapDataModel.js')

module.exports = {
    postEvent: (req, res, next) => {
        QUERYSTRING = ``; 
        VALUES = [message, password];

        db.query(QUERYSTRING, VALUES, (err, response) => {
            if (err) return next(err);
            else {
                console.log('Response from INSERT: ', response.rows[0])
                res.locals.response = response.rows[0];
                return next();
            }
        })
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
