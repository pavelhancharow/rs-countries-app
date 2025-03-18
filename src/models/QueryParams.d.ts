import { CountryEntity } from './CountryEntity';

export interface CountryQueryParams {
  fields: Array<keyof CountryEntity>;
}
