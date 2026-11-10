/**
 * app.js — Ergoterapi.com.tr Ana Uygulama
 * Subdomain tespiti, dinamik içerik, animasyonlar
 */

// ============================================================
// 0. ADMIN SETTINGS
// Önce /site-settings.json dener (tüm subdomain'lerde ortak),
// bulamazsa localStorage'a bakar (lokal geliştirme).
// ============================================================
function applySettings(s) {
  if (!s || typeof s !== 'object') return;

  // Favicon
  if (s.favicon) {
    const el = document.getElementById('site-favicon');
    if (el) el.href = s.favicon;
  }

  // Logo
  if (s.logoType === 'image' && s.logoImage) {
    const logoWrapper = document.getElementById('nav-logo');
    const icon        = document.getElementById('nav-logo-icon');
    if (icon)        icon.innerHTML = `<img src="${s.logoImage}" alt="Logo">`;
    if (logoWrapper) logoWrapper.classList.add('has-logo-img');
  } else if (s.logoEmoji) {
    const logoWrapper = document.getElementById('nav-logo');
    const icon        = document.getElementById('nav-logo-icon');
    if (icon)        icon.textContent = s.logoEmoji;
    if (logoWrapper) logoWrapper.classList.remove('has-logo-img');
  }

  // Site adı
  if (s.siteName) {
    const nameEl   = document.getElementById('nav-site-name');
    const domainEl = document.getElementById('nav-site-domain');
    if (nameEl)   nameEl.textContent   = s.siteName;
    if (domainEl) domainEl.textContent = s.siteDomain || '.com.tr';
    const loaderLogo = document.getElementById('loader-logo-text');
    if (loaderLogo) loaderLogo.textContent = (s.siteName || 'ergoterapi') + (s.siteDomain || '.com.tr');
  }

  // Sayfa başlığı
  if (s.siteTitle) document.title = s.siteTitle;

  // İletişim
  const setVal = (id, val) => { const el = document.getElementById(id); if (el && val) el.textContent = val; };
  setVal('contact-phone',    s.phone);
  setVal('contact-email',    s.email);
  setVal('contact-whatsapp', s.whatsapp);
  setVal('contact-hours',    s.hours);
  setVal('footer-phone',     s.phone);
  setVal('footer-email',     s.email);

  // Notice bar
  const bar = document.getElementById('notice-bar');
  if (bar) {
    if (s.noticeBarHide) {
      bar.style.display = 'none';
    } else {
      bar.style.display = '';
      if (s.noticeBarTitle) {
        const txt = document.getElementById('notice-bar-text');
        if (txt) txt.textContent = s.noticeBarTitle;
      }
    }
  }
}

async function loadAdminSettings() {
  try {
    // 1. Önce site-settings.json'ı dene (Vercel'de tüm subdomain'ler bu dosyayı paylaşır)
    const res = await fetch('/site-settings.json', { cache: 'no-cache' });
    if (res.ok) {
      const json = await res.json();
      if (json && Object.keys(json).length > 0) {
        applySettings(json);
        return;
      }
    }
  } catch(e) { /* fetch başarısız */ }

  // 2. Fallback: localStorage (lokal geliştirme)
  try {
    const s = JSON.parse(localStorage.getItem('ergo_admin_settings') || '{}');
    applySettings(s);
  } catch(e) { console.warn('Admin settings load error:', e); }
}

// ============================================================
// 1. CITY DETECTION — path bazlı: ergoterapi.com.tr/yalova
// ============================================================
function detectCity() {
  // Path'ten şehir slug'ını oku: /yalova → 'yalova'
  const pathSlug = window.location.pathname
    .replace(/^\//, '')   // baştaki / kaldır
    .replace(/\/$/, '')   // sondaki / kaldır
    .split('/')[0]        // sadece ilk segment
    .toLowerCase();

  if (pathSlug && CITIES_DATA[pathSlug]) {
    return CITIES_DATA[pathSlug];
  }

  return null; // ana sayfa
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

  // Canonical URL — path bazlı
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.href = city
      ? `https://ergoterapi.com.tr/${c.slug}`
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

  // Path bazlı link — localhost ve canlıda aynı format
  container.innerHTML = CITIES_LIST.map(city => {
    const href     = `/${city.slug}`;
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
    "url": isCityPage ? `https://ergoterapi.com.tr/${city.slug}` : "https://ergoterapi.com.tr",
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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameInput      = document.getElementById('form-name');
    const phoneInput     = document.getElementById('form-phone');
    const emailInput     = document.getElementById('form-email');
    const citySelect     = document.getElementById('form-city');
    const condSelect     = document.getElementById('form-condition');
    const messageInput   = document.getElementById('form-message');
    const btn            = form.querySelector('.form-submit');
    const originalText   = btn.innerHTML;

    const name  = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';

    if (!name || !phone) {
      alert('Lütfen Ad Soyad ve Telefon alanlarını doldurunuz.');
      return;
    }

    const email     = emailInput ? emailInput.value.trim() : '';
    const cityText  = citySelect && citySelect.selectedIndex >= 0 ? citySelect.options[citySelect.selectedIndex].text : '';
    const condText  = condSelect && condSelect.selectedIndex >= 0 && condSelect.value ? condSelect.options[condSelect.selectedIndex].text : '';
    const message   = messageInput ? messageInput.value.trim() : '';

    // Hedef bildirim e-postası (Admin ayarlarından veya varsayılan ergoterapimail@gmail.com)
    let targetEmail = 'ergoterapimail@gmail.com';
    try {
      const raw = localStorage.getItem('ergo_site_settings');
      if (raw) {
        const s = JSON.parse(raw);
        if (s.email && s.email.trim()) targetEmail = s.email.trim();
      }
    } catch (_) {}

    btn.innerHTML = '<span>Gönderiliyor…</span>';
    btn.disabled = true;

    try {
      const response = await fetch('https://api.ergoterapi.com.tr/appointment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          email: email,
          city: cityText,
          condition: condText,
          message: message,
          target_email: targetEmail
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result && result.ok) {
        const successEl = document.getElementById('form-success');
        if (successEl) {
          form.style.display = 'none';
          successEl.style.display = 'block';
        } else {
          btn.innerHTML = '✓ Randevu Alındı! En kısa sürede arayacağız.';
          btn.style.background = 'linear-gradient(135deg, #06D6A0, #059669)';
        }
      } else {
        const err = (result && result.error) ? result.error : 'Bir hata oluştu. Lütfen telefon ile ulaşınız.';
        alert('Randevu gönderilemedi: ' + err);
        btn.innerHTML = originalText;
        btn.disabled = false;
      }
    } catch (err) {
      console.error('Randevu formu hatası:', err);
      // Ağ hatası olsa bile kullanıcıya alternatif sun
      alert('Sunucuya ulaşılamadı. Lütfen sayfadaki telefon numaramız veya canlı destek üzerinden bize ulaşınız.');
      btn.innerHTML = originalText;
      btn.disabled = false;
    }
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
