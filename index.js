const express = require('express');
const bodyParser = require('body-parser');
const post = require('./data');

const app = express();

app.use(bodyParser.json());

app.post('/post', (req, res) => {
	post.push(req.body);
	res.status(201).json(post);
});

app.delete('/post/:id', (req, res) => {
	const nuevoPost = post.filter((elemento) => elemento.id !== Number(req.params.id));

	res.status(200).json(nuevoPost);
});

app.get('/post', (req, res) => {
	res.status(200).json(post);
});

app.patch('/post/:id', (req, res) => {
	const nuevoPost = post.map((elemento) => {
		if (elemento.id == req.params.id) {
			return (elemento = req.body);
		} else {
			return elemento;
		}
	});

	res.status(200).json(nuevoPost);
});

app.listen(5003, () => {
	console.log('escuchando en el puerto 5003');
});
