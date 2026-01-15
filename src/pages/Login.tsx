import Background from "../components/Background";
import Logo from "../assets/logo.png";
import { RiUserLine, RiLockLine } from "@remixicon/react"
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [placeholder, setPlaceholder] = useState("Email")
  const [userType, setUserType] = useState("estudante");

  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="bg-white/50 py-3 px-20 flex flex-col justify-center items-center gap-3 rounded-2xl">
            <img src={Logo} alt="precampus-logo" className="w-35 h-29"/>

            <div className="bg-white rounded-full  flex flex-row items-center overflow-hidden">
              {
                ['Estudante', 'Escola', 'Universidade', 'PreCampus'].map((value, index) => (
                  <label className="cursor-pointer">
                    <input type="radio" name="user-type" value={index} className="hidden peer" defaultChecked={value === "Estudante"} onChange={() => {
                      setUserType(value);
                      
                      if (value === "Estudante") {
                        setPlaceholder("Email");
                      } else {
                        setPlaceholder("CNPJ");
                      }
                    }}></input>
                    <span className={`font-heading inline-block py-2 px-5 text-zinc-500 peer-checked:bg-blue-700 peer-checked:text-white ${["Estudante","Escola", "Universidade"].includes(value) ? "border-r" : ""}`}>{value}</span>
                  </label>
                ))
              }
            </div>
            <div className="w-fit flex flex-col justify-center items-center gap-3">
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiUserLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiUserLine>
                <input type="text" placeholder={placeholder} className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiLockLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiLockLine>
                <input type="text" placeholder="Senha" className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <Link to={`/${userType.toLowerCase()}/home`} className="w-full">
                <Button text="Entrar"></Button>
              </Link>
            </div>
            <div className="flex flex-row w-full justify-between p-2 overflow-hidden">
              <Link to={`/formulario/${userType.toLowerCase()}`} className="text-blue-600 border-b border-transparent cursor-pointer hover:border-blue-600">Criar conta</Link>
              <Link to={`/recuperar-senha`} className="text-blue-600 border-b border-transparent cursor-pointer hover:border-blue-600">Esqueci a senha</Link>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
