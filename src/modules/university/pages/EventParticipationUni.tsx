import { useState } from "react";
import HomeLayout from "../../../layout/HomeLayout";
import Card from "../../../components/Card";
import UniversitySidebar from "../components/universitySidebar";

export default function EventParticipationUni() {
  const [logoName, setLogoName] = useState("nenhum arquivo selecionado...");
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [participationDesc, setParticipationDesc] = useState("");

  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogoName(file.name);
    setLogoPreview(URL.createObjectURL(file));
  }

  function handleSubmit() {
    console.log({
      logoName,
      participationDesc,
    });
    alert("Enviado! (mock)");
  }

  return (
    <HomeLayout sidebar={<UniversitySidebar />}>
      <div className="min-h-screen bg-white px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto w-full max-w-[1250px]">
          <h1 className="mb-6 text-[24px] font-extrabold text-fuchsia-600">
            Atuação nos eventos:
          </h1>

          <Card className="rounded-[22px] border border-blue-500 bg-white p-5 shadow-[0_14px_28px_rgba(0,0,0,0.10)] sm:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              {/* Infos (esquerda) */}
              <div className="min-w-0 flex-1">
                <h2 className="text-[22px] font-medium text-blue-700">
                  NOME DO EVENTO
                </h2>

                <div className="mt-3 space-y-2 text-[16px]">
                  <div>
                    <span className="text-blue-700">Data:</span>{" "}
                    <span className="text-gray-400">00/00/0000</span>
                  </div>

                  <div>
                    <span className="text-blue-700">Horário:</span>{" "}
                    <span className="text-gray-400">00:00</span>
                  </div>

                  <div className="break-words">
                    <span className="text-blue-700">Local:</span>{" "}
                    <span className="text-gray-400">
                      Nome da rua, número, bairro, cidade.
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-blue-700">Descrição:</span>

                    <div className="max-w-[360px] rounded-2xl border border-blue-500 bg-white px-4 py-3 text-[14px] text-gray-400">
                      Texto explicativo sobre o evento, objetivos, público-alvo e
                      outras informações relevantes.
                    </div>
                  </div>
                </div>
              </div>

              {/* Imagem (direita) */}
              <div className="w-full lg:w-[420px]">
                <div className="overflow-hidden rounded-[18px]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                    alt="Evento"
                    className="h-[210px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Parte de baixo */}
            <div className="mt-10">
              {/* Logomarca */}
              <div className="text-[18px] font-extrabold text-fuchsia-600">
                Logomarca da Universidade:
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                <label
                  htmlFor="logo"
                  className="w-fit cursor-pointer rounded-sm border border-fuchsia-500 bg-white px-3 py-1 text-[12px] font-semibold text-gray-800 hover:bg-fuchsia-50"
                >
                  escolher arquivo
                </label>

                <span className="text-[12px] text-gray-500">{logoName}</span>

                <input
                  id="logo"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleLogoChange}
                />
              </div>

              {logoPreview && (
                <img
                  src={logoPreview}
                  alt="Preview da logo"
                  className="mt-3 h-16 w-16 rounded-lg border object-cover"
                />
              )}

              {/* Descrição do evento */}
              <div className="mt-6 text-[18px] font-extrabold text-fuchsia-600">
                Descrição do evento:
              </div>

              <textarea
                value={participationDesc}
                onChange={(e) => setParticipationDesc(e.target.value)}
                placeholder="DESCRIÇÃO DE COMO SERÁ A PARTICIPAÇÃO DA UNIVERSIDADE NO EVENTO E OS CURSOS QUE FARÃO PARTE."
                className="mt-3 h-[110px] w-full resize-none rounded-2xl border border-fuchsia-400 px-4 py-4 text-[14px] text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-300"
              />

              {/* Botão */}
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-[180px] rounded-full bg-lime-500 px-6 py-2 text-[13px] font-extrabold text-white shadow-[0_10px_18px_rgba(34,197,94,0.25)] hover:bg-lime-600"
                >
                  ENVIAR
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </HomeLayout>
  );
}
