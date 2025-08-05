import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export function TrailingSlashRedirect() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const { pathname, search, hash } = location

    if (pathname.endsWith('/') && pathname !== '/') {
      const newPath = pathname.slice(0, -1)

      navigate(newPath + search + hash, { replace: true })
    }
  }, [location, navigate])

  return null
}
