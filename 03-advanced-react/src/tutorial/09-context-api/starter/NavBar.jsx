import { useState, createContext } from "react";
import NavLinks from "./NavLinks";
export const NavbarContext = createContext();

export const useNavBarContext = () => {
  const { user, logout, login } = useContext(NavbarContext);
  return { user, logout, login };
};

const NavBar = () => {
  const [user, setUser] = useState({ name: "Gagik" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "Gagik" });
  };
  return (
    <NavbarContext.Provider value={{ user, logout, login }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default NavBar;
