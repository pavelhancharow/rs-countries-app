import { ReactNode } from 'react';
import { CountryTableFilters } from '../../models';
import TableClearFilters from '../TableClearFilters/TableClearFilters.tsx';
import TableFilter from '../TableFilter/TableFilter.tsx';
import TableSearch from '../TableSearch/TableSearch.tsx';

interface TableProps {
  options: string[];
  filters: CountryTableFilters;
  thead: ReactNode;
  children: ReactNode;
  clearFilters: () => void;
  onChange: (data: Partial<CountryTableFilters>) => void;
  disabled: boolean;
}

function Table(props: TableProps) {
  return (
    <table className="flex flex-col w-full h-[73vh] shadow-xl shadow-gray-600/50 rounded-lg overflow-hidden">
      <caption className="flex gap-4 py-2 px-2 w-full bg-white">
        <TableSearch
          onChange={props.onChange}
          value={props.filters['country']}
        />

        <TableFilter onChange={props.onChange} value={props.filters['region']}>
          {props.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TableFilter>

        <TableClearFilters
          onClick={props.clearFilters}
          disabled={props.disabled}
        />
      </caption>

      <thead className="text-sm text-gray-700 uppercase bg-gray-200">
        {props.thead}
      </thead>

      <tbody className="h-full overflow-y-auto bg-white">
        {props.children}
      </tbody>
    </table>
  );
}

export default Table;
