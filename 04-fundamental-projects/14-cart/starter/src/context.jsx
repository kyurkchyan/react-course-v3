import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import cartItems from "./data";
import { getTotals } from "./utils";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map()
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING, payload: { loading: true } });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { items: cart } });
    dispatch({ type: LOADING, payload: { loading: false } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { totalCost, totalAmount } = getTotals(state.cart);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalCost,
        totalAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
