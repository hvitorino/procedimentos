import fs from 'fs';
import RoutesRegistry from '../setup/routesRegistry';

export default class Routes {
    static setup(app) {
        require('require-all')({
            dirname     : `${__dirname}/../routes`,
            excludeDirs :  /tests/,
            recursive   : false
          });

        RoutesRegistry.allRoutes.forEach((registeredRoute) => {
            registeredRoute.routeTo(app);
        });
    }
}