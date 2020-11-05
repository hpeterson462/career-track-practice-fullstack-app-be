const { Router } = require('express');
const Card = require('../models/card');

module.exports = Router()
  .post('/', (res, req, next) => {
    Card
      .insert(req.body)
      .then(card => res.setEncoding(card))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Card
      .findAll()
      .then(cards => res.send(cards))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Card
      .delete(req.params.id)
      .then(card => res.send(card))
      .catch(next);
  })
