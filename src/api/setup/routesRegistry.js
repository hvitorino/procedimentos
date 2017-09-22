export default class RoutesRegistry {
    static register(apiRouter) {
        RoutesRegistry.allRoutes.push(apiRouter);
    }
};

RoutesRegistry.allRoutes = [];