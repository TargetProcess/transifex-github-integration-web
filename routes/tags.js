var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET users listing. */
router.post('/', function (req, res) {
    res.format({
        'application/json': function (data) {
            console.log(data);
            fs.writeFile('tags.json', JSON.stringify(data.body),function(){
                res.send({message: 'write'});
            });
        }
    });
});

module.exports = router;
