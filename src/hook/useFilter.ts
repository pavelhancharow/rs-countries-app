import { useState } from 'react';
import { CountryTableFilters } from '../models';

type UseFilterType = CountryTableFilters;

export function useFilter<T extends UseFilterType>(state: T, initialValue: T) {
  const [filters, setFilters] = useState<T>(state);

  const handleChange = (data: Partial<T>) => {
    setFilters((prev): T => ({ ...prev, ...data }));
  };

  const clearFilters = () => {
    setFilters((prev) => ({
      ...prev,
      ...initialValue,
    }));
  };

  return {
    filters,
    handleChange,
    clearFilters,
  };
}
