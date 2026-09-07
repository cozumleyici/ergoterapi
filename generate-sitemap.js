#!/usr/bin/env node
/**
 * generate-sitemap.js
 * Tüm 81 il için sitemap.xml oluşturur.
 * Kullanım: node generate-sitemap.js
 * Çıktı: sitemap.xml (proje kökünde)
 */

const fs   = require('fs');
const path = require('path');

// ——— City slugs (cities.js'deki CITIES_DATA anahtarları) ———
const CITY_SLUGS = [
  'adana','adiyaman','afyonkarahisar','agri','aksaray','amasya','ankara','antalya',
  'ardahan','artvin','aydin','balikesir','bartin','batman','bayburt','bilecik',
  'bingol','bitlis','bolu','burdur','bursa','canakkale','cankiri','corum',
  'denizli','diyarbakir','duzce','edirne','elazig','erzincan','erzurum',
  'eskisehir','gaziantep','giresun','gumushane','hakkari','hatay','igdir',
  'isparta','istanbul','izmir','kahramanmaras','karabuk','karaman','kars',
  'kastamonu','kayseri','kilis','kirikkale','kirklareli','kirsehir','kocaeli',
  'konya','kutahya','malatya','manisa','mardin','mersin','mugla','mus',
  'nevsehir','nigde','ordu','osmaniye','rize','sakarya','samsun','sanliurfa',
  'siirt','sinop','sirnak','sivas','tekirdag','tokat','trabzon','tunceli',
  'usak','van','yalova','yozgat','zonguldak'
];

const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
  const urls = [];

  // Ana domain
  urls.push({
    loc: 'https://ergoterapi.com.tr/',
    lastmod: today,
    changefreq: 'weekly',
    priority: '1.0'
  });

  // Şehir subdomain'leri
  CITY_SLUGS.forEach(slug => {
    urls.push({
      loc: `https://${slug}.ergoterapi.com.tr/`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8'
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outPath = path.join(__dirname, 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`✅ sitemap.xml oluşturuldu: ${urls.length} URL`);
  console.log(`📂 Konum: ${outPath}`);
}

generateSitemap();
