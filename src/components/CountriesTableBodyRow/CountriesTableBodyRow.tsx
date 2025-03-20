import { useRef } from 'react';
import { CountryEntity } from '../../models';
import { localStorageService } from '../../services';

type CountriesTableBodyRowProps = CountryEntity;

function CountriesTableBodyRow(props: CountriesTableBodyRowProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (ref.current?.checked) {
      localStorageService.visitedCountries = [
        ...localStorageService.visitedCountries,
        props.cca2,
      ];
    } else {
      localStorageService.visitedCountries =
        localStorageService.visitedCountries.filter(
          (item) => item !== props.cca2
        );
    }
  };

  return (
    <tr className="grid grid-cols-(--my-grid-cols) items-center border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <input
          ref={ref}
          type="checkbox"
          onChange={handleChange}
          className="flex w-4 h-4 text-blue-500 bg-gray-100 border-gray-300 rounded-sm cursor-pointer"
          defaultChecked={localStorageService.visitedCountries.includes(
            props.cca2
          )}
        />
      </td>
      <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
        <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={props.flags.png}
            alt={`flag of ${props.name.common}`}
          />
        </div>

        <div className="px-6 py-4">
          <b className="font-semibold">{props.name.common}</b>
        </div>
      </td>
      <td className="px-6 py-4">{props.region}</td>
      <td className="px-6 py-4">
        {props.population.toLocaleString().replace(/,/g, ' ')}
      </td>
    </tr>
  );
}

export default CountriesTableBodyRow;
