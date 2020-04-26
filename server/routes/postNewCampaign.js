const joi = require('@hapi/joi');
const db = require('../config/database')

module.exports = {
    method: 'POST',
    path: '/new_client_campaign',
    options: {
        validate: {
            // query: joi.object().keys({
            //     limit: joi.number().integer().min(1).max(200).default(200),
            //     offset: joi.number().integer().min(0).default(0)
            // })
        }
    },
    handler: async (req, toolkit) => {
        const payload = req.payload;

        return `Welcome ${payload.campaign_id}!`;
    }
}