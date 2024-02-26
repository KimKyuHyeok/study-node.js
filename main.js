const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');

require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
  
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    
    console.log('Connected to MySQL as id', connection.threadId);
  });


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

    var sql = `insert into contact(name,email,memo,regdate)
    values('${name}', '${email}', '${memo}', now())`

    connection.query(sql, function (err, result){
        if(err) throw err;
        console.log('success');
        res.send("<script> alert('문의사항이 등록되었습니다.'); location.href='/';</script>");
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})