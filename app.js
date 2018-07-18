//Using ES6 with the let, const, and arrow functions ( =>)

//require all the packages that we will be using
let bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	express = require('express'),
	app = express();

//const cus our port variable will never change
const _PORT = 8080;

//root route => will eventually change
app.get('/', (req, res) => {
	res.send('Welcome to the page!')
})


//our web server
app.listen(_PORT, () => {
	console.log("The magic is on port 8080...")
})
