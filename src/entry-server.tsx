import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { MainRoutes } from './routes'

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <MainRoutes />
    </StaticRouter>
  )
}
