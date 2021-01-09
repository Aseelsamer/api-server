'use strict';

const Model = require('../mongo');
const schema = require('./products-schema');


class Products extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Products(); 