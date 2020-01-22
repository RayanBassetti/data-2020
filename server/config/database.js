module.exports = require('knex')({
    client: 'pg',
    connection: 'postgres://' + process.env.DB_USERNAME + ':' + process.env.DB_MDP + '@' + process.env.DB_HOST + ':5432/postgres?ssl=disable'
  });