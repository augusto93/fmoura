class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <span>© 2026 FMoura Advogados. Todos os direitos reservados.</span>
      <nav class="footer-links" aria-label="Documentos legais">
        <a href="aviso-de-privacidade.html">Aviso de Privacidade</a>
        <a href="termos-de-uso.html">Termos de uso</a>
      </nav>
    </div>
  </footer>
`;
  }
}

customElements.define('site-footer', SiteFooter);
