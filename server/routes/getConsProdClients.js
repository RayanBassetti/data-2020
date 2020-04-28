const joi = require('@hapi/joi');
const db = require('../config/database')

module.exports = {
    method: 'GET',
    path: '/cons_prod_clients/{client_id}',
    options: {
        validate: {
            params: joi.object().keys({
                client_id: joi.string().required()
            })
        }
    },
    handler: async (req, toolkit) => {
        return db('cons_prod_clients_1').where('client_id', req.params.client_id)
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