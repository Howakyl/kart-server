import { Item } from './src/models/Item';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/shopping-kart', 
    { useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  );

const data = [
  "cherimoya",
  "cherry",
  "pineapple",
  "pinapple",
  "pine nuts",
  "almonds",
  "milk",
  "almond milk",
  "broccoli",
  "broccolini",
  "pie",
  "cherry pie",
  "blueberry pie",
  "blueberries",
  "apples",
  "apple pie",
  "avocado",
  "sugar",
  "bacon",
  "eggs",
  "tofu",
  "tofurkey",
  "potatoes",
  "patatoes",
  "bananas",
  "grapes",
  "grapefruit",
  "grapefruit juice",
  "grape juice",
  "orange juice",
  "oranges",
  "orange bandana",
  "orangutan stuffed animal",
  "oranigram games and puzzled",
  "diapers",
  "tea tree shampoo",
  "hand soap",
  "dishsoap",
  "hand sanitizer",
  "paper plates",
  "paper towels",
  "raspberries",
  "cat food",
  "tuna fish",
  "kibbles",
  "English breakfast tea",
  "green tea",
  "cherry chapstick",
  "sirloin steak",
  "New York strip steak",
  "chicken nuggets",
  "sparkling water",
  "coconut water",
  "coconut flakes",
  "taco mix",
  "trailmix",
  "spam",
  "beef broth",
  "chicken soup",
  "tomato soup",
  "cherry tomatoes",
  "beefsteak tomatoes",
  "sun-dried tomatoes",
  "sunscreen",
  "sunblock",
  "shaving cream",
  "whipped cream",
  "creamy tomato soup",
  "chocolate candy bar",
  "chocolate-covered cherries",
  "milk",
  "chocolate milk",
  "protein bar",
  "bar soap",
  "pickles",
  "pickled fish",
  "olive oil",
  "olives",
  "coconut oil",
  "avocado oil",
  "zucchini",
  "zuchini",
  "peanut butter",
  "almond butter",
  "peanuts",
  "macadamia nuts",
  "butter"
  ]

  function makeItem(item) {
    const newItem = new Item(item);
    newItem.save((err, result) => {
      if (err) console.log(err)
    })
    console.log(newItem)
  }

  function exit() {
    mongoose.disconnect();
  }

  function seedDb () {
    let done = 0;

    Item.deleteMany({}, (err, result) => {
      if (err) console.log(err)
    })

    for (let i = 0; i < data.length; i++) {
      const itemObj = {name: data[i]}
      makeItem(itemObj)
      done++;
      if (done === data.length) {
        // exit();
      }
    }
  }

  seedDb();