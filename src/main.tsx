// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
// import Login from './pages/Login.tsx';
// import Home from './pages/Home.tsx';

// const rounter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: '/home',
//     element: <Home/>
//   },
//   {
//     path: '/login',
//     element: <Login/>
//   },
// ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App></App>
   {/* <RouterProvider router={rounter}></RouterProvider> */}
  </StrictMode>,
)
