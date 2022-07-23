const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

app.use("/", require("./2ndClass/routes/routes"));

app.use((error, req, res, next) => {
  const errorMessage = error.message ? error.message : "something is wrong";
  res.status(500).send({ message: errorMessage });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
