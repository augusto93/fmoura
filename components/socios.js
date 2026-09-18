class SiteSocios extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="socios">
    <div class="socios">
      <h3 class="content">
        Sócio
      </h3>
      <div class="socios-content">
        <div class="partner-text">
          <img class="partner-img" src="image/moura.jpg" alt="Alexandre C. F. Moura">
          <div class="more">
            <div class="more-icons">
              <img src="image/icom1.png" >
              <img src="image/icom2.png" >
              <img src="image/icom3.png" >
            </div>
            <a style="text-decoration: none;" href="https://www.linkedin.com/in/alexandrecfmoura/" target="_blank" rel="noopener noreferrer">
              <h4>Alexandre C. F. Moura</h4>
            </a>
            <p>Bacharel em Direito pela Universidade Federal do Estado do Rio de Janeiro (2007); Pós-Graduado em Direito Tributário Constitucional pela PUC/SP (2012)</p>
            <div class="moreInfo">
              <p style="font-size: 1rem; font-weight: 400;">
                Formação acadêmica: Bacharel em Direito pela Universidade Federal do Estado do Rio de Janeiro (2007): Pós-Graduado em Direito Tributário Constitucional pela PUC/SP (2012)
                e em Direito Fiscal pela Faculdade de Direito da Universidade de Coimbra (2013); MBA em Finanças pela FUNDACE/USP (2022):
                Cursos em Conselho Fiscal na Prática (2024), Direito Aduaneiro para Tributaristas (2022), Planejamento Estratégico para Escritório de Advocacia (2021),
                Planejamento Tributário e Gestão no Terceiro Setor (2015), Direito Societário e Mercado de Capitais (2013), Aspectos
                Práticos de Preços de Transferência (2011), Planejamento Tributário e Tributação Internacional (2008) e Contabilidade Avançada para Advogados (2008).
                <br><br>
                Inscrito na OAB/RJ sob o n° 149.967 e na OAB/SP sob o n° 291.470
                <br><br>
                Email: <a href="mailto:moura@fmouravaz.com.br">moura@fmouravaz.com.br</a>
              </p>
              <p>IDIOMAS<br>Inglês</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-socios', SiteSocios);