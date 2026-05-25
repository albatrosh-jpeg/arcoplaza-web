import React from 'react'
import ReactDOM from 'react-dom/client'
import CommercialEmail from './pages/CommercialEmail'

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

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

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

  </React.StrictMode>

)