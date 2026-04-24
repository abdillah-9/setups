const knexfile = require("../../knexfile")

//Create DB  config
const config = knexfile[process.env.NODE_ENV || "development"];

module.exports = config;