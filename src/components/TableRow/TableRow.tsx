import { CountryEntity } from '../../models';

type TableRowProps = CountryEntity;

function TableRow(props: TableRowProps) {
  return (
    <tr className="grid grid-cols-(--my-grid-cols) items-center border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          className="flex w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
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
      <td className="px-6 py-4">{props.population}</td>
    </tr>
  );
}

export default TableRow;
