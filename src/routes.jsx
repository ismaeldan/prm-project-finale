// src/routes.tsx
import { LayoutWithHeader } from './LayoutWithHeader.jsx'
import { Home } from './pages/Home/index.jsx'
import { About } from './pages/About/index.jsx'
import { Services } from './pages/Services/index.jsx'
import { BaixoRelevo } from './pages/Services/ServicesBaixoRelevo/index.jsx'
import { DTF } from './pages/Services/ServicesDTF/index.jsx'
import { Laser } from './pages/Services/ServicesLaser/index.jsx'
import { Transfer } from './pages/Services/ServicesTransfer/index.jsx'
import { Digital } from './pages/Services/ServicesDigital/index.jsx'
import { Digital360 } from './pages/Services/ServicesDigital360/index.jsx'
import { Silk } from './pages/Services/ServicesSilk/index.jsx'
import { Sublimacao } from './pages/Services/ServicesSublimacao/index.jsx'
import { Tampografia } from './pages/Services/ServicesTampografia/index.jsx'
import { PRW } from './pages/Prw/index.jsx'
import { Contato } from './pages/Contact/index.jsx'
import { NotFound } from './pages/NotFound/index.jsx'
import { ScrollToTop } from './components/ScrollToTop/index.jsx'

const routes = [
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
