import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeItemCount, deleteItem } from "../../store/cart";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    if (count < 1) {
      dispatch(deleteItem(item.id));
    } else {
      dispatch(changeItemCount(item.id, count));
    }
  }, [dispatch, item.id, count]);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button
          className="cart-item-button"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          -
        </button>
        <button className="cart-item-button" onClick={() => setCount(0)}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
