import bodyParser from 'body-parser';

export default class BodyParser {
    static setup(app) {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
};