const db = require('../models');

const index = (req, res) => {
  db.Item.find({})
  .then(foundItems => {
    res.json({ items: foundItems });
  })
  .catch(err => {
    console.log('error: ', err)
    res.json({ Error: 'unable to reach data.'})
  })
};

module.exports = {
  index,
}