const path = require('path');
const express = require('express');
const app = express();

const PORT = 3002;
const publicFolder = path.join(__dirname, 'dist-es');

app.use('/', express.static(publicFolder));

app.listen(PORT, () => {
    console.log(`running on port: ${PORT}`);
    console.log(`Serving static content from ${publicFolder}`);
});
