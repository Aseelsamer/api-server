
'use strict';

const express = require('express');
const router = express.Router();
const collecCat = require('../lib/models/categories/category-collection');

router.get('/categories',get);
router.get('/categories/:id',getById);
router.delete('/categories/:id', deleteFunc);
router.post('/categories',postFunc);
router.put('/categories/:id', putFunc)


function putFunc (req, res,next) {
    let id = req.params.id;
    collecCat.update(id,req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};


function postFunc (req, res,next){
    collecCat.create(req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};

function deleteFunc (req, res,next){
    let id = req.params.id;
    collecCat.delete(id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};

function getById (req, res,next){
    let id = req.params.id;
    collecCat.get(id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}

function get (req, res,next) {
    collecCat.get()
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}

module.exports = router;
