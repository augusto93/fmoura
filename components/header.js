class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header class="header">
    <nav class="nav">
      <a class="brand" href="#top">
        <img height="45" src="image/logo-black.svg" alt="FMoura Vaz Advogados">
      </a>
      <div class="menu">
        <a href="#quem-somos">Quem somos</a>
        <div class="line divider"></div>
        <a href="#socios">Sócio</a>
        <div class="line divider"></div>
        <a href="#atuacao">Atuação</a>
        <div class="line divider"></div>
        <a href="#contato">Contato</a>
        <a href="https://www.linkedin.com/company/fmoura-advogados/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><img width="28px"  src="image/linkedin-white.svg" alt="Linkedin"></a>
      </div>
    </nav>
    <div class="mob">
      <button type="button" class="btn" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-mob">
        <img height="30" src="image/ico-bar.svg" alt="">
      </button>
    </div>
    <div class="menu-mob" id="menu-mob" aria-hidden="true">
      <a href="#top">
        <img height="30" src="image/logo-white.svg" alt="FMoura Vaz Advogados">
      </a>
      <a href="#quem-somos">Quem somos</a>
      <a href="#socios">Sócio</a>
      <a href="#atuacao">Atuação</a>
      <a href="#contato">Contato</a>
      <a href="#" target="_blank" rel="noopener noreferrer"><img width="28px"  src="image/linkedin-white.svg" alt="Linkedin"></a>
      <button type="button" class="btn" aria-label="Fechar menu">
        <img height="30" src="image/ico-close.svg" alt="">
      </button>
    </div>
  </header>
`;
  }
}

customElements.define('site-header', SiteHeader);
