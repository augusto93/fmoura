gsap.registerPlugin(ScrollToPlugin);

document.addEventListener('DOMContentLoaded', () => {

  // === Tipo de tela + loader ===
  // O <head> já marcou html[data-tela]; aqui mantemos atualizado e removemos o loader
  // quando os recursos principais (fontes + imagens acima da dobra) estiverem prontos.
  const html = document.documentElement;
  const preloader = document.querySelector('.preloader');

  function atualizarTela() {
    if (window.detectarTela) html.setAttribute('data-tela', window.detectarTela());
  }
  window.addEventListener('resize', atualizarTela);

  const paginaCarregada = new Promise(resolve => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once: true });
  });
  const fontesProntas = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  const limiteEspera = new Promise(resolve => setTimeout(resolve, 5000)); // nunca prende o usuário no loader

  const sitePronto = Promise.race([Promise.all([paginaCarregada, fontesProntas]), limiteEspera]).then(() => {
    atualizarTela();
    verificarClamps();
    html.classList.remove('is-loading');
    if (preloader) {
      preloader.classList.add('saindo');
      setTimeout(() => preloader.remove(), 700);
    }
  });

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


  // === Arrastar para os lados (somente mobile e tablet) ===
  // onMove recebe o deslocamento em px; onEnd recebe o deslocamento final.
  // Movimento vertical maior que o horizontal é ignorado para não travar o scroll da página.
  function arrastavel(el, { onMove, onEnd }) {
    let inicioX = null, inicioY = null, deltaX = 0, horizontal = null;

    el.addEventListener('pointerdown', e => {
      if (!['mobile', 'tablet'].includes(html.getAttribute('data-tela'))) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      inicioX = e.clientX; inicioY = e.clientY; deltaX = 0; horizontal = null;
    });

    el.addEventListener('pointermove', e => {
      if (inicioX === null) return;
      const dx = e.clientX - inicioX, dy = e.clientY - inicioY;
      if (horizontal === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        horizontal = Math.abs(dx) > Math.abs(dy);
        if (horizontal) { el.setPointerCapture(e.pointerId); el.classList.add('arrastando'); }
      }
      if (horizontal) { deltaX = dx; onMove(dx); }
    });

    const terminar = () => {
      if (inicioX === null) return;
      if (horizontal) onEnd(deltaX);
      el.classList.remove('arrastando');
      inicioX = null;
    };
    el.addEventListener('pointerup', terminar);
    el.addEventListener('pointercancel', terminar);

    // um arrasto não deve disparar o clique em links (ex.: LinkedIn do profissional)
    el.addEventListener('click', e => {
      if (Math.abs(deltaX) > 6) { e.preventDefault(); e.stopPropagation(); deltaX = 0; }
    }, true);
  }


  // === Carrossel de selos (infinito: os itens giram no DOM a cada passo) ===
  const selosTrack = document.querySelector('.carousel');
  const selosViewport = document.querySelector('.carousel-container');
  const selosPrev = document.querySelector('.arrow.left');
  const selosNext = document.querySelector('.arrow.right');

  if (selosTrack && selosViewport && selosTrack.children.length > 1) {
    let selosAnimando = false;

    const passoSelo = () =>
      selosTrack.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(selosTrack).columnGap || 0);

    const proximoSelo = () => {
      if (selosAnimando) return;
      selosAnimando = true;
      gsap.to(selosTrack, {
        x: -passoSelo(), duration: 0.45, ease: 'power2.inOut',
        onComplete: () => {
          selosTrack.appendChild(selosTrack.firstElementChild);
          gsap.set(selosTrack, { x: 0 });
          selosAnimando = false;
        }
      });
    };

    const anteriorSelo = () => {
      if (selosAnimando) return;
      selosAnimando = true;
      const xAtual = gsap.getProperty(selosTrack, 'x');
      selosTrack.prepend(selosTrack.lastElementChild);
      gsap.set(selosTrack, { x: xAtual - passoSelo() });
      gsap.to(selosTrack, { x: 0, duration: 0.45, ease: 'power2.inOut', onComplete: () => { selosAnimando = false; } });
    };

    selosPrev?.addEventListener('click', anteriorSelo);
    selosNext?.addEventListener('click', proximoSelo);

    arrastavel(selosViewport, {
      onMove: dx => { if (!selosAnimando) gsap.set(selosTrack, { x: Math.max(-passoSelo(), Math.min(passoSelo(), dx)) }); },
      onEnd: dx => {
        if (dx < -40) proximoSelo();
        else if (dx > 40) anteriorSelo();
        else gsap.to(selosTrack, { x: 0, duration: 0.3 });
      }
    });
  }


  // === Carrossel de profissionais ===
  const profTrack = document.querySelector('.profissionais-track');
  const profSlides = document.querySelectorAll('.profissional');
  const profPrev = document.querySelector('.prof-prev');
  const profNext = document.querySelector('.prof-next');
  const profContador = document.querySelector('.prof-contador');

  if (profTrack && profSlides.length && profPrev && profNext) {
    let profAtual = 0;

    const irParaProfissional = (indice) => {
      profAtual = (indice + profSlides.length) % profSlides.length;
      gsap.to(profTrack, { xPercent: -100 * profAtual, duration: 0.6, ease: 'power2.out' });
      if (profContador) profContador.textContent = `${profAtual + 1} / ${profSlides.length}`;
    };

    profPrev.addEventListener('click', () => irParaProfissional(profAtual - 1));
    profNext.addEventListener('click', () => irParaProfissional(profAtual + 1));

    // Arrastar para os lados troca o profissional (o slide acompanha o dedo/mouse)
    arrastavel(profTrack, {
      onMove: dx => gsap.set(profTrack, { xPercent: -100 * profAtual, x: dx }),
      onEnd: dx => {
        gsap.to(profTrack, { x: 0, duration: 0.6, ease: 'power2.out' });
        if (Math.abs(dx) > 50) irParaProfissional(profAtual + (dx < 0 ? 1 : -1));
        else irParaProfissional(profAtual);
      }
    });
  }


  // === Troca de logo e cores no scroll ===
  const ids = ['top', 'quem-somos', 'profissionais', 'atuacao', 'contato'];
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

            case 'profissionais':
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


  // === Áreas de atuação (com toggle + GSAP suave) ===
  const todasAtuas = document.querySelectorAll('.area-list p[class^="atua"]');
  const todasInfos = document.querySelectorAll('.area-list .atuaInfotribu');

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
    } else {
      await fecharInfo(info);
    }
  }

  todasAtuas.forEach((p, i) => {
    p.addEventListener('click', () => toggleAtua(i));
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


  // === "Mais info": mostra o botão só quando o texto não cabe no espaço da seção ===
  const clamps = document.querySelectorAll('[data-clamp]');

  function verificarClamps() {
    clamps.forEach(box => {
      const botao = box.nextElementSibling?.classList.contains('mais-info') ? box.nextElementSibling : null;
      const excede = box.scrollHeight > box.clientHeight + 2;
      box.classList.toggle('is-clamped', excede);
      if (botao) botao.hidden = !excede && !box.classList.contains('is-open');
    });
  }

  clamps.forEach(box => {
    const botao = box.nextElementSibling;
    if (!botao || !botao.classList.contains('mais-info')) return;
    botao.addEventListener('click', () => {
      const aberto = box.classList.toggle('is-open');
      botao.setAttribute('aria-expanded', String(aberto));
      botao.textContent = aberto ? 'Menos info' : 'Mais info';
      if (!aberto) box.scrollTop = 0;
      verificarClamps();
    });
  });

  window.addEventListener('resize', verificarClamps);


  // === Lazy load do fundo da seção Quem somos ===
  const quemSomos = document.getElementById('quem-somos');

  if (quemSomos) {
    if ('IntersectionObserver' in window) {
      const bgObserver = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          quemSomos.classList.add('bg-carregado');
          bgObserver.disconnect();
        }
      }, { rootMargin: '300px 0px' });
      bgObserver.observe(quemSomos);
    } else {
      quemSomos.classList.add('bg-carregado');
    }
  }


  // === Entrada do hero-svg (sem ScrollTrigger, para não afetar o scroll do header) ===
  const heroSvg = document.querySelector('.hero-svg');

  if (heroSvg && 'IntersectionObserver' in window) {
    gsap.set(heroSvg, { opacity: 0, scale: 0.95 });

    const heroObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // espera o loader sair para a animação ser vista
          sitePronto.then(() => gsap.to(entry.target, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power2.out'
          }));
          heroObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    heroObserver.observe(heroSvg);
  }

});




