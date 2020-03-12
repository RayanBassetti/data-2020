const joi = require('@hapi/joi');
const db = require('../config/database')

module.exports = {
    method: 'GET',
    path: '/api/users/{user_id}',
    options: {
        validate: {
            params: joi.object().keys({
                user_id: joi.string()
            })
        }
    },
    handler: async (req, toolkit) => {
        // trouver le paramètre nécessaire pour chercher l'utilisateur dans la bdd
        return db('common_users').where('id', '98cc8279-3655-4e29-a93e-2943541148bc') // exemple fonctionnel ici, à voir comment passer la req.params et rendre le tout fonctionnel
            .then(result => {
                console.log(result)
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