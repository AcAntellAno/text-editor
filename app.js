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
  created: { type: Date, default: Date.now }
});

//Docs Model
let Doc = mongoose.model('Doc', docsSchema);

let userSchema = mongoose.Schema({
  email: String,
  name: String,
  password: String, //bad practice to store passwords as plain text, but we will fix this later
  docs: [
    //will be an array of object ideas belonging to a doc

    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doc'
    }
  ]
});

var User = mongoose.model('User', userSchema);

// User.create({
//   email: 'bob@gmail.com',
//   name: 'Bob Belcher',
//   password: 'ILoveBurgers'
// });

// Doc.create(
//   {
//     title: 'You are my family, I love you',
//     body: 'BUT You are terrible, you are aaaaall terrible'
//   },
//   (err, doc) => {
//     if (err) {
//       console.log('could not create doc');
//       console.log(err);
//     } else {
//       User.findOne({ email: 'bob@gmail.com' }, (err, foundUser) => {
//         if (err) {
//           console.log(err);
//         } else {
//           foundUser.docs.push(doc);
//           foundUser.save((err, data) => {
//             if (err) {
//               console.log(err);
//             } else {
//               console.log(data);
//             }
//           });
//         }
//       });
//     }
//   }
// );

//Find User
User.findOne({ email: 'bob@gmail.com' }) //find user with email
  .populate('docs') // populate array docs with data
  .exec((err, user) => {
    //execute the querry
    if (err) {
      console.log(err);
    } else {
      console.log(user);
    }
  });
//find all docs for that user

//our root route
app.get('/', (req, res) => {
  res.redirect('/docs');
});

/*****RESTful ROUTES*****/

app.get('/docs', (req, res) => {
  res.render('index');
});

//our web server
app.listen(_PORT, () => {
  console.log('The magic is on port 8080...');
});
