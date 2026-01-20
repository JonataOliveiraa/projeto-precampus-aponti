import HomeLayout from "../../../layout/HomeLayout";
import StudentSidebar from "../components/StudentSidebar";

export default function EventDetails() {
  return (
    <HomeLayout sidebar={<StudentSidebar />}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-orange-500">
          Detalhes e eventos
        </h2>
      </div>

      <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-6">
        <h1 className="text-blue-600"> NOME DO EVENTO </h1>
        <p> <span className="text-blue-600">Data:</span> 00/00/0000</p>
        <p><span className="text-blue-600">Horário:</span> 00:00</p>
        <p> <span className="text-blue-600">Descrição:</span> 
            <textarea
                rows={3}
                onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${target.scrollHeight}px`;
                }}
                className="w-full px-4 py-2 rounded-xl border border-blue-600 bg-white outline-none focus:border-blue-600 focus:ring-0 transition resize-none overflow-hidden"
            />

        <p className="text-blue-600"> Universidades participantes </p>
        <p> - Universidade 1</p>
        <p>  - Universidade 2</p>
        <p>  - Universidade 3</p>
        <p>  - Universidade 4</p>
        </p>
      </div>
    </HomeLayout>
  );
}
