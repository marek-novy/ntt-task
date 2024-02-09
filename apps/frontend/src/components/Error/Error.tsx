import { ErrorProps } from "./Error.types.ts";

const Error = ({ errorMessage }: ErrorProps) => {
  return <div>Error fetching data: {errorMessage}</div>;
};

export default Error;
