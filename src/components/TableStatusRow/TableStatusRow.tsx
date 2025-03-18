import { ReactNode } from 'react';

interface TableStatusRowProps {
  children: ReactNode;
}

function TableStatusRow({ children }: TableStatusRowProps) {
  return (
    <tr className="grid items-center h-full">
      <td colSpan={100} className="text-center py-4">
        {children}
      </td>
    </tr>
  );
}

export default TableStatusRow;
