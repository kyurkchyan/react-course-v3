import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("John");

  return (
    <section>
      <h2>Short Circuit Overview</h2>

      <h3>Truthy OR: {name || "name"}</h3>
      <h3>Falsy OR: {text || "text"}</h3>
      <h3>Truthy AND: {name && "name"}</h3>
      <h3>Falsy AND: {text && "text"}</h3>
    </section>
  );
};
export default ShortCircuitOverview;
