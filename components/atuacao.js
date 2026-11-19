class SiteAtuacao extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="atuacao" >
    <div class="container atuacao">
      <div class="areas">
        <h3>Atuação</h3>
        <div class="atua-intro">
          <p class="atua-lead">Direito Tributário, na consultoria e no contencioso administrativo e judicial.</p>
          <p>
            Atuamos em casos envolvendo tributos federais, estaduais e municipais e que tramitam perante a Receita Federal, a Procuradoria-Geral da Fazenda Nacional, o Conselho Administrativo de Recursos Fiscais (CARF), secretarias de fazenda, procuradorias e órgãos de julgamento administrativo de estados e municípios, tribunais de justiça, tribunais regionais federais, o Superior Tribunal de Justiça e o Supremo Tribunal Federal.
          </p>
        </div>
        <div class="area-list">
          <p class="atua-titulo">Contencioso judicial</p>
          <div class="atuaInfotribu">
            <p>Mandados de segurança e ações declaratórias, anulatórias e de repetição de indébito, com pedidos de suspensão da exigibilidade do crédito tributário, e os recursos até os tribunais superiores.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Contencioso administrativo</p>
          <div class="atuaInfotribu">
            <p>Impugnações e recursos contra autos de infração e lançamentos nas esferas federal, estadual e municipal, inclusive perante o CARF e a Câmara Superior de Recursos Fiscais. Manifestações de inconformidade contra compensações não homologadas e pedidos de restituição indeferidos.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Consultoria</p>
          <div class="atuaInfotribu">
            <p>Pareceres e consultas sobre a incidência de tributos em operações industriais e comerciais, contratos, reorganizações societárias, transferências patrimoniais e remessas ao exterior. Consultas formais aos órgãos fazendários, pedidos e acompanhamento de regimes especiais, revisão de procedimentos fiscais, inclusive em auditorias de aquisição (<i>due diligence</i>), acompanhamento de fiscalizações em curso e da legislação tributária, vigente e em tramitação.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Reforma Tributária (consultivo e contencioso)</p>
          <div class="atuaInfotribu">
            <p>Efeitos da reforma tributária do consumo (Emenda Constitucional 132/2023 e Lei Complementar 214/2025) sobre operações e contratos, na transição para o IBS, a CBS e o Imposto Seletivo, e discussões administrativas e judiciais sobre a nova legislação.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Transação, arbitragem e mediação tributária</p>
          <div class="atuaInfotribu">
            <p>Negociação de débitos por transação tributária, por adesão ou individual, e solução de controvérsias por mediação e arbitragem tributárias, nos casos em que a legislação as admita.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Execução fiscal e garantias</p>
          <div class="atuaInfotribu">
            <p>Embargos à execução fiscal, exceção de pré-executividade e impugnação à penhora. Escolha e acompanhamento da garantia do juízo (depósito, fiança bancária, seguro garantia ou penhora), com controle de vigência e de renovação.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Recuperação de créditos</p>
          <div class="atuaInfotribu">
            <p>Levantamento de tributos pagos indevidamente ou a maior, pedidos de restituição e de compensação, ações de repetição de indébito e habilitação, na Receita Federal, de créditos reconhecidos em juízo.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Regularidade fiscal</p>
          <div class="atuaInfotribu">
            <p>Renovação de certidões de regularidade fiscal e acompanhamento de pendências, inscrições em dívida ativa e processos que as afetem. Pedidos de parcelamento.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Tributos imobiliários (IPTU, ITBI, taxas e outros) e de operações imobiliárias</p>
          <div class="atuaInfotribu">
            <p>Discussões administrativas e judiciais sobre IPTU, ITBI, taxas e outros tributos incidentes sobre imóveis, e consultoria sobre a tributação de operações imobiliárias.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Revisão de IPTU Corporativo</p>
          <div class="atuaInfotribu">
            <p>Revisão do lançamento do IPTU de imóveis corporativos, comerciais, hoteleiros, hospitalares e logísticos. O trabalho confronta o cadastro municipal com os dados físicos, registrais e documentais do imóvel (área, idade, padrão construtivo, posição e logradouro), começa pela simulação do risco de majoração do imposto e segue para a impugnação administrativa ou a ação judicial, quando cabíveis.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Contribuições patronais</p>
          <div class="atuaInfotribu">
            <p>Contribuições previdenciárias a cargo do empregador e contribuições devidas a terceiros (Sistema S, INCRA e salário-educação). Incidência sobre verbas da folha de pagamento, participação nos lucros ou resultados, prêmios e planos de opção de compra de ações (<i>stock options</i>); contribuição previdenciária sobre a receita bruta (CPRB) e desoneração da folha; retenção na cessão de mão de obra e na terceirização; enquadramento no grau de risco (RAT) e contestação do Fator Acidentário de Prevenção (FAP). Defesa em fiscalizações e autos de infração, e restituição ou compensação de valores recolhidos a maior.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
          <p class="atua-titulo">Aduaneiro</p>
          <div class="atuaInfotribu">
            <p>Tributos devidos na importação (Imposto de Importação, IPI, PIS/Cofins-Importação e ICMS), classificação fiscal de mercadorias e valoração aduaneira. Regimes aduaneiros especiais, como o <i>drawback</i> e a admissão temporária. Acompanhamento de fiscalizações aduaneiras e defesa, administrativa e judicial, contra autos de infração, multas, apreensão e pena de perdimento de mercadorias.</p>
            <button type="button" class="atua-fechar">Fechar</button>
          </div>
        </div>
      </div>
      <div class="imgAtuacao">
        <img loading="lazy" decoding="async" src="image/atuacao-img.jpg" width="1491" height="1105" alt="Livro de Direito Tributário sobre formulário da Receita Federal, com uma caneta">
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-atuacao', SiteAtuacao);
