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

	//set our view engine for ejs
	app.set('view engine', 'ejs');
	//adds ability to get static public files like css
	app.use(express.static('public'));

	//Docs Schema
	let docsSchema = mongoose.Schema({
		title: String,
		body: String,
		created: {type: Date, default: Date.now}
	});

	//Docs Model
	let Doc = mongoose.model('Doc', docsSchema);

	/*Uncomment the below part to create dummy data for mongodb*/
	// Doc.create({
	// 	title: "Document 2",
	// 	body: "Where does it come fhe first line of Lorem Ipsum, comes from a line in section 1.10.32."

	// }, (err, newDoc) => {
	// 	if(err){
	// 		console.log("Could not add new doc")
	// 		console.log(err)
	// 	} else{
	// 		console.log("Added new doc")
	// 		console.log(newDoc)
	// 	}
	// });

	/*Mongodb dummy data*/

	//our root route
	app.get('/', (req, res) => {
		res.redirect('/docs');
	});

	/*****RESTful ROUTES*****/

	app.get('/docs', (req, res) => {
		res.render('index')
	})


	//our web server
	app.listen(_PORT, () => {
		console.log('The magic is on port 8080...');
	});
