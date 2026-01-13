import { 
  RiHomeLine, 
  RiCalendarEventLine, 
  RiFileListLine, 
  RiUserLine, 
  RiLogoutBoxLine 
} from "@remixicon/react";
import Logo from "../../../assets/logo.png"; 
import SidebarLink from "../../../layout/components/SidebarLink"; 

export default function StudentSidebar() {
  return (
    <aside className="w-72 bg-white h-screen flex flex-col border-r border-gray-200 shadow-xl fixed left-0 top-0 z-50 font-sans">
      
      <div className="p-8 flex justify-center mb-4">
        <img src={Logo} alt="PreCampus" className="w-32 h-auto" />
      </div>

      <nav className="flex-1 space-y-2 pr-4">
        
        <SidebarLink to="/aluno/home" icon={<RiHomeLine size={24} />}>
          Início
        </SidebarLink>

        <SidebarLink to="/aluno/meus-eventos" icon={<RiCalendarEventLine size={24} />}>
          Meus Eventos
        </SidebarLink>

        <SidebarLink to="/aluno/certificados" icon={<RiFileListLine size={24} />}>
          Certificados
        </SidebarLink>

        <SidebarLink to="/aluno/perfil" icon={<RiUserLine size={24} />}>
          Meu Perfil
        </SidebarLink>

      </nav>

      <div className="pb-8 pr-4">
        <SidebarLink to="/login" icon={<RiLogoutBoxLine size={24} />}>
          Sair
        </SidebarLink>
      </div>

    </aside>
  );
}