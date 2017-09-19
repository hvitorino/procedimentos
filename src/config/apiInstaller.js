import MiddlewareInstaller from './middlewareInstaller';
import RouterInstaller from './routerInstaller';

export default class ApiInstaller {
    static install (app) {
        MiddlewareInstaller.install(app);
        RouterInstaller.install(app);
    }
};