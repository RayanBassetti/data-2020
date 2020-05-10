const joi = require('@hapi/joi');
const db = require('../../config/database')

module.exports = {
    method: 'GET',
    path: '/planning',
    options: {
        tags: ['api'],
        description: 'Get planning',
        notes: 'Get all the tasks of the planning',
        validate: {
            query: joi.object().keys({
                limit: joi.number().integer().min(1).max(200).default(200),
                offset: joi.number().integer().min(0).default(0)
            })
        }
    },
    handler: async (req, toolkit) => {
        return db.select().from("list_planning").limit(req.query.limit).offset(req.query.offset)
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