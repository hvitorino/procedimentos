import RouterRegistry from './routesRegistry';

export default class Routes {
    static setup(app) {
        RouterRegistry.allRouters.forEach((router) => {
            router.routeTo(app);
        });
    }
}