import { memo, MouseEvent } from 'react';
import { DirectionStatuses } from '../../enums';
import { CountryTableFilters } from '../../models';

interface CountriesTableHeadRowProps {
  onChange: (data: Partial<CountryTableFilters>) => void;
  direction: DirectionStatuses;
  orderBy: string;
}

function CountriesTableHeadRow(props: CountriesTableHeadRowProps) {
  const handleClick = (e: MouseEvent) => {
    const data = (e.target as HTMLElement)?.dataset;

    if (data.name) {
      props.onChange({
        orderBy: data.name as Extract<
          CountryTableFilters['orderBy'],
          'name' | 'population'
        >,
        direction:
          props.direction === DirectionStatuses.Asc
            ? DirectionStatuses.Desc
            : DirectionStatuses.Asc,
      });
    }
  };

  return (
    <tr className="grid grid-cols-(--my-grid-cols) items-center text-left">
      <th scope="col" className="px-6 py-5">
        ✔
      </th>
      <th
        scope="col"
        data-name="name"
        data-active={props.orderBy === 'name'}
        className="px-6 py-5 flex justify-between items-center cursor-pointer data-[active=true]:text-blue-500 hover:text-blue-800 data-[active=true]:hover:text-blue-800"
        onClick={handleClick}
        title="order by country"
      >
        Country
        {props.orderBy === 'name' &&
          (props.direction === DirectionStatuses.Asc ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
                stroke="#2b7fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16"
                stroke="#2b7fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
      </th>
      <th scope="col" className="px-6 py-5">
        Region
      </th>
      <th
        scope="col"
        data-name="population"
        data-active={props.orderBy === 'population'}
        className="px-6 py-5 flex justify-between items-center cursor-pointer data-[active=true]:text-blue-500 hover:text-blue-800 data-[active=true]:hover:text-blue-800"
        onClick={handleClick}
        title="order by population"
      >
        Population
        {props.orderBy === 'population' &&
          (props.direction === DirectionStatuses.Asc ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17H16M4 12H13M4 7H10M18 13V5M18 5L21 8M18 5L15 8"
                stroke="#2b7fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17H10M4 12H13M18 11V19M18 19L21 16M18 19L15 16M4 7H16"
                stroke="#2b7fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
      </th>
    </tr>
  );
}

export default memo(CountriesTableHeadRow);
