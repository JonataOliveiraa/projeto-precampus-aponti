import type React from "react";

function ResetPasswordMessage({ Close }: { Close: (e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => void }) {

  return (
    <div className="fixed min-h-screen min-w-screen bg-white/50 z-20 flex items-center justify-center">
      <div className="relative bg-white p-2 border border-red-500 py-20 rounded-2xl w-95">
        <div
          className="fixed   top-90 right-197 cursor-pointer"
          onClick={Close}
        >
          <span className="text-orange-700 text-3xl font-bold">X </span>
        </div>
        <h1 className="text-xl text-justify font-semibold">
          Para redefinir sua senha, clique no link que foi enviado para seu
          email cadastrado!
        </h1>
      </div>
    </div>
  );
}

export default ResetPasswordMessage;