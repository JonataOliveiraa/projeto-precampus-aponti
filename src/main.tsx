import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import StudentForm from './modules/student/StudentForm.tsx';
import SchoolForm from './modules/school/SchoolForm.tsx';

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
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={rounter}></RouterProvider>
  </StrictMode>,
)
