import { memo, useContext, useMemo } from 'react';
import { CountriesContext } from '../../context/CountriesContext.tsx';
import { DirectionStatuses, LoadingStatuses } from '../../enums';
import { CountryTableFilters } from '../../models';
import CountriesTableBodyRow from '../CountriesTableBodyRow/CountriesTableBodyRow.tsx';
import ErrorComponent from '../ErrorComponent/ErrorComponent.tsx';
import Loader from '../Loader/Loader.tsx';
import NoContent from '../NoContent/NoContent.tsx';
import TableStatusRow from '../TableStatusRow/TableStatusRow.tsx';

interface CountriesTableBodyProps {
  country: string;
  region: string;
  orderBy: string;
  direction: DirectionStatuses;
}

function CountriesTableBody(props: CountriesTableBodyProps) {
  const state = useContext(CountriesContext);

  const filteredCountries = useMemo(() => {
    return props.country || props.region !== 'All'
      ? state.data.countries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .includes(props.country.toLowerCase()) &&
            (props.region === 'All' || country.region === props.region)
        )
      : state.data.countries;
  }, [props.country, props.region, state.data.countries]);

  const countries = useMemo(() => {
    if (!props.orderBy) return filteredCountries;

    return [...filteredCountries].sort((a, b) => {
      const valueA =
        props.orderBy === 'name'
          ? a[props.orderBy]['common']
          : a[props.orderBy as Exclude<CountryTableFilters['orderBy'], ''>];
      const valueB =
        props.orderBy === 'name'
          ? b[props.orderBy]['common']
          : b[props.orderBy as Exclude<CountryTableFilters['orderBy'], ''>];

      if (props.direction === DirectionStatuses.Asc) {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
    });
  }, [props.orderBy, props.direction, filteredCountries]);

  return (
    <>
      {state.status === LoadingStatuses.Pending && (
        <TableStatusRow>
          <Loader />
        </TableStatusRow>
      )}
      {state.status === LoadingStatuses.Rejected && (
        <TableStatusRow>
          <ErrorComponent info={state.error} />
        </TableStatusRow>
      )}
      {state.status === LoadingStatuses.Fulfilled &&
        (countries.length ? (
          countries.map((country) => (
            <CountriesTableBodyRow key={country.cca2} {...country} />
          ))
        ) : (
          <TableStatusRow>
            <NoContent />
          </TableStatusRow>
        ))}
    </>
  );
}

export default memo(CountriesTableBody);
