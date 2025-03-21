import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.amount === 1) {
      newCart.delete(action.payload.id);
    } else {
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(action.payload.id, newItem);
    }
    return { ...state, cart: newCart };
  }

  if (action.type === LOADING) {
    return { ...state, loading: action.payload.loading };
  }

  if (action.type === DISPLAY_ITEMS) {
    const cart = new Map(action.payload.items.map((item) => [item.id, item]));
    return { ...state, cart };
  }
  throw new Error(`No action type found for this action ${action.type}`);
};
