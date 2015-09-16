var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET users listing. */
router.post('/', function (req, res) {
    res.format({
        'application/json': function (data) {
            fs.readFile('tags.json', function (err, buffer) {
                var tags = [];
                if (!err) {
                    tags = JSON.parse(buffer.toString());
                }
                fs.writeFile('tags.json', tags.concat(JSON.stringify(data.body)), function () {
                    res.send({message: 'write'});
                });
            });


        }
    });
});

module.exports = router;
