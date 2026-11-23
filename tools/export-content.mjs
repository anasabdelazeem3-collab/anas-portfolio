import fs from 'fs'; import path from 'path';
const root = path.resolve(process.argv[2] || '.'); const out = path.join(root, 'content');
const mods = ['data/art.js','data/companies.js','data/creative.js','data/creative-concepts.js','data/personal-photos.js','data/people.js','data/totals.js','data/cases/seet.js','data/cases/alahly-leadmagnet.js','data/cases/ecart.js','data/cases/ecom-store.js','data/cases/monthly-reports.js','data/cases/portfolio-cases.js'];
const index = {};
for (const m of mods) {
  const mod = await import(path.join(root, m));
  const name = m.replace(/^data\//,'').replace(/\//g,'-').replace('.js','.json');
  fs.writeFileSync(path.join(out, name), JSON.stringify(mod, null, 2));
  index[name] = Object.keys(mod);
}
fs.writeFileSync(path.join(out, '_index.json'), JSON.stringify({ note: 'Read-only JSON snapshot of data/*.js (the site reads the .js files). Edit data/*.js, then re-run: node tools/export-content.mjs .', files: index }, null, 2));
