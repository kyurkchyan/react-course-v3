import { useState } from "react";

const ToggleChallenge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={() => setIsModalOpen(!isModalOpen)}>
        {isModalOpen ? "close" : "open"}
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};

const Modal = () => {
  return (
    <div className="alert alert-success">
      <h1>Modal</h1>
    </div>
  );
};

export default ToggleChallenge;
