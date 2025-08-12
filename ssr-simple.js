import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function generateHomeContent() {
  return `
    <div id="root">
  <header id="header" class="undefined">
    <nav class="_header_vz7lq_13 container">
      <a href="/"
        ><img
          class="_logo_vz7lq_21"
          alt="PRM TECPRINT"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASYAAAAoCAYAAABTuVceAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAyESURBVHgB7Z1Pj9vGFcDfULuBW7mt3I2TBihg7i7aa+RbT176E9j+BNbeeuoq9wLWfoKV+wFq+dwAWR97sraX9mbtoQgawDYLG2iR2LGQZBM7WnHy3nCopWSKMyKHFLWeH7C2JFIzlEQ+vv/DXv0J7gQMOpCdIQMYcPxzGNy/1IVBtOGC67k1h3+GD5uQjSH++ZyBz4Afro+dB0O/P4w2vmqDyznQ+A16jsfgzhsIj7HPGNzC4xuCIRqu1xjV8PNx8BS7DtYDdj1+7BaLZT4OXvQtyEcDBYKH/7cDDo++3oOHJDBow2u/7588ObrKgN2FbJDAaTION4Gz3sjhj36+de1OtBGFjH/KYJeHx+CmDUTHGOAxgkF+dII9DaFENE+zC2eL5Z3DAcMIAcDhKWli0WvfPem3UTjtQ35cHKdT39p5StoYvfABamhjBtcBNDQhDnsoNBtgCDyWFlgsFuMYF0wRZB5+/sf37kXPUTh1cmhOs5CJ+Ki+fe02PSHhhPPd0nhfw5TWVN/2WqDQ0iwWSzYKE0zE0Ze/btW3dybCaS0QviwfzNAg8+6i63n05HIX+miWqgWfKa2J8ztgsVgKoTDB9M1oDbpfXCFB0KpvXTug18j5ywK2Cwbh6FyPzLoaCMGnMulya01WW7JYiqUQwURCaf/f2/Ds+wvyFdb+hevdpEff+f0+Omf6YI6GU+NC8ImIWylaE78NFoulMNbAIM9REP39/xvw16e/jQmlkMDhBxhe7wutacz2UdPxwBAUtSOTjoQeStouakQqM4u0phb+34UFqf/Oa8LY3LHrgoLUg+IYRGkUBc0zmJemISO4LpjDp2jtzPgmGSZ9lrLmic3lyqdT36284cYjwIO8KTI4Jo0nbuQ4Vn/OPEZRCqYfGWymbf/z4PfN4+Evb3/+Tf0mpOOOnFAYkABB82sT1AfninQGpqGhOEDz9+lH+HoP/U2guMBQa4IMggmF0h6UDJ2IGOl8CAXhhL+xOHmLmCcIo6b9+Gt0suNcn+GfCwbB84VcBb3Jc/w83LDZ/XIPuht34ZOpeUuahxA3VR7efGe/2zHATbxRT/y6LNx2HXKAn+1AXk8+/kXXbbPIc1IpmD7qqpzVX9D2w7qLfheH30vdlfEbIIUB5TiBGtqHhFgHo3D0JbjzduSheSV8R3hyHqvyi57/cMG96P5BaFmgSejL4i2w5CImaI2lbpRMG4VGA4WGUX9pEfOQQKHUnUt/ARPpOqVhzJQ78fu9+paHJ1ro70mEZ1P9SIihqbbLQ+E0j8a66zVHfl9kobP0IeFvz34DvCYia33QBIXjsiJx5DvTO7E4kIB2WZgxfx/0eEvVF9n8DB6AAdZmIrFBeLcPs/UZHDEw53NEbWIwb5uYi8NTyAEeqyc1oxYK2LvxSoey59GFUndQOPkonHTPBx38Bc5JsjIai5xTRn1MJ0/63frWzuSkS6BBWoemtjQFaTb17Z1+mib0Xg2aI/zwGJ3zA8V4nz77kL4wL/JNKXZfqrYkfQQdnX3RjN2hExpPxv++381eakTCfaObq1RpLoxM9PB/H+fwoARMzfWiLUwlKoMis4lutINlzKMD3ZhYeKMi4dRFAXd0qWsmXUeO09HZF8/J27I6Q/ucMh+V4yxVIq7lsMMZZ8eau/ppG0lbipzzUmtS4jhBrkgcr9n0ghgu/UPCE0rC1Fw1RTpKWfPogIKgF5xpNQ0yn01WPhRJoQmWBWCkCPbT5x+ePZFaU9r+VKxry08sq8hl1FBipnJU9F55zAsmh1+BguCM76RuH08ElztvH3R6wz9fTN80VFrTqCYifi5YLCsIddVg0oqInOFQcYwKJuGHUUTD3mTUenTGduTY45Roz8F/EuSmSmuy5SeWFYZ8lCxW6C6d4ZVOEp4rmFDCDim6AAugEbXyKWoGGajVFKkIILPKIXSuztvnXy+TZdY8rUmz/KQH5moALRbjkLMar+dJTpR0hrtQURIFEznMUMJuvq8ZXSAfDEbjSHC0FLv2YUFIk8Fo3EOVtsRjTneMRNxI2ifu9H57APDqrtdMGFipLY0Dto/S0AeLpcLg9bwyzvCpdAGyQ8ke3YjlTIiLtSaatbmzb+YQ/AoN2OaI80nKehosYJM8injXgblwaHLAsTmo4WG2r0ze85J2mXJ6J1ETWd27Z8eI2hLnbvqboEfpD/h54DxBWid+ly3Ihh+VLliqBTnDZUqJB2fO8FyZ4UUwEUyU/ER2aFRXIy9KvFBDwZAsGxhoCY0QPzK1SAvi3GhOkP+93z+kB+hf8pKSK/G1Q3R6p5fNcGihL2t/kmelqy2dQ+jE5XrdOZPoAVRLMOGN9WMoAYPzFKbJkPKBP/AjHuaTeS/34CCp9GWZCMEUF0qiTzf5c7jZQlW8gCdSmTtmq/PjYzOeHHEYU9cBRj2c0i+2NUeUtbSF8AQ9bQksq0ADL0DKxu5DDgIOk5tbLXksmucRQPZMbc15MkPXOWrD1/HGQ8dJArCNzvCB4czwXJBgIvNtdyKUqOzDcGEltdWNLmDTGdTxscXCCgmOajJRqZHcRZeBqqsB1dyhz6wzIme4Qhs8r9oSIQMfPchArbqBABcgs3k6BTUlTMmiboKhynvFPJmhMV+04ZOo4Jec4V+24fiDbj6Baoq1U/TU48H4E6EExoXSXWqrGz2vpde7LTr2fjS29C11EveTr+uUtSB6K58wdnSetSWq9UL1vgeWKShaTdr35YLKdcqch5zhX+F148jaxRr6m/A6umpyJaGsrEUSsiChtB8XSrKTpQv5wS9OjN2lJ2ltQUhbiquoWr2gNHwrbFzsiWkxC2mAIwPaEsZ0h5dTLlzdeag0y4ktPYZCaHccM9lU85hCOsM/RuNAJBFXxRkufExySSQXzDF0Arb7rXRIn83B2pAXDoMxZ7cm5tuZUHKTd5+2zzW1JhX+Iu1SLNXgo245JqbmPP7LNobuOYhuHKitHKwzoa3ovNco5MoJI+DVcYY7huvAhqQlrQdsMy6USFOiZZfABA4MY0KpkSaUxO4JrRlIa4I8MN4BiyUnG13oxhbQWFpe0WxmOITO8KVmhq+JOrBUZzc7xgvxVdIWHq7COww4H9QC53hWixCRLSb6MyU5AnsorKYqsTkdh6pbJWo6P9vy2j+gGUdfKDrwHrCw30sSvaQ7kNCatnbodRcWxz95/I/KRC8sqw36edrSlPIAhPZP18sulIx0hu9GrVaW7QxfwyjUDZaywziAm6/9Ix8WhDLBeUr0jSJaSc7ji1veEN+X2r7WAX4HnfWH9H5aGQUjcSTM3rrTBKmN0miNu5SmdnPfZrUli1mkKfVw0hgubOpWesQXheQhOsP3Z53hXD9X0RgOy+drSUQup9SCDMi155RLMEW1c6Q1xWuAIig363JK9vF6ICJOizoXrbZkBvG947l3BSzRUve0YOukyJYaxcESkG1SIjfM0tqkkPO7UrUytIpKfcvbV2ozse6TFPaUXfK8aDOe9F3VPKid3UXtTL9zwDukLeHJ2UTnbAcM4MyY1CJHKmyz7KKj9R4YbBiHka3DquTiLAIdc9wZTvlFqK0MquAMhyVgtLWuKUSL3u2dG8rCXYffQ+f9VbEkFH6ZUSbrbIrAPFA7646csB8xqHmntCVOfkFuJknwNFxH0I+eyyW2IvO7BQZNBScspl45wUSQMxw1JVf6TCNneOl5RQmZ4aVT2Q6W47FYsVf1g7gjJxAaj7izyAiH1lLhIFcGFr4mNbifNeEMQb/VGKNAzLaKeQtyhleh46Rsk1K6Ez6ikhoTIVZG0TK1GNW1PSCTbiNMFrsRs5GV6GpNp8FqZEFTgeabHHc51TqCWbiQcIOR5tbm/wz3BJqd6w0rJ1nQ5Dyq35A0ztcsPB9nPy8Ggw5fy5WuL+RsRU3OcPx9cp8P0XezyPEwjJ6lKtIYPdtctPRClrc8zTsu5ViNHE7qpJu2Hy05fvL4SHx4ygNZVPVFAdhRCMDeyZOj1LuHsmcUY7snj/s9sFgsSiq9GAGZWk7A1BmoMreJHmaxx0lrghRpfp6LdS2WKlL5VVJEBjlTt32QuU0uZEDha7KtTSyWklmJ5Zs0S0gaOn3B5zFPa7LaksVSPishmMixrRU9o77d29cy1fhIrWk28ma1JYtlCRQimHS874tGDDQzwilXoAsZOQ2mkzLjPcrzElvzzmKxKHBSNJEhXuT3s2gMMZ9N0sUottE+sADSEU6RMT91R8US5WnQZ6XuCPRYNLhbpLVJOO+cz8SOgxVN+rNYlsFPK4aybqxCJKcAAAAASUVORK5CYII="
      /></a>
      <div class="_menu_vz7lq_26">
        <a class="_active_vz7lq_43" href="/">Home</a
        ><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_vz7lq_68" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_vz7lq_84">
        <a class="_active_vz7lq_43" href="/">Home</a
        ><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <section id="home">
        <div class="_container__home_r9bkj_7 container">
          <div class="_text__home_r9bkj_41">
            <h1>Gravações Personalizadas com Excelência.</h1>
            <p>
              Transformamos sua marca em presença: gravações com precisão,
              estilo e qualidade.
            </p>
            <a class="_button_r9bkj_59" href="/servicos"
              >Conheça nossos serviços</a
            >
          </div>
          <div class="_image__home_r9bkj_16">
            <img
              alt="Imagem de apresentação"
              src="/assets/APRESENTACAO-DVpcoi0W.webp"
            />
          </div>
        </div>
      </section>
      <div class="divider-2"></div>
      <section id="services">
        <div class="_container__services_r9bkj_82 container">
          <div class="_services__title_r9bkj_87">
            <a href="/services/#home_services" data-discover="true"
              ><h2>Serviços</h2></a
            >
            <p>
              Nosso compromisso vai além da impressão. Desde o primeiro contato
              até a entrega final, priorizamos a sua experiência, oferecendo
              qualidade impecável, agilidade e, acima de tudo, a tranquilidade
              de saber que seu material está em boas mãos.
            </p>
          </div>
          <div class="_services__cards_r9bkj_99">
            <a
              class="_service__card_r9bkj_105"
              href="/servicos"
              data-discover="true"
              ><img
                alt="Icon-SilkScreen"
                class="_silk_r9bkj_125"
                src="/assets/Silk-Icon-__UnTVAU.svg"
              />
              <h3>Silk Screen</h3>
              <p>
                Neste processo, a tinta é pressionada através de uma tela
                esticada sobre o objeto, criando um design durável e de alta
                qualidade.
              </p></a
            ><a
              class="_service__card_r9bkj_105"
              href="/servicos"
              data-discover="true"
              ><img
                alt="Icon-Transfer"
                src="/assets/Transfer-Icon-UJTswFSd.svg"
              />
              <h3>Transfer</h3>
              <p>
                O design é impresso em papel especial e transferido para o
                brinde por calor e pressão, garantindo alta qualidade e
                durabilidade.
              </p></a
            ><a
              class="_service__card_r9bkj_105"
              href="/servicos"
              data-discover="true"
              ><img alt="Icon-Laser" src="/assets/Laser-Icon-SkGgwZjR.svg" />
              <h3>Laser</h3>
              <p>
                A gravação a laser utiliza um feixe de alta precisão para
                vaporizar ou queimar a superfície de materiais, criando marcas
                permanentes.
              </p></a
            >
          </div>
        </div>
      </section>
      <div class="divider-1"></div>
      <section id="contact">
        <div class="_container__contact_r9bkj_137 container">
          <div class="_contact__text_r9bkj_146">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_r9bkj_59"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_r9bkj_162">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_ov6ca_8 container">
      <a href="/"
        ><img
          class="_logo_ov6ca_17"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_social_ov6ca_33">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_ov6ca_23">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>
  `
}

function generateAboutContent() {
  return `
    <div id="root">
  <header id="header" class="undefined">
    <nav class="_header_vz7lq_13 container">
      <a href="/"
        ><img
          class="_logo_vz7lq_21"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_menu_vz7lq_26">
        <a class="" href="/">Home</a
        ><a class="_active_vz7lq_43" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_vz7lq_68" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_vz7lq_84">
        <a class="" href="/">Home</a
        ><a class="_active_vz7lq_43" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <section id="about">
        <div class="_container__about_f0fuq_24 container">
          <div class="_image__about_f0fuq_32">
            <img alt="Trocar o Placehold" src="/assets/alboult-fdzoQ3Q3.webp" />
          </div>
          <div class="_text__about_f0fuq_55">
            <h2>Sobre Nós</h2>
            <p>
              Somos uma empresa especializada na comercialização e
              personalização de produtos promocionais. Nossa equipe é
              estruturada e comprometida em oferecer qualidade superior por meio
              das mais diversas técnicas de gravação.
            </p>
            <br />
            <p>
              Existem diferentes tipos de gravação para brindes personalizados,
              e conhecer cada uma delas é essencial para garantir que o
              resultado final esteja alinhado com sua marca e objetivos de
              campanha. Fatores como o perfil do público, a identidade visual da
              sua marca, o tipo de ação promocional e o material do produto
              influenciam diretamente na escolha da técnica mais apropriada.
            </p>
            <br />
            <p>
              A seguir, apresentamos os principais métodos de gravação
              utilizados em brindes personalizados. Explicamos como cada técnica
              funciona e indicamos suas aplicações mais comuns, ajudando você a
              escolher a opção ideal para valorizar sua marca com eficiência e
              impacto visual.
            </p>
          </div>
        </div>
      </section>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_f0fuq_70 container">
          <div class="_contact__text_f0fuq_79">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_f0fuq_7"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_f0fuq_95">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_ov6ca_8 container">
      <a href="/"
        ><img
          class="_logo_ov6ca_17"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_social_ov6ca_33">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_ov6ca_23">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div> `
}

function generateServicesContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="_active_1baxb_85" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="_active_1baxb_85" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main id="home_services" class="_services_15ssi_3">
      <div class="container">
        <h1>Conheça nossos serviços</h1>
        <div class="_service__item_15ssi_23">
          <img
            alt="Imagem baixo relevo"
            src="/assets/baixo-relevo-CXSICK_E.webp"
          />
          <div id="baixo_relevo" class="_service__item__content_15ssi_49">
            <div class="_line_15ssi_61"></div>
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
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/gravacao-em-baixo-relevo"
                >Conheça mais</a
              >
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
        </div>
        <div id="dtf" class="_service__item_15ssi_23">
          <div class="_service__item__content__reverse_15ssi_51">
            <div class="_line_15ssi_61"></div>
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
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/dtf">Conheça mais</a>
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
          <img alt="Imagem DTF" src="/assets/DTF-DaP70Bzb.png" />
        </div>
        <div id="laser" class="_service__item_15ssi_23">
          <img alt="Imagem laser" src="/assets/LASER-HmNWMDNR.jpg" />
          <div class="_service__item__content_15ssi_49">
            <div class="_line_15ssi_61"></div>
            <h2>Laser</h2>
            <p>
              A gravação a laser é um processo de marcação de alta precisão que
              utiliza um feixe de laser para corrosão da superfície de um
              material, criando marcas permanentes. Essa técnica é amplamente
              utilizada em diversos materiais como metal, vidro e madeira,
              devido à sua capacidade de produzir resultados detalhados e
              permanentes
            </p>
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/gravacao-a-laser"
                >Conheça mais</a
              >
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
        </div>
        <div id="silk_screen" class="_service__item_15ssi_23">
          <div class="_service__item__content_15ssi_49">
            <div class="_line_15ssi_61"></div>
            <h2>Silk Screen</h2>
            <p>
              Um método tradicional e altamente eficaz. Neste processo, a tinta
              é pressionada através de uma tela esticada sobre o objeto, criando
              um design durável e de alta qualidade. Aplicação em camisetas,
              bonés, sacolas e uma variedade de materiais promocionais, a
              serigrafia é particularmente recomendada para grandes tiragens.
            </p>
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/silk">Conheça mais</a>
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
          <img alt="Imagem Silk" src="/assets/SILK-BRNY2Obw.jpg" />
        </div>
        <div id="sublimacao" class="_service__item_15ssi_23">
          <img alt="Imagem Sublimação" src="/assets/sublimacao-B_n2aK7s.jpg" />
          <div class="_service__item__content__reverse_15ssi_51">
            <div class="_line_15ssi_61"></div>
            <h2>Sublimação</h2>
            <p>
              Se trata de um processo de transferência de gravação de uma
              superfície para outra, resultando em uma impressão de alta
              qualidade. Amplamente utilizado em canecas de procelana. A
              sublimação oferece uma reprodução nítida de designs complexos e
              detalhados.
            </p>
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/sublimacao">Conheça mais</a>
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
        </div>
        <div class="_service__item_15ssi_23">
          <div id="tampografia" class="_service__item__content_15ssi_49">
            <div class="_line_15ssi_61"></div>
            <h2>Tampografia</h2>
            <p>
              A tinta é transferida de um clichê para o produto através de um
              tampão de silicone, resultando em detalhes nítidos mesmo em
              superfícies irregulares. Amplamente empregada em brindes
              corporativos como canetas, produtos eletrônicos e itens de
              escritório, a Tampografia oferece uma personalização durável e de
              qualidade.
            </p>
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/tampografia">Conheça mais</a>
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
          <img
            alt="Imagem Tampografia"
            src="/assets/TAMPOGRAFIA-qYbr5PbQ.jpg"
          />
        </div>
        <div id="transfer" class="_service__item_15ssi_23">
          <img alt="Imagem Transfer" src="/assets/TRANSFER-BjNMpsCD.jpg" />
          <div class="_service__item__content__reverse_15ssi_51">
            <div class="_line_15ssi_61"></div>
            <h2>Transfer</h2>
            <p>
              O design é impresso em um papel especial que posteriormente, é
              transferido para o brinde por meio de calor e pressão. Essa
              técnica oferece uma reprodução precisa de detalhes e cores, sendo
              ideal para designs variados. Ampla aplicação em camisetas, bonés,
              bolsas e uma variedade de produtos promocionais.
            </p>
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/transfer">Conheça mais</a>
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
        </div>
        <div class="_service__item_15ssi_23">
          <div id="digital" class="_service__item__content_15ssi_49">
            <div class="_line_15ssi_61"></div>
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
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/gravacao-digital-uv"
                >Conheça mais</a
              >
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
          <img alt="Imagem Digital" src="/assets/DIGITAL-B-SMcLTp.jpg" />
        </div>
        <div id="digital360" class="_service__item_15ssi_23">
          <img alt="Imagem Digital 360" src="/assets/digital360-5pKiqwhI.jpg" />
          <div class="_service__item__content__reverse_15ssi_51">
            <div class="_line_15ssi_61"></div>
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
            <div class="_centerButton_15ssi_73">
              <a class="_button_15ssi_83" href="/gravacao-digital-uv-360"
                >Conheça mais</a
              >
            </div>
            <div class="_line_15ssi_61"></div>
          </div>
        </div>
        <div class="divider-2"></div>
        <section id="contact">
          <div class="_container__contact_15ssi_129 container">
            <div class="_contact__text_15ssi_147">
              <h2>Entre em Contato</h2>
              <p>
                Entre em contato com a PRM TecPrint, queremos tirar suas
                dúvidas.
              </p>
              <a
                class="_button_15ssi_83"
                href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
                target="_blank"
                ><img
                  alt="WhatsApp Icon"
                  src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
                />
                Entrar em contato</a
              >
            </div>
            <div>
              <ul class="_contact__list_15ssi_179">
                <li>
                  <a href="tel:11939006543"
                    ><img
                      alt="Phone Icon"
                      src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                    />11 93900-6543</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    ><img
                      alt="Map Icon"
                      src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                    />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                  >
                </li>
                <li>
                  <a
                    href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                    ><img
                      alt="Email Icon"
                      src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                    />comercial@prmgravacoes.com.br</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVsAAAAtCAYAAAAAw8iFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAytSURBVHgB7Z2LcdRIEIbbxmubKqpuieCWCIAIzo7g7AgwEWAiYB0BJgIvEWAiYB0BEAEigturogq/YK9/bY9uLGulGWlGlrz9Va29D0mj569fPT0za5eXl6/m8/mYiIbUnNna2toXvK6vrz8+fPhwmp/g/Pz8mH9/RWFIeFkJr//Z1dXV6aNHj74UlHeYK29IJdsq6386GAyOKCK8f178+vXrmBz2O9aJp93n/ZmQoii9ZI3F9jOL1TOKQ7K+vj7Z2Nh4x4IxM1/+/PnzgL9/S2EEPgOixMs95vLe299zeWP+/g158Pv3792im0UIeH1GvD7ffObhbXu3ubl5SIqi9JJ1FtqggpdjxKI1hqBfXFzsmS9ZxCb8/XN+m1BAcNNgBzjhsj5D0Kzyxlyel1N98OCBlzj7wDeDF+TPH6QoSm9Zp3YY8esDP+pnAoZHYrhHCiy4wjN2jnmB9xJcFu4dFuwdCgxuArweB6QoykrRltimwOXaTloE9yXFAeXkBX7M/05dFxDJ3e7Q4uajKMoK0arYctxxYsdugcRFo1VGQeBRGWU+c9wT4j5zmTeGu/WNHSuKcj9oU2wTjqemoooKMttxbm1tjSlOOCEFtf4mhiti/8513pDuFttN6moVZSVpS2wTFtc0dQlhBLg7OE7bNUYMJ4Ahi+aJ+cDuFilXrbtbdbWKsrpsUDxmLFRf+TXd3t4+ZveaihuLLlK+RngvrnGK9wgncIVWQpGcnxFNlAN3y2XB3TqJn72edemSq8W+oPZIc6GlXMTRY6UZZnB507LfJdUxWhZOvvzI5aW57ct+jHyss2NbUv6I/j/vb01fdE5UHT9fcvvgiwll5tYtOmssOt8cCnzPznNC1ST4U5R8j8d4uMv8wbfzWbHjz8/PXU9K5Koe8P+/yHGH4SCyq92V9dnh+T+RI03zbh3381IQ75Z4cyNwgvHLK8e3CXhi2djYmEjZO/xy3uc1QW73k6IfuOyQDXicy8c2RxY9CC4aC92q++D9P6e4QEDH/Hpf9CNSMfm3tM6E98ERa8DY/p2/O+DXif2dLC9YPY69D3i5T4zg87qhnNaeNl2dbVJXaCCyyCvlDT4syunlnY8DMcV7ueM4Pd7TQtin0kAAbnmvaga52IcoR5w0ynK68AaDwZ9UE43V3j183N+I0N5Hhtg2nN98bu9Su+DmPWHheszX8jEFQLYlWSbgfSVaGAGihsYMtGjYUDYdRLK2YxMXvc9lObkHDmOgvAnes0hPed0qRZpJ8q3SfOhgrPY7+fFn3Xn5ApwFXA8Xbi1T3PzY+grr9C/FwWWbQpaPxi6pYRAz8aJCpELu8+y8gEOE6OazjerCyzpGGLIsRNIUvi7/4TJ89ke2rwWvfRlNbCUuioNeJTTDHz9+PCvq18AHvrO+dGwC+8ya5zuvZ+UMfECcsxfydM3VyiPUyGMWbP83iW9h/p2qOJ0jSx/3Q4NGJNZxhmN6HkoUfEG/G/zvZcjyc4/q+/yvUGyLHuObIDcxGKq0vxFej8zI1OQrLQQ8XR4v+wO/dgOdb7dAE3jyyEzKhcG8z9+o2QhS6+8yXeNKEzhcx7ug3ew1cZgeOzlrCGG3SnNBwiTK3ZK5ET6W7+9KaAEL0sfQ5eMJzfo4LJluQgGRTqA+Wp9H1AzEnvetzyOJd8eMsbdGVLGVkyqhlsBjR9U07HKeWNNXnvSomDIVfuJS35IjqISbt1vzrxRzLy7WVQCV2HzNvLa+GvHrhO4BbeTZtnai84GqXYm1DNMQA7BLRVeNI7tFWhkxO7NRlPsKKtoQ8jCfUa+DCk7qOVHFVlptVYqti8N0wcQVy7Djuvx+VLG8M8vV7piuKF06klFXqyj1QWwZIR/zGRWcbHwOqcdEFVvXrgRZvBqLrWtFFJeVhRqqYkHIXTTv7dirS6syD1d7Z/FDRekybIYO7XoYfv+2zwbGRWwhBt6ZAtKVoNOdqGkn3ZJr6yRufLCybeF5npZMmmxtbZ2a5SP52v6xTEx9XC0vp9d3a0WJhdT57NvZCJKhMKIeslRs8QiNVlMsOI+N6Lhitc5yCSGcUQOkrDSf12HyxG6tViaIdoqMxGpvUOZuPVxto/xdRbnviNAiQ8E8AQ77mqFQlGeb9jFb5Dbt0Q8ssu9YZOAU93ysPotNVtMozXVL08BYWIe8fkOe7yliqD5lSY5jCpezx8taNukNEZSGF7co6jNBXPAOORAy57GPBHIos7tM5VLig1ACMhSsZr0jfn3gV9ut5RpxQ2yLBhaEe0O8UgSn9G7C05AnN0QNndRIfwelQCTLWqUtYcbbliUwyzYVTsjLztapLBZsd25jLfeN435YdVcbpI8GqbUek3In8LX4R43r3hukYPL1OzJ9GUgDg7f8+TX1hExsITAsGgfms4jsG9koioHt7IrioiHh7XtnbiKXl5dVjnhi3iCEULb9trv12YZVd7WrCuoWpN4gpBu3w1xly30lNfyhyh6R1SKTt827bscHXDMiuKa13CFagYbqkyE2RmxPbaFFx94yhA3FAncq29l5OMI6ZX2RIXEMJ2XrVZTutQzb3aqrVRwwTVyjYGfQ5IE48b9YFbKJHaaLBTIU+N9Tc11KhkIrZTdlAwHowWCQdQTDru+khQEJUWZm/yO7WowQkTUB5O17VSagdiMG3jd75ABElrchUVfrRWt9I6wKCKnkmu62RluP84jPo/8H/v/JxPwRy8XTQqw+FEKxzqK3byoYWIjexnyUF9JRda0OfIc+/crWKctyqvnen25gu1r57Dyag8c2FLlareBRmnDG5+rBHdzEcd6eXV9fP2/TWYqo7tLtDIURdZh1IygIHchjRkxONzc3n9uCBidNEXrFQk9ddlmSi1uajsau9oYI+gyfQ47bsOSCULFdEZDpw+fhWuDXjkvfr+g423WZdifbwqxg/scom6+TqLHaJduS5Dut4deHLqeEpblP0gBhTPGA9X+9tbW1b7tFEVqnR3VXEJ+Fm93e3j40ZVlCO1o2nzTNneaWhfk/Ujg0Vqv0gj7kt+Y7rZHwoHNHUW2Tim3EDlNmLHxHfOd7gnHIzJfzRcfinyKFLGa2aKKv3CqhBXa+r43jcEBOaKxW6RMwLrlY7IgW+a2dQTqtyVI654thdjrZac164Mop3AW/Sqe8+xBZZAHYbhY19xjBYUnqFRzw96IXOYLlnp+fZ+EQGSmg6m681HHKAJFTao66WqV3oB5jfrMHrjS/lToEmrzb1+h8MaxO5/qRRjZCZZwWHQQjnsvutLC1zlzG9SpbBhwmi29pRxIIsnOo4WXRb2hcwA7VqV9LJD7z9EhnQ/PchMX3CCkiy6avcpzIUEBsihqgrlbpK5Lfims8zeeFFqCnvpCDMgYAIcrPVoZC9GF1fFmv6IzFTPSPjIRQKKhVQgv3PBgMPs8b9NjD5U/4n2uN5xAj+ZoPCGGUuNNKxxnA3aqrvVu0ArIh4h4z4eqaexQNymcodKrTmvWqpP0uIUN5O6dj2eEEjFFWNK/dNLcMO//WF3W1d05i3rBx+LvLNdYdZzfXA9dxl/RjWYYCdQS0IOvNiYe7F7vk14HDCROXZcHdcqx5WsOdq6stJkjfCAUk+eG80YzUtOwTcfg2D9RhvUv59wVpUIBtywZ5nEcelNEXPIGyMXptrvMu3Qyija4bC4QTWPReOIqeCSekJz/CCTzv32befCOGKurEbtXVLqetRzy5AI9MJya0EAl1tzWQQR735/+PMjuiRX7r7tpaN3pfQ4aCxJg7lZXQxhhkwVkWEiiiLJzgGxqoEbtVV9sRZJiVo644sD7Th/zW/LA6XaB3zha4ZBjY4A7HO36CO6+ZFxWDPq7W4ONu75Grfcn7Ln3TUKy+tPCIvfQmLMdjLOIQy9kWlY/H2qGsQ6u14/b+DnmjkfzWym3hawX59ZOS8qfWOgZ1xtJpzcT+LuD5672uaxcXF5XdVOFxWyqnaiEtuCrjc77lSMOIHcfJkVa2b69THbH1KBfD6jh1tMLHAPtmVDZN02OgKMrd0sswgsEzDLDHorZnPtQVWtdyNVarKIpNr8UWMVS7qZ4DJyEqRhxitxqrVRTlBr0WW8CP6mNyj58Mr66uguTdlblbdbWKouTpvdhK7p9zOCGfnVCXEnebsKCfkaIoikXvxRZUNMe9hTR2GFFDitytjOWWkKIoigXE1uUR/F9qADqwcZy0djk+ube0aOwQw90m5NgiTVGU1WIdo85SgUhJt4Zpl4ksZMfUADzqo19bWi6GCAWcNSkHbpLLQKJ14jD57PLyckIBEJFPaLEN7+q4Wqnkm+W+u9HFJK+vT0Wgoigd4z/1rLlgyuhG/wAAAABJRU5ErkJggg=="
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceBaixoRelevoContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main id="services">
      <div class="container">
        <ul class="_pagePath_1pzx3_9">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li>
            <a href="/gravacao-em-baixo-relevo">Gravação em Baixo Relevo</a>
          </li>
        </ul>
      </div>
      <div class="_service__item_1pzx3_43 container">
        <img
          alt="Imagem baixo relevo"
          src="/assets/baixo-relevo-CXSICK_E.webp"
        />
        <div id="baixo_relevo" class="_service__item__content_1pzx3_69">
          <div class="_line_1pzx3_81"></div>
          <h1>Gravação em Baixo Relevo</h1>
          <h2 class="_h2paragraph_1pzx3_93">
            A gravação em baixo relevo é um processo que cria marcas ou desenhos
            em uma superfície, removendo uma fina camada do material para formar
            um efeito de profundidade. Diferente do alto relevo, onde as formas
            se projetam para fora, no baixo relevo as áreas gravadas ficam
            abaixo do nível da superfície, criando um efeito sutil e elegante.
            Esse método é amplamente utilizado para personalizar produtos
            produzidos em couro e courino, conferindo-lhes durabilidade e
            sofisticação estética.
          </h2>
          <div class="_centerButton_1pzx3_109">
            <a class="_button_1pzx3_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1pzx3_81"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1pzx3_123 container">
          <div class="_contact__text_1pzx3_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1pzx3_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1pzx3_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceDTFContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/DTF">DTF</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem DTF" src="/assets/DTF.png" />
        <div id="baixo_relevo" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>DTF</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            A técnica DTF (Direct to Film) com adesivo é um método de
            personalização gráfica que imprime imagens em alta definição em um
            filme especial com tintas pigmentadas e pó adesivo termofusível.
            Após aquecimento, o adesivo é ativado para transferência. Seu
            diferencial é a aplicação em superfícies não têxteis (vidro, metal,
            plástico, madeira), ampliando a personalização para brindes,
            embalagens e decoração. A imagem transferida mantém fidelidade de
            cores, resistência, flexibilidade e durabilidade. É uma solução
            versátil, com acabamento profissional e aplicação simplificada,
            ideal para produções em pequena e média escala.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h1>Entre em Contato</h1>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceLaserContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/gravacao-a-laser">Gravação a Laser</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem laser" src="/assets/LASER.jpg" />
        <div id="laser" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Gravação a Laser</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            A gravação a laser é um processo de marcação de alta precisão que
            utiliza um feixe de laser para corrosão da superfície de um
            material, criando marcas permanentes. Essa técnica é amplamente
            utilizada em diversos materiais como metal, vidro e madeira, devido
            à sua capacidade de produzir resultados detalhados e permanentes
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceTransferContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1vr1o_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/transfer">Transfer</a></li>
        </ul>
      </div>
      <div class="_service__item_1vr1o_9 container">
        <img alt="Imagem laser" src="/assets/TRANSFER.jpg" />
        <div id="digital" class="_service__item__content_1vr1o_35">
          <div class="_line_1vr1o_47"></div>
          <h1>Transfer</h1>
          <h2 class="_h2paragraph_1vr1o_103">
            O design é impresso em um papel especial que posteriormente, é
            transferido para o brinde por meio de calor e pressão. Essa técnica
            oferece uma reprodução precisa de detalhes e cores, sendo ideal para
            designs variados. Ampla aplicação em camisetas, bonés, bolsas e uma
            variedade de produtos promocionais.
          </h2>
          <div class="_centerButton_1vr1o_59">
            <a class="_button_1vr1o_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1vr1o_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1vr1o_123 container">
          <div class="_contact__text_1vr1o_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1vr1o_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1vr1o_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceDigitalContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/gravacao-digital-uv">Gravação Digital UV</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem laser" src="/assets/DIGITAL.jpg" />
        <div id="digital" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Gravação Digital UV</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            A gravação digital UV é um processo de impressão direta que utiliza
            tintas especiais curadas por luz ultravioleta, resultando em
            impressões resistentes, duráveis e com alta definição em diversas
            superfícies. Este método permite cores vivas e efeitos visuais
            sofisticados, sendo ideal para tiragens curtas e médias devido à sua
            agilidade, personalização e baixo custo inicial, já que dispensa o
            uso de clichês ou matrizes.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceDigital360Content() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main id="services">
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li>
            <a href="/gravacao-digital-uv-360">Gravação Digital UV 360</a>
          </li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem laser" src="/assets/digital360.jpg" />
        <div id="digital360" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Gravação Digital UV 360</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            A gravação digital UV 360 é uma evolução da impressão UV
            tradicional, focada na personalização completa de objetos
            cilíndricos ou curvos, como garrafas e canecas, em toda a sua
            circunferência. Ela utiliza a mesma tecnologia de cura por luz UV
            para garantir impressões duráveis, resistentes e com alta fidelidade
            de cores, mas se diferencia por sua capacidade de imprimir em 360
            graus, através da rotação controlada do objeto, permitindo detalhes
            finos e efeitos como relevo em superfícies curvas.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceSilkContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/silk">Silk Screen</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem Silk" src="/assets/SILK.jpg" />
        <div id="silk" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Silk Screen</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            Um método tradicional e altamente eficaz. Neste processo, a tinta é
            pressionada através de uma tela esticada sobre o objeto, criando um
            design durável e de alta qualidade. Aplicação em camisetas, bonés,
            sacolas e uma variedade de materiais promocionais, a serigrafia é
            particularmente recomendada para grandes tiragens.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceSublimacaoContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/sublimacao">Sublimação</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem Sublimacao" src="/assets/sublimacao.jpg" />
        <div id="sublimacao" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Sublimação</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            Se trata de um processo de transferência de gravação de uma
            superfície para outra, resultando em uma impressão de alta
            qualidade. Amplamente utilizado em canecas de procelana. A
            sublimação oferece uma reprodução nítida de designs complexos e
            detalhados.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generateServiceTampografiaContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <div class="container">
        <ul class="_pagePath_1bhp7_69">
          <li><a href="/">Home</a></li>
          <li><a href="/servicos">Seriços</a></li>
          <li><a href="/tampografia">Tampografia</a></li>
        </ul>
      </div>
      <div class="_service__item_1bhp7_9 container">
        <img alt="Imagem Tampografia" src="/assets/TAMPOGRAFIA.jpg" />
        <div id="tampografia" class="_service__item__content_1bhp7_35">
          <div class="_line_1bhp7_47"></div>
          <h1>Tampografia</h1>
          <h2 class="_h2paragraph_1bhp7_103">
            A tinta é transferida de um clichê para o produto através de um
            tampão de silicone, resultando em detalhes nítidos mesmo em
            superfícies irregulares. Amplamente empregada em brindes
            corporativos como canetas, produtos eletrônicos e itens de
            escritório, a Tampografia oferece uma personalização durável e de
            qualidade.
          </h2>
          <div class="_centerButton_1bhp7_59">
            <a class="_button_1bhp7_219" href="/servicos">Mais Serviços</a>
          </div>
          <div class="_line_1bhp7_47"></div>
        </div>
      </div>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_1bhp7_123 container">
          <div class="_contact__text_1bhp7_141">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_1bhp7_219"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_1bhp7_173">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>`
}

function generatePrwContent() {
  return `
    <div id="root">
  <header id="header" class="undefined">
    <nav class="_header_vz7lq_13 container">
      <a href="/"
        ><img
          class="_logo_vz7lq_21"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_menu_vz7lq_26">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="_active_vz7lq_43" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_vz7lq_68" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_vz7lq_84">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="_active_vz7lq_43" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <section class="_main__PRW_ky6bu_24" id="prw_embalagens">
        <div class="_container__prw_ky6bu_29 container">
          <div class="_image__prw_ky6bu_37">
            <img alt="Logo da PRW" src="/assets/LOGO%20PRW-Bl6VBmq3.svg" />
          </div>
          <div class="_text__prw_ky6bu_49">
            <h2>Sua Marca, Nossa Arte PRW Embalagens</h2>
            <p>
              Transforme seus produtos com embalagens de papel personalizadas
              que refletem a essência da sua marca e encantam seus clientes.
            </p>
            <a class="_button_ky6bu_7 _buttonPRW_ky6bu_62">EM BREVE</a>
          </div>
        </div>
      </section>
      <div class="divider-2"></div>
      <section id="contact">
        <div class="_container__contact_ky6bu_72 container">
          <div class="_contact__text_ky6bu_81">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_ky6bu_7"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
        "
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div>
            <ul class="_contact__list_ky6bu_97">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  </main>
  <footer id="footer">
    <div class="_footer_ov6ca_8 container">
      <a href="/"
        ><img
          class="_logo_ov6ca_17"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_social_ov6ca_33">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_ov6ca_23">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>
  `
}

function generateContactContent() {
  return `
    <div id="root">
  <header id="header" class="undefined">
    <nav class="_header_vz7lq_13 container">
      <a href="/"
        ><img
          class="_logo_vz7lq_21"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_menu_vz7lq_26">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_vz7lq_68" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_vz7lq_84">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <main>
      <section id="contact" class="container">
        <div class="_container__contact_9ynni_24 container">
          <div class="_contact__text_9ynni_33">
            <h2>Entre em Contato</h2>
            <p>
              Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.
            </p>
            <a
              class="_button_9ynni_1"
              href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos"
              target="_blank"
              ><img
                alt="WhatsApp Icon"
                src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
              />
              Entrar em contato</a
            >
          </div>
          <div class="_contact__links_9ynni_72">
            <ul class="_contact__list_9ynni_49">
              <li>
                <a href="tel:11939006543"
                  ><img
                    alt="Phone Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M22.0001%2016.9201V19.9201C22.0012%2020.1986%2021.9441%2020.4743%2021.8326%2020.7294C21.721%2020.9846%2021.5574%2021.2137%2021.3521%2021.402C21.1469%2021.5902%2020.9046%2021.7336%2020.6408%2021.8228C20.377%2021.912%2020.0974%2021.9452%2019.8201%2021.9201C16.7429%2021.5857%2013.7871%2020.5342%2011.1901%2018.8501C8.77388%2017.3148%206.72539%2015.2663%205.19006%2012.8501C3.50003%2010.2413%202.4483%207.27109%202.12006%204.1801C2.09507%203.90356%202.12793%203.62486%202.21656%203.36172C2.30518%203.09859%202.44763%202.85679%202.63482%202.65172C2.82202%202.44665%203.04986%202.28281%203.30385%202.17062C3.55783%202.05843%203.8324%202.00036%204.11006%202.0001H7.11006C7.59536%201.99532%208.06585%202.16718%208.43382%202.48363C8.80179%202.80008%209.04213%203.23954%209.11005%203.7201C9.23668%204.68016%209.47151%205.62282%209.81006%206.5301C9.9446%206.88802%209.97372%207.27701%209.89396%207.65098C9.81421%208.02494%209.62892%208.36821%209.36005%208.6401L8.09006%209.9101C9.51361%2012.4136%2011.5865%2014.4865%2014.0901%2015.9101L15.3601%2014.6401C15.6319%2014.3712%2015.9752%2014.1859%2016.3492%2014.1062C16.7231%2014.0264%2017.1121%2014.0556%2017.4701%2014.1901C18.3773%2014.5286%2019.32%2014.7635%2020.2801%2014.8901C20.7658%2014.9586%2021.2095%2015.2033%2021.5266%2015.5776C21.8437%2015.9519%2022.0122%2016.4297%2022.0001%2016.9201Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />11 93900-6543</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com.br/maps/place/R.+Barra+Funda,+659+-+Barra+Funda,+S%C3%A3o+Paulo+-+SP,+01152-000/@-23.5290259,-46.6570112,3a,75y,238.94h,93.08t/data=!3m7!1e1!3m5!1s0QCOdC6si7Tx6KUARiAhdQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-3.083808993360279%26panoid%3D0QCOdC6si7Tx6KUARiAhdQ%26yaw%3D238.94438803972054!7i16384!8i8192!4m6!3m5!1s0x94ce58119718273d:0x72d14ba0c5e049b0!8m2!3d-23.5290968!4d-46.6570649!16s%2Fg%2F11c5qfmcbh?hl=pt-BR&amp;entry=ttu&amp;g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  ><img
                    alt="Map Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21%2010C21%2017%2012%2023%2012%2023C12%2023%203%2017%203%2010C3%207.61305%203.94821%205.32387%205.63604%203.63604C7.32387%201.94821%209.61305%201%2012%201C14.3869%201%2016.6761%201.94821%2018.364%203.63604C20.0518%205.32387%2021%207.61305%2021%2010Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%2013C13.6569%2013%2015%2011.6569%2015%2010C15%208.34315%2013.6569%207%2012%207C10.3431%207%209%208.34315%209%2010C9%2011.6569%2010.3431%2013%2012%2013Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a
                >
              </li>
              <li>
                <a
                  href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&amp;body=Olá, gostaria de fazer um orçamento com vocês!!!"
                  ><img
                    alt="Email Icon"
                    src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%204H20C21.1%204%2022%204.9%2022%206V18C22%2019.1%2021.1%2020%2020%2020H4C2.9%2020%202%2019.1%202%2018V6C2%204.9%202.9%204%204%204Z'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%206L12%2013L2%206'%20stroke='%23809DBF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
                  />comercial@prmgravacoes.com.br</a
                >
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
  </main>
  <footer id="footer">
    <div class="_footer_ov6ca_8 container">
      <a href="/"
        ><img
          class="_logo_ov6ca_17"
          alt="PRM TECPRINT"
          src="data:image/png;base64,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"
      /></a>
      <div class="_social_ov6ca_33">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_ov6ca_23">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>
  `
}

function generateNotFoundContent() {
  return `<div id="root">
  <header id="header" class="undefined">
    <nav class="_header_1baxb_25 container">
      <a href="/"
        ><img
          class="_logo_1baxb_41"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20color.png"
      /></a>
      <div class="_menu_1baxb_51">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
      <button class="_menuToggle_1baxb_135" aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <div class="_mobileMenu_1baxb_167">
        <a class="" href="/">Home</a><a class="" href="/sobre">Sobre</a
        ><a class="" href="/servicos">Serviços</a
        ><a class="" href="/prw">PRW Embalagens</a
        ><a class="" href="/fale-conosco">Contato</a>
      </div>
    </nav>
  </header>
  <main style="padding: 20px 0px">
    <div class="_container_119wb_1">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <a class="_button_119wb_55" href="/">Voltar para a Home</a>
    </div>
  </main>
  <footer id="footer">
    <div class="_footer_3lf4h_15 container">
      <a href="/"
        ><img
          class="_logo_3lf4h_33"
          alt="PRM TECPRINT"
          src="/assets/LOGOS%20PRM%20PB.png"
      /></a>
      <div class="_social_3lf4h_65">
        <a
          href="https://www.instagram.com/prm_gravacoes?igsh=MTVwbHYwYWIyemJnMQ=="
          target="_blank"
          ><img
            alt="Logo Instagram"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27.1999%203.7998H11.1999C6.78167%203.7998%203.19995%207.38153%203.19995%2011.7998V27.7998C3.19995%2032.2181%206.78167%2035.7999%2011.1999%2035.7999H27.1999C31.6182%2035.7999%2035.1999%2032.2181%2035.1999%2027.7998V11.7998C35.1999%207.38153%2031.6182%203.7998%2027.1999%203.7998Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.6%2018.7921C25.7975%2020.1236%2025.57%2021.4836%2024.9501%2022.6785C24.3301%2023.8734%2023.3491%2024.8423%2022.1466%2025.4475C20.9442%2026.0528%2019.5816%2026.2634%2018.2525%2026.0496C16.9234%2025.8357%2015.6957%2025.2082%2014.7438%2024.2563C13.7919%2023.3044%2013.1644%2022.0767%2012.9506%2020.7476C12.7367%2019.4185%2012.9473%2018.0559%2013.5526%2016.8534C14.1578%2015.651%2015.1267%2014.67%2016.3216%2014.05C17.5165%2013.43%2018.8764%2013.2026%2020.208%2013.4C21.5663%2013.6015%2022.8238%2014.2344%2023.7947%2015.2053C24.7657%2016.1763%2025.3986%2017.4338%2025.6%2018.7921Z'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M28%2010.9998H28.016'%20stroke='%23F9F9F9'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" /></a
        ><a
          href="https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  "
          target="_blank"
          ><img
            alt="Logo WhatsApp"
            src="data:image/svg+xml,%3csvg%20width='39'%20height='39'%20viewBox='0%200%2039%2039'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.96%2022.3999C26.64%2022.2399%2024.56%2021.2799%2024.24%2021.1199C23.92%2020.9599%2023.6%2020.9599%2023.28%2021.2799C22.96%2021.5999%2022.32%2022.5599%2022%2022.8799C21.84%2023.1999%2021.52%2023.1999%2021.2%2023.0399C20.08%2022.5599%2018.96%2021.9199%2018%2021.1199C17.2%2020.3199%2016.4%2019.3599%2015.76%2018.3999C15.6%2018.0799%2015.76%2017.7599%2015.92%2017.5999C16.08%2017.4399%2016.24%2017.1199%2016.56%2016.9599C16.72%2016.7999%2016.88%2016.4799%2016.88%2016.3199C17.04%2016.1599%2017.04%2015.8399%2016.88%2015.6799C16.72%2015.5199%2015.92%2013.5999%2015.6%2012.7999C15.44%2011.6799%2015.12%2011.6799%2014.8%2011.6799C14.64%2011.6799%2014.32%2011.6799%2014%2011.6799C13.68%2011.6799%2013.2%2011.9999%2013.04%2012.1599C12.08%2013.1199%2011.6%2014.2399%2011.6%2015.5199C11.76%2016.9599%2012.24%2018.3999%2013.2%2019.6799C14.96%2022.2399%2017.2%2024.3199%2019.92%2025.6C20.72%2025.92%2021.36%2026.24%2022.16%2026.4C22.96%2026.72%2023.76%2026.72%2024.72%2026.56C25.84%2026.4%2026.8%2025.6%2027.44%2024.6399C27.76%2023.9999%2027.76%2023.3599%2027.6%2022.7199C27.6%2022.7199%2027.28%2022.5599%2026.96%2022.3999ZM30.96%207.83992C24.72%201.59991%2014.64%201.59991%208.39997%207.83992C3.27998%2012.9599%202.31998%2020.7999%205.83997%2027.04L3.59998%2035.2L12.08%2032.96C14.48%2034.24%2017.04%2034.88%2019.6%2034.88C28.4%2034.88%2035.4399%2027.84%2035.4399%2019.0399C35.5999%2014.8799%2033.84%2010.8799%2030.96%207.83992ZM26.64%2030.24C24.56%2031.52%2022.16%2032.32%2019.6%2032.32C17.2%2032.32%2014.96%2031.68%2012.88%2030.56L12.4%2030.24L7.43997%2031.52L8.71997%2026.72L8.39997%2026.24C4.55997%2019.8399%206.47997%2011.8399%2012.72%207.83992C18.96%203.83991%2026.96%205.91992%2030.8%2011.9999C34.64%2018.2399%2032.88%2026.4%2026.64%2030.24Z'%20fill='%23F9F9F9'/%3e%3c/svg%3e"
        /></a>
      </div>
      <div class="_text_3lf4h_45">
        <p>© 2025</p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</div>
`
}

const routes = [
  {
    path: '/',
    title: 'Home - PRM Gravações',
    description:
      'Transforme sua marca com a PRM TECPRINT. Especialistas em gravações personalizadas, impressão digital, silk screen, laser e embalagens. Qualidade e excelência para seus projetos.',
    content: generateHomeContent()
  },
  {
    path: '/sobre',
    title: 'Sobre - PRM Gravações',
    description:
      'Conheça a PRM TECPRINT, empresa especializada em gravações personalizadas com anos de experiência no mercado. Qualidade e inovação em cada projeto.',
    content: generateAboutContent()
  },
  {
    path: '/servicos',
    title: 'Serviços - PRM Gravações',
    description:
      'Conheça todos os nossos serviços: silk screen, transfer, laser, DTF, digital, sublimação, tampografia e muito mais. Soluções completas em gravações.',
    content: generateServicesContent()
  },
  {
    path: '/gravacao-em-baixo-relevo',
    title: 'Gravação em Baixo Relevo - PRM Gravações',
    description:
      'Serviço de gravação em baixo relevo com alta qualidade e precisão. Ideal para personalização de produtos e materiais diversos.',
    content: generateServiceBaixoRelevoContent(
      'Gravação em Baixo Relevo',
      'Serviço de gravação em baixo relevo com alta qualidade e precisão. Ideal para personalização de produtos e materiais diversos.'
    )
  },
  {
    path: '/dtf',
    title: 'DTF - PRM Gravações',
    description:
      'Impressão DTF (Direct to Film) com qualidade superior. Tecnologia moderna para personalização de tecidos e materiais diversos.',
    content: generateServiceDTFContent(
      'DTF - PRM Gravações',
      'Impressão DTF (Direct to Film) com qualidade superior. Tecnologia moderna para personalização de tecidos e materiais diversos.'
    )
  },
  {
    path: '/gravacao-a-laser',
    title: 'Gravação a Laser - PRM Gravações',
    description:
      'Gravação a laser de alta precisão para diversos materiais. Tecnologia avançada para resultados perfeitos e duradouros.',
    content: generateServiceLaserContent(
      'Gravação a Laser',
      'Gravação a laser de alta precisão para diversos materiais. Tecnologia avançada para resultados perfeitos e duradouros.'
    )
  },
  {
    path: '/transfer',
    title: 'Transfer - PRM Gravações',
    description:
      'Serviço de transfer com qualidade profissional. Ideal para personalização de camisetas, uniformes e diversos produtos têxteis.',
    content: generateServiceTransferContent(
      'Transfer',
      'Serviço de transfer com qualidade profissional. Ideal para personalização de camisetas, uniformes e diversos produtos têxteis.'
    )
  },
  {
    path: '/gravacao-digital-uv',
    title: 'Impressão Digital - PRM Gravações',
    description:
      'Impressão digital de alta qualidade para diversos materiais. Cores vibrantes e definição perfeita em todos os projetos.',
    content: generateServiceDigitalContent(
      'Digital UV',
      'Impressão digital de alta qualidade para diversos materiais. Cores vibrantes e definição perfeita em todos os projetos.'
    )
  },
  {
    path: '/gravacao-digital-uv-360',
    title: 'Digital 360° - PRM Gravações',
    description:
      'Impressão digital 360° para personalização completa de produtos cilíndricos. Tecnologia inovadora e resultados excepcionais.',
    content: generateServiceDigital360Content(
      'Digital UV 360°',
      'Impressão digital 360° para personalização completa de produtos cilíndricos. Tecnologia inovadora e resultados excepcionais.'
    )
  },
  {
    path: '/silk',
    title: 'Silk Screen - PRM Gravações',
    description:
      'Serigrafia (silk screen) profissional com tintas de alta qualidade. Ideal para grandes tiragens e durabilidade superior.',
    content: generateServiceSilkContent(
      'Silk Screen',
      'Serigrafia (silk screen) profissional com tintas de alta qualidade. Ideal para grandes tiragens e durabilidade superior.'
    )
  },
  {
    path: '/sublimacao',
    title: 'Sublimação - PRM Gravações',
    description:
      'Sublimação com cores vibrantes e duradouras. Perfeita para personalização de produtos em poliéster e materiais especiais.',
    content: generateServiceSublimacaoContent(
      'Sublimação',
      'Sublimação com cores vibrantes e duradouras. Perfeita para personalização de produtos em poliéster e materiais especiais.'
    )
  },
  {
    path: '/tampografia',
    title: 'Tampografia - PRM Gravações',
    description:
      'Tampografia de precisão para objetos irregulares e superfícies curvas. Qualidade profissional em cada impressão.',
    content: generateServiceTampografiaContent(
      'Tampografia',
      'Tampografia de precisão para objetos irregulares e superfícies curvas. Qualidade profissional em cada impressão.'
    )
  },
  {
    path: '/prw',
    title: 'PRW Embalagens - PRM Gravações',
    description:
      'PRW Embalagens - Soluções completas em embalagens personalizadas. Qualidade e inovação para sua marca.',
    content: generatePrwContent()
  },
  {
    path: '/fale-conosco',
    title: 'Fale Conosco - PRM Gravações',
    description:
      'Entre em contato com a PRM TECPRINT. Tire suas dúvidas e solicite orçamentos. Estamos prontos para atender você.',
    content: generateContactContent()
  },
  {
    path: '/404',
    title: 'Página Não Encontrada - PRM Gravações',
    description: 'A página que você está procurando não existe.',
    content: generateNotFoundContent()
  }
]

// Aguarda um pouco para garantir que o build terminou
await new Promise(resolve => setTimeout(resolve, 1000))

const distPath = path.join(__dirname, 'dist')
const indexPath = path.join(distPath, 'index.html')

console.log('🔍 Verificando se o build foi concluído...')

if (!fs.existsSync(distPath)) {
  console.error('❌ Pasta dist/ não encontrada. Execute o build primeiro.')
  process.exit(1)
}

if (!fs.existsSync(indexPath)) {
  console.error(
    '❌ Arquivo dist/index.html não encontrado. Verifique se o build foi concluído.'
  )
  process.exit(1)
}

console.log('✅ Build encontrado, iniciando pré-renderização SSR completa...')

const htmlTemplate = fs.readFileSync(indexPath, 'utf-8')

// Função para criar HTML com conteúdo pré-renderizado
function createPrerenderedHTML(route) {
  let html = htmlTemplate

  // Substitui o title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`)

  // Substitui ou adiciona meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /name="description"\s+content="[^"]*"/i,
      `name="description" content="${route.description}"`
    )
  } else {
    html = html.replace(
      /<meta\s+charset="UTF-8"\s*\/?>/i,
      `<meta charset="UTF-8">\n    <meta name="description" content="${route.description}">`
    )
  }

  // Substitui ou adiciona canonical URL
  const canonicalUrl = `https://prmgravacoes.com.br${
    route.path === '/' ? '' : route.path
  }`
  if (html.includes('rel="canonical"')) {
    html = html.replace(
      /href="[^"]*"\s+rel="canonical"/i,
      `href="${canonicalUrl}" rel="canonical"`
    )
    html = html.replace(
      /rel="canonical"\s+href="[^"]*"/i,
      `rel="canonical" href="${canonicalUrl}"`
    )
  } else {
    html = html.replace(
      /<link\s+rel="icon"/i,
      `<link rel="canonical" href="${canonicalUrl}">\n    <link rel="icon"`
    )
  }

  // Substitui o div root vazio pelo conteúdo renderizado
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${route.content}</div>`
  )

  return html
}

// Gera HTML para cada rota
for (const route of routes) {
  try {
    console.log(`🔄 Pré-renderizando: ${route.path}...`)

    // Cria o HTML completo
    const html = createPrerenderedHTML(route)

    // Cria diretório se necessário
    if (route.path !== '/') {
      // Cria um arquivo como /dist/sobre.html, /dist/servicos.html, etc.
      fs.writeFileSync(path.join(distPath, `${route.path}.html`), html)
    } else {
      // A página inicial continua sendo /dist/index.html
      fs.writeFileSync(indexPath, html)
    }

    console.log(`✅ Pré-renderizado: ${route.path}`)
  } catch (error) {
    console.error(`❌ Erro ao pré-renderizar ${route.path}:`, error.message)
  }
}

console.log('🎉 Pré-renderização SSR completa concluída com sucesso!')
console.log(
  '📁 Cada página agora tem HTML completo com todo o conteúdo renderizado!'
)
console.log('🔍 Teste com Ctrl+U e verá todo o conteúdo da página no HTML!')
console.log('🚀 Pronto para deploy no Cloudflare Pages!')
