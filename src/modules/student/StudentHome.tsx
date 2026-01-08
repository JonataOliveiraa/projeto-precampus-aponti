import HomeLayout from "../../layout/HomeLayout";
import EventoCard from "../../layout/components/EventCard";

function StudentHome() {
  return (
    <HomeLayout>
      <div className="space-y-10">
        {/* Boas-vindas */}
        <h1 className="text-2xl font-bold text-orange-500">
          Bem-vindo, Aluno(a)!
        </h1>

        {/* Próximo Evento */}
        <section className="border-2 border-orange-300 rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-xl font-bold text-orange-500 mb-2">
              PRÓXIMO EVENTO:
            </h2>
            <p className="text-blue-600 text-lg mb-6">
              Palestra sobre o curso X
            </p>
            <div className="flex gap-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600">
                Inscreva-se
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-50">
                Saiba mais
              </button>
            </div>
          </div>
          <div className="w-full h-56 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="Evento"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Lista de Palestras */}
        <section className="border-2 border-orange-300 rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventoCard titulo="Palestra 1" data="00/00/0000" inscrito={false} />
            <EventoCard titulo="Palestra 2" data="00/00/0000" inscrito />
            <EventoCard titulo="Palestra 3" data="00/00/0000" inscrito />
          </div>
          <div className="flex justify-center mt-8">
            <button className="border-2 border-blue-500 text-blue-500 px-10 py-2 rounded-full font-semibold hover:bg-blue-50">
              VEJA MAIS
            </button>
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}

export default StudentHome;
