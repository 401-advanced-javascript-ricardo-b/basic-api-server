'use strict';

const express = require('express');
const GameInfo = require('../models/gameInfo');
const gameInfo = new GameInfo();

const router = express.Router();

router.get('/gameInfo', getAllGameInfo);
router.get('/gameInfo/:id', getOneGameInfo);
router.post('/gameInfo', createGameInfo);
router.put('/gameInfo:id', updateGameInfo);
router.delete('/gameInfo:id', deleteGameInfo);

function getAllGameInfo(req, res){
  const allGameInfo = gameInfo.get();
  res.status(200).json(allGameInfo);
}

function getOneGameInfo(req, res){
  const id = req.params.id;
  const oneGameInfo = gameInfo.get(id);
  res.status(200).json(oneGameInfo);
}

function createGameInfo(req, res){
  const obj = req.body;
  const newGameInfo = gameInfo.create(obj);
  res.status(200).json(newGameInfo);
}

function updateGameInfo(req, res){
  

  res.status(200).json();
}

function deleteGameInfo(req, res){


  res.status(200).json();
}

module.exports = router;