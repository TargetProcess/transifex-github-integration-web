var express = require('express');
var router = express.Router();
var fs = require("fs");
var _ = require("lodash");
/* GET users listing. */
router.post('/', function (req, res) {
    res.format({
        'application/json': function (data) {
            fs.readFile('tags.json', function (err, buffer) {
                var tags = [];
                if (!err) {
                    tags = JSON.parse(buffer.toString());
                }
                fs.writeFile('tags.json', JSON.stringify(_.unique(tags.concat(data.body))), function () {
                    res.send({message: 'write'});
                });
            });


        }
    });
});

module.exports = router;
