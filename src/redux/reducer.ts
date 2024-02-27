import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART condition called", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART condition called", action);
      const remainingItems = data.filter(
        (item: any) => item.id !== action.data
      );
      return [...remainingItems];
    case EMPTY_CART:
      console.warn("EMPTY_CART condition called", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
