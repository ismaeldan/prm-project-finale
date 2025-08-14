import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'

export function NotFound() {
  useDocumentTitle('Página não encontrada')

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <Link to="/" className={styles.button}>
        Voltar para a Home
      </Link>
    </div>
  )
}
