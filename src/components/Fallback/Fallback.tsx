import { FallbackEntity } from '../../models';

type FallbackProps = FallbackEntity;

function Fallback(props: FallbackProps) {
  return (
    <div className="flex flex-col text-red-500 gap-5 px-7 py-5 bg-white rounded-lg text-center">
      <header>
        <h3>Oops! An error occurred!</h3>
      </header>
      <p>
        <strong>Error:</strong>{' '}
        {props.error?.message?.toString() || 'Unknown error'}
      </p>
      <p>
        <strong>Stacktrace:</strong>{' '}
        {props.componentStack || 'No stacktrace available'}
      </p>
    </div>
  );
}

export default Fallback;
