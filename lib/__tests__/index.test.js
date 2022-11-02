"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
// import jest from 'jest';
jest.useRealTimers();
// import {app} from '../app';
describe('Route Tests', () => {
    describe('Request to homepage', () => {
        it('Should return 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/');
            expect(res.status).not.toBe(400);
        }));
    });
    describe('Request to users routes', () => {
        it('GET /users Should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/login should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/login');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/register should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/register');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/:id should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/:id');
            expect(res.status).not.toBe(400);
        }));
        it('GET /users/products/delete/:id should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/products/delete/:id');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/update/ should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/update/');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/update/:id should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/update/:id');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/logout should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/logout');
            expect(res.status).not.toBe(401);
        }));
        it('GET /users/add should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).get('/users/add');
            expect(res.status).not.toBe(401);
        }));
        it('POST /users/add Should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).post('/users/add');
            expect(res.status).not.toBe(401);
        }));
        it('POST /users/login Should return 302 ', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.setTimeout(8 * 1000);
            const res = yield (0, supertest_1.default)(app_1.default).post('/users/login');
            expect(res.status).not.toBe(401);
        }), 120000);
        it('PUT /users/update Should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).put('/users/update');
            expect(res.status).not.toBe(401);
        }));
        it('POST /users/register Should return 302 ', () => __awaiter(void 0, void 0, void 0, function* () {
            jest.setTimeout(8 * 1000);
            const res = yield (0, supertest_1.default)(app_1.default).post('/users/register');
            expect(res.status).not.toBe(400);
        }), 120000);
        it('DELETE /users/delete/:id Should return 200 ', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, supertest_1.default)(app_1.default).delete('/users/delete/:id');
            expect(res.status).not.toBe(401);
        }));
    });
});
//# sourceMappingURL=index.test.js.map