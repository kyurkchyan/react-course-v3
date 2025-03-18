import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearItems = () => {
    setPeople([]);
  };
  const restoreItems = () => {
    setPeople(data);
  };
  return (
    <div>
      <h2>useState array example</h2>
      {people.map(({ id, name }) => {
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearItems}>
        clear items
      </button>
      <button className="btn" onClick={restoreItems}>
        Restore items
      </button>
    </div>
  );
};

export default UseStateArray;
