var express = require('express');
var router = express.Router();
var config = require('./../config/config');
var integration = require('transifex-github-integration');
/* GET users listing. */
router.get('/', function (req, res) {
    res.format({
        'application/json': function () {
            config.github.pathToLocalRepo = '../tmp_repo';
            integration(config).then(function (resposne) {
                res.send({message: resposne});
            }).catch(function (err) {
                res.send({error: err});
            });
        }
    });
});

module.exports = router;
