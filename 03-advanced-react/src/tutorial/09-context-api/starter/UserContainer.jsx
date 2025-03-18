import { useNavBarContext } from "./NavBar";

const UserContainer = () => {
  const { user, logout, login } = useNavBarContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user.name.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <button type="button" className="btn" onClick={login}>
          login
        </button>
      )}
    </div>
  );
};

export default UserContainer;
