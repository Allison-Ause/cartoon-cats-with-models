const { Router } = require('express');
const Cat = require('../models/Cat');
const router = Router();

module.exports = router;

router
  .get('/:id', async (req, res) => {
    console.log('id =', req.params.id);
    const singleCat = await Cat.getCatById(req.params.id);
    console.log('cat is:', singleCat);

    // const cat = cats.find((cat) => cat.id === req.params.id);
    // res.json(cat);
  })

  .get('/', async (req, res) => {
    const catList = await Cat.getAll();
    console.log(catList);
    // const catList = cats.map((cat) => ({ id: cat.id, name: cat.name }));
    const cat = catList.map((cat) => ({ id: cat.id, name: cat.name }));
    res.json(cat);
  });
