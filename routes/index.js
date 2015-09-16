var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */

var getLatestBuild = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile('last-build.log', function (err, buffer) {
            if (err) {
                resolve('');
            } else {
                resolve(buffer.toString());
            }
        })
    });
};

var getTags = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile('tags.json', function (err, buffer) {
            if (err) {
                resolve([]);
            } else {
                resolve(JSON.parse(buffer.toString()));
            }
        })
    });
};

router.get('/', function (req, res, next) {
    Promise.all([getLatestBuild(), getTags()]).then(function (result) {
        res.render('index', {title: 'Transifex to gitHub', latestVersion: result[0], tags: result[1]});
    }).catch(function (err) {
        console.log(err);
        res.render('index', {title: 'Transifex to gitHub', latestVersion: '', tags: ''});
    });

});

module.exports = router;
