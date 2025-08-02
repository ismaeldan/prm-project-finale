import styles from './footer.module.css'
import logoPB from '../../assets/LOGOS PRM PB.png'
import insta from '../../assets/instagram.svg'
import whats from '../../assets/whatsapp.svg'

export function Footer() {
  console.log('Renderizando Footer...')
  return (
    <footer id="footer">
      <div className={`${styles.footer} container`}>
        <a href="/">
          <img className={styles.logo} src={logoPB} alt="PRM TECPRINT" />
        </a>

        <div className={styles.social}>
          <a
            className={styles.insta}
            href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
            target="_blank"
          >
            <img src={insta} alt="Logo Instagram" />
          </a>
          <a
            href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
            target="_blank"
          >
            <img src={whats} alt="Logo WhatsApp" />
          </a>
        </div>

        <div className={styles.text}>
          <p>© 2025</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
