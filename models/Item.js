const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
  items: Object 
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;