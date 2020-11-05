const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('practice-fullstack-app-be routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  });

  it('creates a card VIA POST', () => {
    return request(app)
      .post('/api/v1/cards')
      .send({
        name: 'opt',
        description: 'scary 1',
        cost: 1
      })
      .then(res => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: 'opt',
          description: 'scary 1',
          cost: 1
        })
      })

    it('finds all cards via GET', async () => {
      const cards = await Promise.all([
        Card.insert({
          name: 'opt',
          description: 'scary 1',
          cost: 1
        }),

      ]);

      return request(app)
        .get(`/api/v1/`)
    })
  })
});
