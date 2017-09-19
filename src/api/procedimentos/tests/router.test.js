import express from 'express';
import ApiInstaller from '../../../config/apiInstaller';
import request from 'supertest';

describe('rota', () => {
    const app = express();    

    before(() => {
        ApiInstaller.install(app);
    });

    describe('/procedimentos', () => {
        it('post', () => {
            return request(app)
                .post('/api/procedimentos', { data: { name: 'lalaland' } })
                .expect(200, 'ok');
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