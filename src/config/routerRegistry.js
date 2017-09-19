export default class RouterRegistry {
    static get allRouters() {
        return [];
    }

    static register (apiRouter) {
        RouterRegistry.allRouters.push(apiRouter);
    }
}