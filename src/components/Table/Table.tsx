import { ReactNode } from 'react';
import TableBody from '../TableBody/TableBody.tsx';
import TableHead from '../TableHead/TableHead.tsx';

interface TableProps {
  children: ReactNode;
}

function Table({ children }: TableProps) {
  return (
    <table className="flex flex-col w-full h-[73vh] shadow-xl shadow-gray-600/50 rounded-lg overflow-hidden">
      <TableHead />
      <TableBody>{children}</TableBody>
    </table>
  );
}

export default Table;
