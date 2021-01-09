'use strict';

const errorHandler = require('../middleware/500');

describe('you have an error ',()=>{
    it('should respond with you have error 500 ',()=>{
        errorHandler();
        expect(result.status).toBe(500);
    });
})