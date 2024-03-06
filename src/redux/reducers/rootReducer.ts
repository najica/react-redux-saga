// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";

// import { TypedUseSelectorHook, useSelector } from "react-redux";
import { cartReducer } from "../cart/reducer";
import { productReducer } from "../product/reducer";
import { IProductState } from "../product/types";
import { ICartState } from "../cart/types";

// export interface IAppState {
//   cart: ICartState;
//   products: IProductState;
// }
// const rootReducer = combineReducers<IAppState>({
//   cart: cartReducer,
//   products: productReducer,
// });

//rootReducer will combine all the sub reducers and export it from here
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer;
