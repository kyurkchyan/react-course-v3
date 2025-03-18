import { useState } from "react";
import { data as initialUsers } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUser = { id: Date.now(), name };
    setUsers([...users, newUser]);
    setName("");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block" disabled={name === ""}>
          submit
        </button>
      </form>
      {users.map((user) => {
        return (
          <div key={user.name}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
              <h4>{user.name}</h4>
              <button className="btn" onClick={() => handleDelete(user.id)}>
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
