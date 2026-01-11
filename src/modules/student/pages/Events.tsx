import Card from "../components/Card";
import SiderBar from "../components/SiderBar";


const Eventos = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <SiderBar />

      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-primary mb-8">
          Eventos:
        </h2>

        <div className="bg-white rounded-xl shadow p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card titulo="Palestra 1" status="inscrever" />
            <Card titulo="Palestra 2" status="inscrito" />
            <Card titulo="Palestra 3" status="inscrito" />
            <Card titulo="Palestra 4" status="saibaMais" />
            <Card titulo="Palestra 5" status="saibaMais" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Eventos;
