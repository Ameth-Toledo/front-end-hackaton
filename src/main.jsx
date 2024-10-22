import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Pages/Login/Login.jsx'
import Register from './components/Pages/Register/Register.jsx'
import NotFound from './components/Pages/NotFound/NotFound.jsx'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
