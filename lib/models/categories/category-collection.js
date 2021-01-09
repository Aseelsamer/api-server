'use strict';

const Model = require('../mongo');
const schema = require('./category-schema');


class Category extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Category(); 