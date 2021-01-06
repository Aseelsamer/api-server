'use strict';

const Model = require('../mongo');
const schema = require('./products-schema');


class Prod extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Prod(); 