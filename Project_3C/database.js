const pgp = require('pg-promise')()

const user = 'ulka'
const password = '12345678'
const host = 'localhost'
const pgPort = 5432
const database = 'mr_coffee'

//postgres setup
const connection = `postgres://${user}:${password}@${host}:${pgPort}/${database}`

const db = pgp(connection)

module.exports = db


