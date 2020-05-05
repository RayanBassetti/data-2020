const joi = require('@hapi/joi');
const db = require('../../config/database')
const { v4: uuidv4 } = require('uuid');

module.exports = {
    method: 'POST',
    path: '/campaigns/{client_id}/objectifs',
    options: {
        validate: {
            // query: joi.object().keys({
            //     limit: joi.number().integer().min(1).max(200).default(200),
            //     offset: joi.number().integer().min(0).default(0)
            // })
        }
    },
    handler: async (req, toolkit) => {
        const {client_id, title, text} = req.payload
        const objectif = {
            "client_id": client_id,
            "objectif_id": uuidv4(),
            "title": title,
            "text": text,
            "status": false,
            "created_at": new Date().toISOString().slice(0, 10),
        }
        return db('list_objectifs').insert(objectif)
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