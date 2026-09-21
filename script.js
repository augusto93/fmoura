gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {

  // === Altura real do header (todas as seções usam calc(100vh - header) para ficarem do mesmo tamanho) ===
  const headerEl = document.querySelector('.header');

  function atualizarAlturaHeader() {
    if (!headerEl) return;
    document.documentElement.style.setProperty('--header-height', `${headerEl.offsetHeight}px`);
  }

  atualizarAlturaHeader();
  window.addEventListener('resize', atualizarAlturaHeader);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(atualizarAlturaHeader);
  }
  if (headerEl && 'ResizeObserver' in window) {
    new ResizeObserver(atualizarAlturaHeader).observe(headerEl);
  }


  // === Navegação suave (GSAP) ===
  const DURACAO_SCROLL = 1.3; // segundos — ajuste aqui a velocidade do scroll ao clicar no menu

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        const alvo = document.querySelector(id);
        if (alvo) {
          gsap.to(window, {
            duration: DURACAO_SCROLL,
            scrollTo: { y: alvo, autoKill: false },
            ease: 'power2.out'
          });
        }
      }
    });
  });


  // === Tabs de escritório ===
  const tabs = document.querySelectorAll('.tabs button');
  const panels = {
    sp: document.getElementById('panel-sp'),
    rj: document.getElementById('panel-rj')
  };

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.tab;
      Object.entries(panels).forEach(([k, el]) => {
        if (el) el.hidden = k !== key;
      });
    });
  });


const carousel = document.querySelector(".carousel"); 
const leftArrow = document.querySelector(".arrow.left"); 
const rightArrow = document.querySelector(".arrow.right"); 
const scrollAmount = 200; 

if (carousel && leftArrow && rightArrow) { const items = carousel.innerHTML; carousel.innerHTML += items; 

  leftArrow.addEventListener("click", () => { 
    if (carousel.scrollLeft === 0) 
    { carousel.scrollLeft = carousel.scrollWidth / 2; } 
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
   }); 
   
   rightArrow.addEventListener("click", () => { 
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) 
      { carousel.scrollLeft = carousel.scrollWidth / 2 - carousel.clientWidth; } 
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" }); 
  }); 
  
  carousel.addEventListener("scroll", () => { 
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) { carousel.scrollLeft = 0; } 
    else if (carousel.scrollLeft === 0) 
      { carousel.scrollLeft = carousel.scrollWidth / 2; } 
  }); 
}


  // === Troca de logo e cores no scroll ===
  const ids = ['top', 'quem-somos', 'socios', 'atuacao', 'contato'];
  const elementos = ids.map(id => document.getElementById(id)).filter(Boolean);

  const header = document.querySelector('.brand');
  const nav = document.querySelector('.nav');
  const logo = document.querySelector('.brand img');
  const divsMenu = document.querySelectorAll('.line');
  const linkedin = document.querySelector('.menu img');
  const icoBlack = document.querySelector('.mob img');

  if (elementos.length && header && nav && logo && linkedin && icoBlack) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch (entry.target.id) {
            case 'quem-somos':
              header.style.display = "flex";
              nav.style.color = "#fff";
              nav.style.justifyContent = "space-between";
              logo.src = "image/logo-white.svg";
              linkedin.src = "image/linkedin-white.svg";
              icoBlack.src = "image/ico-bar.svg";
              divsMenu.forEach(d => d.style.backgroundColor = "#fff");
              break;

            case 'socios':
              header.style.display = "flex";
              nav.style.color = "#000";
              nav.style.justifyContent = "space-between";
              logo.src = "image/logo-black.svg";
              linkedin.src = "image/linkedin-black.svg";
              icoBlack.src = "image/ico-bar-black.svg";
              divsMenu.forEach(d => d.style.backgroundColor = "#000");
              break;

            case 'top':
              header.style.display = "none";
              nav.style.color = "#fff";
              nav.style.justifyContent = "flex-end";
              divsMenu.forEach(d => d.style.backgroundColor = "#fff");
              break;
          }
        }
      });
    }, { threshold: 0.5 });

    elementos.forEach(el => observer.observe(el));
  }


  // === Áreas de atuação (com toggle + seta + GSAP suave) ===
  const todasAtuas = document.querySelectorAll('.area-list p[class^="atua"]');
  const todasInfos = document.querySelectorAll('.area-list .atuaInfotribu');
  const setas = document.querySelectorAll('.setaAtribu');

  let indiceAtual = null;

  function abrirInfo(info) {
    gsap.set(info, { display: 'block' });
    gsap.fromTo(info,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }

  function fecharInfo(info) {
    return gsap.to(info, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => gsap.set(info, { display: 'none' })
    });
  }

  async function toggleAtua(indice) {
    const p = todasAtuas[indice];
    const info = p?.nextElementSibling;
    if (!info || !info.classList.contains('atuaInfotribu')) return;

    const estaAberta = info.style.display === 'block';

    for (const div of todasInfos) {
      if (div !== info && div.style.display === 'block') {
        await fecharInfo(div);
      }
    }
    todasAtuas.forEach(outra => outra.style.display = 'block');

    if (!estaAberta) {
      abrirInfo(info);
      todasAtuas.forEach((outra, i) => {
        if (i !== indice) outra.style.display = 'none';
      });
      indiceAtual = indice;
    } else {
      await fecharInfo(info);
      indiceAtual = null;
    }
  }

  todasAtuas.forEach((p, i) => {
    p.addEventListener('click', () => toggleAtua(i));
  });

  setas.forEach(seta => {
    seta.addEventListener('click', () => {
      if (indiceAtual === null) toggleAtua(0);
      else {
        const proxima = (indiceAtual + 1) % todasAtuas.length;
        toggleAtua(proxima);
      }
    });
  });


  // === Menu mobile ===
  const btns = document.querySelectorAll(".btn");
  const menuOpen = document.querySelector(".menu-mob");
  const menuClose = document.querySelector(".mob");
  const menuToggleBtn = menuClose?.querySelector(".btn");

  if (btns.length && menuOpen && menuClose) {
    const setMenuAberto = (aberto) => {
      menuOpen.classList.toggle("ativo", aberto);
      menuClose.classList.toggle("hide", aberto);
      menuOpen.setAttribute("aria-hidden", String(!aberto));
      if (menuToggleBtn) menuToggleBtn.setAttribute("aria-expanded", String(aberto));
    };

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        setMenuAberto(!menuOpen.classList.contains("ativo"));
      });
    });

    menuOpen.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => setMenuAberto(false));
    });
  }


  // === Entrada do hero-svg (sem ScrollTrigger, para não afetar o scroll do header) ===
  const heroSvg = document.querySelector('.hero-svg');

  if (heroSvg && 'IntersectionObserver' in window) {
    gsap.set(heroSvg, { opacity: 0, scale: 0.95 });

    const heroObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out'
          });
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    heroObserver.observe(heroSvg);
  }

});




