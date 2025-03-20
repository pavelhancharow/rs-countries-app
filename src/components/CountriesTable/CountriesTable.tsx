import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext.tsx';
import { DirectionStatuses } from '../../enums';
import { useFilter } from '../../hook';
import { CountryEntity, CountryTableFilters } from '../../models';
import { localStorageService } from '../../services';
import { filterByField } from '../../utils';
import CountriesTableBody from '../CountriesTableBody/CountriesTableBody.tsx';
import CountriesTableHeadRow from '../CountriesTableHeadRow/CountriesTableHeadRow.tsx';
import Table from '../Table/Table.tsx';
import CountriesTableBodyRow from '../CountriesTableBodyRow/CountriesTableBodyRow.tsx';

const initFilters = localStorageService.getInitData(
  'filters'
) as CountryTableFilters;

function CountriesTable() {
  const { data, status, error } = useContext(CountriesContext);
  const { filters, handleChange, clearFilters } =
    useFilter<CountryTableFilters>(localStorageService.filters, initFilters);

  const prevQuery = JSON.stringify(localStorageService.filters);

  if (prevQuery !== JSON.stringify(filters)) {
    localStorageService.filters = filters;
  }

  const isDisabled = JSON.stringify(initFilters) === JSON.stringify(filters);

  const regions = filterByField<CountryEntity, 'region'>(
    data.countries,
    'region'
  );

  const countries = data.countries.filter(
    (country) =>
      country.name.common
        .toLowerCase()
        .includes(filters.country.toLowerCase()) &&
      (filters.region === 'All' || country.region === filters.region)
  );

  if (filters.orderBy) {
    countries.sort((a, b) => {
      const valueA =
        filters.orderBy === 'name'
          ? a[filters.orderBy]['common']
          : a[filters.orderBy as Exclude<CountryTableFilters['orderBy'], ''>];
      const valueB =
        filters.orderBy === 'name'
          ? b[filters.orderBy]['common']
          : b[filters.orderBy as Exclude<CountryTableFilters['orderBy'], ''>];

      if (filters.direction === DirectionStatuses.Asc) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });
  }

  return (
    <Table
      filters={filters}
      options={regions}
      clearFilters={clearFilters}
      onChange={handleChange}
      disabled={isDisabled}
      thead={
        <CountriesTableHeadRow filters={filters} onChange={handleChange} />
      }
    >
      <CountriesTableBody
        countries={countries.length > 0}
        error={error}
        status={status}
      >
        {countries.map((country) => (
          <CountriesTableBodyRow key={country.cca2} {...country} />
        ))}
      </CountriesTableBody>
    </Table>
  );
}

export default CountriesTable;
