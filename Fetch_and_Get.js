const express = require('express');
const app = express();

const db = require('./db');

const Person = require('./model/Person');  // now all connectivites and opertion will perform with this
const Menu = require('./model/Menu');

const bodyParser = require('body-parser');  // first install body parser
app.use(bodyParser.json());  //b as we know we send json data so we use .json() and for differnt we use diff bodyParser

// it will recive data convert in obj and store in req.get
app.get('/', function (req, res) {

    res.send("welcomw to zavian store how may i help u")
})
app.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (error) {
        console.log(error);  // Make sure to use `error` here
        res.status(500).json({ error: 'internal error' });
    }
});

app.get('/menu', async (req, res) => {
    try {
        const data = await Menu.find();
        console.log("data fetched Successfully");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);  // Use `error` here as well
        res.status(500).json({ error: 'internal error' });
    }
});
//paramterized call of menu
app.get('/menu/:tasteType', async (req, res) => {

    try {
        // first get type 
        tasteType = req.params.tasteType;
        // now 
        if (tasteType == 'sour' || tasteType == 'sweet' || tasteType == 'spicy') {

            const respone = await Menu.find({ taste: tasteType });
            console.log("data fetched succeddfully");
            res.status(200).json(respone);
        }
        else {
            res.status(400).json({ error: 'Invalid work type' }); // Change status to 400 for bad request
        }

    }
    catch (error) {
        console.log(error);  // Use `error` here as well
        res.status(500).json({ error: 'internal error' });
    }
});

// route to add a person
app.post('/person1', async (req, res) => {
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
app.get('/person1', async (req, res) => {

    try {

        const data = await Person.find();
        console.log("data fetched Successfully");
        res.status(200).json(data);


    } catch (error) {
        console.log(err);
        res.status(500).json({ error: 'internal error' });

    }
})
// now for specific url :
app.get('/person1/:workType', async (req, res) => {
    try {
        // First extract work type from URL
        const workType = req.params.workType;

        // Now to avoid unnecessary keys:
        if (workType === 'chef' || workType === 'manager' || workType === 'weighter') {
            const response = await Person.find({ work: workType });
            console.log("response fetched");
            res.status(200).json(response);
        } else {
            res.status(400).json({ error: 'Invalid work type' }); // Change status to 400 for bad request
        }
    } catch (error) {
        console.log(error); // Use 'error' instead of 'err'
        res.status(500).json({ error: 'Internal server error' });
    }
});








app.listen(3000, () => {
    console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 