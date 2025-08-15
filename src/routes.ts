// src/routes.ts
import { RouteObject } from 'react-router-dom'
import { LayoutWithHeader } from './LayoutWithHeader'
import { Home } from './pages/Home/index'
import { About } from './pages/About/index'
import { Services } from './pages/Services/index'
import { BaixoRelevo } from './pages/Services/ServicesBaixoRelevo/index'
import { DTF } from './pages/Services/ServicesDTF/index'
import { Laser } from './pages/Services/ServicesLaser/index'
import { Transfer } from './pages/Services/ServicesTransfer/index'
import { Digital } from './pages/Services/ServicesDigital/index'
import { Digital360 } from './pages/Services/ServicesDigital360/index'
import { Silk } from './pages/Services/ServicesSilk/index'
import { Sublimacao } from './pages/Services/ServicesSublimacao/index'
import { Tampografia } from './pages/Services/ServicesTampografia/index'
import { PRW } from './pages/Prw/index'
import { Contato } from './pages/Contact/index'
import { NotFound } from './pages/NotFound/index'
import { ScrollToTop } from './components/ScrollToTop/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <LayoutWithHeader />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <About /> },
      { path: 'servicos', element: <Services /> },
      { path: 'gravacao-em-baixo-relevo', element: <BaixoRelevo /> },
      { path: 'dtf', element: <DTF /> },
      { path: 'gravacao-a-laser', element: <Laser /> },
      { path: 'transfer', element: <Transfer /> },
      { path: 'gravacao-digital-uv', element: <Digital /> },
      { path: 'gravacao-digital-uv-360', element: <Digital360 /> },
      { path: 'silk', element: <Silk /> },
      { path: 'sublimacao', element: <Sublimacao /> },
      { path: 'tampografia', element: <Tampografia /> },
      { path: 'prw', element: <PRW /> },
      { path: 'fale-conosco', element: <Contato /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]

export default routes
