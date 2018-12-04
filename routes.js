/* eslint "quotes": ["warn", "single"] */

var express = require('express');
var router = express.Router();


// User side pages -----


// -----

// Admin routes -----

router.post('/login', function (req, res) {
    //- console.log(req.body);
    if (req.body.username == 'nuke' && req.body.password == 'nuke') {
        res.redirect('/dashboard');
    } else {
        res.render('login', {
            failure: true
        });
    }

});








// Data Routes -----

// var async = require('async')

// Require controller modules.

// ADMIN SIDE PAGES -----

router.get('/', (req, res) => {
    res.render('login');
});









//export this router to use in our index.js
module.exports = router;