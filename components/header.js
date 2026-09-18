class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header class="header">
    <nav class="nav">
      <a class="brand" href="#top">
        <img height="45" src="image/logo-black.svg">
      </a>
      <div class="menu">
        <a href="#quem-somos">Quem somos</a>
        <div class="line" style="background-color: var(--white);width: 1px; height: 30px;"></div>
        <a href="#socios">Sócio</a>
        <div class="line" style="background-color: var(--white);width: 1px;height: 30px"></div>
        <a href="#atuacao">Atuação</a>
        <div class="line" style="background-color: var(--white);width: 1px;height: 30px"></div>
        <a href="#contato">Contato</a>
        <a href="https://www.linkedin.com/company/fmouravaz-advogados/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><img width="28px"  src="image/linkedin-white.svg" alt="Linkedin"></a>
      </div>
    </nav>
    <div class="mob">
      <img class="btn" height="30" src="image/ico-bar.svg">
    </div>
    <div class="menu-mob">
      <a href="#top">
        <img height="30" src="image/logo-white.svg">
      </a>
      <a href="#quem-somos">Quem somos</a>
      <a href="#socios">Sócio</a>
      <a href="#atuacao">Atuação</a>
      <a href="#contato">Contato</a>
      <a href="#" target="_blank" rel="noopener noreferrer"><img width="28px"  src="image/linkedin-white.svg" alt="Linkedin"></a>
      <img class="btn" height="30" src="image/ico-close.svg">
    </div>
  </header>
`;
  }
}

customElements.define('site-header', SiteHeader);
