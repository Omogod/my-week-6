import request from 'supertest';
import app from '../app';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import jest from 'jest';


jest.useRealTimers();

// import {app} from '../app';

describe('Route Tests', ()=>{
    describe('Request to homepage', ()=> {
        it('Should return 200',async  ()=>{
            const res = await request(app).get('/');
            expect(res.status).not.toBe(400);
        })
    })
    describe('Request to users routes', ()=>{
        it('GET /users Should return 200 ', async ()=>{
            const res = await request(app).get('/users');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/login should return 200 ', async ()=>{
            const res = await request(app).get('/users/login');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/register should return 200 ', async ()=>{
            const res = await request(app).get('/users/register');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/:id should return 200 ', async ()=>{
            const res = await request(app).get('/users/:id');
            expect(res.status).not.toBe(400)
        })
        it('GET /users/products/delete/:id should return 200 ', async ()=>{
            const res = await request(app).get('/users/products/delete/:id');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/update/ should return 200 ', async ()=>{
            const res = await request(app).get('/users/update/');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/update/:id should return 200 ', async ()=>{
            const res = await request(app).get('/users/update/:id');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/logout should return 200 ', async ()=>{
            const res = await request(app).get('/users/logout');
            expect(res.status).not.toBe(401)
        })
        it('GET /users/add should return 200 ', async ()=>{
            const res = await request(app).get('/users/add');
            expect(res.status).not.toBe(401)
        })

        it('POST /users/add Should return 200 ', async ()=>{
            const res = await request(app).post('/users/add');
            expect(res.status).not.toBe(401)
        })
        it('POST /users/login Should return 302 ', async ()=>{
            jest.setTimeout(8 * 1000);
            const res = await request(app).post('/users/login');
            expect(res.status).not.toBe(401)
        }, 120000)
        it('PUT /users/update Should return 200 ', async ()=>{
            const res = await request(app).put('/users/update');
            expect(res.status).not.toBe(401)
        })
        it('POST /users/register Should return 302 ', async ()=>{
            jest.setTimeout(8 * 1000);
            const res = await request(app).post('/users/register');
            expect(res.status).not.toBe(400)
        }, 120000)
        it('DELETE /users/delete/:id Should return 200 ', async ()=>{
            const res = await request(app).delete('/users/delete/:id');
            expect(res.status).not.toBe(401)
        })
    })
   
})
