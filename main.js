const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: false}));


app.get('/', (req, res) => {
    res.render('index'); // ./views/index.ejs
})

app.get('/profile', (req, res) => {
    res.render('profile');
})

app.get('/map', (req, res) => {
    res.render('map');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

app.post('/contactProc', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const memo = req.body.memo;

    var a = `${name} ${email} ${memo}`

    res.send(a);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})