const ADD_ITEM = "cart/ADD_ITEM";
const DELETE_ITEM = "cart/DELETE_ITEM";
const CHANGE_ITEM_COUNT = "cart/CHANGE_ITEM_COUNT";
const DELETE_ALL_ITEMS = "cart/DELETE_ALL_ITEMS";

export const addItem = (id) => {
  return {
    type: ADD_ITEM,
    id,
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id,
  };
};

export const deleteAllItems = () => {
  return {
    type: DELETE_ALL_ITEMS,
  };
};

export const changeItemCount = (id, newCount) => {
  return {
    type: CHANGE_ITEM_COUNT,
    id,
    newCount,
  };
};

export const cartReducer = (state = {}, action) => {
  const id = action.id;

  switch (action.type) {
    case ADD_ITEM:
      return { ...state, [id]: { id: id, count: 1 } };
    case DELETE_ITEM:
      const nState = { ...state };
      delete nState[action.id];
      return nState;
    case CHANGE_ITEM_COUNT:
      const newState = { ...state };
      newState[id].count = action.newCount;
      return newState;
    case DELETE_ALL_ITEMS:
      return {};
    default:
      return state;
  }
};
