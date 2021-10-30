import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test, Response } from 'supertest';

import app from '@server';

describe('Hello World', () => {
    const path = '/api/hello';

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe('GET Hello World', () => {
        it('should return a Hello World message', (done) => {
            agent.get(path)
            .end((err: Error, res: Response) => {
                expect(res.status).toBe(StatusCodes.OK);
                expect(res.text).toBe('Hello World!');

                done();
            });
        });
    });
});