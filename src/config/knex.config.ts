const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const knexdb = require('knex')(configuration);

module.exports = knexdb;