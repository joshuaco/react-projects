import './ErrorMessage.css';

type ErrorMessageProps = {
  children: string;
};

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p>{children}</p>;
}

export default ErrorMessage;
