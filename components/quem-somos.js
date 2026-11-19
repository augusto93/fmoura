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
            Somos a FMoura Advogados, escritório especializado em Direito Tributário.
          </h3>
          <p>
            Desde 2015, assessoramos empresas em assuntos tributários de alto impacto financeiro, na consultoria e no contencioso administrativo e judicial, em tributos federais, estaduais e municipais, da defesa contra autos de infração às ações que chegam ao Superior Tribunal de Justiça e ao Supremo Tribunal Federal.
          </p>
          <p>
            Ética, transparência e compromisso orientam o nosso trabalho: estratégias inovadoras, avaliação criteriosa e fundamentada dos riscos e informações confiáveis e assertivas sobre os casos e os valores envolvidos.
          </p>
        </div>
      </div>
      <div class="reconhecimentos">
      <h4 class="selos-titulo" id="reconhecimentos">Reconhecimentos</h4>
      <div class="selos" role="region" aria-labelledby="reconhecimentos">
        <button type="button" class="arrow left" aria-label="Selo anterior"><img decoding="async" height="50" src="image/arrow-left.svg" alt=""></button>
        <div class="carousel-container">
          <div class="carousel">
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2025r.png" alt=""></span><figcaption><span>Análise Advocacia Regional</span><span>2025</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2025.png" alt=""></span><figcaption><span>Análise Advocacia</span><span>2025</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2024r.png" alt=""></span><figcaption><span>Análise Advocacia Regional</span><span>2024</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2022r.png" alt=""></span><figcaption><span>Análise Advocacia Regional</span><span>2022</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2021r.png" alt=""></span><figcaption><span>Análise Advocacia Regional</span><span>2021</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2021.png" alt=""></span><figcaption><span>Análise Advocacia</span><span>2021</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2020.png" alt=""></span><figcaption><span>Análise Advocacia</span><span>2020</span><span>Escritórios Mais Admirados</span></figcaption></figure>
            <figure class="carousel-item"><span class="selo-img-wrap"><img loading="lazy" decoding="async" src="image/badge-2018.png" alt=""></span><figcaption><span>Análise Advocacia 500</span><span>2018</span><span>Escritórios Mais Admirados</span></figcaption></figure>
          </div>
        </div>
        <button type="button" class="arrow right" aria-label="Próximo selo"><img decoding="async" height="50" src="image/arrow-right.svg" alt=""></button>
      </div>
      </div>
    </div>
  </section>
`;
  }
}

customElements.define('site-quem-somos', SiteQuemSomos);
