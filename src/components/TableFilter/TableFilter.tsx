import { memo, useContext, useMemo } from 'react';
import { CountriesContext } from '../../context/CountriesContext.tsx';
import { CountryEntity, CountryTableFilters } from '../../models';
import { filterByField } from '../../utils';

interface TableFilterProps {
  onChange: (data: Partial<CountryTableFilters>) => void;
  value: string;
}

function TableFilter({ onChange, value }: TableFilterProps) {
  const state = useContext(CountriesContext);

  const options = useMemo(() => {
    return filterByField<CountryEntity, 'region'>(
      state.data.countries,
      'region'
    );
  }, [state.data.countries]);

  return (
    <select
      id="region"
      name="region"
      onChange={(e) => onChange({ region: e.target.value })}
      className="py-1.5 px-1.5 text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-lg"
      value={value}
    >
      <option value="All">All Regions</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default memo(TableFilter);
