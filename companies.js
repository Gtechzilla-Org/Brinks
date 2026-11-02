(() => {
  const businesses = [
    ['logistics', 'Brinks Logistics & Forwarding', 'Freight forwarding and logistics coordination for business supply chains.', 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85'],
    ['investments', 'Brinks Investments & Financing', 'Investment and financing enquiries for individuals and businesses.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85'],
    ['air-cargo', 'Brinks Air Cargo', 'Air-freight enquiries for time-sensitive and international shipments.', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85'],
    ['trucks', 'Brinks Trucks & Spares', 'Truck, spare-parts and aftersales support enquiries.', 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=85'],
    ['mining', 'Brinks Aust Mining & Refinery', 'Mining and refinery-sector business and project enquiries.', 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85'],
    ['insurance', 'Brinks Insurance Brokers', 'Insurance and risk-management enquiries for clients and businesses.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85'],
    ['security', 'Protects Brinks Security', 'Security requirements for people, premises and operations.', 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=85'],
    ['dicc', 'Direct Initiative Credit Consultancy (DICC)', 'Credit-consultancy enquiries and guidance on next steps.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85']
  ];
  const list = document.querySelector('#companies-list');
  if (!list) return;
  list.classList.add('companies-grid');
  businesses.forEach(([id, name, description, image]) => {
    const card = document.createElement('article');
    card.className = 'company-card directory-card';
    card.innerHTML = `<img loading="lazy" alt="" src="${image}"><div class="card-body"><h3></h3><p></p><a href="company.html?company=${encodeURIComponent(id)}">Explore company <span aria-hidden="true">→</span></a></div>`;
    card.querySelector('h3').textContent = name;
    card.querySelector('p').textContent = description;
    list.appendChild(card);
  });
})();
