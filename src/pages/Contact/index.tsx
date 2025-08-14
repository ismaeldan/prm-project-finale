import styles from './contact.module.css'
import WhatsApp from '../../assets/whatsapp.svg'
import Map_Icon from '../../assets/map.svg'
import Email_Icon from '../../assets/email.svg'
import Phone_Icon from '../../assets/phone.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'

export function Contato() {
  useDocumentTitle('Contato')

  return (
    <main>
      <section id="contact" className="container">
        <div className={`${styles.container__contact} container`}>
          <div className={styles.contact__text}>
            <h1>Entre em Contato</h1>
            <h2 className={styles.h2paragraph}>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </h2>
            <Link
              className={styles.button}
              to="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos"
              target="_blank"
            >
              <img src={WhatsApp} alt="WhatsApp Icon" /> Entrar em contato
            </Link>
          </div>

          <div className={styles.contact__links}>
            <ul className={styles.contact__list}>
              <li>
                <a href="tel:11939006543">
                  <img src={Phone_Icon} alt="Phone Icon" />
                  11 93900-6543
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <img src={Map_Icon} alt="Map Icon" />
                  R. Barra Funda, 659 - Barra Funda São Paulo - SP
                </a>
              </li>
              <li>
                <a href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&body=Olá, gostaria de fazer um orçamento com vocês!!!">
                  <img src={Email_Icon} alt="Email Icon" />
                  comercial@prmgravacoes.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.094680767231!2d-46.657064899999995!3d-23.529096799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce58119718273d%3A0x72d14ba0c5e049b0!2sR.%20Barra%20Funda%2C%20659%20-%20Barra%20Funda%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001152-000!5e0!3m2!1spt-BR!2sbr!4v1753730648903!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  )
}
