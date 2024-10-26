const express = require('express');
const router = express.Router();
const Menu = require('./../model/Menu');



router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
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
router.get('/:tasteType', async (req, res) => {

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
        res.status(500).json({ error: error.message });
    }
});

// update :
router.put('/:menuId', async (req, res) => {

    try {
        // first get id by utl
        const menuId = req.params.menuId;
        const menuUpdatedata = req.body;
        const respone = await Menu.findByIdAndUpdate(menuId, menuUpdatedata);
        if (!respone) {

            return res.status(404).json({ error: 'menu not found' });
        }
        console.log("update Successfully");
        res.status(200).json(respone);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal error' });
    }
})
// now delete method 
router.delete('/:id', async (req, res) => {

    try {
        const menuId = req.params.id;
        const respone = await Menu.findByIdAndDelete(menuId);
        if (!respone) {
            return res.status(404).json({ error: 'menu id not found' });
        }
        console.log("deleted succesfully");
        res.status(200).json(respone);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'internal error' })
    }

})
module.exports = router;