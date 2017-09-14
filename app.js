const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/lalaland', function (req, res) {
    res.send('lalaland');
});

app.listen(port, function (err) {
    if (err) {
        console.log('FUCK! Something went wrong: ' + err);
    } else {
        console.log("Im alive!");
    }
});