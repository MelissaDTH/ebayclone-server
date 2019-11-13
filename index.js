const express = require("express");
const app = express();

// Middlewares
const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();

const cors = require("cors");
const corsMiddleWare = cors();

// Models & routing
const AdvertisementRouter = require('./advertisement/router')
const UserRouter = require('./user/router')

// Initial
const port = process.env.PORT || 4000;

app
  .use(corsMiddleWare)
  .use(bodyParserMiddleWare)
  .use(AdvertisementRouter)
  .use(UserRouter)

  app.listen(port, () => console.log(`This app is listening on port ${port}!`));
