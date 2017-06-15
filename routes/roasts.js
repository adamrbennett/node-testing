const express = require('express');
const router = express.Router();
const roastsService = require('../services/roasts');

router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', (req, res) => {
  res.send(roastsService.getAll());
});

router.get('/:id', (req, res) => {
  let roast = roastsService.getById(req.params.id);

  if (!roast) return res.sendStatus(404);

  res.send(roast);
});

module.exports = router;
