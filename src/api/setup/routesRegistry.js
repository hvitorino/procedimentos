export default class RoutesRegistry {
    static register(apiRouter) {
        RoutesRegistry.allRouters.push(apiRouter);
    }
};

RoutesRegistry.allRouters = [];