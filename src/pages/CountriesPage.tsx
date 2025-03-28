import { CountriesTable } from '../components';
import CountriesContextProvider from '../context/CountriesContext.tsx';

function CountriesPage() {
  return (
    <CountriesContextProvider>
      <CountriesTable />
    </CountriesContextProvider>
  );
}

export default CountriesPage;
