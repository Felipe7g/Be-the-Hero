const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

   it('should be able to create a new ONG', async () => {
      const response =  await request(app)
      .post('/ongs')
      .send({
          name: "APAD7",
          email: "contato@gmail.com",
          whatsapp: "11940075689",
          city: "Rio do sul",
          uf: "SC"
      });

     
       });
    });  