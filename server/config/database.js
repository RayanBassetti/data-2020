module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_H + ':5432/postgres?ssl=disable'
});