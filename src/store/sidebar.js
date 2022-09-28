const HIDE_CART = "cart/HIDE_CART";
const SHOW_CART = "cart/SHOW_CART";

export const hideCart = () => {
  return {
    type: HIDE_CART,
  };
};

export const showCart = () => {
  return {
    type: SHOW_CART,
  };
};

export const sidebarReducer = (state = false, action) => {
  switch (action.type) {
    case HIDE_CART:
      return false;
    case SHOW_CART:
      return true;
    default:
      return state;
  }
};
