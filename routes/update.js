var express = require('express');
var router = express.Router();
var config = require('./../config/config');
var integration = require('transifex-github-integration');
var fs = require("fs");
/* GET users listing. */
router.get('/', function (req, res) {
    res.format({
        'application/json': function () {
            config.github.pathToLocalRepo = '../tmp_repo';
            integration(config).then(function (resposne) {
                var matches = resposne.match(/(\d+\.\d+\.\d+)/g);
                if (matches && matches[0]) {
                    fs.writeFile('./../last-build.log', matches[0]);
                }
                res.send({message: resposne});
            }).catch(function (err) {
                res.send({error: err});
            });
        }
    });
});

module.exports = router;
