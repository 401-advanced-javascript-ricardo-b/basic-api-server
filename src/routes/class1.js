'use strict';

const express = require('express');
const Class1 = require('../models/class1');
const class1 = new Class1();

const router = express.Router();

router.get('/class1', getAllClass1);
router.get('/class1/:id', getOneClass1);
router.post('/class1', createClass1);
router.put('/class1:id', updateClass1);
router.delete('/class1:id', deleteClass1);

function getAllClass1(req, res){
  const allClass1 = class1.get();
  res.status(200).json(allClass1);
}

function getOneClass1(req, res){
  const id = req.params.id;
  const oneClass1 = class1.get(id);
  res.status(200).json(oneClass1);
}

function createClass1(req, res){
  const obj = req.body;
  const newClass1 = class1.create(obj);
  res.status(200).json(newClass1);
}

function updateClass1(req, res){
  

  res.status(200).json();
}

function deleteClass1(req, res){


  res.status(200).json();
}

module.exports = router;