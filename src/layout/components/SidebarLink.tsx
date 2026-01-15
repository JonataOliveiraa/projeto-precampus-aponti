import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
  textColor?: string;
  activeBg?: string;
}

export default function SidebarLink({ 
  to, 
  icon, 
  children, 
  textColor = "text-blue-900", 
  activeBg = "bg-green-500" 
}: SidebarLinkProps) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center gap-3 px-6 py-4 font-bold uppercase text-sm transition-all duration-200 ${
          isActive 
            ? `${activeBg} text-white rounded-r-full shadow-md` 
            : `${textColor} hover:bg-gray-50 hover:opacity-80`
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}