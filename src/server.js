'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const notFoundHandler = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const recipeRoutes = require('./routes/recipe');
const gameInfoRoutes = require('./routes/gameInfo');

app.use(express.json());
app.use(logger);
app.use(recipeRoutes);
app.use(gameInfoRoutes);

app.use('*', notFoundHandler);
app.use(serverError);

module.exports = {
  server: app,
  start: port =>{
    if(!port){
      throw new Error('Missing Port')}
    app.listen(port, ()=>{
      console.log(`Server Up, Port: ${port}`);
    })
  }
}