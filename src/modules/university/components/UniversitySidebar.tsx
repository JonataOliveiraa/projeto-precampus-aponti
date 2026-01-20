import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiFileList3Line, 
  RiLogoutBoxLine, 
  RiUserLine
} from "@remixicon/react";
import SidebarLink from "../../../layout/components/SidebarLink"; 
import Logo from "../../../assets/logo.png"; 

export default function UniversitySidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-xl fixed left-0 top-0 z-50 font-sans select-none">
      
      <div className="p-8 flex justify-center mb-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img 
          src={Logo} 
          alt="universidade Admin" 
          className="w-32 h-auto object-contain" 
        />
      </div>

      <nav className="flex-1 space-y-2 pr-4 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/universidade/home" 
          icon={<RiHomeLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-purple-500"
        >
          Página Inicial
        </SidebarLink>

        <SidebarLink 
          to="/universidade/atuacao-eventos" 
          icon={<RiCalendarEventLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-purple-500"
        >
          Atuação nos eventos
        </SidebarLink>

        <SidebarLink 
          to="/universidade/detalhes" 
          icon={<RiFileList3Line size={24} />}
          textColor="text-blue-900"
          activeBg="bg-purple-500"
        >
          Detalhes dos Eventos
        </SidebarLink>

      </nav>

      <div className="pb-8 pr-4">
        <SidebarLink 
          to="/universidade/perfil" 
          icon={<RiUserLine size={24} />}
          activeBg="bg-purple-500"
          textColor="text-purple-500"
        >
          Meu Perfil
        </SidebarLink>
        <SidebarLink 
          to="/login" 
          icon={<RiLogoutBoxLine size={24} />}
          textColor="text-red-500"
          activeBg="bg-red-500"
        >
          Sair
        </SidebarLink>
      </div>

    </aside>
  );
}