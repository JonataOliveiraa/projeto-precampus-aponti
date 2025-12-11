import Background from "../components/Background";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div >

          <img src={Logo} alt="precampus-logo" className="w-90 h-75"/>

          {/* Botão para voltar ao login */}
          <Link to={"/login"}>
            <button 
                className="bg-blue-600 text-white px-6 py-2 rounded-full mt-14 hover:bg-blue-700 w-full cursor-pointer"
            >
                Entrar
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Home;