import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const addToCart = (data: any) => {
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data: any) => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
    data: null,
  };
};
