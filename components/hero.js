class SiteHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="top" class="hero">
    <div class="hero-inner container">
      <div class="kicker">
          <div class="words">
            <div>Ética,</div>
            <div>Transparência &</div>
            <div>Compromisso</div>
          </div>
      </div>
      <div class="hero-svg">
        <img src="image/logo-hero.svg" alt="Fmoura Vaz">
         <a href="#quem-somos">
          <img class="blink" width="60px" src="image/arrow-down.svg" alt="Saiba mais">
        </a>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-hero', SiteHero);
