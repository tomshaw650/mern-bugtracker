
// initialise Express router
const express = require('express');
const router = express.Router();
const Bug = require('../models/bug');

// get request, return all the data from, shows id and action to client
router.get('/bugs', (req, res, next) => {
  Bug.find({}, 'action')
  .then((data) => res.json(data))
  .catch(next);
}); 

// post request, creates a bug populated by the required field(s)
router.post('/bugs', (req, res, next) => {
  if (req.body.action) {
    Bug.create(req.body)
    .then((data) => res.json(data))
    .catch(next);
  } else {
    res.json({
      error: 'Input field is empty',
    });
  }
});

// delete request, removes the bug based via the primary key (ID)
router.delete('/bugs/:id', (req, res, next) => {
  Bug.findOneAndDelete({ _id: req.params.id })
  .then((data) => res.json(data))
  .catch(next);
});

module.exports = router;