// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";
import Loading from "./Loading";
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
