import express from 'express';
import Api from '../../setup/api';
import request from 'supertest';

describe('rota', () => {
    const app = express();    

    before(() => {
        Api.setup(app);
    });

    describe('/procedimentos', () => {
        it('get', () => {
            return request(app)
                .get('/api/procedimentos')
                .expect('Content-Type', /json/)
                .expect(200, []);
        });

        it('post', () => {
            return request(app)
                .post('/api/procedimentos')
                .send({ data: { name: 'lalaland' } })
                .expect(200, { id: 1, name: 'lalaland' });
        });
    });

    describe('/procedimentos/id', () => {
        it('get', () => {
            return request(app)
                .get('/api/procedimentos/1')
                .expect('Content-Type', /json/)
                .expect(200, { id: 1, name: 'lalaland' });
        });

        it('put', () => {
            return request(app)
                .put('/api/procedimentos/1')
                .send({ data: { name: 'lelelend' } })
                .expect('Content-Type', /json/)
                .expect(200, { id: 1, name: 'lelelend' });
        });

        it('delete', () => {
            return request(app)
                .delete('/api/procedimentos/1')
                .expect(200, { id: 1, name: 'lelelend' });
        });
    });
});