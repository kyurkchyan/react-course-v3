import { useEffect, useState } from "react";

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  const reload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  useEffect(() => {
    reload();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <section>
      <h2>Multiple Returns Basics</h2>
      <button className="btn" onClick={() => reload()}>
        Reload
      </button>
    </section>
  );
};
export default MultipleReturnsBasics;
