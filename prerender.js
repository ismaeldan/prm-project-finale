// prerender.js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = p => path.resolve(__dirname, p)

try {
  const manifest = JSON.parse(
    fs.readFileSync(toAbsolute('dist/client/.vite/ssr-manifest.json'), 'utf-8')
  )

  const template = fs.readFileSync(
    toAbsolute('dist/client/index.html'),
    'utf-8'
  )
  const { render } = await import('./dist/server/entry-server.js')

  const routesToPrerender = [
    '/',
    '/sobre',
    '/servicos',
    '/gravacao-em-baixo-relevo',
    '/dtf',
    '/gravacao-a-laser',
    '/transfer',
    '/gravacao-digital-uv',
    '/gravacao-digital-uv-360',
    '/silk',
    '/sublimacao',
    '/tampografia',
    '/prw',
    '/fale-conosco'
  ]

  console.log('Starting pre-rendering...')

  for (const url of routesToPrerender) {
    try {
      const appHtml = await render(url, manifest)
      const html = template.replace(``, appHtml)

      let filePath
      if (url === '/') {
        filePath = `dist/client/index.html`
      } else {
        // Cria arquivos como /sobre.html, /servicos.html, etc.
        filePath = `dist/client${url.replace(/\/$/, '')}.html`
      }

      const dir = path.dirname(toAbsolute(filePath))
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      fs.writeFileSync(toAbsolute(filePath), html)
      console.log(`✅ Pre-rendered: ${filePath}`)
    } catch (error) {
      // Se uma rota específica falhar, mostrará o erro e continuará com as outras
      console.error(`❌ Failed to pre-render ${url}:`, error)
    }
  }

  console.log('Pre-rendering finished.')
} catch (error) {
  console.error(
    '🚨 A critical error occurred during the pre-render setup:',
    error
  )
}
