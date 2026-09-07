/**
 * app.js — Ergoterapi.com.tr Ana Uygulama
 * Subdomain tespiti, dinamik içerik, animasyonlar
 */

// ============================================================
// 0. ADMIN SETTINGS — localStorage'dan yüklenir
// ============================================================
function loadAdminSettings() {
  try {
    const s = JSON.parse(localStorage.getItem('ergo_admin_settings') || '{}');

    // Favicon
    if (s.favicon) {
      const el = document.getElementById('site-favicon');
      if (el) el.href = s.favicon;
    }

    // Logo (resim veya emoji/metin)
    if (s.logoType === 'image' && s.logoImage) {
      const logoWrapper = document.getElementById('nav-logo');
      const icon = document.getElementById('nav-logo-icon');
      if (icon) {
        icon.innerHTML = `<img src="${s.logoImage}" alt="Logo">`;
      }
      // has-logo-img class'ı wrapper'a ekleniyor → CSS yazıyı gizler, resmi büyütür
      if (logoWrapper) logoWrapper.classList.add('has-logo-img');
    } else if (s.logoEmoji) {
      const logoWrapper = document.getElementById('nav-logo');
      const icon = document.getElementById('nav-logo-icon');
      if (icon) {
        icon.textContent = s.logoEmoji;
      }
      if (logoWrapper) logoWrapper.classList.remove('has-logo-img');
    }

    // Site adı
    if (s.siteName) {
      const nameEl = document.getElementById('nav-site-name');
      const domainEl = document.getElementById('nav-site-domain');
      if (nameEl)   nameEl.textContent  = s.siteName;
      if (domainEl) domainEl.textContent = s.siteDomain || '.com.tr';
      // Loader logo
      const loaderLogo = document.getElementById('loader-logo-text');
      if (loaderLogo) loaderLogo.textContent = (s.siteName || 'ergoterapi') + (s.siteDomain || '.com.tr');
    }

    // Site title (tab başlığı)
    if (s.siteTitle) document.title = s.siteTitle;

    // İletişim bilgileri
    const setVal = (id, val) => { const el = document.getElementById(id); if (el && val) el.textContent = val; };
    setVal('contact-phone',    s.phone);
    setVal('contact-email',    s.email);
    setVal('contact-whatsapp', s.whatsapp);
    setVal('contact-hours',    s.hours);

    // Notice bar
    if (s.noticeBar !== undefined) {
      const bar = document.getElementById('notice-bar');
      if (bar) {
        if (s.noticeBar === '' || s.noticeBarHide) {
          bar.style.display = 'none';
        } else if (s.noticeBar) {
          const txt = document.getElementById('notice-bar-text');
          if (txt) txt.textContent = s.noticeBar;
        }
      }
    }

    // Footer iletişim
    const footerPhone = document.getElementById('footer-phone');
    const footerEmail = document.getElementById('footer-email');
    if (footerPhone && s.phone) footerPhone.textContent = s.phone;
    if (footerEmail && s.email) footerEmail.textContent = s.email;

  } catch(e) { console.warn('Admin settings load error:', e); }
}

// ============================================================
// 1. CITY DETECTION
// ============================================================
function detectCity() {
  const hostname = window.location.hostname; // e.g. istanbul.ergoterapi.com.tr
  const parts    = hostname.split('.');
  const urlParams = new URLSearchParams(window.location.search);

  // Dev mode: ?city=istanbul overrides subdomain
  const devCity = urlParams.get('city');
  if (devCity && CITIES_DATA[devCity]) {
    return CITIES_DATA[devCity];
  }

  // Production subdomain detection
  // Hostname: istanbul.ergoterapi.com.tr → parts[0] = 'istanbul'
  // Or:       ergoterapi.com.tr          → parts[0] = 'ergoterapi'
  if (parts.length >= 3 && parts[0] !== 'www' && parts[0] !== 'ergoterapi') {
    const slug = parts[0].toLowerCase();
    if (CITIES_DATA[slug]) {
      return CITIES_DATA[slug];
    }
    // Try normalized slugs (handle ş→s, ç→c, etc.)
    for (const key of Object.keys(CITIES_DATA)) {
      if (CITIES_DATA[key].slug === slug) return CITIES_DATA[key];
    }
  }

  return null; // main site
}

// ============================================================
// 2. DOM UPDATE — Inject city-specific content
// ============================================================
function applyCity(city) {
  const isMain = !city;
  const c = city || DEFAULT_CITY;

  // Page title & meta
  document.title = city
    ? `${c.name} Ergoterapi | ${c.name}'da Ergoterapist Bul | ergoterapi.com.tr`
    : 'Ergoterapi.com.tr | Türkiye\'nin Ergoterapi Rehberi';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = city
      ? `${c.name}'da profesyonel ergoterapi hizmeti alın. ${c.clinicCount} klinik, ${c.therapistCount} uzman ergoterapist. Otizm, DEHB, inme rehabilitasyonu ve daha fazlası.`
      : 'Türkiye genelinde ergoterapi klinik ve uzman rehberi. Çocuk ergoterapisi, nörolojik rehabilitasyon, el terapisi ve daha fazlası için şehrinizi seçin.';
  }

  // Canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.href = city
      ? `https://${c.slug}.ergoterapi.com.tr`
      : 'https://ergoterapi.com.tr';
  }

  // ——— Hero ———
  setEl('hero-city-name', city ? `${c.name}'da` : 'Türkiye\'de');
  setEl('hero-title-suffix', city ? `Ergoterapi` : 'Ergoterapi');
  setEl('hero-subtitle', city
    ? `${c.name}'da uzman ergoterapistler eşliğinde çocuğunuz veya yakınınız için kişiye özel rehabilitasyon programları. ${c.clinicCount} onaylı klinik ve ${c.therapistCount} deneyimli terapist ile yanınızdayız.`
    : 'Türkiye\'nin kapsamlı ergoterapi rehberi. Otizm, DEHB, inme rehabilitasyonu, el terapisi ve daha fazlası için 81 ilde uzman bul.');

  setEl('stat-clinics', c.clinicCount);
  setEl('stat-therapists', c.therapistCount);

  // City pill in hero
  const cityPill = document.getElementById('hero-city-pill');
  if (cityPill) cityPill.textContent = city ? `📍 ${c.name} ${c.emoji}` : '📍 Türkiye Geneli 🇹🇷';

  // ——— City Section ———
  setEl('city-section-name', c.name);
  setEl('city-region', c.region);
  setEl('city-population', c.population);
  setEl('city-clinics', c.clinicCount);
  setEl('city-therapists', c.therapistCount);
  setEl('city-description', c.description);
  setEl('city-flag', c.emoji);

  const specContainer = document.getElementById('city-specialties');
  if (specContainer) {
    specContainer.innerHTML = c.specialties
      .map(s => `<span class="service-tag">${s}</span>`)
      .join('');
  }

  // City page title
  setEl('city-page-title', city
    ? `${c.name}'da Ergoterapi`
    : 'Türkiye\'de Ergoterapi');

  // ——— Contact form select default ———
  const citySelect = document.getElementById('form-city');
  if (citySelect && city) {
    const option = citySelect.querySelector(`option[value="${c.slug}"]`);
    if (option) option.selected = true;
  }

  // ——— Breadcrumb / City links ———
  if (isMain) {
    // On main page show all city links
    buildCityLinks();
  } else {
    buildCityLinks(c.slug);
  }

  // Schema.org JSON-LD
  injectSchema(c, city);
}

function setEl(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// ============================================================
// 3. BUILD CITY GRID
// ============================================================
function buildCityLinks(activeCitySlug) {
  const container = document.getElementById('cities-grid');
  if (!container) return;

  container.innerHTML = CITIES_LIST.map(city => {
    const href = window.location.hostname.includes('localhost') || window.location.hostname.includes('127.0.0.1')
      ? `?city=${city.slug}`
      : `https://${city.slug}.ergoterapi.com.tr`;
    const isActive = city.slug === activeCitySlug;
    return `<a href="${href}" class="city-link ${isActive ? 'city-link-active' : ''}" id="city-link-${city.slug}">
      <span>${city.emoji}</span> ${city.name}
    </a>`;
  }).join('');
}

// ============================================================
// 4. SCHEMA.ORG JSON-LD
// ============================================================
function injectSchema(city, isCityPage) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": isCityPage ? `${city.name} Ergoterapi` : "Ergoterapi.com.tr",
    "description": city.description,
    "url": isCityPage ? `https://${city.slug}.ergoterapi.com.tr` : "https://ergoterapi.com.tr",
    "medicalSpecialty": "PhysicalTherapy",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedIn": {
        "@type": "Country",
        "name": "Turkey"
      }
    },
    "serviceType": city.specialties
  };

  let el = document.getElementById('schema-json');
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'schema-json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema, null, 2);
}

// ============================================================
// 5. FILL FORM CITIES SELECT
// ============================================================
function fillCitiesSelect() {
  const select = document.getElementById('form-city');
  if (!select) return;
  select.innerHTML = '<option value="">Şehir seçin</option>' +
    CITIES_LIST.map(c => `<option value="${c.slug}">${c.name}</option>`).join('');
}

// ============================================================
// 6. NAVBAR SCROLL EFFECT
// ============================================================
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const noticebar = document.getElementById('notice-bar');
  if (!navbar) return;

  // Navbar'ı notice bar'ın hemen altına yerleştir
  function positionNavbar() {
    const noticeH = (noticebar && noticebar.offsetParent !== null)
      ? noticebar.offsetHeight
      : 0;
    navbar.style.top = noticeH + 'px';
  }

  positionNavbar();
  window.addEventListener('resize', positionNavbar, { passive: true });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  // Mobile toggle
  const toggle    = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn  = document.getElementById('mobile-menu-close');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => mobileMenu.classList.add('open'));
  }
  if (closeBtn && mobileMenu) {
    closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
  }

  // Close on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
    });
  });
}

// ============================================================
// 7. SCROLL-TRIGGERED REVEAL
// ============================================================
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ============================================================
// 8. COUNTER ANIMATION
// ============================================================
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const start    = performance.now();
  const from     = 0;

  // Parse numeric part
  const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
  const hasPlus = target.includes('+');

  function update(time) {
    const elapsed  = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease out cubic
    const current  = Math.floor(from + (numericTarget - from) * eased);
    el.textContent = current.toLocaleString('tr-TR') + (hasPlus ? '+' : '') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = el.dataset.counter;
        const suffix = el.dataset.suffix || '';
        animateCounter(el, target, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// ============================================================
// 9. FAQ ACCORDION
// ============================================================
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Open clicked (toggle)
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ============================================================
// 10. CONTACT FORM
// ============================================================
function initForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<span>Gönderiliyor…</span>';
    btn.disabled = true;

    setTimeout(() => {
      const successEl = document.getElementById('form-success');
      if (successEl) {
        form.style.display = 'none';
        successEl.style.display = 'block';
      } else {
        btn.innerHTML = '✓ Gönderildi! En kısa sürede dönüş yapılacak.';
        btn.style.background = 'linear-gradient(135deg, #06D6A0, #059669)';
      }
    }, 1500);
  });
}

// ============================================================
// 11. SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================================
// 12. PAGE LOADER
// ============================================================
function hideLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 500);
  }, 400);
}

// ============================================================
// 13. ACTIVE NAV LINK (scroll spy)
// ============================================================
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ============================================================
// INIT — Run everything on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Load admin settings first (logo, iletişim, notice bar)
  loadAdminSettings();

  // Detect city from subdomain or ?city= param
  const city = detectCity();

  // Fill dynamic content
  fillCitiesSelect();
  applyCity(city);

  // UI behaviors
  initNavbar();
  initReveal();
  initCounters();
  initFaq();
  initForm();
  initSmoothScroll();
  initScrollSpy();
  hideLoader();
});

// Also handle active nav link style
document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = `
    .nav-link.active { color: #B8A9FF !important; }
    .nav-link.active::after { width: 100% !important; }
    .city-link-active {
      background: rgba(124, 58, 237, 0.15) !important;
      border-color: rgba(124, 58, 237, 0.4) !important;
      color: #B8A9FF !important;
    }
  `;
  document.head.appendChild(style);
});
