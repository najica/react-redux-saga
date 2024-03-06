import { GetProductsAction } from "./actionTypes";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  image: string;
  images: string[];
}

export interface IProductState {
  productItems: Array<IProduct>;
}

export interface GetProductsPayload {
  callback: any;
}

export interface GetProductsRequest {
  type: GetProductsAction;
  payload: GetProductsPayload;
}
