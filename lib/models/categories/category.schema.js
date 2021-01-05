'use strict';

const mongoose = require('mongoose');

const food = mongoose.Schema({
    name: {type:String , required:true},
    display_name: {type:String , required:true},
    discription: {type:String , required:true}
});

module.exports = mongoose.model('food', food);