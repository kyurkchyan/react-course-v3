import useToggle from "./useToggle";

const ToggleExample = () => {
  const { value, toggle } = useToggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {value && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
