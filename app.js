import express from 'express';
import ApiInstaller from './src/api/setup/api';

const app = express();
const port = process.env.PORT || 3000;

ApiInstaller.setup(app);

app.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong: ' + err);
    } else {
        console.log('I\'m alive!');
    }
});