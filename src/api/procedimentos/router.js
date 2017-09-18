import express from 'express';
import ApiRouter from '../apiRouter';
import Controller from './controller';

export default class ProcedimentosRouter extends ApiRouter {
    constructor() {
        super('procedimentos', new Controller())
    }
};
