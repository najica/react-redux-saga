import { IProduct } from "../product/types";

//Define action types
export const ADD_TO_CART = "cartActionTypes/ADD_TO_CART";
export const REMOVE_FROM_CART = "cartActionTypes/REMOVE_FROM_CART";
export const EMPTY_CART = "cartActionTypes/EMPTY_CART";

export interface AddToCart {
  type: typeof ADD_TO_CART;
  payload: IProduct;
}

export interface RemoveFromCart {
  type: typeof REMOVE_FROM_CART;
  payload: any;
}

export interface EmptyCart {
  type: typeof EMPTY_CART;
}
