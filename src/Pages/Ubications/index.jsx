import { useState, useEffect } from "react";
import axios from "axios";

import { apiUrl } from "../../Api";
import Table from "../../Components/Tables/ubications";
import Layout from "../../Components/Layout"

const Ubications = () => {
  const [ubications, setUbications] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}ubicaciones`)
      .then((response) => {
        setUbications(response.data);
      })

      .catch((error) => {
        console.error("Error fetching assets:", error);
      });
  }, []);

  return (
    <Layout>
      
      {ubications?.map((item) => (
        <Table data={item} key={item.id} />
      ))}
    </Layout>
  )
}

export default Ubications