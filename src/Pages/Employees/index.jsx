import { useState, useEffect } from "react";
import axios from "axios";

import { apiUrl } from "../../Api";
import Layout from "../../Components/Layout";
import Table from "../../Components/Tables/employees";

const Employees = () => {
  const [employees, setEmployees] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}empleados`)
      .then((response) => {
        setEmployees(response.data);
      })

      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, []);

  //lógica para el searcher
  const filteredEmployee = (employees, search) => {
    return employees?.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    if (search) {
      setFilteredEmployees(filteredEmployee(employees, search));
    }
  }, [employees, search]);

  const renderView = () => {
    if (search?.length > 0) {
      if (filteredEmployees?.length > 0) {
        return filteredEmployees?.map((item) => (
          <Table data={item} key={item.id} />
        ));
      } else {
        return <h3 className="text-white">Empleado no encontrado</h3>;
      }
    } else {
      return employees?.map((item) => <Table data={item} key={item.id} />);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center  w-80 mb-4 mt-16">
        <h1 className="font-medium text-xl text-white">Empleados</h1>
      </div>
      <input
        type="text"
        className="rounded-lg border-black w-80 p-4 mb-12 focus:outline-none "
        placeholder={"buscar..."}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table className="table fixed bg-blue-800 top-28 w-full border-separate lg:border-collapse table-fixed">
        <thead>
          <tr>
            <th className="w-1/10">ID</th>
            <th className="w-1/10">Nombre</th>
            <th className="w-2/10">Apellido</th>
            <th className="w-1/10">Rol</th>
          </tr>
        </thead>
      </table>
      {renderView()}
    </Layout>
  );
};

export default Employees;
