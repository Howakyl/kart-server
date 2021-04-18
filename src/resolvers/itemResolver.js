import { Item } from '../models/Item';

export const itemResolver = {
  Query: {
    hello: () => 'hello, world!'
  },

  Mutation: {
    createItem: async (_, {name}) => {
      const newItem = new Item({name});
      await newItem.save();
      return newItem;
    },
  }
}