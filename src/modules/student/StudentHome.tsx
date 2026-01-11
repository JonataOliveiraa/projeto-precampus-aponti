import Sidebar from "./components/SideBarStudent";
import Card from "./components/Card";


const HomeAluno = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
    <div className="bg-white">
    <Sidebar />
    </div>
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Bem-vindo, Aluno(a)!
        </h2>

        {/* Próximo evento */}
        <section className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-6 mb-6 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-orange-500 mb-2">
              PRÓXIMO EVENTO:
            </h3>

            <p className="text-blue-600 text-lg mb-6">
              Palestra sobre o curso X
            </p>

            <div className="flex gap-4">
              <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400 transition">
                Inscreva-se
              </button>
              <button className="border-2 border-orange-500 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                Saiba mais
              </button>
            </div>
          </div>

          <img
            src="/img/evento.jpg"
            alt="Evento"
            className="w-full md:w-64 h-40 rounded-lg object-cover"
          />
        </section>

        {/* Outros eventos */}
        <section>
          <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-4">
          <h3 className="text-xl font-bold text-blue-600 text-left">
            Eventos:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-orange-500 rounded-2xl shadow-sm overflow-hidden">
              <Card titulo="Palestra 1" status="inscrever" />
            </div>
            <div className="border-2 border-orange-500 rounded-2xl shadow-sm overflow-hidden">
              <Card titulo="Palestra 2" status="inscrito" />
            </div>
            <div className="border-2 border-orange-500 rounded-2xl shadow-sm overflow-hidden">
              <Card titulo="Palestra 3" status="inscrito" />
            </div>
          </div>
          <div className="flex justify-center mt-2 mb-2">
            <button className="border-2 border-orange-500 text-blue-600 font-semibold px-10 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            VEJA MAIS
            </button>
          </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeAluno;
