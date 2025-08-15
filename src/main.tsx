// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.js'

const router = createBrowserRouter(routes)

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
