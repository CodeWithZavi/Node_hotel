const express = require('express')
const app = express()  // mean app can use all the functionalities 
// '/' mean jis address se data get krna (waiter)
/* local host : ghar name 
 port no : jo room no ha
 and '/' asling from waiter */
app.get('/', function (req, res) {
    res.send('Learn coding with code wit zavi')
})
// we have to give list of items to the server which are avaiable 
app.get('/customized', function (req, res) {
    var customizedTeacher = {

        name: 'zavian',
        duration: '3 weeks',
        is_project: true

    }
    res.send(customizedTeacher)
})
app.get('/java', function (req, res) {
    res.send('yes u can learn java coding')
})
app.get('/C', function (req, res) {  // for runnig this write /pasta after port number
    res.send("Yes u can learn c language !")
})

app.listen(3000, () => {
    console.log("Server is listening")
})