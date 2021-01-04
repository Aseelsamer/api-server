'use strict';

const express = require('express');
const server = express();


//.start method
module.exports = {
    server: server,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, () => console.log(`listening on ${PORT}`))
    }
}

//middleware
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFound = require('../middleware/404');
const serverError = require('../middleware/500');

//import into the server
server.use(express.json());
server.use(timestamp);
server.use(logger);

//create routes for categories and products
let data = {

    "categories": [
        {
            "id": 1,
            "name": "food1",
            "display_name": "fast food",
            "discription": "delicious"
        },
        {
            "id": 2,
            "name": "food2",
            "display_name": "traditional food",
            "discription": "yummy"
        }
    ],
    "products": [
        [
            {
                "id": 1,
                "name": "food3",
                "display_name": "turkish food",
                "discription": "so yummy"
            },

            {
                "id": 2,
                "name": "food4",
                "display_name": "indian food",
                "discription": "hot"
            }
        ]
    ]
};


server.get('/products', (req, res) => {
    res.status(200).send(data.products)
});

server.get('/categories', (req, res) => {
    res.status(200).send(data.categories)
});



server.get('/products/:id', (req, res) => {
    let id = req.params.id;
    let record;
    data.products.forEach(value => {
        if (value.id == id) {
            record = value;
        }
    })
    res.status(200).send(record);
});

server.get('/categories/:id', (req, res) => {
    let id = req.params.id;
    let record;
    data.categories.forEach(value => {
        if (value.id == id) {
            record = value;
        }
    })
    res.status(200).send(record);
});

server.delete('/products/:id', (req, res) => {
    let id = req.params.id;
    data.products.forEach(value => {
        if (value.id == id) {
            data.categories(value);
            console.log(value);
            res.status(200).send(data.products);
        }
    })
});


server.delete('/categories/:id', (req, res) => {
    let id = req.params.id;
    data.categories.forEach(value => {
        if (value.id == id) {
            data.categories(value);
            res.status(200).send(data.categories);
        }
    })
});


server.post('/products', (req, res) => {
    let id;
    let name = req.body.name;
    let display_name = req.body.display_name;
    let description = req.body.description;

    let newRecord = {
        'id': id,
        'name' : name,
        'display_name' : display_name,
        'description' : description
    };
    
    data.products.push(newRecord);
    res.status(200).send(newRecord);
})

server.post('/categories', (req, res) => {
    let id;
    let name = req.body.name;
    let display_name = req.body.display_name;
    let description = req.body.description;

    let newRecord = {
        'id': id,
        'name' : name,
        'display_name' : display_name,
        'description' : description
    };
    
    data.categories.push(newRecord);
    res.status(200).send(newRecord);
})

server.put('/products/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let display_name = req.body.display_name;
    let description = req.body.description; 
    
    data.products.forEach(value=>{
        if(value.id==id){
            value.name=name;
            value.display_name=display_name;
            value.description=description;
            res.status(200).send(value);
        }
    })
})

server.put('/categories/:id', (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let display_name = req.body.display_name;
    let description = req.body.description; 
    
    data.categories.forEach(value=>{
        if(value.id==id){
            value.name=name;
            value.display_name=display_name;
            value.description=description;
            res.status(200).send(value);
        }
    })
})



server.use(notFound);
server.use(serverError);