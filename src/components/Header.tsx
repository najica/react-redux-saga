import { BasketOutline } from "react-ionicons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ICartState } from "../redux/cart/types";
import { RootState } from "../redux/reducers/rootReducer";
import { productSearch } from "../redux/product/actions";

const Header = () => {
  const result: ICartState = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Shop</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="search product"
          onChange={(event) => dispatch(productSearch(event.target.value))}
        />{" "}
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span className="cart-counter">{result?.cartItems?.length}</span>
          <BasketOutline color={"#00000"} height="30px" width="30px" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
