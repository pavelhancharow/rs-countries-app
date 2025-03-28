export interface CountryEntity {
  cca2: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: { png: string };
}
