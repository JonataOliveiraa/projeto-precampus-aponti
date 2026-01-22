import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiFileList3Line, 
  RiLogoutBoxLine 
} from "@remixicon/react";
import SidebarLink from "../../../layout/components/SidebarLink"; 
import Logo from "../../../assets/logo.png"; 

export default function SchoolSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-xl fixed left-0 top-0 z-50 font-sans select-none">
      
      <div className="p-8 flex justify-center mb-4 cursor-pointer hover:scale-105 transition-transform duration-300">
        <img 
          src={Logo} 
          alt="Escola Admin" 
          className="w-32 h-auto object-contain" 
        />
      </div>

      <nav className="flex-1 space-y-2 pr-4 overflow-y-auto custom-scrollbar">
        
        <SidebarLink 
          to="/escola/home" 
          icon={<RiHomeLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Página Inicial
        </SidebarLink>

        <SidebarLink 
          to="/escola/criar-evento" 
          icon={<RiCalendarEventLine size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Criar Eventos
        </SidebarLink>

        <SidebarLink 
          to="/escola/eventos-detalhes" 
          icon={<RiFileList3Line size={24} />}
          textColor="text-blue-900"
          activeBg="bg-green-500"
        >
          Detalhes dos Eventos
        </SidebarLink>

      </nav>

      <div className="pb-8 pr-4">
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