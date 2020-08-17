const express = require('express');
const router = express.Router();
const Category = require('../models/Category');


//for showing all the Category
router.get('/', (req, res) => {
  Category.find({}).then((category) => {
    category.length > 0 ? res.status(200).json(category) : res.status(400).json({ message: 'Category not found' });
  });
});

//for specific Category with id
router.get('/:id',(req, res)=> {
  Category.findOne({ _id: req.params.id }).then((category) => {
    category._id = req.params.id ? res.json(category) : res.status(400).json({ message: 'Category not found' }) ;
  });
});

router.post('/', (req, res) => {
  const newCategory = Category({
    name: req.params.name
  });
  newCategory.save()
    .then(() => {
      res.status(200).json({ message: "Category successfully addedd" });
    })
    .catch(() => {
      res.status(500).json({ message: "Category Not added" });
    });
});

router.put('/:id', (req, res) => {
  Category.findOneAndUpdate({ _id: req.params.id }, {
    $set: {
      name: req.body.name
    }
  }
  ).then((category => {
    res.status(200).json({ category, message: "Category successfully updated" });
  }).catch((err) => {
    res.status(500).json({ message: err.message });
  }))
})

router.delete('/:id', (req, res) => {
  Category.deleteOne({ _id: req.params.id })
    .then((category) => res.status(200).json({ message: "Category Deleted" }))
    .catch((err) => {
      res.json({ message: err,message:"Category Not Deleted"})
    })
})

module.exports = router;