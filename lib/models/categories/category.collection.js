'use strict';

const Model = require('../modal');
const schema = require('./category.schema');


class Categories extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Categories(); 