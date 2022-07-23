// const dotenv = require("dotenv");
const http = require("http");
const app = require("./app/app");

require("dotenv").config();
// dotenv.config(require("./config/.env"));

const server = http.createServer(app);
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("server is running " + port);
});
