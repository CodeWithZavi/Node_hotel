const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');  // first install body parser
app.use(bodyParser.json());  //b as we know we send json data so we use .json() and for differnt we use diff bodyParser

// it will recive data convert in obj and store in req.get
app.get('/', function (req, res) {

     res.send("Wellcome to out hotel")
})
// import Menu router:
const menuRoutes = require('./routes/menuRoutes');
// // use 
app.use('/menu', menuRoutes);
// import Person router :
const personRoutes = require('./routes/personRoutes');
// use 
app.use('/person1', personRoutes);





app.listen(3000, () => {
     console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 