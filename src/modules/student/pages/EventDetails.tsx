import Sidebar from "../components/SideBarStudent";

const DetalhesEvento = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="bg-white">
        <Sidebar />
      </div>

      <main className="flex-1 p-6">      


        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Detalhes dos Eventos:
        </h2>

        <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-6 max-w-4xl">

          {/* Nome do evento */}
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
            Nome do Evento
          </h3>

          <p className="text-blue-600 mb-2">
            <strong>Data:</strong> 00/00/0000
          </p>

          <p className="text-blue-600 mb-4">
            <strong>Horário:</strong> 00:00
          </p>

          <p className="text-gray-700 mb-6">
            Texto explicativo sobre o evento, objetivos, público-alvo e outras informações relevantes.
          </p>

          <h4 className="font-bold text-orange-500 mb-2">
            Universidades participantes:
          </h4>

          <ul className="list-disc list-inside text-blue-600 mb-6">
            <li>Universidade 1</li>
            <li>Universidade 2</li>
            <li>Universidade 3</li>
          </ul>

          <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400 transition">
            Inscreva-se
          </button>

        </div>
      </main>
    </div>
  );
};

export default DetalhesEvento;
