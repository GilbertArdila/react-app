import { useEffect } from "react";
const ListItem = (data) => {
  const {id,name,description,quantity,ubication,purchaseDate,state,employeeId
  } = data.data

  useEffect(() => {
  
    return () => {
      console.log(data)
    }
  }, [])
  
 
  return (
    <ul className="flex  items-center 8 text-sm font-light text-white">
      <li className="m-2">
         <strong >ID:</strong> {id}
      </li>
     
      <li className="m-2">
        <strong>Nombre:</strong> {name}
      </li>
      
      <li className="m-2">
      <strong>Descripción:</strong> {description}
     </li>
      
     <li className="m-2">
        <strong>Cantidad:</strong> {quantity}
      </li>
      
      <li className="m-2">
        <strong>Ubicación:</strong> {ubication}
      </li>
      
      <li className="m-2">
       <strong>Fecha de compra:</strong> {purchaseDate.split('T')[0]}
     </li>
     
     <li className="m-2">
        <strong>Estado:</strong> {state}
      </li>

      <li className="m-2">
        <strong>Esta en otra sede:</strong> {employeeId === null ?'No':'Sí'
}
      </li>
      
     
    
    </ul>
  );
};

export default ListItem;
