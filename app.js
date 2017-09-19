import express from 'express';
import ApiInstaller from './src/config/apiInstaller';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src/views'));

ApiInstaller.install(app);

app.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong: ' + err);
    } else {
        console.log('I\'m alive!');
    }
});