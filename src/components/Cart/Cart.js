import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteAllItems } from "../../store/cart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const produce = useSelector((state) => state.produce);

  const cartItems = Object.values(cart).map((item) => {
    return {
      ...item,
      ...produce[item.id],
    };
  });

  if (!cartItems || !cartItems.length)
    return (
      <div className="cart">
        No items in the cart. Start selecting items to purchase.
      </div>
    );

  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(
      "Purchased the following:\n" +
        `${cartItems.map((item) => `${item.count} of ${item.name}`).join("\n")}`
    );
    dispatch(deleteAllItems());
  };

  return (
    <div className="cart">
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <hr />
      <form onSubmit={onSubmit}>
        <button type="submit">Purchase</button>
      </form>
    </div>
  );
}

export default Cart;
