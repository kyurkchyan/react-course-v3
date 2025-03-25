import styled from "styled-components";
import img from "../assets/not-found.svg";
import { useGoBack } from "../components/useGoBack";

const NotFound = ({
  height = "100%",
  message = "We can't seem to find the page you are looking for",
}) => {
  const goBack = useGoBack();

  return (
    <Wrapper height={height}>
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>{message}</p>
        <button onClick={goBack}>Go Back</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: ${({ height }) => height};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--grey-500);
  }

  button {
    color: var(--primary-500);
    text-transform: capitalize;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-700);
    }
  }
`;
export default NotFound;
