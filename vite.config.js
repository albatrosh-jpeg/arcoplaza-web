import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function localApiPlugin() {
  return {
    name: 'local-api-plugin',
    configureServer(server) {
      server.middlewares.use(
        '/api/getMarketData',
        async (req, res) => {
          try {
            const {
              default: handler
            } = await import('./api/getMarketData.js')

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
              error: 'Error obteniendo datos de mercado'
            }))
          }
        }
      )
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
