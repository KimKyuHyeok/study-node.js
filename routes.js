const express = require('express');
const router = express.Router();
const connection = require('./db');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

router.get('/map', (req, res) => {
    res.render('map');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contactProc', (req, res) => {
    const { name, email, memo } = req.body;
    const sql = `INSERT INTO contact(name, email, memo, regdate) VALUES (?, ?, ?, NOW())`;
    connection.query(sql, [name, email, memo], (err, result) => {
        if (err) throw err;
        console.log('success');
        res.send("<script> alert('문의사항이 등록되었습니다.'); location.href='/';</script>");
    });
});

module.exports = router;
