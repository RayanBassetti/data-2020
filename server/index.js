'use strict';

const Hapi = require('@hapi/hapi');

const init = async () => {

    require('dotenv').config()

    const server = Hapi.server({
        port: 4000,
        routes: {
            cors: true
        },
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
        require('./routes/singleUser'),
        require('./routes/allUsers'),
        require('./routes/getUserById')
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();