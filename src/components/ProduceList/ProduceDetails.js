import { addItem } from "../../store/cart";
import { useDispatch } from "react-redux";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button className={"like-button" + (produce.liked ? " selected" : "")}>
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => dispatch(addItem(produce.id))}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
