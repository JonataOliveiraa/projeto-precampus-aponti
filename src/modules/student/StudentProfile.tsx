import Sidebar from "./components/SiderBar";

const PerfilAluno = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow p-8 max-w-5xl">
          <h2 className="text-xl font-semibold text-primary mb-6">
            DADOS DO ALUNO(A)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="border rounded p-2" placeholder="Nome completo" />
            <input className="border rounded p-2" placeholder="Email" />
            <input className="border rounded p-2" placeholder="Data de nascimento" />
            <input className="border rounded p-2" placeholder="Telefone" />
          </div>

          <h2 className="text-xl font-semibold text-primary mb-6">
            DADOS DO RESPONSÁVEL
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input className="border rounded p-2" placeholder="Nome completo" />
            <input className="border rounded p-2" placeholder="Email" />
            <input className="border rounded p-2" placeholder="CPF" />
            <input className="border rounded p-2" placeholder="Renda familiar" />
          </div>

          <div className="flex gap-4">
            <button className="bg-secondary text-white px-6 py-2 rounded-lg">
              Editar perfil
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
              Salvar edição
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PerfilAluno;
