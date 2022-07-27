const { Router } = require('express');
const CartoonCat = require('../models/Cat');
const router = Router();

module.exports = router;

router
  .get('/:id', async (req, res) => {
    const singleCat = await CartoonCat.getById(req.params.id);
    res.json(singleCat);
  })

  .get('/', async (req, res) => {
    const catList = await CartoonCat.getAll();
    const cat = catList.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cat);
  });
