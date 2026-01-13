import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

interface SidebarLinkProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function SidebarLink({ to, icon, children }: SidebarLinkProps) {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex items-center gap-3 px-6 py-4 transition-all duration-200 font-bold uppercase text-sm
        ${isActive 
          ? "bg-admin-primary text-white rounded-r-full shadow-md translate-x-[-10px] w-[calc(100%+10px)]" 
          : "text-admin-primary hover:bg-red-50"
        }
      `}
    >
      {icon}
      {children}
    </NavLink>
  );
}