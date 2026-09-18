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
          O nosso atendimento é personalizado, simplificado e eficiente, com valor agregado e justo.</p>
        </p>
        <div class="area-list">
          <p class="atua1">Direito Tributário</p>
          <div class="atuaInfotribu">
            <p>
              A prática tributária FMoura Vaz atua em consultoria, contencioso administrativo e judicial, assessorando seus clientes com ética, transparência & compromisso. Nossa área tributária abrange:
            </p>
            <ol>
              <li>Elaboração e patrocínio de ações judiciais; preparação de defesas e recursos em processos administrativos de cobrança de créditos tributários. Representação e atuacão nas diversas Cortes Judiciais e Administrativas do país, incluindo atuação intensa perante os Tribunais Superiores;</li>

              <li>Revisão de procedimentos tiscais (due diligence inclusive) para fins de reduçao de passivos a recolher e identificação de créditos passíveis de recuperação;</li>

              <li>Consultoria para adoção das melhores estruturas que afastem riscos de autuacão e permitam redução da carga tributária em razão de eventos empresariais relevantes, tais como operações industriais e comerciais, relações, contratuais, societárias e trabalhistas, transferências patrimoniais e remessas financeiras internas e internacionais;</li>

              <li>Consultoria aduaneira relacionada aos procedimentos de importação e exportação, de obtenção e fruição de regimes aduaneiros especiais ou elaboração de estruturas que envolvam diretamente as atividades de comercio exterior, com a redução de riscos ou contingências. Atuação ampla e especializada na elaboraçao e condução de discussões administrativas e judiciais envolvendo matéria aduaneira;</li>

              <li>Elaboração de consultas formais perante os órgãos da administração tributária, obietivando d adequação dos procedimentos contábeis, fiscais e aduaneiros adotados pelos clientes à legislação vigente;</li>

              <li>Elaboração e acompanhamento de regimes especiais;</li>

              <li>Renovação de certidões de regularidade fiscal, abrangendo o monitoramento próximo (inclusive em temno real se autorizado nelo cliente) quanto ao suraimento e evolucão de pendências fiscais e de processos administrativos e judiciais relacionados a débitos tributários;</li>

              <li>Monitoramento diário da legislação tributária, em vigência ou em fase de deliberação. e sua imediato interoretacão e aolicacão em relacão aos assuntos de interesse dos clientes;</li>

              <li>Análise e revisão dos procedimentos fiscais diante da leaislacão e das orientacões fazendárias e jurisorudenciais. permitindo a reducão do passivo a recolher e a identificacão de créditos a recuperan em razão de pagamentos realizados de forma indevida;</li>

              <li>Acomnanhamento de procedimentos de fiscalizacão tributária ou aduaneira em curso com o objetivo de conferir efetividade aos esclarecimentos prestados pelos clientes e prevenir eventuais contingências indevidas.</li>

            </ol>
            <div class="setaAtribu"><img width="30px" src="image/arrow-atua.svg"></div>
          </div>
          <p class="atua2">Direito Trabalhista</p>
          <div class="atuaInfotribu">
            <ol>
              <li>Consultoria para adequação das operações dos clientes à legislação trabalhista, inclusive em questões estratégicas como políticas de contratação, retenção, demissão e transferência de executivos, contratos de trabalho e planos de benefícios, de opção de compra de ações e de participação nos lucros ou resultados;</li>

              <li>Revisão de rotinas trabalhistas;</li>

              <li>Auxílio em due diligences;</li>

              <li>Condução de negociações com empregados, associações, sindicatos ou órgãos públicos;</li>

              <li>Condução de reclamações trabalhistas e ações civis públicas.</li>
            </ol>
            <div class="setaAtribu"><img width="30px" src="image/arrow-atua.svg"></div>
          </div>
          <p class="atua3">Direito Cível</p>
          <div class="atuaInfotribu">
            <p>
              Contencioso Cível e Arbitragem
            </p>
            <ol>
              <li>Representação de clientes dos mais variados setores da economia em litígios de natureza contratual, comercial, imobiliária, societária, consumerista, falimentar, dentre outras, em todas as Instâncias do Poder Judiciário e perante órgãos da Administração Pública;</li>

              <li>Atuação em Arbitragens perante as principais Câmaras nacionais (Câmara de Comércio Brasil-Canadá - CCBC, Centro de Arbitragem e Mediação AMCHAM, Câmara de Conciliação, Mediação e Arbitragem CIESP/FIESP, Centro Brasileiro de Mediação e Arbitragem - CBMA, Câmara FGV de Mediação e Arbitragem, dentre outras) e internacionais;</li>

              <li>Assistência em pedidos de homologação de sentenças e laudos arbitrais estrangeiros, bem como assessoria na elaboração, negociação e análise de cláusulas e compromissos arbitrais.</li>
            </ol>
            <p>
              Consultivo Cível
            </p>
            <ol>
              <li>Análise, elaboração e revisão de contratos civis e comerciais;</li>

              <li>Elaboração de pareceres e legal opinions sobre operações, contratos e negócios jurídicos de diversas natureza;</li>

              <li>Due diligence relacionada a processos judiciais e administrativos para aferição de riscos e contingenciamento;</li>

              <li>Estruturação de operações societárias diversas, tais como: fusões, aquisições, incorporações e joint Ventures;</li>

              <li>Elaboração, apresentação e acompanhamento de instrumentos societários perante os órgãos competentes</li>
            </ol>
            <p>
              Licitações
            </p>
            <ol>
              <li>Pesquisa de editais de licitação de produtos/servicos de interesse do cliente;</li>

              <li>Obtenção e oraanização de documentos para participação em licitações;</li>

              <li>Acompanhamento e participação em pregões eletrônicos e presenciais;</li>

              <li>Representação de clientes perante os órgãos da Administração Pública;</li>
            </ol>
            <div class="setaAtribu"><img width="30px" src="image/arrow-atua.svg"></div>
          </div>
        </div>
      </div>
      <div class="imgAtuacao">
        <img src="image/atuacao-img.jpg">
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-atuacao', SiteAtuacao);
