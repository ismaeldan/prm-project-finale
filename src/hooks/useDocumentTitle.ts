import { useEffect } from 'react'

export function useDocumentTitle(
  title: string,
  defaultTitle: string = 'PRM Gravações'
) {
  useEffect(() => {
    // Salva o título anterior
    const previousTitle = document.title

    // Define o novo título
    document.title = title ? `${title} - ${defaultTitle}` : defaultTitle

    // Cleanup: restaura o título anterior quando o componente for desmontado
    return () => {
      document.title = previousTitle
    }
  }, [title, defaultTitle])
}
