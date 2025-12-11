import Background from "../components/Background";
import Logo from "../assets/logo.png";
import { RiUserLine, RiLockLine } from "@remixicon/react"

function Login() {
  return (
    <div className="min-h-screen bg-[#1E90FF] relative overflow-hidden">
      <Background />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <div className="bg-white/50 py-3 px-20 flex flex-col justify-center items-center gap-2 rounded-2xl">
            <img src={Logo} alt="precampus-logo" className="w-35 h-35"/>

            <div className="bg-white rounded-full  flex flex-row items-center overflow-hidden">
              {
                ['Estudante', 'Escola', 'Universidade', 'PreCampus'].map((value, index) => (
                  <label className="cursor-pointer">
                    <input type="radio" name="user-type" value={index} className="hidden peer" defaultChecked={value === "Student"}></input>
                    <span className="inline-block p-2 text-zinc-500 peer-checked:bg-blue-700 peer-checked:text-white">{value}</span>
                  </label>
                ))
              }
            </div>

            <div className="w-fit flex flex-col justify-center items-center gap-1">
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiUserLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiUserLine>
                <input type="text" placeholder="Username" className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <div className="flex flex-row gap-2 items-center bg-white px-1.5 rounded-full">
                <RiLockLine size={30} className="text-zinc-500 border rounded-full p-0.5"></RiLockLine>
                <input type="text" placeholder="Password" className="bg-white p-2 rounded-full outline-0"/>
              </div>
              <button className="bg-blue-600 cursor-pointer p-2 w-full text-white rounded-full">Login</button>
            </div>
            <div className="flex flex-row w-full justify-between p-2 overflow-hidden">
              <span className="text-blue-600 border-b border-transparent cursor-pointer hover:border-blue-600">Create account</span>
              <span className="text-blue-600 border-b border-transparent cursor-pointer hover:border-blue-600">I forgot my password</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Login;
