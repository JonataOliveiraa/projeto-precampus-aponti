import Card from "../../../components/Card";
import HomeLayout from "../../../layout/HomeLayout";
import SchoolSidebar from "../components/SchoolSidebar";


type EventStatus = "normal" | "analysis" | "expired";

interface SchoolEvent {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  status: EventStatus;
  canEdit?: boolean;
}

const mockEvents: SchoolEvent[] = [
  {
    id: 1,
    title: "Palestra 1",
    date: "00/00/0000",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    status: "normal",
    canEdit: true,
  },
  {
    id: 2,
    title: "Palestra 2",
    date: "00/00/0000",
    imageUrl:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    status: "normal",
    canEdit: true,
  },
  {
    id: 3,
    title: "Palestra 3",
    date: "00/00/0000",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    status: "analysis",
    canEdit: true,
  },
  {
    id: 4,
    title: "Palestra 1",
    date: "00/00/0000",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    status: "normal",
    canEdit: true,
  },
  {
    id: 5,
    title: "Palestra 2",
    date: "00/00/2025",
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    status: "expired",
    canEdit: false,
  },
  {
    id: 6,
    title: "Palestra 3",
    date: "00/00/0000",
    imageUrl:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    status: "normal",
    canEdit: true,
  },
];

function EventCard({ item }: { item: SchoolEvent }) {
  const isAnalysis = item.status === "analysis";
  const isExpired = item.status === "expired";

  const cardBase =
    "rounded-[22px] border p-4 sm:p-5 transition-shadow";

  const cardStyle = isAnalysis
    ? "border-lime-400 bg-yellow-200 shadow-[0_12px_24px_rgba(0,0,0,0.10)]"
    : isExpired
    ? "border-lime-400 bg-slate-200 shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
    : "border-lime-400 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.12)]";

  return (
    <Card className={`${cardBase} ${cardStyle}`}>
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[20px] font-medium text-blue-700 leading-none">
            {item.title}
          </div>
          <div className="mt-1 text-[14px] text-gray-500">{item.date}</div>
        </div>

        <div className="text-right">
          {item.canEdit && (
            <button
              type="button"
              className="text-[14px] font-extrabold uppercase italic text-gray-900 hover:opacity-80"
            >
              Editar
            </button>
          )}

          {isAnalysis && (
            <div className="mt-1 text-[12px] font-extrabold uppercase text-red-600">
              Em análise
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="mt-4 overflow-hidden rounded-[18px] bg-white">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-[140px] w-full object-cover"
        />
      </div>

      {/* Footer button */}
      <div className="mt-4 flex justify-center">
        {isExpired ? (
          <button
            type="button"
            className="w-[150px] rounded-full border border-blue-600 bg-white px-4 py-2 text-[12px] font-extrabold uppercase text-gray-900"
          >
            Expirado
          </button>
        ) : (
          <button
            type="button"
            className="w-[160px] rounded-full border border-blue-600 bg-white px-4 py-2 text-[12px] font-semibold text-gray-900 hover:bg-blue-50"
          >
            Lista de inscritos
          </button>
        )}
      </div>
    </Card>
  );
}

export default function HomeEscola() {
  return (
    <HomeLayout sidebar={<SchoolSidebar />}>
      <div className="min-h-screen bg-white px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto w-full max-w-[1250px]">
          <h1 className="mb-6 text-[26px] font-extrabold text-lime-600">
            Bem-vindo, Escola!
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockEvents.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
