'use strict';

const express = require('express');
const router = express.Router();
const collecPro = require('../lib/models/products/products-collection');


router.get('/products',get);
router.get('/products/:id',getById);
router.delete('/products/:id', deleteFunc);
router.post('/products',postFunc);
router.put('/products/:id', putFunc);


function get(req,res,next){
    collecPro.get()
    .then(result=>{
        res.status(200).send(result)

    }).catch(next);
}

function getById(req,res,next){
    let id = req.params.id;
    collecPro.get(id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
   
}

function deleteFunc(req,res,next){
    let id = req.params.id;
    collecPro.delete(id)
    .then(result=>{
        res.status(201).send(result);
    }).catch(next);
        }


function postFunc (req, res,next) {
    collecPro.create(req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}


function putFunc(req, res,next) {
    let id = req.params.id;
    collecPro.update(id,req.body)
    .then(result=>{
        res.status(200).send(result);
        
    }).catch(next);
        }


module.exports = router;
