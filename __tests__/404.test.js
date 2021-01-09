'use strict';

const notFoundHandler = require('../middleware/404');


describe('page not found ',()=>{
    it('should respond with page not found 404 ',()=>{
        notFoundHandler();
        expect(result.status).toBe(404);
    })
})