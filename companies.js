(() => {
  const businesses = [
    ['logistics', 'Brinks Logistics & Forwarding Limited', 'Integrated freight forwarding, transport, customs and warehousing enquiries.', 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=85'],
    ['mining', 'Brinks Aust Mining & Refinery Limited', 'Mining, mineral-sector and refinery-related project enquiries.', 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85'],
    ['air-cargo', 'Brinks Air Cargo Limited', 'Air-freight enquiries for standard, priority and specialist cargo.', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85'],
    ['insurance', 'Brinks Insurance Brokers Limited', 'Insurance and risk-management enquiries.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85'],
    ['investments', 'Brinks Investments & Financing Limited', 'Investment and financing enquiries for businesses and projects.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85'],
    ['security', 'Protects Brinks Security Limited', 'Security services, systems and operational protection enquiries.', 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=85'],
    ['technologies', 'Brinks Technologies Limited', 'Technology and digital solutions enquiries. Service details can be confirmed with the team.', 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85'],
    ['trucks', 'Brinks Trucks & Spares Limited', 'Heavy-duty trucks, equipment, spare parts and support enquiries.', 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=85'],
    ['petroleum', 'Brinks Petroleum Energies Limited', 'Petroleum and energy-sector business enquiries. Product scope is subject to confirmation.', 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85'],
    ['dicc', 'Direct Initiative Credit Consultancy Limited', 'Credit consultancy and development investment enquiries.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85']
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
