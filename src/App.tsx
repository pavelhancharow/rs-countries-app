import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Loader } from './components';

const CountriesPage = lazy(() => import('./pages/CountriesPage.tsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<CountriesPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
