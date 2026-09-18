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
              <a href="tel:+55 11 3045 6948"><img src="image/ico-cont1.png"></a>
              <a href="https://wa.me/55113045694" target="_blank" rel="noopener noreferrer"><img src="image/ico-cont2.png"></a>
              <a href="mailto:contato@fmouravaz.com.br"><img src="image/ico-cont3.png"></a>
              <a href="https://ouvidordigital.com.br/" target="_blank" rel="noopener noreferrer"><img src="image/ico-cont4.png"></a>
            </div>
            <div class="contato-dados">
              <div>SP<br>R. Gomes de Carvalho, 1581, cj.1201<br>Vila Olímpia, SP<br>CEP 04547-006<br>+55 11 3045 6948</div>
              <div>RJ<br>Pr. de Botafogo, 228, 16º andar<br>Botafogo, RJ<br>CEP 22250-906<br>+55 21 3736 3624</div>
            </div>
            <div>
              <img src="image/selo.png" >
            </div>
          </div>
          <div class="contato-container">
            <div class="btn-container">
              <button id="btn1" class="ativo" onclick="mostrarMapa(1)">SP</button>
              <button id="btn2" onclick="mostrarMapa(2)">RJ</button>
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
  }
}

customElements.define('site-contato', SiteContato);
