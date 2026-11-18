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
              <a href="tel:+551130456948"><img loading="lazy" decoding="async" src="image/ico-cont1.png" alt="Telefone"></a>
              <!-- WhatsApp: oculto até o novo número ser definido. Para exibir, trocar o número no link e remover o atributo hidden. -->
              <a href="https://wa.me/551130456948" target="_blank" rel="noopener noreferrer" hidden><img loading="lazy" decoding="async" src="image/ico-cont2.png" alt="WhatsApp"></a>
              <a href="mailto:contato@fmouraadvogados.com"><img loading="lazy" decoding="async" src="image/ico-cont3.png" alt="E-mail"></a>
              <a href="mailto:ouvidoria@fmouraadvogados.com"><img loading="lazy" decoding="async" src="image/ico-cont4.png" alt="Ouvidoria"></a>
            </div>
            <div class="contato-dados">
              <div>SP<br>Av. Moema, 170, cj. 134<br>Moema, SP<br>CEP 04077-020<br>+55 11 3045 6948</div>
            </div>
            <!-- Selo Carbon Free: oculto a pedido do cliente. Para exibir, remover o atributo hidden. -->
            <div class="selo-contato" hidden>
              <img loading="lazy" decoding="async" class="selo-img" src="image/selo.png" alt="Selo Carbon Free">
            </div>
          </div>
          <div class="contato-container">
            <div id="mapa" class="mapa"
                 data-mapa-src="https://www.google.com/maps?q=Av.+Moema,+170+-+Moema,+S%C3%A3o+Paulo+-+SP,+04077-020&output=embed"
                 data-mapa-titulo="Mapa: Av. Moema, 170 - Moema, São Paulo">
              <div class="mapa-aviso">
                <p>Av. Moema, 170, cj. 134 · Moema, São Paulo</p>
                <button type="button" class="mapa-carregar">Carregar mapa</button>
                <p class="mapa-nota">O mapa é fornecido pelo Google e só carrega depois do clique.</p>
              </div>
            </div>
            <a class="mapa-link" href="https://www.google.com/maps/search/?api=1&query=Av.+Moema,+170+-+Moema,+S%C3%A3o+Paulo+-+SP,+04077-020" target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-contato', SiteContato);
