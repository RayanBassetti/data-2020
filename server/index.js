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
        path: '/',
        handler: (req, h) => {
            return {
                statusCode: 200,
                errors: null,
                message: 'Existing routes : /cons_prod_clients (GET), /fake_clients (GET), /new_client_campaign (POST)',
            }
        }
    })

    server.route([
        require('./routes/getAllClients'),
        require('./routes/getConsProdClients'),
        require('./routes/postNewCampaign')
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();