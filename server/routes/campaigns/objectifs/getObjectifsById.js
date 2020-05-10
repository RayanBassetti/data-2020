const joi = require('@hapi/joi');
const db = require('../../../config/database')


module.exports = {
    method: 'GET',
    path: '/campaigns/{client_id}/objectifs',
    options: {
        tags: ['api'],
        description: 'Get objectifs',
        notes: 'Get all the objectifs related to a single client, with the client_id indicated',
        validate: {
            params: joi.object().keys({
                client_id: joi.string().required()
            }),
            query: joi.object().keys({
                limit: joi.number().integer().min(1).max(10).default(5),
                offset: joi.number().integer().min(0).default(0)
            })
        }
    },
    handler: async (req, toolkit) => {
        return db('list_objectifs').where('client_id', req.params.client_id)
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
                            message: 'Failed to connect to database - Needed : UUID',
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