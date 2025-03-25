import { useRouteError } from "react-router-dom";
import GenericError from "../components/GenericError";
const SinglePageError = () => {
  const error = useRouteError();
  return <GenericError message={error.message} />;
};

export default SinglePageError;
