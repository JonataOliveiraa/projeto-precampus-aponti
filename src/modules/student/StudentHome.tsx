import Sidebar from "./components/SiderBar";
import Card from "./components/Card";

const HomeAluno = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-primary mb-6">
          Bem-vindo, Aluno(a)!
        </h2>

        {/* Próximo evento */}
        <section className="bg-white rounded-xl shadow p-6 mb-10 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary mb-2">
              PRÓXIMO EVENTO:
            </h3>

            <p className="text-secondary mb-4">
              Palestra sobre o curso X
            </p>

            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Inscreva-se
              </button>
              <button className="border border-primary text-primary px-4 py-2 rounded-lg">
                Saiba mais
              </button>
            </div>
          </div>

          <img
            src="/img/evento.jpg"
            alt="Evento"
            className="w-full md:w-64 rounded-lg object-cover"
          />
        </section>

        {/* Outros eventos */}
        <section>
          <h3 className="text-lg font-semibold text-primary mb-4">
            Eventos:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card titulo="Palestra 1" status="inscrever" />
            <Card titulo="Palestra 2" status="inscrito" />
            <Card titulo="Palestra 3" status="inscrito" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeAluno;
