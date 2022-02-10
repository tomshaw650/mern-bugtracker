
// initialise Express router
const express = require('express');
const router = express.Router();

router.get('/todos', (req, res, next) => {
  // GET
});

router.post('/todos', (req, res, next) => {
  // POST
});

router.delete('/todos/:id', (req, res, next) => {
  // DELETE
});

module.exports = router;