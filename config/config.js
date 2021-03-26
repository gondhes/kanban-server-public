const env = process.env.NODE_ENV

if(env == "development" || env == "test") {
  require('dotenv').config()
}

module.exports = {
  "development": {
    "username": "fajarwirazdi",
    "password": null,
    "database": "kanban",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable":"DATABASE_URL",
      "ssl": true,
      "dialect": "postgres",
      "protocol": "postgres",
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
  }
}
