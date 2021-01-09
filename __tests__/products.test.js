'use strict';

const supergoose = require('@code-fellows/supergoose');
const pro = require('../lib/models/products/products-collection');

describe('Category Model',()=>{
    it('it can get()',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        return pro.read()
        .then(data=>{
            Object.keys(obj).forEach(key=>{
                expect(data[0][key].toEqual(obj[key]))
            })
        })
    })

    it('it can post()',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        return pro.create(obj)
        .then(data=>{
            id=data._id;
            Object.keys(obj).forEach(key=>{
                expect(record[key]).toEqual(obj[key])
            })
        })
    })

    it('it can get(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        let id = req.params;
        return pro.read(id)
        .then(data=>{
            Object.keys(obj).forEach(key=>{
                expect(data[0][key].toEqual(obj[key]))
            })
    })

    })

    it('it can update(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
    let id = pro.params;
    return cat.update(id)
    .then(data=>{
        Object.keys(obj).forEach(key=>{
            expect(data[0][key].toEqual(obj[key]))
        })
})
    })


   
    it('it can delete(id)',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
    let id = req.params;
    return pro.update(id)
    .then(data=>{
        Object.keys(obj).forEach(key=>{
            expect(data[0][key].toEqual(obj[key]))
        })
})

})


})
