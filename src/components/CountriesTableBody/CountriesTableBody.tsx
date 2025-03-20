import { ReactNode } from 'react';
import { LoadingStatuses } from '../../enums';
import ErrorComponent from '../ErrorComponent/ErrorComponent.tsx';
import Loader from '../Loader/Loader.tsx';
import NoContent from '../NoContent/NoContent.tsx';
import TableStatusRow from '../TableStatusRow/TableStatusRow.tsx';

interface CountriesTableBodyProps {
  status: LoadingStatuses;
  countries: boolean;
  children: ReactNode;
  error: string | null;
}

function CountriesTableBody(props: CountriesTableBodyProps) {
  return (
    <>
      {props.status === LoadingStatuses.Pending && (
        <TableStatusRow>
          <Loader />
        </TableStatusRow>
      )}
      {props.status === LoadingStatuses.Rejected && (
        <TableStatusRow>
          <ErrorComponent info={props.error} />
        </TableStatusRow>
      )}
      {props.status === LoadingStatuses.Fulfilled && props.countries ? (
        props.children
      ) : (
        <TableStatusRow>
          <NoContent />
        </TableStatusRow>
      )}
    </>
  );
}

export default CountriesTableBody;
