const express = require('express');
const bodyParser = require('body-parser');
const post = require('./data')

const app = express();

app.use(bodyParser.json());


app.delete('/post/:id', (req, res ) => {
    const nuevoPost = post.filter( elemento => elemento.id !== Number(req.params.id))
    
    
    res.status(200).json(nuevoPost);
})

app.listen(5003, () =>{
    console.log('escuchando en el puerto 5003')
})




