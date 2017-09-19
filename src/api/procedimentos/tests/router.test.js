import express from 'express';
import ProcedimentosRouter from '../router'
import chai from 'chai';
import request from 'supertest';

describe('rota para', () => {
    const app = express();
    const router = new ProcedimentosRouter();

    before(() => {
        router.routeTo(app);
    });

    describe('/procedimentos', () => {
        it('post', () => {
            return request(app)
                .post('/api/procedimentos', { data: { name: 'lalaland' } })
                .expect(200, null);
        });

        it('get', () => {
            return request(app)
                .get('/api/procedimentos')
                .expect('Content-Type', /json/)
                .expect(200, []);
        });
    });

    describe('/procedimentos/id', () => {
        it('get', () => {
            throw new Error('Não implementado');
        });

        it('put', () => {
            throw new Error('Não implementado');
        });

        it('delete', () => {
            throw new Error('Não implementado');
        });
    });
});