import React from 'react'
import ReactDOM from 'react-dom/client'
import CommercialEmail from './pages/CommercialEmail'
import Mercado from './pages/Mercado'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css'

import App from './App'

import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'

import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/commercial-email"
          element={<CommercialEmail />}
        />

        <Route
          path="/mercado"
          element={<Mercado />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogPost />}
        />

        <Route
          path="/aviso-legal"
          element={<AvisoLegal />}
        />

        <Route
          path="/politica-privacidad"
          element={<PoliticaPrivacidad />}
        />

        <Route
          path="/politica-cookies"
          element={<PoliticaCookies />}
        />

      </Routes>

    </BrowserRouter>

    </HelmetProvider>

  </React.StrictMode>

)