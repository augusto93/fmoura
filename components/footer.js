class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="footer">
    <div style="max-width:var(--max);margin:0 auto;display:flex;justify-content:center;gap:20px;flex-wrap:wrap">
      <span>© 2026 FMoura Advogados. Todos os direitos reservados.</span>
    </div>
  </footer>
`;
  }
}

customElements.define('site-footer', SiteFooter);
