import Sidebar from "./components/SideBarStudent";

const PerfilAluno = () => {
  return (
    <div className="flex text-center min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-8 max-w-5xl mx-auto">
          
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            DADOS DO ALUNO(A)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Nome completo" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Email" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Data de nascimento" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Telefone" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Universidades de interesse" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Cursos de interesse" 
            />
          </div>


          <h2 className="text-3xl font-semibold text-blue-600 mb-6">
            DADOS DO RESPONSÁVEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Nome completo" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Email" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Parentesco" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="CPF" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Renda familiar" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Endereço" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Senha" 
            />
            <input 
              className="border border-orange-600 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400" 
              placeholder="Confirmar senha" 
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-orange-400 transition">
              EDITAR PERFIL
            </button>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-400 transition">
              SALVAR EDIÇÃO
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PerfilAluno;
