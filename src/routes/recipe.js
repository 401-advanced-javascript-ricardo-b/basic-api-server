'use strict';

const express = require('express');
const Recipe = require('../models/recipe');
const recipe = new Recipe();

const router = express.Router();

router.get('/Recipe', getAllRecipe);
router.get('/Recipe/:id', getOneRecipe);
router.post('/Recipe', createRecipe);
router.put('/Recipe:id', updateRecipe);
router.delete('/Recipe:id', deleteRecipe);

function getAllRecipe(req, res){
  const allRecipe = Recipe.get();
  res.status(200).json(allRecipe);
}

function getOneRecipe(req, res){
  const id = req.params.id;
  const oneRecipe = Recipe.get(id);
  res.status(200).json(oneRecipe);
}

function createRecipe(req, res){
  const obj = req.body;
  const newRecipe = Recipe.create(obj);
  res.status(200).json(newRecipe);
}

function updateRecipe(req, res){
  
  

  res.status(200).json();
}

function deleteRecipe(req, res){


  res.status(200).json();
}

module.exports = router;