import type { ReactNode } from "react";
import Logo from "../assets/logo.png";
import { RiHome2Line } from "@remixicon/react";

interface sidebarOptions {
    optionDisplay: string,
    reactNode: ReactNode
}

function HomeLayout({ children, color, sidebarOptions }: { children?: React.ReactNode, color: string, sidebarOptions: sidebarOptions[]}) {
  return (
    <div className="min-h-screen bg-zinc-100 relative overflow-hidden flex">
      <div className="flex-1 z-10 grid grid-cols-[280px_1fr]">
        <aside className={`bg-white shadow-2xl flex flex-col items-center border-r rounded-r-3xl`}
        style={{ borderColor: `#${color}`}}
        >   
            <div>
                <img src={Logo} alt="logo" className="w-[200px] "/>
                <div className="flex justify-around text-white p-3 rounded-l-full self-end"
                style={{ backgroundColor: `#${color}`}}
                >
                    <RiHome2Line />
                <p>PÁGINA INICIAL</p>
                </div>
            </div>
        </aside>
        <main className="p-2">
            { children }
        </main>
      </div>
    </div>
  );
}

export default HomeLayout;