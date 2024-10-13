const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const menuItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true


    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sour', 'sweet', 'spicy'],
        required: true


    },
    is_drink: {
        type: Boolean,
        default: false // if data didnot recive its value will be false in data base


    },
    ingredients: {
        type: [String],
        default: [],

        required: true
    },
    num_sales: {
        type: Number,
        default: 0,


    }

})

const Menu = new mongoose.model('Menu', menuItemSchema);
module.exports = Menu;