const joi = require('@hapi/joi');
const db = require('../config/database')

module.exports = {
    method: 'GET',
    path: '/api/all',
    options: {
        validate: {
            query: joi.object().keys({
                limit: joi.number().integer().min(1).max(200).default(20),
                offset: joi.number().integer().min(0).default(0)
            })
        },
        cors: true
    },
    handler: async (req, toolkit) => {
        return db.select().from('history_panels').limit(req.query.limit).offset(req.query.offset)
            .then(result => {
                return toolkit.response({
                    statusCode: 200,
                    errors: null,
                    message: 'OK',
                    meta: {
                        query: req.query,
                        params: req.params
                    },
                    data: result
                }).code(200);
            })
            .catch(err => {
                return toolkit.response({
                    statusCode: 500,
                    errors: null,
                    message: 'Internal Server Error',
                    errors: [
                        {
                            message: 'Failed to connect to database',
                            error: err
                        }
                    ],
                    meta: {
                        query: req.query,
                        params: req.params
                    },
                    data: null
                }).code(500);
            });
        
    }
}