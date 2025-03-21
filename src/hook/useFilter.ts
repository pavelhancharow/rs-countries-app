import { useCallback, useState } from 'react';
import { CountryTableFilters } from '../models';

type UseFilterType = CountryTableFilters;

export function useFilter<T extends UseFilterType>(state: T, initialValue: T) {
  const [filters, setFilters] = useState<T>(state);

  const handleChange = useCallback((data: Partial<T>) => {
    setFilters((prev): T => ({ ...prev, ...data }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      ...initialValue,
    }));
  }, [initialValue]);

  return {
    filters,
    handleChange,
    clearFilters,
  };
}
