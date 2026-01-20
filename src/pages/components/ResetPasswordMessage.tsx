import type React from "react";
import { RiCloseCircleLine, RiCloseFill } from "@remixicon/react";
function ResetPasswordMessage({ Close }: { Close: (e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => void }) {

  return (
    <div className="fixed min-h-screen min-w-screen bg-white/50 z-20 flex items-center justify-center">
      <div className="relative bg-white border border-blue-500 rounded-2xl w-95 overflow-hidden">
        <div className="flex justify-end"> 
          <span className="px-2 py-1">
            <RiCloseCircleLine className="text-blue-900"/>
          </span>
        </div>
        <div className="px-5 pb-4">
          <h1 className="text-xl font-bold mb-7"> Email enviado</h1>
          <div className="ml-2 bg-blue-100 p-2 rounded-md">
            <p> O email foi enviado com sucesso.    </p>
            <p>  Verifique sua caixa de entrada.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordMessage;