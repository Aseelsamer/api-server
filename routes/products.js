'use strict';

const express = require('express');
const router = express.Router();
const collecPro = require('../lib/products/products.collection');


router.get('/products',get());
router.get('/products/:id',getById());
router.delete('/products/:id', deleteFunc());
router.post('/products',postFunc());
router.put('/products/:id', putFunc());


//create routes for categories and products
let data = {
    "products": [
        [
            {
                "id": 1,
                "name": "food3",
                "display_name": "turkish food",
                "discription": "so yummy"
            },

            {
                "id": 2,
                "name": "food4",
                "display_name": "indian food",
                "discription": "hot"
            }
        ]
    ]
};



function get(req,res){
    collecPro.read()
    .then(result=>{
        res.status(200).send(result)

    }).catch(next);
}

function getById(req,res){
    collecPro.read(req.params.id)
    .then(result=>{
        res.status(200).send(record);
    }).catch(next);
   
}

function deleteFunc(req,res){
    collecPro.delete(req.params.id)
    .then(result=>{
        res.status(201).send(result);
    }).catch(next);
        }


function postFunc (req, res) {
    collecPro.create(req.body)
    .then(result=>{
        res.status(200).send(result);
    }).catch(next);
}



function putFunc(req, res) {
    collecPro.update(req.params.id,req.body)
    .then(result=>{
        res.status(200).send(result);
        
    }).catch(next);
        }


module.exports = router;
