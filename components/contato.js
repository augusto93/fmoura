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
              <a href="mailto:contato@fmouraadvogados.com"><img src="image/ico-cont3.png" alt="E-mail"></a>
              <a href="https://ouvidordigital.com.br/" target="_blank" rel="noopener noreferrer"><img src="image/ico-cont4.png" alt="Ouvidoria"></a>
            </div>
            <div class="contato-dados">
              <div>SP<br>Av. Moema, 170, cj. 134<br>Moema, SP<br>CEP 04077-020<br>+55 11 3045 6948</div>
            </div>
            <div>
              <img class="selo-img" src="image/selo.png" alt="Selo institucional FMoura Advogados">
            </div>
          </div>
          <div class="contato-container">
            <div id="mapa" class="mapa">
              <iframe
                id="iframeMapa"
                src="https://www.google.com/maps?q=Av.+Moema,+170+-+Moema,+S%C3%A3o+Paulo+-+SP,+04077-020&output=embed"
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
