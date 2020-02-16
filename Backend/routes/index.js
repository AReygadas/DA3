const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/DBA' , async (req, res) => {
        await pool.query('Show databases', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    });
});


router.get('/Tabs', async (req, res) => {
    await pool.query('Show databases', function (error, results, fields) {
    if(error) throw error;
    res.send(JSON.stringify(results));
});
});



module.exports = router;