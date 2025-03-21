import { memo } from 'react';
import { useFilter } from '../../hook';
import { CountryTableFilters } from '../../models';
import { localStorageService } from '../../services';
import CountriesTableBody from '../CountriesTableBody/CountriesTableBody.tsx';
import CountriesTableHeadRow from '../CountriesTableHeadRow/CountriesTableHeadRow.tsx';
import Table from '../Table/Table.tsx';

const initFilters = localStorageService.getInitData(
  'filters'
) as CountryTableFilters;

const initFiltersValue = JSON.stringify(initFilters);

function CountriesTable() {
  const { filters, handleChange, clearFilters } =
    useFilter<CountryTableFilters>(localStorageService.filters, initFilters);

  const filtersValue = JSON.stringify(filters);

  if (JSON.stringify(localStorageService.filters) !== filtersValue) {
    localStorageService.filters = filters;
  }

  return (
    <Table
      country={filters.country}
      region={filters.region}
      clearFilters={clearFilters}
      onChange={handleChange}
      disabled={initFiltersValue === filtersValue}
      thead={
        <CountriesTableHeadRow
          direction={filters.direction}
          orderBy={filters.orderBy}
          onChange={handleChange}
        />
      }
    >
      <CountriesTableBody
        country={filters.country}
        region={filters.region}
        direction={filters.direction}
        orderBy={filters.orderBy}
      />
    </Table>
  );
}

export default memo(CountriesTable);
