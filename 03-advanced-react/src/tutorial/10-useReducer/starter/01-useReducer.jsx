import { useReducer } from "react";
import { data } from "../../../data";
import { REMOVE_ITEM, CLEAR_ITEMS, RESET } from "./actions";
import reducer from "./reducer";
const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const reset = () => {
    dispatch({ type: RESET });
  };

  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button className="btn" onClick={reset}>
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
