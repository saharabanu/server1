const express = require("express");
const middleware = require("./middleware");
const app = express();

app.use(middleware);

app.use(require("./routes"));

module.exports = app;
