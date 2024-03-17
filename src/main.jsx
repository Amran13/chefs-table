import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Recipe from './components/Recipe.jsx'
import About from './components/About.jsx'
import AuthProver from './components/AuthProver.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/recipe',
        element: <Recipe></Recipe>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProver>
      <RouterProvider router={router}></RouterProvider>
    </AuthProver>
  </React.StrictMode>,
)
