import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import StudentForm from './modules/student/StudentForm.tsx';
import SchoolForm from './modules/school/SchoolForm.tsx';
import UniversityForm from './modules/university/UniversityForm.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import StudentHome from "./modules/student/StudentHome";
import SchoolHome from './modules/school/SchoolHome.tsx';
import Events from './modules/student/pages/Events.tsx';
import StudentProfile from './modules/student/pages/StudentProfile.tsx';
import AdminHome from './modules/admin/AdminHome.tsx';
import AddNewEvent from './modules/school/pages/AddNewEvent.tsx';
import ReqStudentsLogin from './modules/admin/pages/ReqStudentsLogin.tsx';
import ReqUniversitiesLogin from './modules/admin/pages/ReqUniversitiesLogin.tsx';
import SchoolsAdmin from './modules/admin/pages/Schools.tsx';
import PerformanceEvents from './modules/university/pages/PerformanceEvents.tsx';
import EventDetails from './modules/student/pages/EventDetails.tsx';
import ProfileUniversity from './modules/university/pages/ProfileUniversity.tsx';
import SchoolEventDetails from './modules/school/pages/SchoolEventDetails.tsx';
import SchoolProfile from './modules/school/pages/SchoolProfile.tsx';
import EventParticipationUni from './modules/university/pages/EventParticipationUni.tsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/formulario/estudante',
    element: <StudentForm />
  },
  {
    path: '/formulario/escola',
    element: <SchoolForm />
  },
  {
    path: '/formulario/universidade',
    element: <UniversityForm />
  },
  {
    path: '/recuperar-senha',
    element: <ResetPassword/>
  },
  {
    path: '/estudante/home',
    element: <StudentHome />
  },
  {
    path: '/estudante/meus-eventos',
    element: <Events />
  },
  {
    path: '/estudante/perfil',
    element: <StudentProfile />
  },
  {
    path: '/escola/home',
    element: <SchoolHome />
  },
  {
    path: '/escola/criar-evento',
    element: <AddNewEvent />
  }, 
  {
    path: '/escola/detalhes',
    element: <SchoolEventDetails />
  },
  {
    path: '/escola/perfil',
    element: <SchoolProfile />
  },
  {
    path: '/precampus/home',
    element: <AdminHome />
  },
  {
    path: "/precampus/validar-cadastros" ,
    element: <ReqStudentsLogin />
  },
  {
    path: "/precampus/validar-universidades",
    element: <ReqUniversitiesLogin />
  },
  {
    path: "/precampus/escolas",
    element: <SchoolsAdmin />
  },
  {
    path: "/universidade/atuacao-eventos",
    element: <PerformanceEvents />
  },
  {
  path: "/universidade/atuacao-nos-eventos",
  element: <EventParticipationUni />
},

  {
    path: "/estudante/detalhe-dos-eventos",
    element: <EventDetails />
  },
  {
    path: "/universidade/perfil",
    element: <ProfileUniversity />
  }
])
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)