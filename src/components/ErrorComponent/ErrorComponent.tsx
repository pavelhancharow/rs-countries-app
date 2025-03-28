interface ErrorComponentProps {
  info: string | null;
}

function ErrorComponent(props: ErrorComponentProps) {
  return (
    <div className="flex flex-col text-lg text-red-500">
      <h2 className="font-normal">Oops!</h2>
      <b>There&#39;s an error</b>
      <span>Error: {props.info || 'Something went wrong!'}</span>
    </div>
  );
}

export default ErrorComponent;
