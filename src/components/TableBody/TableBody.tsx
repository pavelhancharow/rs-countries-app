import { ReactNode } from 'react';

interface TableBodyProps {
  children: ReactNode;
}

function TableBody({ children }: TableBodyProps) {
  return <tbody className="h-full overflow-y-auto bg-white">{children}</tbody>;
}

export default TableBody;
