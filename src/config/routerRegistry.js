import ProcedimentosRouter from '../api/procedimentos/router';

export default class RouterRegistry {
    static register(apiRouter) {
        RouterRegistry.allRouters.push(apiRouter);
    }
};

RouterRegistry.allRouters = [];
RouterRegistry.register(new ProcedimentosRouter());