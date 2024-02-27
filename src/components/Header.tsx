import { BasketOutline } from "react-ionicons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state: any) => state.cartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
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
          <span>{result.length}</span>
          <BasketOutline color={"#00000"} height="30px" width="30px" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
