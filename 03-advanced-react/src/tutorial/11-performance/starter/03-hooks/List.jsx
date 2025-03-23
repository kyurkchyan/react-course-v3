import Item from "./Person";
import { memo } from "react";

const List = memo(({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Item key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </div>
  );
});
export default List;
