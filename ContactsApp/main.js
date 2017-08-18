var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

router.get('/contacts/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, req.originalUrl));
});
app.use(router);
app.listen(8080, function () {
    console.log("Listening at " + 8080);
});