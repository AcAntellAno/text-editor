//Using ES6 with the let and const keywords and the arrow functions =>
let bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express();

	//using const becuase our port # will never change
	//variables that never change, we capatilize them
	const _PORT = 8080;

	//our root route, which we will change later
	app.get('/', (req, res) => {
		res.send('Welcome to the text app mofos');
	});


	//our web server
	app.listen(_PORT, () => {
		console.log('The magic is on port 8080...');
	});

