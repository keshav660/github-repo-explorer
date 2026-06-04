function ErrorMessage({ message }) {
  return (
    <div className="mt-6 p-4 border border-red-300 rounded-lg">
      <p className="text-red-600">{message}</p>
    </div>
  );
}

export default ErrorMessage;
