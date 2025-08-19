// prerender.js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = p => path.resolve(__dirname, p)

const requiredFiles = [
  'dist/client/.vite/ssr-manifest.json',
  'dist/client/index.html',
  'dist/server/entry-server.js'
]

console.log('Verificando arquivos necessários...')
for (const file of requiredFiles) {
  const filePath = toAbsolute(file)
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Arquivo não encontrado: ${file}`)
    console.error(
      'Execute primeiro: npm run build:client && npm run build:server'
    )
    process.exit(1)
  }
  console.log(`✅ ${file}`)
}

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
        filePath = `dist/client${url.replace(/\/$/, '')}.html`
      }

      const dir = path.dirname(toAbsolute(filePath))
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      fs.writeFileSync(toAbsolute(filePath), html, 'utf-8')
      console.log(`✅ Pre-rendered: ${filePath}`)
    } catch (error) {
      console.error(`❌ Failed to pre-render ${url}:`, error)
    }
  }

  console.log('Pre-rendering finished.')

  console.log('Cleaning up dist folder for deployment...')

  const clientDir = toAbsolute('dist/client')
  const serverDir = toAbsolute('dist/server')

  // Move todos os arquivos e pastas de dist/client para a raiz de dist
  const clientFiles = fs.readdirSync(clientDir)
  for (const file of clientFiles) {
    fs.renameSync(
      path.join(clientDir, file),
      path.join(toAbsolute('dist'), file)
    )
  }

  // --- CORREÇÃO AQUI ---
  // Usa um método mais robusto para apagar as pastas e seu conteúdo
  fs.rmSync(clientDir, { recursive: true, force: true })
  fs.rmSync(serverDir, { recursive: true, force: true })

  console.log('✅ Cleanup complete. Ready for deployment!')
} catch (error) {
  // Adicionado um log mais detalhado para o erro de limpeza
  console.error(
    '🚨 A critical error occurred during the pre-render or cleanup setup:',
    error
  )
}
