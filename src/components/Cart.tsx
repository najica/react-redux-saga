import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Header from "./Header";
import { ICartState } from "../redux/cart/types";
import { IProduct } from "../redux/product/types";
import { RootState } from "../redux/reducers/rootReducer";

const Cart = () => {
  const cart: ICartState = useSelector((state: RootState) => state.cart);
  const amount: number = cart?.cartItems?.length
    ? cart.cartItems
        .map((item: IProduct) => item.price)
        .reduce((prev: number, next: number) => prev + next)
    : 0;

  return (
    <>
      <Header />
      <Box
        sx={{
          height: "85vh",
          overflowY: "scroll",
        }}
      >
        <Link to="/">Go to Products Link</Link>
        <h1>Basket</h1>
        <div className="cart-page-container">
          <TableContainer>
            <Table sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Brand</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.cartItems.map((item: IProduct) => (
                  <TableRow>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.brand}</TableCell>
                    <TableCell>{item.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="price-details">
            <div className="adjust-price">
              <span>Amount</span>
              <span>{amount}</span>
            </div>
          </div>
          <div className="price-details">
            <div className="adjust-price">
              <span>Discount</span>
              <span>{amount / 10}</span>
            </div>
          </div>
          <div className="price-details">
            <div className="adjust-price">
              <span>Total</span>
              <span>{amount - amount / 10}</span>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
export default Cart;
