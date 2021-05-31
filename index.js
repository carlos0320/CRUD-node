const express = require('express');
const bodyParser = require('body-parser');
const post = require('./data')

const app = express();

app.use(bodyParser.json());

<<<<<<< HEAD
app.post('/post', ( req, res ) => {
    post.push(req.body);

    res.status(201).json(post);
=======
app.get('/post', (req, res) => {
    res.status(200).json(post)
>>>>>>> master
})

app.listen(5003, () =>{
    console.log('escuchando en el puerto 5003')
})




