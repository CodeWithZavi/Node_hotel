const express = require('express');
const app = express();

const db = require('./db');

const person = require('./model/Person');  // now all connectivites and opertion will perform with this

const bodyParser = require('body-parser');  // first install body parser
app.use(bodyParser.json());  //b as we know we send json data so we use .json() and for differnt we use diff bodyParser

// it will recive data convert in obj and store in req.get
app.get('/', function (req, res) {

     res.send("welcomw to zavian store how may i help u")
})
// route to add a person
app.post('/person', (res, req) => {

     const data = req.body; // Assuming that req body contain person data ==> data after going through praser it will store in req.body
     // create a new person document with moongose model
     const newPerson = new person(data); // now all data inherit in newPerson
     //save newperson in database
     newPerson.save((error, savedperson) => {
          if (error) {
               console.log("error saving data:", error);
               res.status(500).json({ error: 'internal error' });
               // this method is no longer used
          }
          else {
               console.log("data is saved");
               res.status(200).json(savedperson);
          }
     })
})
// Corrected Way :
app.post('/person', async (req, res) => {
     try {
          const data = req.body; // Assuming that req body contain person data ==> data after going through praser it will store in req.body
          // create a new person document with moongose model
          const newPerson = new Person(data); // now all data inherit in newPerson
          //save newperson in database
          const respone = await newPerson.save();// if it will give error it will go in catch block
          console.log('data saved');
          res.status(200).json(respone);
     }
     catch (err) {
          console.log(err);
          res.status(500).json({ error: 'internal error' });
     }
})
// get data from database
app.get('/person', async (req, res) => {

     try {

          const data = await Person.find();
          console.log("data fetched Successfully");
          res.status(200).json(data);


     } catch (error) {
          console.log(err);
          res.status(500).json({ error: 'internal error' });

     }
})

app.listen(3000, () => {
     console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 

/* app.get('/coding', (req, res) => {
     res.send("welcpme to coding tutorailw ith zavian")
})
app.get('/java', (req, res) => {
     res.send("JAVA CODING with zavian")
})
app.get('/nodejs', (req, res) => {
     res.send("NODE JS CODING with zavian")
})
app.post('/person', (req, res) => {
 
     res.send("data is saved");
});
app.get('/C', (req, res) => {
 
     const object = {
          name: "noman",
          company: "CEO K TECH",
          is_Billionare: true
     }
 
     res.send(object);
 
})*/
app.listen(3000, () => {
     console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 