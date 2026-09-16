import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function localApiPlugin() {
  const apiHandlers = {
    '/api/getMarketData': {
      modulePath: './api/getMarketData.js',
      fallbackError: 'Error obteniendo datos de mercado'
    },
    '/api/analyze-invoice': {
      modulePath: './api/analyze-invoice.js',
      fallbackError: 'Error analizando factura'
    }
  }

  return {
    name: 'local-api-plugin',
    configureServer(server) {
      Object.entries(apiHandlers).forEach(([path, api]) => {
        server.middlewares.use(
          path,
          async (req, res) => {
          try {
            const {
              default: handler
            } = await import(api.modulePath)

            const response = {
              status(code) {
                res.statusCode = code
                return this
              },
              json(payload) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(payload))
              }
            }

            await handler(req, response)
          }
          catch (error) {
            server.config.logger.error(error)
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
              error: api.fallbackError
            }))
          }
          }
        )
      })
    }
  }
}

export default defineConfig({

  resolve: {
    dedupe: [
      'react',
      'react-dom'
    ]
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom'
    ]
  },

  plugins: [
    react(),
    localApiPlugin()
  ],

  server: {

    proxy: {

      '/api': {

        target: 'http://localhost:3000',

        changeOrigin: true

      }

    }

  }

})
