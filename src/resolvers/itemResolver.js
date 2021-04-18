import { Item } from '../models/Item';

export const itemResolver = {
  Query: {
    hello: () => 'hello, world!',
    items: () => Item.find()
  },

  Mutation: {
    createItem: async (_, {name}) => {
      const newItem = new Item({name});
      await newItem.save();
      return newItem;
    },

    deleteItem: async (_, {id}) => {
      await Item.findByIdAndDelete(id);
      return true;
    },

    updateItem: async (_, {id, input}) => {
      const foundItem = await Item.findById(id);

      if (!foundItem) console.log('item not found.');

      Object.keys(input).forEach(value => {
        foundItem[value] = input[value];
      });

      const updatedItem = await foundItem.save();
      return updatedItem;
    }
  }
}