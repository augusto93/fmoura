class SiteQuemSomos extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <section id="quem-somos">
    <div class="container about-inner">
      <div class="about">
        <div class="title">
          <div>Quem somos?</div>
        </div>
        <div class="description">
          <h3>
           Prazer, somos o FMoura Advogados.
          </h3>
          <p>
            Atuamos com excelência e inteligência em processos de alta complexidade, de forma especializada e humana, para buscar soluções estratégicas e os melhores resultados para os nossos clientes.
          </p>
          <br><br>
          <p>
            Desde a fundação do escritório, há 10 anos, nosso propósito é somar em negócios e relações humanas através do Direito, com inteligência, cuidado e presença lado a lado.
          </p>
        </div>
      </div>
      <button class="arrow left"><img height="50" src="image/arrow-left.svg" alt="Anterior"></button>
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item"><img src="image/badge-2018.png" alt="2018"></div>
          <div class="carousel-item"><img src="image/badge-2020.png" alt="2020"></div>
          <div class="carousel-item"><img src="image/badge-2021.png" alt="2021"></div>
          <div class="carousel-item"><img src="image/badge-2021r.png" alt="Regional 2021"></div>
          <div class="carousel-item"><img src="image/badge-2022r.png" alt="Regional 2022"></div>
          <div class="carousel-item"><img src="image/badge-2024r.png" alt="Regional 2024"></div>
          <div class="carousel-item"><img src="image/badge-2025.png" alt="2025"></div>
        </div>
      </div>
      <button class="arrow right"><img height="50" src="image/arrow-right.svg" alt="Próximo"></button>
    </div>
  </section>
`;
  }
}

customElements.define('site-quem-somos', SiteQuemSomos);
