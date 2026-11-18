class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header class="header">
    <nav class="nav">
      <a class="brand" href="#top">
        <img height="45" src="image/logo-black.svg" alt="FMoura Advogados">
      </a>
      <div class="menu">
        <a href="#quem-somos">Quem somos</a>
        <div class="line divider"></div>
        <a href="#profissionais">Profissionais</a>
        <div class="line divider"></div>
        <a href="#atuacao">Atuação</a>
        <div class="line divider"></div>
        <a href="#contato">Contato</a>
        <div class="redes">
          <a href="https://www.linkedin.com/company/fmoura-advogados/" target="_blank" rel="noopener noreferrer"><img class="ico-rede" data-rede="linkedin" width="28" height="28" src="image/linkedin-white.svg" alt="LinkedIn"></a>
          <a href="https://www.instagram.com/fmouraadvogados/" target="_blank" rel="noopener noreferrer"><img class="ico-rede" data-rede="instagram" width="28" height="28" src="image/instagram-white.svg" alt="Instagram"></a>
        </div>
        <!-- Espaço reservado para o seletor de idioma (oculto até haver versão em outro idioma) -->
        <div class="idioma" hidden></div>
      </div>
    </nav>
    <!-- Barra do celular/tablet: logo completo + botão do menu, com fundo -->
    <div class="mob">
      <a class="mob-brand" href="#top">
        <img height="28" src="image/logo-white.svg" alt="FMoura Advogados">
      </a>
      <button type="button" class="btn" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mob">
        <img height="30" src="image/ico-bar.svg" alt="">
      </button>
    </div>
    <div class="menu-mob" id="menu-mob" aria-hidden="true">
      <a href="#top">
        <img height="30" src="image/logo-white.svg" alt="FMoura Advogados">
      </a>
      <a href="#quem-somos">Quem somos</a>
      <a href="#profissionais">Profissionais</a>
      <a href="#atuacao">Atuação</a>
      <a href="#contato">Contato</a>
      <div class="redes">
        <a href="https://www.linkedin.com/company/fmoura-advogados/" target="_blank" rel="noopener noreferrer"><img width="28" height="28" src="image/linkedin-white.svg" alt="LinkedIn"></a>
        <a href="https://www.instagram.com/fmouraadvogados/" target="_blank" rel="noopener noreferrer"><img width="28" height="28" src="image/instagram-white.svg" alt="Instagram"></a>
      </div>
      <!-- Espaço reservado para o seletor de idioma -->
      <div class="idioma" hidden></div>
      <button type="button" class="btn" aria-label="Fechar menu">
        <img height="30" src="image/ico-close.svg" alt="">
      </button>
    </div>
  </header>
`;
  }
}

customElements.define('site-header', SiteHeader);
