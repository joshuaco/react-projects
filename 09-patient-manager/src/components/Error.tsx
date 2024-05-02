type ErrorProps = {
  children: React.ReactNode;
};

function Error({ children }: ErrorProps) {
  return <div className="text-red-500 text-sm mt-1">{children}</div>;
}

export default Error;
