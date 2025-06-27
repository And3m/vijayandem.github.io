const fs = require('fs');
const urls = [
  '',
  '#about-section',
  '#resume-section',
  '#project-section',
  '#contact-section'
];
const base = 'https://and3m.github.io/Portfolio/';
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url>\n    <loc>${base}${u}</loc>\n    <priority>${u === '' ? '1.0' : '0.8'}</priority>\n  </url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync('sitemap.xml', xml);
console.log('Sitemap updated!'); 