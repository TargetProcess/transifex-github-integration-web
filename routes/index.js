var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readFile('./../last-build.log', function (err, buffer) {
        if (err) {
            res.render('index', {title: 'Transifex to gitHub', latestVersion: ''});
        } else {
            res.render('index', {title: 'Transifex to gitHub', latestVersion: 'Latest version: ' + buffer.toString()});
        }
    });
});

module.exports = router;
