import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import CommercialEmail from './pages/CommercialEmail'
import Mercado from './pages/MercadoMarket'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import './index.css'

import App from './App'

import AvisoLegal from './pages/AvisoLegal'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'

import { HelmetProvider } from 'react-helmet-async'
import AnalysisPage from './pages/AnalysisPage'
import PowerOptimizationPage from './pages/PowerOptimizationPage'

function ScrollToTop() {
  const {
    pathname,
    hash
  } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))

      requestAnimationFrame(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ block: 'start' })
      })

      return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  }, [pathname, hash])

  return null
}


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <HelmetProvider>

    <BrowserRouter>

      <ScrollToTop />

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

        <Route
          path="/analisis-factura-electrica"
          element={<AnalysisPage />}
        />

        <Route
          path="/soluciones/optimizacion-potencia-contratada"
          element={<PowerOptimizationPage />}
        />

      </Routes>

    </BrowserRouter>

    </HelmetProvider>

  </React.StrictMode>

)
