import { useEffect } from "react";

const Table = (data) => {
  const {
    id,
    identification,
    isEmpty
  } = data.data;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <table className="table w-full border-separate lg:border-collapse table-fixed">
      <thead>
        <tr>
          <th className="w-1/10">ID</th>
          <th className="w-1/10">Identificador</th>
          <th className="w-2/10">Esta vacía</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td >{id}</td>
          <td >{identification}</td>
          <td >{isEmpty == true?'Sí':'No'}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
