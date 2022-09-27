const ADD_ITEM = "cart/ADD_ITEM";

export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    id,
  };
};

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, [action.id]: { id: action.id, count: 1 } };
    default:
      return state;
  }
};
