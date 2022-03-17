require('dotenv').config();

const{
  SECRET,
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
    "dialect": DB_DIALECT
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DB_DATABASE,
    "host": DB_HOSTNAME,
    "dialect": DB_DIALECT
  }
}
