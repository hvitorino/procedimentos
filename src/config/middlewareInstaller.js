import bodyParser from 'body-parser';

export default class MiddlewareInstaller {
    static install (app) {
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
};