import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <button className="btn" onClick={() => setLoading(!loading)}>
        toggle loading
      </button>
      {loading && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  const handleScroll = () => {
    console.log("scrolling");
  };
  useEffect(() => {
    console.log("random component mounted");
    window.addEventListener("scroll", handleScroll);
    return () => {
      console.log("random component unmounted");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <h2>random component</h2>;
};
export default CleanupFunction;
