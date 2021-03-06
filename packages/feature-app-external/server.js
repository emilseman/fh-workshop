const path = require('path');
const express = require('express');
const app = express();

const PORT = 3003;
const publicFolder = path.join(__dirname, 'dist-es');

app.use('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use('/', express.static(publicFolder));

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
    console.log(`Serving static content from ${publicFolder}`);
});
