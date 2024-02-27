import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state: any) => state.cartData);
  //   const amount =
  //     cartData.length &&
  //     cartData
  //       .map((item: any) => item.price)
  //       .reduce((prev: any, next: any) => prev + next);
  const amount = cartData?.length
    ? cartData
        .map((item: any) => item.price)
        .reduce((prev: any, next: any) => prev + next)
    : 0;
  return (
    <div>
      <Link to="/">Go to Products Link</Link>
      <h1>Basket</h1>
      <div className="cart-page-container">
        {/* <table>
          <tr>
            <td>Name</td>
            <td>Color</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData.map((item: any) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table> */}
        <table>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Brand</td>
            <td>Category</td>
          </tr>
          {cartData.map((item: any) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
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
    </div>
  );
};
export default Cart;
