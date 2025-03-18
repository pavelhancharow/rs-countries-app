import { CountryQueryParams } from '../models';

type QueryParamsTypes = CountryQueryParams;

export function getURLSearchParams(queryParams: QueryParamsTypes) {
  const params = new URLSearchParams();

  Object.entries(queryParams).forEach(([key, value]) => {
    params.append(key, value);
  });

  return params;
}
