// src/entry-server.tsx
import ReactDOMServer from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider
} from 'react-router-dom/server' // <--- A CORREÇÃO CRÍTICA ESTÁ AQUI
import routes from './routes.jsx'

export async function render(requestUrl: string) {
  const handler = createStaticHandler(routes)

  // É necessário criar um objeto Request real para a nova API
  const fetchRequest = new Request(`http://localhost${requestUrl}`)

  const context = await handler.query(fetchRequest)

  if (context instanceof Response) {
    throw context
  }

  const router = createStaticRouter(handler.dataRoutes, context)

  return ReactDOMServer.renderToString(
    <StaticRouterProvider router={router} context={context} />
  )
}
