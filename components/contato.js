class SiteContato extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="contato">
    <div class="contato">
      <div class="container">
        <div class="contato-content">
          <div class="contato-container">
            <h3>Contato</h3>
            <div class="ico-content">
              <a href="tel:+55 11 3045 6948"><img src="image/ico-cont1.png" alt="Telefone"></a>
              <a href="https://wa.me/55113045694" target="_blank" rel="noopener noreferrer"><img src="image/ico-cont2.png" alt="WhatsApp"></a>
              <a href="mailto:contato@fmoura.com.br"><img src="image/ico-cont3.png" alt="E-mail"></a>
              <a href="https://ouvidordigital.com.br/" target="_blank" rel="noopener noreferrer"><img src="image/ico-cont4.png" alt="Ouvidoria"></a>
            </div>
            <div class="contato-dados">
              <div>SP<br>R. Gomes de Carvalho, 1581, cj.1201<br>Vila Olímpia, SP<br>CEP 04547-006<br>+55 11 3045 6948</div>
              <div>RJ<br>Pr. de Botafogo, 228, 16º andar<br>Botafogo, RJ<br>CEP 22250-906<br>+55 21 3736 3624</div>
            </div>
            <div>
              <img class="selo-img" src="image/selo.png" alt="Selo institucional FMoura Vaz Advogados">
            </div>
          </div>
          <div class="contato-container">
            <div class="btn-container">
              <button id="btn1" class="ativo">SP</button>
              <button id="btn2">RJ</button>
            </div>
            <div id="mapa" class="mapa">
              <iframe
                id="iframeMapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2324598673927!2d-46.690781523923505!3d-23.595994678776012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57486e2c06b7%3A0x6fbec7cfedadfa5f!2sR.%20Gomes%20de%20Carvalho%2C%201581%20-%20cj.%201201%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-006!5e0!3m2!1spt-BR!2sbr!4v1757117063375!5m2!1spt-BR!2sbr"
                width="100%" height="100%" frameborder="0">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

    const btn1 = this.querySelector('#btn1');
    const btn2 = this.querySelector('#btn2');
    const iframeMapa = this.querySelector('#iframeMapa');

    if (!btn1 || !btn2 || !iframeMapa) return;

    const mapas = {
      1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2324598673927!2d-46.690781523923505!3d-23.595994678776012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57486e2c06b7%3A0x6fbec7cfedadfa5f!2sR.%20Gomes%20de%20Carvalho%2C%201581%20-%20cj.%201201%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-006!5e0!3m2!1spt-BR!2sbr!4v1757117063375!5m2!1spt-BR!2sbr",
      2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.992392678386!2d-43.18331312393935!3d-22.9505072792243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff1202d0eab%3A0x53349276bc3d0dd4!2sCentro%20Empresarial%20Rio%20-%20Praia%20de%20Botafogo%2C%20228%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022250-040!5e0!3m2!1spt-BR!2sbr!4v1757116942329!5m2!1spt-BR!2sbr"
    };

    const mostrarMapa = (opcao) => {
      iframeMapa.src = mapas[opcao] || mapas[1];
      btn1.classList.toggle('ativo', opcao === 1);
      btn2.classList.toggle('ativo', opcao === 2);
    };

    btn1.addEventListener('click', () => mostrarMapa(1));
    btn2.addEventListener('click', () => mostrarMapa(2));
  }
}

customElements.define('site-contato', SiteContato);
