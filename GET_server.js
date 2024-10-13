const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.send("welcomw to zavian store how may i help u")
})

app.get('/coding', (req, res) => {
    res.send("welcpme to coding tutorailw ith zavian")
})
app.get('/java', (req, res) => {
    res.send("JAVA CODING with zavian")
})
app.get('/nodejs', (req, res) => {
    res.send("NODE JS CODING with zavian")
})
app.get('/C', (req, res) => {

    const object = {
        name: "noman",
        company: "CEO K TECH",
        is_Billionare: true
    }

    res.send(object);

})
app.listen(3000, () => {
    console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 