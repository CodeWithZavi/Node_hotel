const mongoose = require('mongoose');
require('dotenv').config(); // cuz we protect mongo
// mongo db  cpnnection                      "data base name"
// this connection is for local 
//const mongoURL =mongo LOCAL IN ENV'
//const mongoURL = process.env.MONGODB_URL_LOCAL;

// now for online mongo atlus : 
//const mongoURL = cheeck env 

// set up connection with mongo db
// mongoose.connect(mongoURL, {
//     // mus paratmer like for req parameter for establish connection
//     // we ensure we work we new version of mongo so its must
//     useNewUrlParser: true,
//     useUnifiedTopology: true

// })

// BY ENV : 
// for mongo : 
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    //useNewUrlParser: true, // This can also be removed if unnecessary
    //useUnifiedTopology: true // This can also be removed
});
// get the dafuault connection :
// now we know mongoose will manage this db connection so that we 
//can connect with monogo server and help to make bridge
const db = mongoose.connection;

// define event listener
// db knows all these meanings
db.on('connected', () => {
    console.log('mongo server is connected')
})
db.on('error', (err) => {
    console.error('mongo connection error', err)
})
db.on('disconnected', () => {
    console.log('mongo server is disconnected')
})
module.exports = db; // export from here and import on server js