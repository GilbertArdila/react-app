import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4 text-white";

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-sky-950">
      <ul className="flex items-center gap-3 text-white ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/activos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Activos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/empleados"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Empleados
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ubicaciones"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Ubicaciones
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 text-white">
        <li className="text-white/60">fundacionmarialuisa@fundacion.com</li>
        <li className="font-semibold">
          <NavLink
            to="/crud"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CRUD
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
