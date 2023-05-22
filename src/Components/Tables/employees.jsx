import { useEffect } from "react";

const Table = (data) => {
  const {
    id,
    name,
    lastName,
    rol
  } = data.data;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <table className="table w-full border-separate lg:border-collapse table-fixed">
     
      <tbody>
        <tr>
          <td >{id}</td>
          <td >{name}</td>
          <td >{lastName}</td>
          <td >{rol}</td>
          
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
