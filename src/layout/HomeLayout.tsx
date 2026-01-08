import Background from "../components/Background";


function HomeLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Background decorativo */}
      <Background />

      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2">
            <nav className="bg-white rounded-xl p-4 shadow-sm space-y-4">
              <h2 className="font-bold text-blue-600 text-lg">
                Projeto Precampus
              </h2>

              <ul className="space-y-2 text-slate-700">
                <li>
                  <Link className="hover:text-blue-600" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-600" to="/universidades">
                    Universidades
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-600" to="/eventos">
                    Eventos
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Conteúdo */}
          <main className="col-span-12 md:col-span-9 lg:col-span-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
