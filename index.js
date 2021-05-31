const express = require('express');
const bodyParser = require('body-parser');
const post = require('./data')

const app = express();

app.use(bodyParser.json());



app.listen(5003, () =>{
    console.log('escuchando en el puerto 5003')
})




