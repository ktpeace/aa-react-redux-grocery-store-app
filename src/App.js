import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";
import { populateProduce } from "./store/produce";
import { hideCart, showCart } from "./store/sidebar";

function App() {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.sidebar);

  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button
          className="checkout-button"
          onClick={() => dispatch(showCart())}
        >
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={sidebar ? { marginRight: "300px" } : {}}>
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={sidebar ? { transform: "translateX(-100%)" } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => dispatch(hideCart())}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
