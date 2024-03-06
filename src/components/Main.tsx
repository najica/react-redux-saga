import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { IProduct, IProductState } from "../redux/product/types";
import { RootState } from "../redux/reducers/rootReducer";
import { addToCart, emptyCart, removeFromCart } from "../redux/cart/action";
import { getProducts } from "../redux/product/actions";
import Header from "./Header";

const Main = () => {
  const dispatch = useDispatch();
  const data: IProductState = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          height: "85vh",
          overflowY: "scroll",
        }}
      >
        <Box sx={{ margin: "10px" }}>
          <Button variant="contained" onClick={() => dispatch(emptyCart())}>
            Empty Cart
          </Button>
        </Box>
        <Box>
          <TableContainer>
            <Table sx={{ minWidth: 750 }}>
              <TableBody>
                {data.productItems.map((item: IProduct) => (
                  <TableRow className="product-row">
                    <TableCell>
                      <img src={item.images[0]} alt="" />
                    </TableCell>
                    <TableRow sx={{ display: "flex", flexDirection: "column" }}>
                      <TableCell sx={{ borderBottom: "none" }}>
                        Description: {item.description}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        Price: {item.price}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        Brand: {item.brand}
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        Category: {item.category}
                      </TableCell>
                    </TableRow>
                    <TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Button
                          variant="outlined"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          Add to Cart
                        </Button>
                      </TableCell>
                      <TableCell sx={{ borderBottom: "none" }}>
                        <Button
                          variant="outlined"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          Remove from Cart
                        </Button>
                      </TableCell>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Main;
