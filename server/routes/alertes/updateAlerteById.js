const joi = require('@hapi/joi');
const db = require('../../config/database')

module.exports = {
    method: 'PUT',
    path: '/alertes/{alerte_id}',
    options: {
        tags: ['api'],
        description: 'Update alerte',
        notes: 'Update a single alerte',
        validate: {
            params: joi.object().keys({
                alerte_id: joi.string().required()
            }),
            payload: joi.object().keys({
                status: joi.number().min(1).max(4),
                priority: joi.number()
            })
        }
    },
    handler: async (req, toolkit) => {
        const alerte = {
            priority: req.payload.priority,
            status: req.payload.status
        }
        return db('list_alertes').where('alerte_id', req.params.alerte_id).update(alerte)
        .then(result => {
            return toolkit.response({
                statusCode: 201,
                errors: null,
                message: 'OK',
                meta: {
                    query: req.query,
                    params: req.params
                },
                data: result
            }).code(201);
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