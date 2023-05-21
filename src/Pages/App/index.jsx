import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Crud from "../Crud";
import Employees from "../Employees";
import Ubications from "../Ubications";
import Assets from "../Assets";
import NotFound from "../Notfound";
import Navbar from "../../Components/Navbar";

import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/crud', element: <Crud /> },
    { path: '/empleados', element: <Employees /> },
    { path: '/ubicaciones', element: <Ubications /> },
    { path: '/activos', element: <Assets /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
