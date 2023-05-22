import { useState,useEffect } from "react";
import axios from 'axios';

import { apiUrl } from "../../Api";
import Layout from "../../Components/Layout";
import ListItem from "../../Components/ListItem";

const Assets = () => {

 const [assets, setAssets] = useState(null);

useEffect(
  () => {
    axios.get(`${apiUrl}activos`)
      .then(response => {
        setAssets(response.data);
      })
    
      .catch(error => {
        console.error('Error fetching assets:', error);
      });

   }, 
  []);

  return (
    <Layout>
      {assets?.map(item => (
        <ListItem data={item} key={item.id}/>
      ))}
    </Layout>
    
  )
}

export default Assets   