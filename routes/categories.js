
'use strict';

const express = require('express');
const router = express.Router();

router.get('/categories',get());
router.get('/categories/:id',getById());
router.delete('/categories/:id', deleteFunc());
router.post('/categories',postFunc());
router.put('/categories/:id', putFunc())


//create routes for categories and products
let data = {

    "categories": [
        {
            "id": 1,
            "name": "food1",
            "display_name": "fast food",
            "discription": "delicious"
        },
        {
            "id": 2,
            "name": "food2",
            "display_name": "traditional food",
            "discription": "yummy"
        }
    ]
};


function putFunc (req, res) {
    collecPro.update(req.params.id,req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};


function postFunc (req, res){
    collecPro.create(req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};

function deleteFunc (req, res){
    collecPro.delete(req.params.id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
};

function getById (req, res){
    collecPro.read(req.params.id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}

function get (req, res) {
    collecPro.read(req.params.id)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}