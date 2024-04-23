type ErrorMessageProps = {
  children: string;
};

function ErrorMessage({ children }: ErrorMessageProps) {
  return <p className="text-red-500 text-center">{children}</p>;
}

export default ErrorMessage;
