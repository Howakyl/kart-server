const db = require('./src/models');
const data = require('./items.json');

db.Item.deleteMany({}, (err, deletedItems) => {
  if (err) console.log(err);
  console.log(`DELETED ITEMS: ${deletedItems}`)
  db.Item.create(data, (err, seededItems) => {
    if (err) console.log(err);

    console.log(data, "items created successfully!");

    process.exit();
  });
});