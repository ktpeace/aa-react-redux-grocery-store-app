import produceData from "../mockData/produce.json";

// The object returned should have keys set to the id's of the produce data objects with their values as the respective produce data objects.

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const newState = {};
      action.produce.forEach((item) => {
        newState[item.id] = item;
      });
      return newState;
    default:
      return state;
  }
}

const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData,
  };
};
