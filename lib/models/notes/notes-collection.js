'use strict';

const Model = require('../mongo');


class Notes extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Notes(); 