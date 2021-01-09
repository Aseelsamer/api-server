'use strict';

const supergoose = require('@code-fellows/supergoose');
const cat = require('../lib/models/categories/category-collection');

describe('Category Model',()=>{
    it('it can get()',()=>{
        const obj={
            name:'hello',
            display_name:'hey',
            description:'hello from the other side '
        }
        return cat.read()
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
        return cat.create(obj)
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
        return cat.read(id)
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
    let id = req.params;
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
    return cat.update(id)
    .then(data=>{
        Object.keys(obj).forEach(key=>{
            expect(data[0][key].toEqual(obj[key]))
        })
})

})


})
