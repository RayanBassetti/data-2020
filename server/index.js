'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

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
                message: 'Go to /documentation for a full description of all available routes.',
            }
        }
    })

    server.route([
        require('./routes/alertes/getAllAlertes'),
        require('./routes/alertes/getAlerteByClientId'),
        require('./routes/alertes/updateAlerteById'),
        require('./routes/planning/getAllTasks'),
        require('./routes/clients/getAllClients'),
        require('./routes/clients/getClientById'),
        require('./routes/clients/getConsProdClients'),
        require('./routes/campaigns/getCampaignById'),
        require('./routes/campaigns/postNewCampaign'),
        require('./routes/campaigns/objectifs/getObjectifsById'),
        require('./routes/campaigns/objectifs/postNewObjectif'),
    ])

    const swaggerOptions = {
        info: {
            title: 'Rayan Bassetti - Hapi/JOI/Knex - Documentation',
            version: Pack.version,
        },
    };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    await server.start();
    console.log('Server running on %s. Please consider going on /documentation for a proper page describing the different routes.', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();