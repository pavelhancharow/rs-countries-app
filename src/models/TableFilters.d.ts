import { DirectionStatuses } from '../enums';
import { CountryEntity } from './CountryEntity';

export interface CountryTableFilters {
  country: string;
  region: string;
  orderBy: keyof Pick<CountryEntity, 'population' | 'name'> | '';
  direction: DirectionStatuses;
}
