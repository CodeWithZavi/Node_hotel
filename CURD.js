const express = require('express');
const app = express();

app.get('/', (req, res) => {

    res.send("welcome to zavian store");
});
app.post('/create-item', (req, res) => {
    const newItem = { name: "New Item", price: 100 };
    res.send(`Item created: ${newItem.name}`);
});
app.post('/create-item', (req, res) => {
    const newItem = { name: "New Item", price: 100 };
    res.send(`Item created: ${newItem.name}`);
});


app.put('/update-item', (req, res) => {
    const updatedItem = { name: "Updated Item", price: 150 };
    res.send(`Item updated: ${updatedItem.name}`);
});

app.delete('/delete-item', (req, res) => {
    res.send("Item deleted successfully");
});

app.listen(3000, () => {

    console.log("server is running");
});
