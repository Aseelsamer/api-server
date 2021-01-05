'use strict';

const server = require('../lib/server');
const supertest = require ('supertest');
const mockrequest = supertest(server);

describe('Tests',()=>{
    it('it can get ()',()=>{
        return mockrequest
        .get('/')
        .then((result => expect(result.status).toBe(200)))
    });

    it('it can get with Id ()',()=>{
        return mockrequest
        .get('/:id')
        .then((result => expect(result.status).toBe(200)))
    });

    it('it should delete with Id ()',()=>{
        return mockrequest
        .delete('/categories/:id')
        .then((result => expect(result.status).toBe(200)))
    });

    it('it should delete with Id ()',()=>{
        return mockrequest
        .delete('/products/:id')
        .then((result => expect(result.status).toBe(200)))
    });


    it('it can create ',()=>{
        let record ={
            "name": "food1",
            "display_name": "fast food",
            "discription": "delicious"
        };
        return mockrequest
        .post('/categories')
        .send(record)
        .then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    })

    it('it can create ',()=>{
        let record ={
            "name": "food3",
            "display_name": "turkish food",
            "discription": "so yummy"
        };
        return mockrequest
        .post('/product')
        .send(record)
        .then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    })

    it('it can create ',()=>{
        let record ={
            "name": "food3",
            "display_name": "turkish food",
            "discription": "so yummy"
        };
        return mockrequest
        .put('/products/1')
        .send(record)
        .then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    })

    it('it can create ',()=>{
        let record ={
            "name": "food1",
            "display_name": "fast food",
            "discription": "delicious"
        };
        return mockrequest
        .put('/categories/1')
        .send(record)
        .then(result=> {
            expect(result.status).toBe(200);
        }).catch(console.error);
    })




})