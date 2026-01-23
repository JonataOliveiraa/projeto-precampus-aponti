import HomeLayout from "../../../layout/HomeLayout";
import UniversitySidebar from "../components/UniversitySidebar";

export default function PerformanceEvents() {
  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
      <h1 className="text-2xl font-semibold text-purple-500 mb-6">
        Atuação nos eventos:
      </h1>

      {/* Card do evento */}
      <div className="bg-white border-2 border-purple-200 rounded-xl p-6 flex gap-6 mb-6">
        <div className="flex-1">
          <h2 className="text-blue-700 font-semibold text-lg mb-3">
            NOME DO EVENTO
          </h2>

          <p className="text-sm text-blue-500">
            <strong>Data:</strong> <span className="text-gray-400">00/00/0000</span>
          </p>
          <p className="text-sm text-blue-500">
            <strong>Horário:</strong> <span className="text-gray-400">00:00</span> 
          </p>
          <p className="text-sm text-blue-500">
            <strong>Local:</strong> <span className="text-gray-400">Nome da rua, número, bairro, cidade.</span> 
          </p>

          <div className="mt-3">
            <label className="block text-sm font-medium text-blue-600 mb-1">
              Descrição:
            </label>

            <textarea
              className="w-2/3 min-h-[110px] border border-gray-300 rounded-lg p-3 text-sm text-gray-700
               resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Texto explicativo sobre o evento, objetivos, público-alvo e outras informações relevantes."
            />
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
          alt="Evento"
          className="w-100 h-full object-cover rounded-lg"
        />
      </div>

      {/* Formulário */}
      <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Logomarca da Universidade:
          </label>
          <input
            type="file"
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-medium
              file:bg-purple-100 file:text-purple-700
              hover:file:bg-purple-200"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-700 mb-2">
            Descrição do evento:
          </label>
          <textarea
            className="w-full min-h-[120px] border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300"
            placeholder="DESCRIÇÃO DE COMO SERÁ A PARTICIPAÇÃO DA UNIVERSIDADE NO EVENTO E OS CURSOS QUE FARÃO PARTE."
          />
        </div>

        <div className="flex justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-2 rounded-lg ">
                ENVIAR
            </button>
        </div>
      </div>
    </HomeLayout>
  );
}
