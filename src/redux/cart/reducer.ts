import { PayloadAction } from "@reduxjs/toolkit";

import * as actionTypes from "./actionTypes";
import { ICartState } from "./types";
import { IProduct } from "../product/types";

const initialState: ICartState = {
  cartItems: [],
};

export const cartReducer = (
  state: any = initialState,
  action: PayloadAction<IProduct>
): any => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return { cartItems: [...state.cartItems, action.payload] };
    case actionTypes.REMOVE_FROM_CART:
      const remainingItems = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );
      return { cartItems: [...remainingItems] };
    case actionTypes.EMPTY_CART:
      return initialState;
    default:
      return state;
  }
};

// import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../constant";
// export const cartReducer = (
//   state: ICartState = initialState,
//   action: PayloadAction<ICartState>
// ): ICartState => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [action.payload.cartItems, ...state.cartItems];
//     case REMOVE_FROM_CART:
//       const remainingItems = state.cartItems.filter(
//         (item: any) => item.id !== action.data
//       );
//       return [...remainingItems];
//     case EMPTY_CART:
//       //data = [];
//       return [...state.cartItems];
//     default:
//       return state.cartItems;
//   }
// };

// export const cartReducer = (data = [], action: any) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [action.data, ...data];
//     case REMOVE_FROM_CART:
//       const remainingItems = data.filter(
//         (item: any) => item.id !== action.data
//       );
//       return [...remainingItems];
//     case EMPTY_CART:
//       data = [];
//       return [...data];
//     default:
//       return data;
//   }
// };
