import express from 'express';
import ProcedimentosRouter from './src/api/procedimentos/router';

const app = express();
const port = process.env.PORT || 3000;

const procedimentos = new ProcedimentosRouter();

app.use(express.static('src/views'));

procedimentos.routeTo(app);

app.listen(port, function (err) {
    if (err) {
        console.log('Something went wrong: ' + err);
    } else {
        console.log('I\'m alive!');
    }
});