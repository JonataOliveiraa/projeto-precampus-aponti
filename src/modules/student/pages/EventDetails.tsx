import Sidebar from "../components/SiderBar";

const DetalhesEvento = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow p-8 max-w-4xl">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Nome do Evento
          </h2>

          <p className="text-secondary mb-2">
            <strong>Data:</strong> 00/00/0000
          </p>

          <p className="text-secondary mb-4">
            <strong>Horário:</strong> 00:00
          </p>

          <p className="text-secondary mb-6">
            Texto explicativo do evento. Aqui vocês colocam a descrição que
            aparece no Figma.
          </p>

          <h4 className="font-semibold text-primary mb-2">
            Universidades participantes
          </h4>

          <ul className="list-disc list-inside text-secondary mb-6">
            <li>Universidade 1</li>
            <li>Universidade 2</li>
            <li>Universidade 3</li>
          </ul>

          <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
            Inscreva-se
          </button>
        </div>
      </main>
    </div>
  );
};

export default DetalhesEvento;
