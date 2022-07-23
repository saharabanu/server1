const express = require("express");

const app = express();

const middleware = app.use(express.json());
module.exports = middleware;
