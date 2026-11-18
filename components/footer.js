class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-id">
        <span>Ferreira de Moura Sociedade de Advogados · OAB/SP nº 16.808</span>
        <span>© 2026 FMoura Advogados. Todos os direitos reservados.</span>
      </div>
      <nav class="footer-links" aria-label="Privacidade e documentos legais">
        <a href="mailto:privacidade@fmouraadvogados.com">privacidade@fmouraadvogados.com</a>
        <a href="aviso-de-privacidade.html">Aviso de Privacidade</a>
        <a href="termos-de-uso.html">Termos de uso</a>
      </nav>
    </div>
  </footer>
`;
  }
}

customElements.define('site-footer', SiteFooter);
