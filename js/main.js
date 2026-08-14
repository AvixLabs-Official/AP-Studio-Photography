/**
 * A P STUDIO — Master Interactive Orchestrator with Refined Section Layouts
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollSpy();
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
  initKeyboardFlash();
});

/* --------------------------------------------------------------------------
   FUN INTERACTIVE STUDIO FEATURES & CAMERA FX
   -------------------------------------------------------------------------- */

/* 1. Camera Flash FX */
function triggerCameraFlash() {
  const flashEl = document.getElementById('camera-flash');
  if (!flashEl) return;

  flashEl.classList.add('flashing');
  setTimeout(() => {
    flashEl.classList.remove('flashing');
  }, 100);

  playShutterSound();
}

function playShutterSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch (e) {
    // Audio Context fallback
  }
}

/* Spacebar Camera Flash Keyboard Easter Egg */
function initKeyboardFlash() {
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      triggerCameraFlash();
    }
  });
}

/* 2. Viewfinder Camera Overlay Toggle */
function toggleViewfinder() {
  const hud = document.getElementById('viewfinder-hud');
  if (!hud) return;
  hud.classList.toggle('active');
  triggerCameraFlash();
}

/* 3. Studio Mood Theme Switcher */
function setStudioMood(mood) {
  document.body.classList.remove('theme-neon', 'theme-daylight');
  const moodBtns = document.querySelectorAll('.mood-btn');
  moodBtns.forEach(btn => btn.classList.remove('active'));

  if (mood === 'neon') {
    document.body.classList.add('theme-neon');
    if (moodBtns[1]) moodBtns[1].classList.add('active');
  } else if (mood === 'daylight') {
    document.body.classList.add('theme-daylight');
    if (moodBtns[2]) moodBtns[2].classList.add('active');
  } else {
    if (moodBtns[0]) moodBtns[0].classList.add('active');
  }

  triggerCameraFlash();
}

/* 4. Interactive Gear Finder Quiz Filter */
function filterGear(type) {
  const btns = document.querySelectorAll('.gear-quiz-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  const container = document.getElementById('camera-rental-container');
  if (!container || !AP_STUDIO_DATA?.cameraRental) return;

  if (type === 'all') {
    renderCameraRental();
    return;
  }

  const filtered = AP_STUDIO_DATA.cameraRental.filter(c => {
    if (type === 'Portrait') return c.category === 'Lenses' || c.category === 'Lighting' || c.category === 'Cameras';
    if (type === 'Cinema') return c.category === 'Cameras' || c.category === 'Audio' || c.category === 'Accessories';
    if (type === 'Fashion') return c.category === 'Lighting' || c.category === 'Lenses' || c.category === 'Accessories';
    if (type === 'Commercial') return c.category === 'Lighting' || c.category === 'Cameras' || c.category === 'Lenses';
    return true;
  });

  container.innerHTML = filtered.map(c => `
    <div class="rental-cat-card" style="border-color:var(--color-accent); transform:translateY(-3px);">
      <div class="rental-img-box">
        <img src="${c.image}" alt="${c.category}">
      </div>
      <div class="rental-body">
        <span style="font-size:0.65rem; color:var(--color-accent); font-weight:700; display:block; margin-bottom:4px;">MATCHED FOR ${type.toUpperCase()}</span>
        <h4 class="rental-title">${c.category}</h4>
        <p class="rental-desc">${c.desc}</p>
        <span style="font-size:0.75rem; color:var(--color-text); font-family:monospace; display:block; margin-top:8px;">${c.items}</span>
        <a href="#contact" onclick="preselectService('Camera Rental - ${c.category}')" class="service-link" style="margin-top:12px;">
          <span>Explore Gear →</span>
        </a>
      </div>
    </div>
  `).join('');

  triggerCameraFlash();
}

/* --------------------------------------------------------------------------
   CORE RENDER FUNCTIONS
   -------------------------------------------------------------------------- */

/* Header Scroll */
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

/* Active ScrollSpy Navigation */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.ap-nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* Mobile Menu */
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

/* Render Services Grid */
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container || !AP_STUDIO_DATA?.services) return;

  container.innerHTML = AP_STUDIO_DATA.services.map(s => `
    <article class="ap-service-row">
      <span class="service-num">${s.number}</span>
      <div class="service-content">
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap; margin-bottom:4px;">
          <h3 class="service-title" style="margin:0;">${s.title}</h3>
          <span style="font-size:0.68rem; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--color-accent); background:rgba(200, 169, 107, 0.12); padding:3px 10px; border-radius:12px; border:1px solid rgba(200, 169, 107, 0.25);">${s.tag}</span>
        </div>
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

/* Render Portfolio */
function renderPortfolio() {
  const container = document.getElementById('portfolio-container');
  if (!container || !AP_STUDIO_DATA?.portfolio) return;

  container.innerHTML = AP_STUDIO_DATA.portfolio.map(p => `
    <article class="ap-portfolio-card ${p.layout}" onclick="triggerCameraFlash()">
      <div class="portfolio-img-wrap">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span style="position:absolute; top:20px; left:20px; background:rgba(11, 11, 11, 0.85); color:var(--color-text); font-size:0.75rem; font-weight:600; padding:4px 12px; border-radius:20px; border:1px solid var(--border-color); backdrop-filter:blur(6px);">${p.client}</span>
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

/* Render Hall of Fame List */
function renderHallOfFame() {
  const container = document.getElementById('hall-fame-container');
  if (!container || !AP_STUDIO_DATA?.hallOfFame) return;

  container.innerHTML = AP_STUDIO_DATA.hallOfFame.map(h => `
    <div class="hall-fame-item" data-image="${h.image}" onclick="triggerCameraFlash()">
      <span class="hall-num">${h.number}</span>
      <div>
        <h3 class="hall-name">${h.name}</h3>
        <span style="font-size:0.72rem; color:var(--color-accent); font-weight:600; display:block; margin-top:2px;">${h.tags}</span>
      </div>
      <span class="hall-category">${h.category}</span>
    </div>
  `).join('');
}

/* Hall of Fame Dynamic Cursor Tracker */
function initHallOfFameHover() {
  const items = document.querySelectorAll('.hall-fame-item');
  const previewBox = document.getElementById('hall-preview-box');
  const previewImg = document.getElementById('hall-preview-img');
  if (!previewBox || !previewImg) return;

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
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

/* Render Studio Spaces */
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
        
        <!-- Key Specifications Grid -->
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-bottom:20px; background:var(--bg-primary); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--border-color); text-align:center;">
          <div>
            <span style="font-size:0.65rem; color:var(--color-muted); text-transform:uppercase; display:block;">Floor Area</span>
            <strong style="font-size:0.85rem; color:var(--color-accent);">${sp.specs.area}</strong>
          </div>
          <div>
            <span style="font-size:0.65rem; color:var(--color-muted); text-transform:uppercase; display:block;">Ceiling</span>
            <strong style="font-size:0.85rem; color:var(--color-text);">${sp.specs.ceiling}</strong>
          </div>
          <div>
            <span style="font-size:0.65rem; color:var(--color-muted); text-transform:uppercase; display:block;">Lighting</span>
            <strong style="font-size:0.85rem; color:var(--color-text);">${sp.specs.light}</strong>
          </div>
        </div>

        <ul class="space-facilities-list">
          ${sp.facilities.map(f => `<li>✓ ${f}</li>`).join('')}
        </ul>
        <a href="#contact" onclick="preselectService('Studio Booking - ${sp.name}'); triggerCameraFlash();" class="btn-ap-outline" style="margin-top:auto; justify-content:center;">
          <span>Book ${sp.tag} 📸</span>
        </a>
      </div>
    </article>
  `).join('');
}

/* Render Camera Rental */
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
        <span style="font-size:0.75rem; color:var(--color-text); font-family:monospace; display:block; margin-top:8px;">${c.items}</span>
        <a href="#contact" onclick="preselectService('Camera Rental - ${c.category}')" class="service-link" style="margin-top:12px;">
          <span>Rent Gear →</span>
        </a>
      </div>
    </div>
  `).join('');
}

/* Render Gallery */
function renderGallery() {
  const container = document.getElementById('gallery-masonry-container');
  if (!container || !AP_STUDIO_DATA?.gallery) return;

  container.innerHTML = AP_STUDIO_DATA.gallery.map((g, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx}); triggerCameraFlash();">
      <img src="${g.image}" alt="${g.title}" loading="lazy">
      <div class="gallery-hover-overlay">
        <span class="gallery-cat">${g.category}</span>
        <h4 class="gallery-title">${g.title}</h4>
      </div>
    </div>
  `).join('');
}

/* Lightbox Modal */
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

/* Render Behind The Scenes */
function renderBehindTheScenes() {
  const container = document.getElementById('bts-container');
  if (!container || !AP_STUDIO_DATA?.behindTheScenes) return;

  container.innerHTML = AP_STUDIO_DATA.behindTheScenes.map(b => `
    <article class="bts-card" onclick="triggerCameraFlash()">
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

/* Render Why Us */
function renderWhyUs() {
  const container = document.getElementById('whyus-container');
  if (!container || !AP_STUDIO_DATA?.whyUs) return;

  container.innerHTML = AP_STUDIO_DATA.whyUs.map((w, idx) => `
    <div class="whyus-box">
      <span style="font-family:var(--font-serif); font-size:1.4rem; color:var(--color-accent); font-weight:700; display:block; margin-bottom:6px;">0${idx+1}</span>
      <h4 class="whyus-title">${w.title}</h4>
      <p class="whyus-desc">${w.desc}</p>
    </div>
  `).join('');
}

/* Render Testimonials */
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container || !AP_STUDIO_DATA?.testimonials) return;

  container.innerHTML = AP_STUDIO_DATA.testimonials.map(t => `
    <article class="testimonial-card">
      <div style="font-family:var(--font-serif); font-size:3.5rem; color:var(--color-accent); opacity:0.25; line-height:1; margin-bottom:-20px;">“</div>
      <p class="test-quote">"${t.quote}"</p>
      <div class="test-author-box">
        <strong class="test-author">${t.author}</strong>
        <span class="test-role">${t.role}</span>
      </div>
    </article>
  `).join('');
}

/* Contact Form */
function initBookingForm() {
  const form = document.getElementById('ap-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    triggerCameraFlash();
    const name = document.getElementById('inquiry-name')?.value || 'Valued Creator';
    alert(`📸 Flash! Thank you, ${name}! Your studio enquiry has been sent to A P Studio. Our creative team will get back to you shortly.`);
    form.reset();
  });
}
