const cartTypes = {
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
};

// Actions
export const addToCart = (unique_id, data) => {
  return function (dispatch) {
    dispatch({
      type: cartTypes.ADD_TO_CART,
      payload: {
        unique_id,
        data,
      },
    });
  };
};

export const deleteFromCart = (unique_id) => {
  return (dispatch) => {
    dispatch({
      type: cartTypes.DELETE_FROM_CART,
      payload: {
        unique_id,
      },
    });
  };
};

// DICTIONARY item
// key -> item_id
// value -> an object of { price:, name:, brand: ,}

const initState = {
  items: {
    "12345": {
      unique_id: "12345",
      header: "Test Item",
      body: "Great item",
      price: "$123",
    },
  },
};
// action is a javascript object -> FOR REDUX compulsory it should have a type field
// payload is optional -> it is used passing data to the state
// ADD TO CART -> will have data you want to add to cart
// DELETE FROM CART -> will have the index or the item id you want to delete
export default function (state = initState, action) {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      // Get the data from action.payload
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.unique_id]: action.payload.data,
        },
      };
    case cartTypes.DELETE_FROM_CART:
      const {[action.payload.unique_id]: deletedItem, ...remainingItems } = state.items;
      return {
        ...state,
        items: remainingItems,
      };
    default:
      return state;
  }
}
