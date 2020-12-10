'use strict';

const express = require('express');
const Class2 = require('../models/class2');
const class2 = new Class2();

const router = express.Router();

router.get('/class2', getAllClass2);
router.get('/class2/:id', getOneClass2);
router.post('/class2', createClass2);
router.put('/class2:id', updateClass2);
router.delete('/class2:id', deleteClass2);

function getAllClass2(req, res){
  const allClass2 = class2.get();
  res.status(200).json(allClass2);
}

function getOneClass2(req, res){
  const id = req.params.id;
  const oneClass2 = class2.get(id);
  res.status(200).json(oneClass2);
}

function createClass2(req, res){
  const obj = req.body;
  const newClass2 = class2.create(obj);
  res.status(200).json(newClass2);
}

function updateClass2(req, res){
  

  res.status(200).json();
}

function deleteClass2(req, res){


  res.status(200).json();
}

module.exports = router;