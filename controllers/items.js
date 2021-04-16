const db = require('../src/models');

// console.log(items[0].items[1]) THIS IS HOW WE FIND SPECIFIC ITEMS


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