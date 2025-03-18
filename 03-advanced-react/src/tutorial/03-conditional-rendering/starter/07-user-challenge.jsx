import { useState } from "react";
const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "John" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div className="container">
      {user ? (
        <div>
          <h2>Welcome {user.name}</h2>
          <button className="btn" onClick={logout}>
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};

export default UserChallenge;
