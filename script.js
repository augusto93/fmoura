document.addEventListener('DOMContentLoaded', () => {

  // === Navegação suave ===
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        e.preventDefault();
        const alvo = document.querySelector(id);
        if (alvo) alvo.scrollIntoView({ behavior: 'smooth' });
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


  // === Mapa Contato ===
  window.mostrarMapa = (opcao) => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");
    const iframeMapa = document.getElementById("iframeMapa");

    if (!iframeMapa || !btn1 || !btn2) return;

    const mapas = {
      1: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2324598673927!2d-46.690781523923505!3d-23.595994678776012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57486e2c06b7%3A0x6fbec7cfedadfa5f!2sR.%20Gomes%20de%20Carvalho%2C%201581%20-%20cj.%201201%20-%20Vila%20Ol%C3%ADmpia%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004547-006!5e0!3m2!1spt-BR!2sbr!4v1757117063375!5m2!1spt-BR!2sbr",
      2: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.992392678386!2d-43.18331312393935!3d-22.9505072792243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff1202d0eab%3A0x53349276bc3d0dd4!2sCentro%20Empresarial%20Rio%20-%20Praia%20de%20Botafogo%2C%20228%20-%20Botafogo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022250-040!5e0!3m2!1spt-BR!2sbr!4v1757116942329!5m2!1spt-BR!2sbr"
    };

    iframeMapa.src = mapas[opcao] || mapas[1];
    btn1.classList.toggle("ativo", opcao === 1);
    btn2.classList.toggle("ativo", opcao === 2);
  };


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

  if (btns.length && menuOpen && menuClose) {
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        menuOpen.classList.toggle("ativo");
        menuClose.classList.toggle("hide");
      });
    });

    menuOpen.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuOpen.classList.remove("ativo");
        menuClose.classList.remove("hide");
      });
    });
  }

});


gsap.from(".hero-svg", {
  scrollTrigger: {
    trigger: ".hero-svg",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true
  },
  opacity: 0,
  y: 50,
  scale: 0.95,
  duration: 1,
  ease: "power2.out"
});


