// src/entry-server.tsx
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'

export async function render(requestUrl: string) {
  // Criar router em memória para SSR
  const router = createMemoryRouter(routes, {
    initialEntries: [requestUrl],
    initialIndex: 0
  })

  return ReactDOMServer.renderToString(<RouterProvider router={router} />)
}
