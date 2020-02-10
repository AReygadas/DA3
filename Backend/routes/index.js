const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/DBA', function(req, res, next) {
     pool.query('show databases', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});

module.exports = router;