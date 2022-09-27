import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const TOGGLE_LIKE = "produce/TOGGLE_LIKE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};

export const toggleLike = (id) => {
  return {
    type: TOGGLE_LIKE,
    id,
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    case TOGGLE_LIKE:
      const id = action.id;
      const anotherNewState = { ...state };
      anotherNewState[id].liked = !anotherNewState[id].liked;
      return anotherNewState;
    default:
      return state;
  }
}
