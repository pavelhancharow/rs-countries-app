import { useContext } from 'react';
import { CountriesContext } from '../../context/CountriesContext.tsx';
import { LoadingStatuses } from '../../enums';
import ErrorComponent from '../ErrorComponent/ErrorComponent.tsx';
import Loader from '../Loader/Loader.tsx';
import Table from '../Table/Table.tsx';
import TableRow from '../TableRow/TableRow.tsx';
import TableStatusRow from '../TableStatusRow/TableStatusRow.tsx';

function CountriesTable() {
  const { data, status, error } = useContext(CountriesContext);

  return (
    <Table>
      {status === LoadingStatuses.Pending && (
        <TableStatusRow>
          <Loader />
        </TableStatusRow>
      )}
      {status === LoadingStatuses.Rejected && (
        <TableStatusRow>
          <ErrorComponent info={error} />
        </TableStatusRow>
      )}
      {status === LoadingStatuses.Fulfilled &&
        data.countries.map((country) => {
          return <TableRow key={country.cca2} {...country} />;
        })}
    </Table>
  );
}

export default CountriesTable;
