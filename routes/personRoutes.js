const express = require('express');
const router = express.Router();

const Person = require('./../model/Person');  // now all connectivites and opertion will perform with this

router.post('/', async (req, res) => {
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
router.get('/', async (req, res) => {

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
router.get('/:workType', async (req, res) => {
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

//post method:
router.put('/:id', async (req, res) => {

    try {
        const personId = req.params.id;  // get id from url
        const updatePersonData = req.body; // now updated data for person
        const respone = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,  // it will return the updated document
            runValidators: true, // run mongoose validation
        });
        if (!respone) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log("data upadted successfully");
        res.status(200).json(respone);
    }
    catch (error) {
        console.log(error); // Use 'error' instead of 'err'
        res.status(500).json({ error: 'Internal server error' });
    }
})
router.delete('/:id', async (req, res) => {

    try {
        const personId = req.params.id;

        const respone = await Person.findByIdAndDelete(personId);
        if (!respone) {
            return res.status(404).json({ error: 'person not found' });
        }
        console.log("data deleted");
        res.status(200).json({ message: 'person deleted successfully' });

    }
    catch (error) {
        console.log(error); // Use 'error' instead of 'err'
        res.status(500).json({ error: 'Internal server error' });
    }

})

module.exports = router;


