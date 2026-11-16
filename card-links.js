/* Make the full company card an accessible link while preserving its inner CTA. */
(() => {
  const enhanceCard = (card) => {
    if (card.dataset.cardLinkReady === 'true') return;
    const cta = card.querySelector('.card-body a[href]');
    const heading = card.querySelector('h3');
    if (!cta || !heading) return;
    card.dataset.cardLinkReady = 'true';
    card.dataset.cardHref = cta.getAttribute('href');
    card.setAttribute('role', 'link');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${heading.textContent.trim()} company profile`);
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      window.location.href = card.dataset.cardHref;
    });
    card.addEventListener('keydown', (event) => {
      if (event.target !== card) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        window.location.href = card.dataset.cardHref;
      }
    });
  };
  const enhanceAll = (root = document) => root.querySelectorAll('.company-card').forEach(enhanceCard);
  enhanceAll();
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
      if (node.nodeType !== 1) return;
      if (node.matches?.('.company-card')) enhanceCard(node);
      enhanceAll(node);
    }));
  });
  observer.observe(document.body, { childList: true, subtree: true });
})();
