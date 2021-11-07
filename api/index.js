'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const routes = require('./utils/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.disable("x-powered-by");

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  }),
);

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}
app.use(function(req,res,next){
  console.log(`${req.method} ${req.path}`);
  console.log(`${JSON.stringify(req.headers, null, 2)}`);
  next();
})
app.use("/api", routes);

app.use((err, req , res, next) => { 

  console.error(err.message, err.stack);
  res.status(500).send({ message: "somethings wrong" });
});

app.use('/', express.static(path.join(__dirname, '..', config.STATIC_DIR)));

/* eslint-disable */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(config.PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `listening at http://localhost:${config.PORT} (${config.MODE} mode)`,
    );
  }
});
