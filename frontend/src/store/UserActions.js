import {
  ADD_TO_CART,
  CLEAR_CART,
  CREATE_CART,
  DECREASE_FROM_CART,
  LOGIN,
  LOGOUT,
  REMOVE_FROM_CART,
} from "./userDefinedActions";

export const LoginUser =
  (id, email, userName, typeOfUser) => async (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: { id, email, userName, userType: typeOfUser },
    });
  };
export const LogoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const createCart = () => async (dispatch) => {
  dispatch({ type: CREATE_CART });
};
export const addToCart =
  (id, amount = 1) =>
  async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, amount },
    });
  };
export const removeFromCart =
  (id, amount = 1) =>
  async (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { id, amount },
    });
  };
export const decreaseFromCart =
  (id, amount = 1) =>
  async (dispatch) => {
    dispatch({
      type: DECREASE_FROM_CART,
      payload: { id, amount },
    });
  };
export const clearCart = () => async (dispatch) => {
  dispatch({ type: CLEAR_CART });
};
