require('dotenv').config();

const{
  DB_DIALECT,
  DB_HOSTNAME,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT,
    "timezone": '+07:00',
  }
}
