import { useEffect } from "react";

const Table = (data) => {
  const {
    id,
    name,
    description,
    quantity,
    ubication,
    purchaseDate,
    state,
    employeeId,
  } = data.data;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <table className="table w-full border-separate lg:border-collapse table-fixed">
      <tbody>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{quantity}</td>
          <td>{ubication}</td>
          <td>{purchaseDate.split("T")[0]}</td>
          <td>{state}</td>
          <td>{employeeId !== null ? "Sí" : "No"}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
