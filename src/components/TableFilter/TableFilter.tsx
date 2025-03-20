import { ReactNode } from 'react';
import { CountryTableFilters } from '../../models';

interface TableFilterProps {
  children: ReactNode;
  onChange: (data: Partial<CountryTableFilters>) => void;
  value: string;
}

function TableFilter({ children, onChange, value }: TableFilterProps) {
  return (
    <select
      id="region"
      name="region"
      onChange={(e) => onChange({ region: e.target.value })}
      className="py-1.5 px-1.5 text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-lg"
      value={value}
    >
      <option value="All">All Regions</option>
      {children}
    </select>
  );
}

export default TableFilter;
