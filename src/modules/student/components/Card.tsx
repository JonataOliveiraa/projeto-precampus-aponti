interface CardProps {
  titulo: string;
  data?: string;
  status?: "inscrever" | "inscrito" | "saibaMais";
  imagem?: string;
}

const Card = ({
  titulo,
  data = "00/00/0000",
  status = "inscrever",
  imagem = "/img/evento.jpg",
}: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col">
      
      <img
        src={imagem}
        alt={titulo}
        className="rounded-lg h-40 object-cover mb-4"
      />

      <h3 className="text-lg font-semibold text-secondary mb-1">
        {titulo}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {data}
      </p>

      {/* Botão */}
      {status === "inscrever" && (
        <button className="mt-auto bg-green-500 text-white py-2 rounded-lg hover:opacity-90">
          Inscreva-se
        </button>
      )}

      {status === "inscrito" && (
        <button className="mt-auto border border-secondary text-secondary py-2 rounded-lg cursor-default">
          Inscrito
        </button>
      )}

      {status === "saibaMais" && (
        <button className="mt-auto border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition">
          Saiba mais
        </button>
      )}
    </div>
  );
};

export default Card;

