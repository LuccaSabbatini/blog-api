const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes.js");
const ApplicationError = require("./app/errors/ApplicationError.js");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    res.status(err.status).send(err);
  } else {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(3000);
