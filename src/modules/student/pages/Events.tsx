import Card from "../components/Card";
import SiderBar from "../components/SideBarStudent";

const Eventos = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <div className="bg-white">
        <SiderBar />
      </div>

      <main className="flex-1 p-6">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">
          Eventos:
        </h2>

        <div className="bg-white rounded-2xl border-2 border-orange-500 shadow-md p-4">
          
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

            <div className="border-2 border-orange-500 rounded-2xl shadow-sm overflow-hidden">
              <Card titulo="Palestra 4" status="saibaMais" />
            </div>

            <div className="border-2 border-orange-500 rounded-2xl shadow-sm overflow-hidden">
              <Card titulo="Palestra 5" status="saibaMais" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Eventos;