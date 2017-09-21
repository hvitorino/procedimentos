import express from 'express';
import RoutesRegistry from '../setup/routesRegistry';
import Controller from '../controllers/procedimentos';
import ApiRouter from './apiRouter';

export default class ProcedimentosRouter extends ApiRouter {
    constructor() {
        super('procedimentos', new Controller())
    }
};

RoutesRegistry.register(new ProcedimentosRouter());