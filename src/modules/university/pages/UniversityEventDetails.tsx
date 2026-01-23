import { useState } from "react";
import { RiCalendarLine, RiTimeLine, RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine, RiFileListLine } from "@remixicon/react";

import UniversitySidebar from "../components/UniversitySidebar";
import HomeLayout from "../../../layout/HomeLayout";

export default function UniversityEventDetails() {
  // Estado para controlar se a lista de universidades está aberta
  const [showUniversities, setShowUniversities] = useState(true);

  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
      
      {/* Título Roxo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-fuchsia-700">
          Detalhes dos eventos:
        </h1>
      </div>

      {/* --- CARD PRINCIPAL (Borda Roxa) --- */}
      <div className="bg-white border border-fuchsia-400 rounded-3xl p-8 shadow-sm max-w-5xl relative">
          
          <div className="flex flex-col lg:flex-row gap-8">
              
              {/* ESQUERDA: Informações */}
              <div className="flex-1 space-y-4">
                  
                  {/* Nome Azul (Igual imagem) */}
                  <h2 className="text-2xl font-bold text-blue-600 uppercase mb-2">
                      NOME DO EVENTO
                  </h2>

                  {/* Detalhes */}
                  <div className="space-y-2 text-lg text-gray-600">
                      <p className="flex items-center gap-2">
                          <span className="text-blue-600 font-semibold">Data:</span> 00/00/0000
                      </p>
                      <p className="flex items-center gap-2">
                          <span className="text-blue-600 font-semibold">Horário:</span> 00:00
                      </p>
                      <p className="flex items-center gap-2">
                          <span className="text-blue-600 font-semibold">Local:</span> Nome da rua, número, bairro, cidade.
                      </p>
                  </div>

                  {/* Caixa de Descrição (Borda Azulada) */}
                  <div className="flex items-start gap-2 mt-4">
                      <span className="text-blue-600 font-semibold text-lg whitespace-nowrap pt-1">Descrição:</span>
                      <div className="border border-blue-300 rounded-xl p-4 text-gray-500 w-full h-32 text-sm leading-relaxed">
                          Texto explicativo sobre o evento, objetivos, público-alvo e outras informações relevantes.
                      </div>
                  </div>

                  {/* Lista de Universidades (Accordion) */}
                  <div className="mt-6">
                      <button 
                        onClick={() => setShowUniversities(!showUniversities)}
                        className="flex items-center gap-2 text-blue-600 font-semibold text-lg hover:opacity-80 transition-opacity"
                      >
                        Universidades participantes
                        {showUniversities ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                      </button>
                      
                      {showUniversities && (
                          <ul className="mt-2 pl-4 text-gray-400 space-y-1">
                              <li>- Universidade 1</li>
                              <li>- Universidade 2</li>
                              <li>- Universidade 3</li>
                              <li>- Universidade 4</li>
                          </ul>
                      )}
                  </div>

                  {/* Alunos Inscritos */}
                  <div className="mt-6">
                      <p className="text-lg font-semibold text-blue-600">
                          Alunos inscritos: <span className="text-gray-500 font-normal">75 alunos</span>
                      </p>
                  </div>

                  {/* Botão Lista de Inscritos (Outline Roxo) */}
                  <div className="mt-6">
                      <button className="border border-fuchsia-600 text-fuchsia-700 font-bold py-2 px-6 rounded-full hover:bg-fuchsia-50 transition-colors text-sm flex items-center gap-2">
                          Lista de inscritos
                      </button>
                  </div>

              </div>

              {/* DIREITA: Imagem */}
              <div className="lg:w-[450px]">
                  <div className="rounded-3xl overflow-hidden h-64 lg:h-72 w-full border border-gray-100 shadow-sm">
                      <img 
                          src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=600&auto=format&fit=crop" 
                          alt="Evento" 
                          className="w-full h-full object-cover"
                      />
                  </div>
              </div>

          </div>
      </div>

    </HomeLayout>
  );
}