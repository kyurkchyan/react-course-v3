import { useRouteError } from "react-router-dom";
import GenericError from "../components/GenericError";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <GenericError height="100vh" />;
  }
  return <GenericError height="100vh" />;
};

export default Error;
