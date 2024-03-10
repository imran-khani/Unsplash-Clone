import { FieldErrors } from "react-hook-form";

interface ErrorMessageProps {
  errors: FieldErrors;
  name: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors, name }) => {
  const error = errors[name];
  return error ? (
    <span className="text-rose-500">{error.message?.toString()}</span>
  ) : null;
};

export default ErrorMessage;
