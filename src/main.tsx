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
import ReqStudentsLogin from './modules/admin/pages/ReqStudentsLogin.tsx';
import ReqUniversitiesLogin from './modules/admin/pages/ReqUniversitiesLogin.tsx';

const rounter = createBrowserRouter([
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
    path: '/home/escola',
    element: <SchoolHome />
  },
  //-
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
  }
])
 
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={rounter}></RouterProvider>
  </StrictMode>,
)
