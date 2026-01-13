import HomeLayout from "../../layout/HomeLayout";
import StudentSidebar from "./components/StudentSidebar";
import NextEventBanner from "./components/NextEventBanner";
import Card from "./components/Card";

// Interface para garantir que o status bata com o CardProps
interface Evento {
  id: number;
  title: string;
  status: "inscrever" | "inscrito" | "saibaMais";
}

const mockEvents: Evento[] = [
  { id: 1, title: "Palestra de Tecnologia", status: "inscrever" },
  { id: 2, title: "Workshop de Design", status: "inscrito" },
  { id: 3, title: "Feira de Profissões", status: "inscrever" },
];

export default function StudentHome() {
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-orange-500">
          Bem-vindo, Aluno(a)!
        </h2>
        <p className="text-gray-500">Confira o que está rolando na sua universidade.</p>
      </div>

      <NextEventBanner 
        title="Palestra sobre o curso X" 
        img="/img/evento.jpg" 
      />

      <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-blue-600">
            Outros Eventos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockEvents.map((event) => (
             <div key={event.id} className="h-full">
                <Card 
                  titulo={event.title} 
                  status={event.status} 
                 />
             </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-orange-500 text-blue-600 font-bold px-10 py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition uppercase text-sm tracking-wide">
            Veja Mais
          </button>
        </div>
      </section>

    </HomeLayout>
  );
}