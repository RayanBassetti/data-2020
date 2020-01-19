const joi = require('@hapi/joi');

exports.GetPanelById = {
    method: 'GET',
    path: '/api/panels/{panel_id}',
    options: {
        validate: {
            params: joi.object().keys({
                panel_id: joi.string().required()
            })
        }
    },
    handler: async (req, h) => {
        return {
            statusCode: 200,
            errors: null,
            message: 'OK',
            data: {
                panel_info: req.params
            }
        }
    }
}