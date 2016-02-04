var express = require('express');
var router = express.Router();

var shopItem = require('../../models/item');

router.get('/', function(req, res){
  shopItem.find({}, function(err, shopItems){
    res.json({ items: shopItems})
  });
});

router.get('/:id', function(req, res){
  shopItem.findById( req.params.id, function(err, shopItems){
    res.json( item );
  });
});

router.post('/', function(req, res){
  console.log(req.body.item)
  shopItem.create(req.body.item, function(err, item){
    console.log(err)
    res.json(item);
  });
});

module.exports = router;
