import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { productList } from "../redux/productAction";

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.productData);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className="product-container">
        {data.map((item: any) => (
          <div className="product-item">
            <img src={item.images[0]} alt="" />
            <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>Brand: {item.brand}</div>
            <div>Category: {item.category}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
            <div>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main;
