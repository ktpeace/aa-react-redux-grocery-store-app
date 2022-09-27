import { addItem, changeItemCount } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const cartItem = {};

  function plusHandler() {
    const id = produce.id;
    const cartIds = Object.keys(cart);
    if (cartIds.includes(String(id))) {
      const itemCount = cart[id].count;
      dispatch(changeItemCount(id, itemCount + 1));
    } else {
      dispatch(addItem(id));
    }
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(toggleLike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={plusHandler}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
