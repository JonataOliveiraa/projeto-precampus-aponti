import { useState } from "react";
import HomeLayout from "../../../layout/HomeLayout";
import AdminSidebar from "../components/AdminSidebar";


export default function EventValidationAdmin() {
  const [fileName, setFileName] = useState("nenhum arquivo selecionado...");
  const [imgPreview, setImgPreview] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setImgPreview(URL.createObjectURL(file));
  }

  return (
    <HomeLayout sidebar={<AdminSidebar />}>
      {/* CONTENT */}
      <main className="min-h-screen bg-white px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto w-full max-w-[1250px]">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-4">
            <h1 className="text-[22px] font-extrabold text-red-600">
              Validação de Eventos:
            </h1>

            <div className="h-10 w-10 overflow-hidden rounded-full shadow">
              <img
                alt="avatar"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Card */}
          <section className="rounded-[22px] border border-red-200 bg-white p-5 shadow-[0_12px_26px_rgba(0,0,0,0.10)] sm:p-6">
            <div className="rounded-[18px] border border-red-200 p-4 sm:p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                {/* Infos */}
                <div className="min-w-0">
                  <h2 className="text-[16px] font-extrabold text-blue-700">
                    NOME DO EVENTO
                  </h2>

                  <div className="mt-3 space-y-2 text-[13px]">
                    <div>
                      <span className="font-bold text-blue-700">Data:</span>{" "}
                      <span className="text-gray-400">00/00/0000</span>
                    </div>

                    <div>
                      <span className="font-bold text-blue-700">Horário:</span>{" "}
                      <span className="text-gray-400">00:00</span>
                    </div>

                    <div className="break-words">
                      <span className="font-bold text-blue-700">Local:</span>{" "}
                      <span className="text-gray-400">
                        Nome da rua, número, bairro, cidade.
                      </span>
                    </div>

                    <div className="mt-2 max-w-[420px] rounded-2xl border border-blue-500 px-4 py-3 text-[12px] text-gray-400">
                      <span className="font-bold text-blue-700">Descrição:</span>
                      <div className="mt-1">
                        Texto explicativo sobre o evento, objetivos, público-alvo e
                        outras informações relevantes.
                      </div>
                    </div>
                  </div>

                  {/* Upload imagem */}
                  <div className="mt-5">
                    <div className="mb-1 text-[10px] font-bold text-blue-700">
                      IMAGEM
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <label
                        htmlFor="img"
                        className="w-fit cursor-pointer rounded-sm border border-gray-300 bg-gray-50 px-3 py-1 text-[11px] font-semibold text-gray-700 hover:bg-gray-100"
                      >
                        escolher arquivo
                      </label>

                      <span className="break-all text-[11px] text-gray-500">
                        {fileName}
                      </span>

                      <input
                        id="img"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </div>

                    {imgPreview && (
                      <img
                        src={imgPreview}
                        alt="Preview"
                        className="mt-3 h-16 w-16 rounded-lg border object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Imagem do evento */}
                <div className="w-full lg:w-[460px]">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                    alt="Evento"
                    className="h-[210px] w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Botões */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  className="w-[140px] rounded-md bg-lime-500 px-6 py-2 text-[11px] font-extrabold text-white shadow-[0_10px_18px_rgba(34,197,94,0.28)] hover:bg-lime-600"
                >
                  APROVAR
                </button>

                <button
                  type="button"
                  className="w-[140px] rounded-md bg-red-600 px-6 py-2 text-[11px] font-extrabold text-white shadow-[0_10px_18px_rgba(220,38,38,0.22)] hover:bg-red-700"
                >
                  RECUSAR
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </HomeLayout>
  );
}
