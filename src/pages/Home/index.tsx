import styles from './home.module.css'
import Laser from '../../assets/laserIcon.webp'
import Transfer from '../../assets/transfericon.webp'
import SilkScreen from '../../assets/silkicon.webp'
import WhatsApp from '../../assets/whatsapp.svg'
import Map_Icon from '../../assets/map.svg'
import Email_Icon from '../../assets/email.svg'
import Phone_Icon from '../../assets/phone.svg'
import { HashLink as Link } from 'react-router-hash-link'
import ImgPresentation from '../../assets/APRESENTACAO.webp'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

export function Home() {
  useDocumentTitle('Home')

  return (
    <main>
      {/* HOME */}
      <section id="home">
        <div className={`${styles.container__home} container`}>
          <div className={styles.text__home}>
            <h1>Gravações Personalizadas com Excelência.</h1>
            <p>
              Transformamos sua marca em presença: gravações com precisão,
              estilo e qualidade.
            </p>
            <a className={styles.button} href="/servicos">
              Conheça nossos serviços
            </a>
          </div>
          <div className={styles.image__home}>
            <img src={ImgPresentation} alt="Imagem de apresentação" />
          </div>
        </div>
      </section>

      <div className="divider-2"></div>

      {/* SERVICES */}
      <section id="services">
        <div className={`${styles.container__services} container`}>
          <div className={styles.services__title}>
            <Link to="/servicos">
              <h2>Serviços</h2>
            </Link>
            <p>
              Nosso compromisso vai além da impressão. Desde o primeiro contato
              até a entrega final, priorizamos a sua experiência, oferecendo
              qualidade impecável, agilidade e, acima de tudo, a tranquilidade
              de saber que seu material está em boas mãos.
            </p>
          </div>

          <div className={styles.services__cards}>
            <Link className={styles.service__card} to="/servicos">
              <img
                src={SilkScreen}
                alt="Icon-SilkScreen"
                className={styles.silk}
              />
              <h3>Silk Screen</h3>
              <p>
                Neste processo, a tinta é pressionada através de uma tela
                esticada sobre o objeto, criando um design durável e de alta
                qualidade.
              </p>
            </Link>

            <Link className={styles.service__card} to="/servicos">
              <img src={Transfer} alt="Icon-Transfer" />
              <h3>Transfer</h3>
              <p>
                O design é impresso em papel especial e transferido para o
                brinde por calor e pressão, garantindo alta qualidade e
                durabilidade.
              </p>
            </Link>

            <Link className={styles.service__card} to="/servicos">
              <img src={Laser} alt="Icon-Laser" />
              <h3>Laser</h3>
              <p>
                A gravação a laser utiliza um feixe de alta precisão para
                vaporizar ou queimar a superfície de materiais, criando marcas
                permanentes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider-1"></div>

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
