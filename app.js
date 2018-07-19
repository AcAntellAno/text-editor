//Using ES6 with the let and const keywords and the arrow functions =>
let bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express();

	//using const becuase our port # will never change
	//variables that never change, we capatilize them
	const _PORT = 8080;

	//connect to a db (mongodb)
	mongoose.connect('mongodb://localhost/docs');

	//Docs Schema
	let docsSchema = mongoose.Schema({
		title: String,
		body: String,
		created: {type: Date, default: Date.now}
	});

	//Docs Model
	let Doc = mongoose.model('Doc', docsSchema);

	//our root route
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});


	//our web server
	app.listen(_PORT, () => {
		console.log('The magic is on port 8080...');
	});
