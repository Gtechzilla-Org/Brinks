(() => {
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Shared responsive navigation on every page.
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open navigation');
    }));
  }

  // The homepage carousel advances every five seconds, with accessible pause controls.
  const track = document.querySelector('.carousel-track');
  const viewport = document.querySelector('.carousel-viewport');
  const carousel = document.querySelector('.carousel');
  const dotsWrap = document.querySelector('.carousel-dots');
  const prev = document.querySelector('.carousel-arrow.prev');
  const next = document.querySelector('.carousel-arrow.next');
  const pauseButton = document.querySelector('.carousel-pause');
  const cards = [...document.querySelectorAll('.company-card')];
  if (!track || !viewport || !carousel || !dotsWrap || !prev || !next || !cards.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let page = 0;
  let timer = null;
  let startX = 0;
  let userPaused = reduceMotion.matches;
  let pointerPaused = false;
  let focusPaused = false;
  let hiddenPaused = document.hidden;

  const perView = () => window.matchMedia('(max-width: 700px)').matches ? 1
    : window.matchMedia('(max-width: 1100px)').matches ? 2 : 4;
  const pageCount = () => Math.max(1, Math.ceil(cards.length / perView()));
  const maxPage = () => pageCount() - 1;

  const render = () => {
    page = Math.min(page, maxPage());
    const card = cards[page * perView()];
    if (card) {
      const offset = card.offsetLeft - cards[0].offsetLeft;
      track.style.transform = `translateX(${-offset}px)`;
    }
    [...dotsWrap.children].forEach((dot, i) => {
      dot.setAttribute('aria-current', String(i === page));
      dot.setAttribute('aria-pressed', String(i === page));
    });
    prev.disabled = page === 0;
    next.disabled = page === maxPage();
    prev.style.opacity = prev.disabled ? '.5' : '1';
    next.style.opacity = next.disabled ? '.5' : '1';
  };

  const buildDots = () => {
    dotsWrap.replaceChildren();
    for (let i = 0; i < pageCount(); i++) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show company group ${i + 1}`);
      dot.addEventListener('click', () => { page = i; render(); restart(); });
      dotsWrap.appendChild(dot);
    }
  };

  const shouldPause = () => userPaused || pointerPaused || focusPaused || hiddenPaused || reduceMotion.matches;
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  const syncPauseButton = () => {
    if (!pauseButton) return;
    const paused = userPaused || reduceMotion.matches;
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', paused ? 'Play company carousel' : 'Pause company carousel');
    pauseButton.textContent = paused ? 'Play' : 'Pause';
  };
  const restart = () => {
    stop();
    syncPauseButton();
    if (shouldPause() || pageCount() < 2) return;
    timer = setInterval(() => {
      page = (page + 1) % pageCount();
      render();
    }, 5000);
  };
  const move = direction => {
    page = (page + direction + pageCount()) % pageCount();
    render();
    restart();
  };

  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  if (pauseButton) pauseButton.addEventListener('click', () => {
    userPaused = !userPaused;
    restart();
  });
  carousel.addEventListener('mouseenter', () => { pointerPaused = true; restart(); });
  carousel.addEventListener('mouseleave', () => { pointerPaused = false; restart(); });
  carousel.addEventListener('focusin', () => { focusPaused = true; restart(); });
  carousel.addEventListener('focusout', event => {
    if (!carousel.contains(event.relatedTarget)) { focusPaused = false; restart(); }
  });
  document.addEventListener('visibilitychange', () => { hiddenPaused = document.hidden; restart(); });
  reduceMotion.addEventListener?.('change', () => restart());
  viewport.addEventListener('touchstart', event => { startX = event.changedTouches[0].screenX; }, { passive: true });
  viewport.addEventListener('touchend', event => {
    const dx = event.changedTouches[0].screenX - startX;
    if (Math.abs(dx) > 45) move(dx < 0 ? 1 : -1);
  }, { passive: true });
  window.addEventListener('resize', () => { buildDots(); render(); restart(); });

  buildDots();
  render();
  restart();
})();
