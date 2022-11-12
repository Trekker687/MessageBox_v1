var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/submit', function(req, res, next) {
    var sender = req.body.senderName;
    var message = req.body.message;
    var content = `sent by ${sender}, message: ${message}`
    console.log(content);
    fs.writeFile(path.join(__dirname, '../message.txt'), content, function(err) {
        if (err) {
            console.log(err)
            return
        }
        res.render('message')
    })

})

module.exports = router;