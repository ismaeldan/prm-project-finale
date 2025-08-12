import styles from './services.module.css'
import ImgBaixoRelevo from '../../assets/baixo-relevo.webp'
import ImgDTF from '../../assets/dtf.webp'
import ImgLaser from '../../assets/laser.webp'
import ImgSublimacao from '../../assets/sublimacao.webp'
import ImgSilk from '../../assets/silk.webp'
import ImgTampografia from '../../assets/tampografia.webp'
import ImgTransfer from '../../assets/transfer.webp'
import ImgDigital from '../../assets/digital.webp'
import ImgDigital360 from '../../assets/digital360.webp'

import WhatsApp from '../../assets/whatsapp.svg'
import Map_Icon from '../../assets/map.svg'
import Email_Icon from '../../assets/email.svg'
import Phone_Icon from '../../assets/phone.svg'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

export function Services() {
  useDocumentTitle('Serviços')

  return (
    <main id="home_services" className={styles.services}>
      <div className="container">
        <h1>Conheça nossos serviços</h1>

        <div className={styles.service__item}>
          <img src={ImgBaixoRelevo} alt="Imagem baixo relevo" />

          <div id="baixo_relevo" className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Baixo Relevo</h2>
            <p>
              A gravação em baixo relevo é um processo que cria marcas ou
              desenhos em uma superfície, removendo uma fina camada do material
              para formar um efeito de profundidade. Diferente do alto relevo,
              onde as formas se projetam para fora, no baixo relevo as áreas
              gravadas ficam abaixo do nível da superfície, criando um efeito
              sutil e elegante. Esse método é amplamente utilizado para
              personalizar produtos produzidos em couro e courino,
              conferindo-lhes durabilidade e sofisticação estética.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/gravacao-em-baixo-relevo">
                Conheça mais
              </Link>
            </div>
            <div className={styles.line}></div>
          </div>
        </div>

        <div id="dtf" className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>DTF</h2>
            <p>
              A técnica DTF (Direct to Film) com adesivo é um método de
              personalização gráfica que imprime imagens em alta definição em um
              filme especial com tintas pigmentadas e pó adesivo termofusível.
              Após aquecimento, o adesivo é ativado para transferência. Seu
              diferencial é a aplicação em superfícies não têxteis (vidro,
              metal, plástico, madeira), ampliando a personalização para
              brindes, embalagens e decoração. A imagem transferida mantém
              fidelidade de cores, resistência, flexibilidade e durabilidade. É
              uma solução versátil, com acabamento profissional e aplicação
              simplificada, ideal para produções em pequena e média escala.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/dtf">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>

          <img src={ImgDTF} alt="Imagem DTF" />
        </div>

        <div id="laser" className={styles.service__item}>
          <img src={ImgLaser} alt="Imagem laser" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Laser</h2>
            <p>
              A gravação a laser é um processo de marcação de alta precisão que
              utiliza um feixe de laser para corrosão da superfície de um
              material, criando marcas permanentes. Essa técnica é amplamente
              utilizada em diversos materiais como metal, vidro e madeira,
              devido à sua capacidade de produzir resultados detalhados e
              permanentes
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/gravacao-a-laser">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>
        </div>

        <div id="silk_screen" className={styles.service__item}>
          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Silk Screen</h2>
            <p>
              Um método tradicional e altamente eficaz. Neste processo, a tinta
              é pressionada através de uma tela esticada sobre o objeto, criando
              um design durável e de alta qualidade. Aplicação em camisetas,
              bonés, sacolas e uma variedade de materiais promocionais, a
              serigrafia é particularmente recomendada para grandes tiragens.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/silk">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>

          <img src={ImgSilk} alt="Imagem Silk" />
        </div>

        <div id="sublimacao" className={styles.service__item}>
          <img src={ImgSublimacao} alt="Imagem Sublimação" />

          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Sublimação</h2>
            <p>
              Se trata de um processo de transferência de gravação de uma
              superfície para outra, resultando em uma impressão de alta
              qualidade. Amplamente utilizado em canecas de procelana. A
              sublimação oferece uma reprodução nítida de designs complexos e
              detalhados.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/sublimacao">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
          <div id="tampografia" className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Tampografia</h2>
            <p>
              A tinta é transferida de um clichê para o produto através de um
              tampão de silicone, resultando em detalhes nítidos mesmo em
              superfícies irregulares. Amplamente empregada em brindes
              corporativos como canetas, produtos eletrônicos e itens de
              escritório, a Tampografia oferece uma personalização durável e de
              qualidade.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/tampografia">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>

          <img src={ImgTampografia} alt="Imagem Tampografia" />
        </div>

        <div id="transfer" className={styles.service__item}>
          <img src={ImgTransfer} alt="Imagem Transfer" />

          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Transfer</h2>
            <p>
              O design é impresso em um papel especial que posteriormente, é
              transferido para o brinde por meio de calor e pressão. Essa
              técnica oferece uma reprodução precisa de detalhes e cores, sendo
              ideal para designs variados. Ampla aplicação em camisetas, bonés,
              bolsas e uma variedade de produtos promocionais.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/transfer">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
          <div id="digital" className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Gravação Digital UV</h2>
            <p>
              A gravação digital UV é um processo de impressão direta que
              utiliza tintas especiais curadas por luz ultravioleta, resultando
              em impressões resistentes, duráveis e com alta definição em
              diversas superfícies. Este método permite cores vivas e efeitos
              visuais sofisticados, sendo ideal para tiragens curtas e médias
              devido à sua agilidade, personalização e baixo custo inicial, já
              que dispensa o uso de clichês ou matrizes.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/gravacao-digital-uv">
                Conheça mais
              </Link>
            </div>

            <div className={styles.line}></div>
          </div>

          <img src={ImgDigital} alt="Imagem Digital" />
        </div>

        <div id="digital360" className={styles.service__item}>
          <img src={ImgDigital360} alt="Imagem Digital 360" />

          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Gravação Digital UV 360</h2>
            <p>
              A gravação digital UV 360 é uma evolução da impressão UV
              tradicional, focada na personalização completa de objetos
              cilíndricos ou curvos, como garrafas e canecas, em toda a sua
              circunferência. Ela utiliza a mesma tecnologia de cura por luz UV
              para garantir impressões duráveis, resistentes e com alta
              fidelidade de cores, mas se diferencia por sua capacidade de
              imprimir em 360 graus, através da rotação controlada do objeto,
              permitindo detalhes finos e efeitos como relevo em superfícies
              curvas.
            </p>

            <div className={styles.centerButton}>
              <Link className={styles.button} to="/gravacao-digital-uv-360">
                Conheça mais
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
                Entre em contato com a PRM TecPrint, queremos tirar suas
                dúvidas.
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
      </div>
    </main>
  )
}
