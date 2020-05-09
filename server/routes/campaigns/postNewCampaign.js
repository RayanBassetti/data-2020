const joi = require('@hapi/joi');
const db = require('../../config/database')
const { v4: uuidv4 } = require('uuid');

module.exports = {
    method: 'POST',
    path: '/campaigns',
    options: {
        tags: ['api'],
        description: 'Create campaign',
        notes: 'Create a single campaign',
        validate: {
            // query: joi.object().keys({
            //     limit: joi.number().integer().min(1).max(200).default(200),
            //     offset: joi.number().integer().min(0).default(0)
            // })
        }
    },
    handler: async (req, toolkit) => {
        const {client_id, starting_date, ending_date} = req.payload
        const campaign = {
            "client_id": client_id,
            "campaign_id": uuidv4(),
            "created_at": new Date().toISOString().slice(0, 10),
            "starting_date": new Date().toISOString().slice(0, 10),
            "ending_date": new Date().toISOString().slice(0, 10),
        }
        return db('list_campaigns').where('client_id', req.payload.client_id)
            .then(res => {
                if(res.length > 0) {
                    return toolkit.response({
                        statusCode: 403,
                        message: 'Error: Campaign already existing.',
                        errors: [
                            {
                                message: 'Error: Campaign already existing with this client.',
                            }
                        ],
                        meta: {
                            existing_id: req.payload.client_id
                        },
                    }).code(403);
                } else {
                    return db('list_campaigns').insert(campaign)
                        .then(result => {
                            return toolkit.response({
                                statusCode: 204,
                                errors: null,
                                message: 'OK',
                                meta: {
                                    query: req.query,
                                    params: req.params
                                },
                                data: result
                            }).code(204);
                        })
                        .catch(err => {
                            return toolkit.response({
                                statusCode: 500,
                                message: 'Internal Server Error',
                                errors: [
                                    {
                                        message: 'Error with the database',
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
        )

    }
}