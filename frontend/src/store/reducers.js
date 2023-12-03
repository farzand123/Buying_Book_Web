import {
  ADD_TO_CART,
  CLEAR_CART,
  CREATE_CART,
  LOGIN,
  LOGOUT,
  REMOVE_FROM_CART,
} from "./userDefinedActions.js";
const states = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          userName: action.payload.userName,
          type: action.payload.userType,
        },
      };
    case LOGOUT: {
      delete state["user"];

      return { ...state };
    }
    case ADD_TO_CART: {
      const copyCart = { ...state.cart };
      if (copyCart[action.payload.id]) {
        copyCart[action.payload.id] += 1;
      } else {
        copyCart[action.payload.id] = 1;
      }
      return {
        ...state,
        cart: copyCart,
      };
    }
    case REMOVE_FROM_CART: {
      const copyCart = { ...state.cart };
      if (copyCart[action.payload.id]) {
        copyCart[action.payload.id] -= 1;
      } else {
        copyCart[action.payload.id] = 0;
      }
      return {
        ...state,
        cart: copyCart,
      };
    }

    case CLEAR_CART: {
      return { ...state, cart: {} };
    }
    case CREATE_CART: {
      return { ...state, cart: {} };
    }
    default:
      return state;
  }
};

export default states;
