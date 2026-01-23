import { useNavigate } from "react-router-dom";
import { RiMailSendLine } from "@remixicon/react";

export default function ResetPasswordMessage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-xs">
      <div className="bg-white border border-blue-100 rounded-2xl w-full max-w-sm p-6 shadow-xl flex flex-col items-center text-center animate-fade-in-down">
        
        <div className="mb-4 text-blue-600 bg-blue-50 p-4 rounded-full">
          <RiMailSendLine size={40} />
        </div>

        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Email enviado
        </h1>
        
        <p className="text-gray-500 mb-8 text-sm leading-relaxed px-4">
          O email de recuperação foi enviado com sucesso. Verifique sua caixa de entrada.
        </p>

        <button 
          onClick={() => navigate("/login")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-blue-200 shadow-md"
        >
          Ok
        </button>
      </div>
    </div>
  );
}