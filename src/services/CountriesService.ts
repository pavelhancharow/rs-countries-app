import {
  CountryEntity,
  CountryQueryParams,
  FetchResponse,
  TypeCountries,
} from '../models';
import { fetchFromApi, getURLSearchParams } from '../utils';

class CountriesService {
  #endpoints = {
    independent: '/v3.1/independent',
  };
  #defaultQueryParams: CountryQueryParams = {
    fields: ['cca2', 'name', 'population', 'region', 'flags'],
  };

  async getCountries(
    signal: AbortSignal
  ): Promise<FetchResponse<TypeCountries>> {
    const params = getURLSearchParams(this.#defaultQueryParams);

    return {
      countries: await fetchFromApi<CountryEntity[]>(
        `${this.#endpoints.independent}/?${params}`,
        signal
      ),
    };
  }
}

export const countriesService = new CountriesService();
