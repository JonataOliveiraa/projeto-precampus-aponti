import { useState } from "react";
import { 
  RiCalendarLine, 
  RiMapPinLine, 
  RiSchoolLine, 
  RiCheckLine, 
  RiCloseLine,
  RiTimeLine,
  RiFileTextLine,
  RiSearchEyeLine
} from "@remixicon/react";
import HomeLayout from "../../../layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";

const mockPendingEvents = [
  {
    id: 1,
    title: "Feira de Ciências: Inovação Jovem",
    subtitle: "Apresentação de projetos de robótica e sustentabilidade",
    school: "Escola Estadual Monteiro Lobato",
    date: "12/11/2026",
    time: "08:00 - 17:00",
    location: "Ginásio Poliesportivo",
    description: "Evento anual focado em trazer inovações tecnológicas desenvolvidas pelos alunos do ensino médio. Contará com bancas de jurados universitários e premiações locais.",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Mostra Cultural de Artes",
    subtitle: "Exposição de pinturas e esculturas regionais",
    school: "Colégio Santa Maria",
    date: "25/11/2026",
    time: "14:00 - 18:00",
    location: "Auditório Principal",
    description: "Uma tarde dedicada à apreciação da arte produzida pelos alunos, com foco na cultura pernambucana e suas raízes históricas.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop"
  }
];

export default function ReqEvents() {
  const [selectedEvent, setSelectedEvent] = useState<typeof mockPendingEvents[0] | null>(null);

  const handleOpenModal = (event: typeof mockPendingEvents[0]) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleApprove = () => {
    alert(`Evento "${selectedEvent?.title}" Aprovado!`);
    handleCloseModal();
  };

  const handleReject = () => {
    alert(`Evento "${selectedEvent?.title}" Recusado!`);
    handleCloseModal();
  };

  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-red-600">
            Validação de Eventos
          </h1>
          <p className="text-gray-500 mt-1">
            Analise e aprove os eventos solicitados pelas escolas parceiras.
          </p>
        </div>
        
        <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg font-semibold text-sm border border-red-100">
          {mockPendingEvents.length} Solicitações Pendentes
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockPendingEvents.map((event) => (
          <div 
            key={event.id} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all overflow-hidden flex flex-col h-full group"
          >
            <div className="relative h-48 overflow-hidden bg-gray-100 border-b border-gray-100">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full border border-yellow-200 shadow-sm">
                Aguardando Aprovação
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-gray-500 text-xs font-medium uppercase tracking-wide mb-2">
                <RiSchoolLine size={14} className="text-red-500" />
                {event.school}
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {event.subtitle}
              </p>

              <div className="space-y-2 mt-auto text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <RiCalendarLine size={16} className="text-gray-400" />
                  <span>{event.date}</span>
                  <span className="text-gray-300">|</span>
                  <RiTimeLine size={16} className="text-gray-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiMapPinLine size={16} className="text-gray-400" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50/50">
              <button 
                onClick={() => handleOpenModal(event)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all text-sm font-bold uppercase tracking-wide cursor-pointer"
              >
                <RiSearchEyeLine size={18} />
                Analisar Evento
              </button>
            </div>
          </div>
        ))}
      </div>

      {mockPendingEvents.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
          <p className="text-gray-500">Nenhum evento pendente para validação no momento.</p>
        </div>
      )}

      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={handleCloseModal}>
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Análise de Solicitação</h2>
                <p className="text-sm text-gray-500">Verifique os dados enviados pela escola</p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition cursor-pointer"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-inner flex-shrink-0">
                  <img 
                    src={selectedEvent.image} 
                    alt="Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 space-y-4">
                   <div className="bg-red-50 p-3 rounded-lg border border-red-100 flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full text-red-500 shadow-sm">
                        <RiSchoolLine size={20} />
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-red-400 uppercase">Escola Solicitante</span>
                        <span className="font-semibold text-gray-800">{selectedEvent.school}</span>
                      </div>
                   </div>

                   <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.title}</h3>
                      <p className="text-lg text-gray-500 font-medium">{selectedEvent.subtitle}</p>
                   </div>

                   <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                        <RiCalendarLine size={18} className="text-blue-500"/>
                        <span className="font-medium">{selectedEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                        <RiTimeLine size={18} className="text-blue-500"/>
                        <span className="font-medium">{selectedEvent.time}</span>
                      </div>
                   </div>

                   <div className="flex items-start gap-2 text-gray-600">
                      <RiMapPinLine size={20} className="text-gray-400 mt-0.5 shrink-0"/>
                      <span>{selectedEvent.location}</span>
                   </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="flex items-center gap-2 font-bold text-gray-800 mb-3">
                  <RiFileTextLine className="text-blue-500" />
                  Descrição do Evento
                </h4>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-gray-600 leading-relaxed">
                  {selectedEvent.description}
                </div>
              </div>

            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 flex flex-col sm:flex-row justify-end gap-4">
              <button 
                onClick={handleReject}
                className="px-6 py-3 rounded-xl border-2 border-red-100 text-red-600 font-bold hover:bg-red-50 hover:border-red-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RiCloseLine size={20} />
                RECUSAR SOLICITAÇÃO
              </button>
              <button 
                onClick={handleApprove}
                className="px-8 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RiCheckLine size={20} />
                APROVAR EVENTO
              </button>
            </div>

          </div>
        </div>
      )}

    </HomeLayout>
  );
}