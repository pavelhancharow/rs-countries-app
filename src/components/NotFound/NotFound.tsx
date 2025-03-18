import { ReactNode } from 'react';

interface NotFoundProps {
  children: ReactNode;
}

function NotFound(props: NotFoundProps) {
  return (
    <div className="flex flex-col text-blue-500 gap-5 px-7 py-5 bg-white rounded-lg text-center">
      <h2>Oops!</h2>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      {props.children}
    </div>
  );
}

export default NotFound;
