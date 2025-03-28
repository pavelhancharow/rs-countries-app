export type TypeCountries = { countries: CountryEntity[] };

type ResponseTypes = TypeCountries;

export type FetchResponse<T> = T extends ResponseTypes ? ResponseTypes : T;
