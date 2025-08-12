import ImgDigital360 from '../../../assets/digital360.webp'
import styles from './ServiceDetail.module.css'

import WhatsApp from '../../../assets/whatsapp.svg'
import Map_Icon from '../../../assets/map.svg'
import Email_Icon from '../../../assets/email.svg'
import Phone_Icon from '../../../assets/phone.svg'
import { HashLink as Link } from 'react-router-hash-link'
import { useDocumentTitle } from '../../../hooks/useDocumentTitle'

export function Digital360() {
  useDocumentTitle('Digital 360')

  return (
    <main id="services" className={styles.main}>
      <div className="container">
        <ul className={styles.pagePath}>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/servicos'}>Seriços</Link>
          </li>
          <li>
            <Link to={'/gravacao-digital-uv-360'}>Gravação Digital UV 360</Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.service__item} container`}>
        <img src={ImgDigital360} alt="Imagem laser" />

        <div id="digital360" className={styles.service__item__content}>
          <div className={styles.line}></div>
          <h1>Gravação Digital UV 360</h1>
          <h2 className={styles.h2paragraph}>
            A gravação digital UV 360 é uma evolução da impressão UV
            tradicional, focada na personalização completa de objetos
            cilíndricos ou curvos, como garrafas e canecas, em toda a sua
            circunferência. Ela utiliza a mesma tecnologia de cura por luz UV
            para garantir impressões duráveis, resistentes e com alta fidelidade
            de cores, mas se diferencia por sua capacidade de imprimir em 360
            graus, através da rotação controlada do objeto, permitindo detalhes
            finos e efeitos como relevo em superfícies curvas.
          </h2>

          <div className={styles.centerButton}>
            <Link className={styles.button} to="/servicos">
              Mais Serviços
            </Link>
          </div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className="divider-2"></div>

      {/* CONTACT */}

      <section id="contact">
        <div className={`${styles.container__contact} container`}>
          <div className={styles.contact__text}>
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <Link
              className={styles.button}
              to="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
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
      </section>
    </main>
  )
}
