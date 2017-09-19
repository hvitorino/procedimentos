import RouterRegistry from './routerRegistry';

export default class RouterInstaller {
    static install(app) {
        RouterRegistry.allRouters.forEach((router) => {
            router.routeTo(app);
        });
    }
}