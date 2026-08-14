/**
 * A P STUDIO — Master Interactive Orchestrator
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  renderServices();
  renderPortfolio();
  renderHallOfFame();
  renderStudioSpaces();
  renderCameraRental();
  renderGallery();
  renderBehindTheScenes();
  renderWhyUs();
  renderTestimonials();
  initHallOfFameHover();
  initLightbox();
  initBookingForm();
});

/* 1. Header Scroll Transparent to Solid Transition */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* 2. Mobile Full-Screen Menu Toggle */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-nav-overlay');
  if (!toggleBtn || !overlay) return;

  toggleBtn.addEventListener('click', () => {
    overlay.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  });

  const links = overlay.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      overlay.classList.remove('active');
      toggleBtn.classList.remove('active');
    });
  });
}

/* 3. Render Services Grid */
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container || !AP_STUDIO_DATA?.services) return;

  container.innerHTML = AP_STUDIO_DATA.services.map(s => `
    <article class="ap-service-row">
      <span class="service-num">${s.number}</span>
      <div class="service-content">
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
      <a href="#contact" onclick="preselectService('${s.title}')" class="service-arrow-cta">
        <span>Inquire</span>
        <span>→</span>
      </a>
    </article>
  `).join('');
}

function preselectService(title) {
  const selectEl = document.getElementById('inquiry-project-type');
  if (selectEl) selectEl.value = title;
}

/* 4. Render Portfolio (Asymmetrical Editorial Layout) */
function renderPortfolio() {
  const container = document.getElementById('portfolio-container');
  if (!container || !AP_STUDIO_DATA?.portfolio) return;

  container.innerHTML = AP_STUDIO_DATA.portfolio.map(p => `
    <article class="ap-portfolio-card ${p.layout}">
      <div class="portfolio-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
      <div class="portfolio-meta">
        <div>
          <h3 class="portfolio-title">${p.title}</h3>
          <span class="portfolio-category">${p.category}</span>
        </div>
        <span class="portfolio-year">${p.year}</span>
      </div>
    </article>
  `).join('');
}

/* 5. Render Hall of Fame List */
function renderHallOfFame() {
  const container = document.getElementById('hall-fame-container');
  if (!container || !AP_STUDIO_DATA?.hallOfFame) return;

  container.innerHTML = AP_STUDIO_DATA.hallOfFame.map(h => `
    <div class="hall-fame-item" data-image="${h.image}">
      <span class="hall-num">${h.number}</span>
      <h3 class="hall-name">${h.name}</h3>
      <span class="hall-category">${h.category}</span>
    </div>
  `).join('');
}

/* Hall of Fame Dynamic Cursor Image Preview Tracker */
function initHallOfFameHover() {
  const items = document.querySelectorAll('.hall-fame-item');
  const previewBox = document.getElementById('hall-preview-box');
  const previewImg = document.getElementById('hall-preview-img');
  if (!previewBox || !previewImg) return;

  items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      const imgSrc = item.getAttribute('data-image');
      if (imgSrc) {
        previewImg.src = imgSrc;
        previewBox.classList.add('visible');
      }
    });

    item.addEventListener('mousemove', (e) => {
      previewBox.style.left = e.clientX + 20 + 'px';
      previewBox.style.top = e.clientY - 100 + 'px';
    });

    item.addEventListener('mouseleave', () => {
      previewBox.classList.remove('visible');
    });
  });
}

/* 6. Render Studio Spaces (4 Studio Showcase Cards) */
function renderStudioSpaces() {
  const container = document.getElementById('studio-spaces-container');
  if (!container || !AP_STUDIO_DATA?.studioSpaces) return;

  container.innerHTML = AP_STUDIO_DATA.studioSpaces.map(sp => `
    <article class="ap-space-card">
      <div class="space-img-wrap">
        <img src="${sp.image}" alt="${sp.name}" loading="lazy">
        <span class="space-tag-badge">${sp.tag}</span>
      </div>
      <div class="space-body">
        <h3 class="space-name">${sp.name}</h3>
        <p class="space-desc">${sp.desc}</p>
        <ul class="space-facilities-list">
          ${sp.facilities.map(f => `<li>✓ ${f}</li>`).join('')}
        </ul>
        <a href="#contact" onclick="preselectService('Studio Booking - ${sp.name}')" class="btn-ap-outline" style="margin-top:auto;">
          <span>Book ${sp.tag} →</span>
        </a>
      </div>
    </article>
  `).join('');
}

/* 7. Render Camera Rental Categories */
function renderCameraRental() {
  const container = document.getElementById('camera-rental-container');
  if (!container || !AP_STUDIO_DATA?.cameraRental) return;

  container.innerHTML = AP_STUDIO_DATA.cameraRental.map(c => `
    <div class="rental-cat-card">
      <div class="rental-img-box">
        <img src="${c.image}" alt="${c.category}">
      </div>
      <div class="rental-body">
        <h4 class="rental-title">${c.category}</h4>
        <p class="rental-desc">${c.desc}</p>
        <a href="#contact" onclick="preselectService('Camera Rental - ${c.category}')" class="service-link" style="margin-top:12px;">
          <span>Explore Gear →</span>
        </a>
      </div>
    </div>
  `).join('');
}

/* 8. Render Full-Width Visual Gallery */
function renderGallery() {
  const container = document.getElementById('gallery-masonry-container');
  if (!container || !AP_STUDIO_DATA?.gallery) return;

  container.innerHTML = AP_STUDIO_DATA.gallery.map((g, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-hover-overlay">
        <span class="gallery-cat">${g.category}</span>
        <h4 class="gallery-title">${g.title}</h4>
      </div>
    </div>
  `).join('');
}

/* 9. Lightbox Modal Controller */
let currentLightboxIdx = 0;

function openLightbox(idx) {
  currentLightboxIdx = idx;
  const modal = document.getElementById('lightbox-modal');
  const imgEl = document.getElementById('lightbox-img');
  const titleEl = document.getElementById('lightbox-caption');
  if (!modal || !imgEl || !AP_STUDIO_DATA.gallery[idx]) return;

  const item = AP_STUDIO_DATA.gallery[idx];
  imgEl.src = item.image;
  if (titleEl) titleEl.textContent = `${item.title} — ${item.category}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (!modal) return;

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* 10. Render Behind The Scenes */
function renderBehindTheScenes() {
  const container = document.getElementById('bts-container');
  if (!container || !AP_STUDIO_DATA?.behindTheScenes) return;

  container.innerHTML = AP_STUDIO_DATA.behindTheScenes.map(b => `
    <article class="bts-card">
      <div class="bts-img-box">
        <img src="${b.image}" alt="${b.title}" loading="lazy">
      </div>
      <div class="bts-body">
        <h4 class="bts-title">${b.title}</h4>
        <p class="bts-caption">${b.caption}</p>
      </div>
    </article>
  `).join('');
}

/* 11. Render Why A P Studio */
function renderWhyUs() {
  const container = document.getElementById('whyus-container');
  if (!container || !AP_STUDIO_DATA?.whyUs) return;

  container.innerHTML = AP_STUDIO_DATA.whyUs.map(w => `
    <div class="whyus-box">
      <h4 class="whyus-title">${w.title}</h4>
      <p class="whyus-desc">${w.desc}</p>
    </div>
  `).join('');
}

/* 12. Render Testimonials */
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container || !AP_STUDIO_DATA?.testimonials) return;

  container.innerHTML = AP_STUDIO_DATA.testimonials.map(t => `
    <article class="testimonial-card">
      <p class="test-quote">"${t.quote}"</p>
      <div class="test-author-box">
        <strong class="test-author">${t.author}</strong>
        <span class="test-role">${t.role}</span>
      </div>
    </article>
  `).join('');
}

/* 13. Contact Form Handler */
function initBookingForm() {
  const form = document.getElementById('ap-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('inquiry-name')?.value || 'Valued Creator';
    alert(`Thank you, ${name}! Your studio enquiry has been sent to A P Studio. Our creative team will get back to you shortly.`);
    form.reset();
  });
}
