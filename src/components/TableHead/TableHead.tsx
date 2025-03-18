function TableHead() {
  return (
    <thead className="text-sm text-gray-700 uppercase bg-gray-200">
      <tr className="grid grid-cols-(--my-grid-cols) items-center text-left">
        <th scope="col" className="px-6 py-5">
          ✔
        </th>
        <th scope="col" className="px-6 py-5">
          Country
        </th>
        <th scope="col" className="px-6 py-5">
          Region
        </th>
        <th scope="col" className="px-6 py-5">
          Population
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;
