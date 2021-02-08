'use strict';

const express =require('express');
const products = require('../lib/models/products/products-collection');
const category = require('../lib/models/categories/category-collection');
const router = express.Router();
const notes = require('../lib/models/notes/notes-collection')
router.get('/api/v1/:model',getHandFun);
router.get('/api/v1/:model',getHandFun);
router.post('/api/v1/:model',postHandFun);
router.put('/api/v1/:model',putHandFun);
router.delete('/api/v1/:model',deleteHandFun);

router.param('model',getModel);

function getHandFun(req,res,next){
    let id =req.params.id;
    req.model.read(id).then(data=> {
        let count = data.length;
        res.status(200).json({count, results});
    }).catch(next);
}

function postHandFun(req,res,next){
    let id =req.params.id;
    req.model.create(id).then(data=> {
        let count = data.length;
        res.status(200).json({count, results});
    }).catch(next);
}

function putHandFun(req,res,next){
    let id =req.params.id;
    req.model.update(id,req.body).then(data=> {
        let count = data.length;
        res.status(200).json({count, results});
    }).catch(next);
}

function deleteHandFun(req,res,next){
    let id =req.params.id;
    req.model.delete(id).then(data=> {
        let count = data.length;
        res.status(200).json({count, results});
    }).catch(next);
}

function getModel(req,res,next){
    let model = req.params.model; 
    switch(model) {
        case "category":
            req.model = category;
            next();
            break;
        case "products": 
            req.model = products;
            next();
            break;
        case "todo":
            req.model=notes;
            next();
            break;  
        default: 
            next('Invalid');
            break;
    }
}

module.exports = router;