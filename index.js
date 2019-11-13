const express = require("express");
const app = express();

// Middlewares
const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();

const cors = require("cors");
const corsMiddleWare = cors();

// Models & DB
const Advertisement = require("./advertisement/model");

// Initial
const port = process.env.PORT || 4000;

app
  .use(corsMiddleWare)
  .use(bodyParserMiddleWare)
  .use(Advertisement)

  app.listen(port, () => console.log(`This app is listening on port ${port}!`));
