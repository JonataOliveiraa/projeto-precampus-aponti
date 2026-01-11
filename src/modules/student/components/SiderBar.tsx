import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white min-h-screen p-6 shadow-lg flex flex-col justify-between">
      
      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold text-primary mb-10">
          PreCampus
        </h1>

        {/* Navegação */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/inicio-estudante"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-primary/10"
              }`
            }
          >
            Página Inicial
          </NavLink>

          <NavLink
            to="/eventos"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-primary/10"
              }`
            }
          >
            Eventos
          </NavLink>

          <NavLink
            to="/perfil-estudante"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg ${
                isActive
                  ? "bg-primary text-white"
                  : "text-secondary hover:bg-primary/10"
              }`
            }
          >
            Minha Conta
          </NavLink>
        </nav>
      </div>

      {/* Sair */}
      <button className="text-secondary hover:text-primary text-left">
        Sair
      </button>
    </aside>
  );
};

export default Sidebar;
