const db = require('./models');
const data = require('./items.json');

db.Item.deleteMany({}, (err, deletedItems) => {
  console.log(`DELETED ITEMS: ${deletedItems}`)
  db.Item.create(data.items, (err, seededItems) => {
    if (err) console.log(err);

    console.log(seededItems, "items created successfully!");

    process.exit();
  });
});