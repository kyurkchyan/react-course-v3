import React from "react";
import { useState } from "react";

const AddPerson = ({ addPerson }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please Provide Name Value");
      return;
    }
    addPerson(name);
    setName("");
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </form>
    </section>
  );
};

export default AddPerson;
