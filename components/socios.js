class SiteSocios extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="profissionais">
    <div class="socios">
      <h3 class="content">
        Profissionais
      </h3>
      <div class="socios-content">
        <div class="profissionais-viewport">
          <div class="profissionais-track">
            <div class="partner-text profissional">
              <img class="partner-img" src="image/moura.jpg" alt="Alexandre C. F. Moura">
              <div class="more">
                <div class="more-icons">
                  <img src="image/icom1.png" alt="Símbolo FMoura Advogados">
                  <img src="image/icom2.png" alt="Prêmio Análise Advocacia 500">
                  <img src="image/icom3.png" alt="Reconhecimento Chambers and Partners">
                </div>
                <a style="text-decoration: none;" href="https://www.linkedin.com/in/alexandrecfmoura/" target="_blank" rel="noopener noreferrer">
                  <h4>Alexandre C. F. Moura</h4>
                </a>
                <p>Bacharel em Direito pela Universidade Federal do Estado do Rio de Janeiro (2007); pós-graduado em Direito Tributário Constitucional pela PUC/SP (2012)</p>
                <div class="moreInfo">
                  <p style="font-size: 1rem; font-weight: 400;">
                    Formação acadêmica: Bacharel em Direito pela Universidade Federal do Estado do Rio de Janeiro (2007); pós-graduado em Direito Tributário Constitucional pela PUC/SP (2012)
                    e em Direito Fiscal pela Faculdade de Direito da Universidade de Coimbra (2013); MBA em Finanças pela FUNDACE/USP (2022);
                    cursos em Conselho Fiscal na Prática (2024), Direito Aduaneiro para Tributaristas (2022), Planejamento Estratégico para Escritório de Advocacia (2021),
                    Planejamento Tributário e Gestão no Terceiro Setor (2015), Direito Societário e Mercado de Capitais (2013), Aspectos
                    Práticos de Preços de Transferência (2011), Planejamento Tributário e Tributação Internacional (2008) e Contabilidade Avançada para Advogados (2008).
                    <br><br>
                    Inscrito na OAB/RJ sob o nº 149.967 e na OAB/SP sob o nº 291.470
                    <br><br>
                    E-mail: <a href="mailto:moura@fmouraadvogados.com">moura@fmouraadvogados.com</a>
                  </p>
                  <p>IDIOMAS<br>Inglês</p>
                </div>
              </div>
            </div>
            <div class="partner-text profissional">
              <img class="partner-img" src="image/moura.jpg" alt="Nome do Profissional 2">
              <div class="more">
                <div class="more-icons">
                  <img src="image/icom1.png" alt="Símbolo FMoura Advogados">
                </div>
                <h4>Nome do Profissional 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet (2010); Donec ullamcorper nulla non metus auctor fringilla (2015)</p>
                <div class="moreInfo">
                  <p style="font-size: 1rem; font-weight: 400;">
                    Formação acadêmica: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.
                    Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                    Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.
                    <br><br>
                    Inscrito na OAB/SP sob o nº 000.000
                    <br><br>
                    E-mail: <a href="mailto:contato@fmouraadvogados.com">contato@fmouraadvogados.com</a>
                  </p>
                  <p>IDIOMAS<br>Inglês</p>
                </div>
              </div>
            </div>
            <div class="partner-text profissional">
              <img class="partner-img" src="image/moura.jpg" alt="Nome do Profissional 3">
              <div class="more">
                <div class="more-icons">
                  <img src="image/icom1.png" alt="Símbolo FMoura Advogados">
                </div>
                <h4>Nome do Profissional 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet (2010); Donec ullamcorper nulla non metus auctor fringilla (2015)</p>
                <div class="moreInfo">
                  <p style="font-size: 1rem; font-weight: 400;">
                    Formação acadêmica: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum.
                    Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.
                    Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.
                    <br><br>
                    Inscrito na OAB/SP sob o nº 000.000
                    <br><br>
                    E-mail: <a href="mailto:contato@fmouraadvogados.com">contato@fmouraadvogados.com</a>
                  </p>
                  <p>IDIOMAS<br>Inglês</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profissionais-nav">
          <button type="button" class="prof-prev" aria-label="Profissional anterior"><img src="image/arrow-left.svg" alt=""></button>
          <span class="prof-contador">1 / 3</span>
          <button type="button" class="prof-next" aria-label="Próximo profissional"><img src="image/arrow-right.svg" alt=""></button>
        </div>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-socios', SiteSocios);