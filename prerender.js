// prerender.js
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = p => path.resolve(__dirname, p)

// Importa o manifest gerado pelo Vite
const manifest = JSON.parse(
  fs.readFileSync(toAbsolute('dist/client/.vite/ssr-manifest.json'), 'utf-8')
)

// Importa o template HTML principal
const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')

// Importa a função de renderização do build do servidor
const { render } = await import('./dist/server/entry-server.js')

// Rotas que você quer pré-renderizar
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

// Executa a pré-renderização
;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url, manifest)

    const html = template.replace(``, appHtml)

    const filePath = `dist/client${url === '/' ? '/index' : url}.html`
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
