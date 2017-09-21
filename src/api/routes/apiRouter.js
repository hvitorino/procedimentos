import express from 'express';

export default class ApiRouter {
    constructor(resourceName, controller) {
        this.resourceName = resourceName;
        this.controller = controller;
        this.apiRouter = express.Router();
    }

    routeTo (app) {
        this._buildRoot();
        this._buildResource();

        app.use('/api', this.apiRouter);
    }

    _buildRoot () {
        const rootRouter = this.apiRouter.route(`/${this.resourceName}`);

        rootRouter.get((req, res) => {
            res.send(this.controller.index());
        });
        
        rootRouter.post((req, res) => {
            res.send(this.controller.create(req.body.data));
        });
    }

    _buildResource() {
        const resourceRouter = this.apiRouter.route(`/${this.resourceName}/:id`)
        
        resourceRouter.get((req, res) => {
            let id = parseInt(req.params.id);
        
            res.send(this.controller.read(id));
        });
            
        resourceRouter.put((req, res) => {
            let id = parseInt(req.params.id);
            let updatedData = req.body.data;
            
            res.send(this.controller.update(id, updatedData));
        })
        
        resourceRouter.delete((req, res) => {
            let id = parseInt(req.params.id);
        
            res.send(this.controller.delete(id));
        });
    }
};
