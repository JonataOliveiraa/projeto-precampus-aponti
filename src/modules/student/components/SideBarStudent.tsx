import { NavLink } from "react-router-dom";

const SidebarAluno = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-2 border-orange-500 rounded-2xl p-6 flex flex-col justify-between shadow-md">
      
      {/* Logo + Navegação */}
      <div>
        {/* Logo */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-xl font-bold text-blue-600">PreCampus
          </h1>
          <p className="text-xs text-gray-500 text-center mt-1">Sua Jornada Começa Aqui
          </p>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col gap-6">
          <NavLink to="/inicio-estudante"
            className={({ isActive }) =>`px-6 py-3 rounded-full font semibold text-sm text-center transition ${isActive? "bg-orange-500 text-white": "text-blue-600 hover:bg-orange-100"}`}>PÁGINA INICIAL
          </NavLink>

          <NavLink
            to="/eventos"className={({ isActive }) =>`px-6 py-3 rounded-full font-semibold text-sm text-center transition ${isActive? "bg-orange-500 text-white": "text-blue-600 hover:bg-orange-100"}`}>EVENTOS
          </NavLink>

          <NavLink
            to="/detalhes-eventos"className={({ isActive }) =>
`px-6 py-3 rounded-full font-semibold text-sm text-center transition ${isActive? "bg-orange-500 text-white": "text-blue-600 hover:bg-orange-100"}`}>DETALHES DOS EVENTOS
          </NavLink>
        </nav>
      </div>

      {/* Rodapé */}
      <div className="flex flex-col gap-6">
        <NavLink
          to="/perfil-estudante"
          className={({ isActive }) =>
            `px-6 py-3 rounded-full font-semibold text-sm text-center transition ${isActive ? "bg-orange-500 text-white" : "text-blue-600 hover:text-orange-500"}`}>MINHA CONTA
        </NavLink>

        <button className="text-blue-600 font-semibold text-sm text-center hover:text-orange-500 transition">SAIR</button>
      </div>
    </aside>
  );
};

export default SidebarAluno;


