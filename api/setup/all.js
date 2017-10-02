import BodyParserInstaller from './bodyParser';
import RoutesInstaller from './routes';

export default class All {
    static setup(app) {
        BodyParserInstaller.setup(app);
        RoutesInstaller.setup(app);
    }
};