(() => {
  const settings = window.BRINKS_CONTACT || {};
  const numbers = (settings.whatsappNumbers || (settings.whatsappNumber ? [settings.whatsappNumber] : []))
    .map(value => String(value).replace(/\D/g, '')).filter(Boolean);
  const message = settings.whatsappMessage || 'Hello Brinks Group, I would like to enquire about your services.';
  if (numbers.length) {
    const wrap = document.createElement('div');
    wrap.className = 'whatsapp-contact-stack';
    wrap.setAttribute('aria-label', 'Contact Brinks Group on WhatsApp');
    numbers.forEach((phone, index) => {
      const link = document.createElement('a');
      link.className = 'whatsapp-float';
      link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `Chat with Brinks Group on WhatsApp, number ${index + 1}`);
      link.innerHTML = `<span class="whatsapp-symbol" aria-hidden="true">◉</span><span>WhatsApp ${index + 1}</span>`;
      wrap.appendChild(link);
    });
    document.body.appendChild(wrap);
  }
  const form = document.querySelector('#enquiry-form');
  if (!form) return;
  const note = document.querySelector('#form-note');
  const email = String(settings.enquiryEmail || '').trim();
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    form.action = `https://formsubmit.co/${encodeURIComponent(email)}`;
    const reply = document.createElement('input'); reply.type = 'hidden'; reply.name = '_replyto'; reply.value = ''; form.appendChild(reply);
    form.addEventListener('submit', () => { const sender=form.querySelector('[name="email"]'); if(sender) reply.value=sender.value; const submit=form.querySelector('[type="submit"]'); if(submit){submit.disabled=true;submit.textContent='Sending enquiry…';} if(note) note.textContent='Submitting your enquiry. Please wait for the confirmation page.'; });
  } else {
    form.addEventListener('submit', event => { event.preventDefault(); if(note) note.textContent='The contact form is ready, but email delivery has not been enabled. Please use one of the WhatsApp contacts or add the official recipient email in contact-config.js.'; });
  }
})();
