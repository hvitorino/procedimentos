import BodyParserInstaller from './bodyParser';
import RoutesInstaller from './routes';

export default class Api {
    static setup(app) {
        BodyParserInstaller.setup(app);
        RoutesInstaller.setup(app);
    }
};