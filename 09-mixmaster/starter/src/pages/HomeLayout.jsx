import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Navbar />
      <section className="page">{isLoading ? <Loading /> : <Outlet />}</section>
      <footer>Footer</footer>
    </>
  );
};

export default HomeLayout;
