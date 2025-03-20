import { DirectionStatuses } from '../enums';
import { CountryTableFilters } from '../models';

class LocalStorageService {
  #visitedCountries = 'visitedCountries';
  #filters = 'filters';

  get visitedCountries() {
    const data = localStorage.getItem(this.#visitedCountries);

    if (!data) return this.getInitData(this.#visitedCountries) as string[];

    return JSON.parse(data);
  }

  set visitedCountries(term: string[]) {
    localStorage.setItem(this.#visitedCountries, JSON.stringify(term));
  }

  get filters() {
    const data = localStorage.getItem(this.#filters);

    if (!data) return this.getInitData(this.#filters) as CountryTableFilters;

    return JSON.parse(data);
  }

  set filters(term: CountryTableFilters) {
    localStorage.setItem(this.#filters, JSON.stringify(term));
  }

  getInitData(key: string): CountryTableFilters | string[] {
    switch (key) {
      case this.#filters:
        return {
          country: '',
          region: 'All',
          direction: DirectionStatuses.Asc,
          orderBy: '',
        } as CountryTableFilters;
      case this.#visitedCountries:
        return [];
      default:
        return [];
    }
  }
}

export const localStorageService = new LocalStorageService();
