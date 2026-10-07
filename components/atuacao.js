class SiteAtuacao extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="atuacao" >
    <div class="container atuacao">
      <div class="areas">
        <h3>Atuação</h3>
        <br>
        <p>
          Nosso time trabalha para entregar soluções estratégicas com integração de inteligências.
          <br><br>
          O nosso atendimento é personalizado, simplificado e eficiente, com valor agregado e justo.
        </p>
        <div class="area-list">
          <p class="atua1">Direito Tributário</p>
          <div class="atuaInfotribu">
            <p>
              A prática tributária do FMoura Advogados atua em consultoria, contencioso administrativo e judicial, assessorando seus clientes com ética, transparência & compromisso. Nossa área tributária abrange:
            </p>
            <ol>
              <li>Elaboração e patrocínio de ações judiciais; preparação de defesas e recursos em processos administrativos de cobrança de créditos tributários. Representação e atuação nas diversas Cortes Judiciais e Administrativas do país, incluindo atuação intensa perante os Tribunais Superiores;</li>

              <li>Revisão de procedimentos fiscais (due diligence inclusive) para fins de redução de passivos a recolher e identificação de créditos passíveis de recuperação;</li>

              <li>Consultoria para adoção das melhores estruturas que afastem riscos de autuação e permitam redução da carga tributária em razão de eventos empresariais relevantes, tais como operações industriais e comerciais, relações contratuais, societárias e trabalhistas, transferências patrimoniais e remessas financeiras internas e internacionais;</li>

              <li>Consultoria aduaneira relacionada aos procedimentos de importação e exportação, de obtenção e fruição de regimes aduaneiros especiais ou elaboração de estruturas que envolvam diretamente as atividades de comércio exterior, com a redução de riscos ou contingências. Atuação ampla e especializada na elaboração e condução de discussões administrativas e judiciais envolvendo matéria aduaneira;</li>

              <li>Elaboração de consultas formais perante os órgãos da administração tributária, objetivando a adequação dos procedimentos contábeis, fiscais e aduaneiros adotados pelos clientes à legislação vigente;</li>

              <li>Elaboração e acompanhamento de regimes especiais;</li>

              <li>Renovação de certidões de regularidade fiscal, abrangendo o monitoramento próximo (inclusive em tempo real, se autorizado pelo cliente) quanto ao surgimento e à evolução de pendências fiscais e de processos administrativos e judiciais relacionados a débitos tributários;</li>

              <li>Monitoramento diário da legislação tributária, em vigência ou em fase de deliberação, e sua imediata interpretação e aplicação em relação aos assuntos de interesse dos clientes;</li>

              <li>Análise e revisão dos procedimentos fiscais diante da legislação e das orientações fazendárias e jurisprudenciais, permitindo a redução do passivo a recolher e a identificação de créditos a recuperar em razão de pagamentos realizados de forma indevida;</li>

              <li>Acompanhamento de procedimentos de fiscalização tributária ou aduaneira em curso com o objetivo de conferir efetividade aos esclarecimentos prestados pelos clientes e prevenir eventuais contingências indevidas.</li>

            </ol>
          </div>
        </div>
      </div>
      <div class="imgAtuacao">
        <img src="image/atuacao-img.jpg" alt="Equipe de atuação do escritório">
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-atuacao', SiteAtuacao);
