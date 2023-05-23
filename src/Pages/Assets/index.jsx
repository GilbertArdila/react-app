import { useState, useEffect } from "react";
import axios from "axios";

import { apiUrl } from "../../Api";
import Layout from "../../Components/Layout";
import Table from "../../Components/Tables/assets";

const Assets = () => {
  const [assets, setAssets] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredAssets, setFilteredAssets] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}activos`)
      .then((response) => {
        setAssets(response.data);
      })

      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, []);

  //lógica para el searcher
  const filteredAsset = (assets, search) => {
    return assets?.filter((asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    if (search) {
      setFilteredAssets(filteredAsset(assets, search));
    }
  }, [assets, search]);

  const renderView = () => {
    if (search?.length > 0) {
      if (filteredAssets?.length > 0) {
        return filteredAssets?.map((item) => (
          <Table data={item} key={item.id} />
        ));
      } else {
        return <h3 className="text-white">Activo no encontrado</h3>;
      }
    } else {
      return assets?.map((item) => <Table data={item} key={item.id} />);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center  w-80 mb-6 mt-28">
        <h1 className="font-medium text-xl text-white">Activos</h1>
      </div>
      <input
        type="text"
        className="rounded-lg border-black w-80 p-4 mb-10 focus:outline-none "
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
            <th className="w-2/10">Descripción</th>
            <th className="w-1/10">Cantidad</th>
            <th className="w-1/10">Ubicación</th>
            <th className="w-1/10">Fecha de compra</th>
            <th className="w-1/10">Estado</th>
            <th className="w-1/10">Esta en otra sede</th>
          </tr>
        </thead>
      </table>

      {renderView()}
    </Layout>
  );
};

export default Assets;
