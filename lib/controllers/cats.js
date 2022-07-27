const { Router } = require('express');
const { cats } = require('../../data/cats');
const router = Router();

module.exports = router;

router
  .get('/:id', (req, res) => {
    const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  })


  .get('/', (req, res) => {
    const catList = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(catList);
  });
