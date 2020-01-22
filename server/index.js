'use strict';

const Hapi = require('@hapi/hapi');
const joi = require('@hapi/joi');

const init = async () => {

    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/api',
        handler: (req, h) => {
            return {
                statusCode: 200,
                errors: null,
                message: 'OK',
            }
        }
    })

    server.route([
        require('./routes/panels').GetPanelById,
        require('./routes/GetAll')
        // require('./routes/panels').CreatePanel
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();