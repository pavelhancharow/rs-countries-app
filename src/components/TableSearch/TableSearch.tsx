import { FormEvent, useRef } from 'react';
import { CountryTableFilters } from '../../models';
import Button from '../Button/Button.tsx';

interface TableSearchProps {
  onChange: (data: Partial<CountryTableFilters>) => void;
  value: string;
}

function TableSearch(props: TableSearchProps) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (ref.current) {
      props.onChange({ country: ref.current.value.trim() });
    }
  };

  if (ref.current) {
    ref.current.value = props.value;
  }

  return (
    <form onSubmit={handleSubmit} className="flex self-start bg-white">
      <div className="[&_button]:rounded-tr-none [&_button]:rounded-br-none">
        <Button type="submit">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span>Search</span>
          </div>
        </Button>
      </div>

      <input
        ref={ref}
        placeholder="Search Country"
        type="text"
        defaultValue={props.value}
        className="block text-sm text-gray-900 border border-gray-300 rounded-lg rounded-tl-none rounded-bl-none border-l-0 bg-gray-50 px-2"
      />
    </form>
  );
}

export default TableSearch;
