import { artProjects } from './data/art.js';
import { roofPyramisa } from './data/creative.js';
import { creativeConcepts } from './data/creative-concepts.js';
import { seetCase } from './data/cases/seet.js';
import { alahlyLeadMagnet } from './data/cases/alahly-leadmagnet.js';
import { ecomStoreCase } from './data/cases/ecom-store.js';
import { ecartCase } from './data/cases/ecart.js';
import { leadGenCases, ecommerceCases } from './data/cases/portfolio-cases.js';
import { alahlyMonthly, seetMonthly } from './data/cases/monthly-reports.js';
import { totals } from './data/totals.js';
import { companies, contact, companyOrder } from './data/companies.js';
import { people } from './data/people.js';
const topCos = companyOrder.map(sl => companies.find(c => c.slug === sl)).filter(Boolean);
const coBy = sl => companies.find(c => c.slug === sl);
import { personalPhotos } from './data/personal-photos.js';

/* ---------- i18n ---------- */
let lang = 'en';
try { lang = localStorage.getItem('lang') || 'en'; } catch {}
try { const q = new URLSearchParams(location.search).get('lang'); if (q === 'ar' || q === 'en') { lang = q; localStorage.setItem('lang', q); } } catch {}
const ar = () => lang === 'ar';
const L = v => v == null ? '' : typeof v === 'string' ? v : (v[lang] ?? v.en ?? '');
const T = {
  home: ['Home', 'الرئيسية'], work: ['Work', 'الأعمال'], art: ['Art & Acting', 'الفن والتمثيل'], contactN: ['Contact', 'تواصل'],
  heroSub: ['Creative strategist, performance marketer and actor — marketing mind, actor’s instinct.', 'مخطط استراتيجي إبداعي ومسوّق أداء وممثل — عقل تسويقي وإحساس ممثل.'],
  explore: ['Explore my work', 'اكتشف أعمالي'], talk: ['Let’s talk', 'لنتحدث'],
  sales: ['in sales generated (stores + leads)', 'مبيعات حققتها (متاجر + ليدز)'], orders: ['orders', 'طلب'], leads: ['leads', 'ليد'], spend: ['total ad spend managed', 'إجمالي صرف إعلاني أدرته'],
  whatI: ['What I do', 'ما أقدمه'], whatT: ['Marketing mind. Actor’s instinct.', 'عقل تسويقي. إحساس ممثل.'],
  exp: ['Experience', 'الخبرات'], expT: ['Five companies. One career journey.', 'خمس شركات. رحلة مهنية واحدة.'],
  featured: ['Selected case studies', 'دراسات حالة مختارة'], featT: ['Numbers with a story behind them.', 'أرقام وراها حكاية.'],
  allWork: ['See all work', 'كل الأعمال'], clients: ['Clients', 'العملاء'], clientsT: ['Brands I’ve grown — tap one for its case.', 'براندات اشتغلت معاها — اضغط على أي واحدة تشوف الكيس بتاعها.'],
  artT: ['On stage and on screen', 'على المسرح وقدام الكاميرا'], seeArt: ['See all art & acting', 'كل أعمال الفن والتمثيل'],
  all: ['All', 'الكل'], leadgen: ['Lead generation', 'توليد العملاء'], ecom: ['E-commerce', 'تجارة إلكترونية'], creative: ['Creative & content', 'إبداع ومحتوى'],
  workT: ['Campaigns, case studies & creative work', 'حملات ودراسات حالة وأعمال إبداعية'],
  workP: ['Every case is built on the real numbers from the ad accounts and stores — what we did, how it was structured, and what it delivered.', 'كل كيس مبني على الأرقام الحقيقية من حسابات الإعلانات والمتاجر — عملنا إيه، والستراكشر كان إزاي، وجاب إيه.'],
  back: ['Back', 'رجوع'], videos: ['Videos', 'الفيديوهات'], results: ['Results', 'النتائج'], story: ['The story', 'الحكاية'], proof: ['Proof', 'الدليل'],
  gallery: ['Photos', 'الصور'], credits: ['Credits', 'الكريديتس'], awards: ['Awards & selections', 'الجوائز والاختيارات'],
  monthly: ['Month by month', 'شهر بشهر'], month: ['Month', 'الشهر'], spent: ['Spend', 'الصرف'], cpl: ['CPL', 'تكلفة الليد'], meetings: ['Meetings', 'اجتماعات'], clientsPaid: ['Paid clients', 'عملاء دفعوا'], total: ['Total', 'الإجمالي'],
  watch: ['Watch the full work', 'شاهد العمل كامل'], role: ['My role', 'دوري'], related: ['Related case studies', 'كيسات مرتبطة'],
  artP: ['Theatre, film, commercials and music videos — acting first, and everything that makes a performance work on set.', 'مسرح وسينما وإعلانات وكليبات — التمثيل أولًا، وكل اللي بيخلّي الأداء يشتغل في اللوكيشن.'],
  ctaT1: ['Let’s create', 'يلا نعمل'], ctaT2: ['something impactful.', 'حاجة تسيب أثر.'], rights: ['All rights reserved.', 'جميع الحقوق محفوظة.'],
  founder: ['Founder Q&A content (reference)', 'محتوى الـ Q&A مع المؤسس (مرجع)'], read: ['Read case', 'اقرأ الكيس'],
  from: ['From', 'من'], concept: ['Creative concept', 'كرييتف كونسبت'],
};
const t = k => (T[k] || [k, k])[ar() ? 1 : 0];

/* ---------- formatting ---------- */
const nf = (n, d = 0) => new Intl.NumberFormat(ar() ? 'ar-EG' : 'en-US', { maximumFractionDigits: d }).format(n);
const compact = n => new Intl.NumberFormat(ar() ? 'ar-EG' : 'en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(n);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ML = {
  salesSAR: ['Sales', 'المبيعات'], netSAR: ['Net sales', 'صافي المبيعات'], spendSAR: ['Ad spend', 'الصرف الإعلاني'], spendUSD: ['Ad spend', 'الصرف الإعلاني'],
  roas: ['ROAS', 'العائد على الإعلان'], orders: ['Orders', 'الطلبات'], visits: ['Visits', 'الزيارات'], goalSAR: ['Monthly target', 'تارجت الشهر'],
  leads: ['Leads', 'الليدز'], conversations: ['Conversations', 'المحادثات'], cplUSD: ['Cost per lead', 'تكلفة الليد'], impressions: ['Impressions', 'مرات الظهور'],
  clicks: ['Clicks', 'النقرات'], ctr: ['Click rate', 'نسبة النقر'], hookRate: ['Hook rate', 'Hook Rate'], growth: ['Growth', 'النمو'],
  meetings: ['Sales meetings', 'اجتماعات بيع'], contracts: ['Signed contracts', 'عقود'], contractValueSAR: ['Contract value', 'قيمة العقود'], paidSAR: ['Collected', 'المحصّل'],
  revenueUSD: ['Revenue from contracts', 'الدخل من العقود'],
};
function fmtMetric(k, v) {
  if (typeof v !== 'number') return null;
  if (k.endsWith('SAR')) return `${compact(v)} ${ar() ? 'ر.س' : 'SAR'}`;
  if (k.endsWith('USD')) return '$' + (v < 100 ? nf(v, 2) : compact(v));
  if (k === 'roas') return nf(v, 2) + '×';
  if (['ctr', 'hookRate', 'growth'].includes(k)) return nf(v * 100, 2) + '%';
  return nf(v);
}
const metricGrid = obj => {
  const items = Object.entries(obj || {}).map(([k, v]) => ML[k] && fmtMetric(k, v) ? `<div class="metric"><b>${fmtMetric(k, v)}</b><span>${ML[k][ar() ? 1 : 0]}</span></div>` : '').join('');
  return items ? `<div class="mgrid">${items}</div>` : '';
};

/* ---------- case registry ---------- */
const cases = [];
const add = c => cases.push(c);
add({ ...ecomStoreCase, kind: 'ecom', title: ecomStoreCase.headline, sub: L(ecomStoreCase.client), chips: ['TikTok', 'Meta', L(ecomStoreCase.period)],
  kpis: { salesSAR: 973940, orders: 2390, roas: 8.08 }, metrics: { salesSAR: 973940, orders: 2390, spendSAR: 120505.72, roas: 8.08, growth: 3.0272 } });
leadGenCases.forEach(c => add({ ...c, kind: 'leadgen', title: c.headline, sub: c.client, chips: [c.platform, L(c.period)], kpis: c.metrics }));
ecommerceCases.forEach(c => add({ ...c, kind: 'ecom', title: c.headline, sub: c.client, chips: [L(c.niche), L(c.period)], kpis: c.metrics }));
add({ ...seetCase, kind: 'leadgen', title: seetCase.headline, sub: seetCase.client, chips: [L(seetCase.market), L(seetCase.period)], monthly: seetMonthly, monthlyNote: { en: 'Monthly reports cover Sep 2025 – Jan 2026 (61 paying clients). The CRM dashboard runs to Apr 1, 2026, so it includes February–March: 77 Hot-lead contracts in total.', ar: 'التقارير الشهرية من سبتمبر ٢٠٢٥ لحد يناير ٢٠٢٦ (٦١ عميل دفع). داشبورد الـ CRM ممتد لحد ١ أبريل ٢٠٢٦، فبيشمل فبراير ومارس: ٧٧ عقد من الليدز الـ Hot إجمالًا.' },
  kpis: { contractValueSAR: 423860, contracts: 77, meetings: 1332 },
  metrics: { meetings: 1332, contracts: 77, contractValueSAR: 423860, paidSAR: 389610 }, cover: seetCase.videos[0].poster });
cases.find(c => c.id === 'alahli-snapchat').monthly = alahlyMonthly;
add({ ...alahlyLeadMagnet, kind: 'creative', title: alahlyLeadMagnet.headline, sub: alahlyLeadMagnet.client, chips: ['TOF', 'Motion × AI'], cover: alahlyLeadMagnet.videos[3].poster });
add({ ...ecartCase, kind: 'creative', btsTitle: true, title: ecartCase.headline, sub: ecartCase.client, chips: ['Short-form', 'Q&A', 'Shopify'], videos: ecartCase.agencyVideos, cover: ecartCase.agencyVideos[0].poster });
add({ id: 'roof-pyramisa', kind: 'creative', title: roofPyramisa.title, sub: roofPyramisa.brand, chips: [L(roofPyramisa.category)], videos: roofPyramisa.films,
  gallery: roofPyramisa.stills, cover: roofPyramisa.films[0].poster });
creativeConcepts.forEach(c => add({ id: c.id, kind: 'creative', title: L(c.brand), sub: t('concept'), chips: [L(c.category)], videos: c.videos, angle: c.summary, cover: c.videos[0].poster }));
const byId = id => cases.find(c => c.id === id);
const featuredIds = ['ecom-store-2025', 'seet-crm-pipeline', 'alahli-snapchat', 'operamck', 'ecart-content-growth', 'oneline'];
const clientWall = [
  ['Al-Ahli Marketing', 'alahli-snapchat'], ['Seet / SMT', 'seet-crm-pipeline'], ['E-Cart', 'ecart-content-growth'], ['Maysara Factory', 'maysara'],
  ['She Is', 'sheis'], ['Operamck', 'operamck'], ['One Line', 'oneline'], ['Nasim Al Ward', 'wanasim'], ['Asas Factory', 'asas'],
  ['Roof Pyramisa', 'roof-pyramisa'], ['Aurest', 'aurest'], ['Honey store', 'ecom-store-2025'],
];

/* ---------- pieces ---------- */
const kpiStrip = c => {
  const k = Object.entries(c.kpis || c.metrics || {}).filter(([key, v]) => ML[key] && fmtMetric(key, v)).slice(0, 3);
  return k.length ? `<div class="kpis">${k.map(([key, v]) => `<div><b>${fmtMetric(key, v)}</b><span>${ML[key][ar() ? 1 : 0]}</span></div>`).join('')}</div>` : '';
};
const coverOf = c => c.cover || c.gallery?.[0]?.src;
const bigKpi = c => { const e = Object.entries(c.kpis || c.metrics || {}).find(([k, v]) => ML[k] && fmtMetric(k, v)); return e ? [fmtMetric(e[0], e[1]), ML[e[0]][ar() ? 1 : 0]] : ['✸', '']; };
const typoCover = (c, i) => { const [v, l] = bigKpi(c); return `<div class="tcover c${i % 3}"><span class="cl">${esc((L(c.sub) || '').split(' — ')[0])}</span><div><div class="big">${v}</div><span class="cl">${l}</span></div><span class="st">✸</span></div>`; };
/* ---------- shared pieces (editorial) ---------- */
const tilt = i => ['-1.6deg', '1.2deg', '-0.8deg', '1.8deg', '-1.2deg', '0.9deg'][i % 6];
const caseCard = (c, i = 0) => `<a class="card rv" style="--r:${tilt(i)}" href="#case-${c.id}">
  <div class="card-m">${coverOf(c) ? `<img loading="lazy" src="${coverOf(c)}" alt="">` : typoCover(c, i)}${c.videos ? `<span class="play">▶ ${c.videos.length}</span>` : ''}</div>
  <div class="card-b"><small>${esc(L(c.sub))}</small><h3>${esc(L(c.title))}</h3>${kpiStrip(c)}</div></a>`;
const LAND = new Set(["assets/art/ads/etisalat.mp4", "assets/art/ads/storytel.mp4", "assets/art/roof/video/brand-film-every-table.mp4", "assets/art/talabat/talabat-shahid-ad.mp4", "assets/work/alahly/matrix-01-data.mp4", "assets/work/alahly/matrix-02-search-diet.mp4", "assets/work/alahly/matrix-03-crowd-engagement.mp4", "assets/work/alahly/matrix-04-algorithms-trend.mp4", "assets/work/alahly/matrix-05-space.mp4"]);
const isLand = v => v.orientation === 'landscape' || LAND.has(v.src);
let vmItems = [];
const vidBlock = (list) => {
  if (!list?.length) return '';
  const base = vmItems.length; vmItems.push(...list);
  return `<div class="vrow-wrap"><button class="vr-nav prev" data-vr="-1" aria-label="prev">‹</button><div class="vrow">${list.map((v, i) => `<button class="vt ${isLand(v) ? 'land' : ''}" data-vm="${base + i}" aria-label="${ar() ? 'شغّل' : 'Play'} ${esc(L(v.title))}">
    <span class="vt-img">${v.poster ? `<img loading="lazy" src="${v.poster}" alt="">` : '<i class="vt-ph">▶</i>'}<span class="vt-play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span></span>
    ${v.title ? `<span class="vt-t">${esc(L(v.title))}</span>` : ''}${v.credits ? `<span class="vt-c">${esc(L(v.credits[0][0]))}: ${esc(v.credits[0][1])}</span>` : ''}</button>`).join('')}</div><button class="vr-nav next" data-vr="1" aria-label="next">›</button></div>`;
};
const personCard = (p, i = 0) => `<div class="person rv" style="--r:${tilt(i)}"><div class="p-top"><span class="av">${p.initials}</span><div><b>${ar() ? p.ar : p.name}</b><small>${esc(L(p.role))}</small></div></div>
  <p>${esc(L(p.about))}</p>${p.recommendation ? `<blockquote class="rec">“${esc(L(p.recommendation))}”</blockquote>` : ''}
  <div class="row">${p.links.map(([n, h]) => `<a class="lnk" href="${h}" target="_blank" rel="noopener">${n} ↗</a>`).join('')}</div></div>`;
const peopleBlock = list => list.length ? `<div class="people">${list.map(personCard).join('')}</div>` : '';
const creditsBlock = (cr, note) => cr?.length ? `<div class="credits rv">${cr.map(([k, v]) => `<div><small>${esc(L(k))}</small>${esc(v)}</div>`).join('')}</div>${note ? `<p class="note">${esc(L(note))}</p>` : ''}` : '';
let lbItems = [];
const gallery = (items, cls = 'gal') => {
  if (!items?.length) return '';
  const base = lbItems.length; lbItems.push(...items.map(i => ({ src: i.src, cap: L(i.caption) })));
  if (cls === 'proofs') return `<div class="proofs">${items.map((i, n) => `<button class="rv" data-lb="${base + n}"><img loading="lazy" src="${i.src}" alt="${esc(L(i.caption))}"><span>${esc(L(i.caption))} — ${ar() ? 'اضغط للتكبير' : 'tap to zoom'}</span></button>`).join('')}</div>`;
  if (cls === 'carousel') return `<div class="vrow-wrap"><div class="vrow car">${items.map((i, n) => `<button class="cs" data-lb="${base + n}"><img loading="lazy" src="${i.src}" alt="${esc(L(i.caption))}"><span>${String(n + 1).padStart(2, '0')} · ${esc(L(i.caption))}</span></button>`).join('')}</div></div>`;
  return `<div class="gal">${items.map((i, n) => `<button data-lb="${base + n}"><img loading="lazy" src="${i.src}" alt="${esc(L(i.caption))}">${L(i.caption) ? `<span>${esc(L(i.caption))}</span>` : ''}</button>`).join('')}</div>`;
};
const storyBlock = secs => secs?.length ? `<div class="story">${secs.map(s => `<article class="rv"><h3>${esc(L(s.heading))}</h3><p>${esc(L(s.body))}</p></article>`).join('')}</div>` : '';
const monthlyTable = rows => {
  const hasM = rows.some(r => r.meetings);
  const sum = k => rows.reduce((a, r) => a + (r[k] || 0), 0);
  const mName = m => new Date(m + '-01').toLocaleDateString(ar() ? 'ar-EG' : 'en-US', { month: 'short', year: 'numeric' });
  return `<div class="tbl rv"><table class="mt"><thead><tr><th>${t('month')}</th><th>${t('spent')}</th><th>${t('leads')}</th><th>${t('cpl')}</th>${hasM ? `<th>${t('meetings')}</th>` : ''}<th>${t('clientsPaid')}</th></tr></thead><tbody>
  ${rows.map(r => `<tr><td>${mName(r.month)}</td><td>$${nf(r.spent)}</td><td>${nf(r.leads)}</td><td>$${nf(r.cpl, 2)}</td>${hasM ? `<td>${r.meetings ? nf(r.meetings) : '—'}</td>` : ''}<td>${nf(r.paidClients)}</td></tr>`).join('')}
  </tbody><tfoot><tr><td>${t('total')}</td><td>$${nf(sum('spent'))}</td><td>${nf(sum('leads'))}</td><td>$${nf(sum('spent') / sum('leads'), 2)}</td>${hasM ? `<td>${nf(sum('meetings'))}</td>` : ''}<td>${nf(sum('paidClients'))}</td></tr></tfoot></table></div>
  <p class="note">${ar() ? 'من التقارير الشهرية (المبالغ بالدولار). تكلفة الليد = الصرف ÷ عدد الليدز.' : 'From the monthly performance reports (USD). CPL = spend ÷ leads.'}</p>`;
};
const blk = (title, html) => html ? `<div class="blk"><h2>${title}</h2>${html}</div>` : '';
const marks = () => `<div class="marks"><span class="spin c-o">✸</span><span class="spin r c-p">✦</span><span class="spin p c-l">✳</span></div>`;
const secHead = (kick, title, note) => `<div class="sec-h rv"><div><p class="kick c-o">${kick}</p><h2 class="disp h2">${title}</h2></div>${note ? `<p class="hand">${note}</p>` : ''}</div>`;

/* ---------- home ---------- */
function home() {
  const roles = [['✸', 'Creative Strategist', 'مخطط استراتيجي إبداعي'], ['◎', 'Lead Generation', 'توليد العملاء'], ['↗', 'Performance Marketing', 'تسويق الأداء'],
    ['✎', 'Content & Storytelling', 'المحتوى والحكي'], ['✦', 'Actor', 'ممثل']];
  const skills = [['Meta', '#1877f2'], ['Snap', '#f7c600'], ['TikTok', '#111'], ['Google', '#ea4335'], ['CRM', '#3a044f'], ['Canva', '#7d2ae8'], ['AI', '#f29423'], ['Shopify', '#5e8e3e']];
  const tickets = [[`$${compact(totals.salesUSD)}`, ar() ? 'مبيعات (متاجر + ليدز)' : 'sales generated (stores + leads)'], [`${nf(Math.floor(totals.orders / 100) * 100)}+`, ar() ? 'طلب' : 'orders'],
    [`${nf(Math.floor(totals.leads / 100) * 100)}+`, ar() ? 'ليد' : 'leads'], [`$${compact(totals.adSpendUSD)}`, ar() ? 'إجمالي الصرف الإعلاني' : 'total ad spend managed']];
  const mq = (ar() ? ['مخطط استراتيجي', 'توليد عملاء', 'مسوق رقمي', 'صانع محتوى', 'ممثل'] : ['Creative strategist', 'Lead generation', 'Digital marketer', 'Content creator', 'Actor'])
    .map(w => `<span>${w}</span><em>✸</em>`).join('');
  const cf = featuredIds.concat(['seet-crm-pipeline', 'maysara', 'sheis', 'roof-pyramisa', 'alahly-matrix-lead-magnet']).filter((v, i, a) => a.indexOf(v) === i).map(byId).filter(Boolean);
  const clientsC = ['--c:var(--orange)', '--c:var(--lav)', '--c:var(--purple)'];
  return `<div class="view">
  <section class="hero"><div class="wrap">
    <div class="hero-top rv"><span>${ar() ? 'مسوق / ممثل' : 'MARKETER / ACTOR'}</span><span>2026</span></div>
    <h1 class="disp wordmark rv">PORTF<img class="logo-o" src="assets/brand/logo.png" alt="Anas logo">LIO</h1>
    <div class="sig hand rv"><svg viewBox="0 0 50 30" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M46 4 C30 6 14 14 6 26 M6 26 L4 15 M6 26 L16 23"/></svg>Anas Abdelazeem</div>
    ${marks()}
    <div class="hello">
      <div class="scan rv"><i></i><i></i><i></i><i></i><div class="fr"><img class="then" src="assets/personal/scan-hatter.jpg" alt="${ar() ? 'أنس في شخصية صانع القبعات' : 'Anas as the Mad Hatter'}"><img class="now" src="assets/personal/scan-book.jpg" alt="${ar() ? 'أنس المسوّق' : 'Anas, the marketer'}"><span class="line"></span><span class="tag t1">${ar() ? 'ممثل' : 'ACTOR'}</span><span class="tag t2">${ar() ? 'مسوق' : 'MARKETER'}</span></div><small>${ar() ? 'ممثل ومسوق، نفس الشخص ←' : '← actor & marketer, same guy'}</small></div>
      <div class="rv"><h2 class="disp">${ar() ? 'أهلاً' : 'HELLO'}</h2>
        <p class="lead">${ar() ? 'أنا أنس — مخطط استراتيجي إبداعي، ومسوق أداء، وممثل.' : 'I’m Anas — creative strategist, performance marketer and actor.'}</p>
        <p>${ar() ? 'بحول تحديات البيزنس لأفكار وحملات بتجيب أرقام: ليدز، واجتماعات، وعقود، ومبيعات. وبجيب للتسويق حاجة من المسرح والكاميرا: إزاي تخلي الناس توقف وتسمع.' : 'I turn business problems into ideas and campaigns that move numbers — leads, meetings, signed contracts and sales. And I bring something from the stage and the camera into marketing: how to make people stop and listen.'}</p>
        <div class="hero-cta" style="display:flex;gap:12px;margin-top:22px;flex-wrap:wrap"><a class="btn" href="#work">${t('explore')} →</a><a class="btn o" href="#contact">${t('talk')}</a><a class="btn cv" href="${contact.cv}" download="Anas_Abdelazeem_CV.pdf">⤓ ${ar() ? 'نزل السي في' : 'Download CV'}</a></div></div>
      <div class="side rv"><div><h3>${ar() ? 'الأدوات' : 'SKILLS'}</h3><div class="skills">${skills.map(([n, c]) => `<span class="skill" style="background:${c}">${n}</span>`).join('')}</div></div>
        <div><h3>${ar() ? 'الخبرات' : 'EXPERIENCE'}</h3><ul class="xp">${topCos.map(c => `<li><b>${c.name}${c.children ? ` <small>(${c.children.map(k => coBy(k).name).join(' · ')})</small>` : ''}</b><span>${L(c.period)}</span></li>`).join('')}</ul></div></div>
    </div>
  </div>
  <div class="strip"><div class="strip-band"><div class="marquee">${mq}${mq}${mq}${mq}</div></div>
    <img class="sticker" src="assets/hero/cutout-anas.png" alt="${ar() ? 'أنس عبد العظيم' : 'Anas Abdelazeem'}"></div>
  <div class="wrap"><div class="tickets">${tickets.map(([v, l], i) => `<div class="ticket rv" style="--r:${tilt(i)}"><b>${v}</b><span>${l}</span></div>`).join('')}</div></div>
  </section>

  <section><div class="wrap">${secHead('01 · ' + t('whatI'), t('whatT'), ar() ? 'عقل تسويقي، إحساس ممثل' : 'five hats, one head')}
    <div class="roles">${roles.map(([i, en, a], n) => `<span class="role rv" style="--r:${tilt(n)}"><i class="${['c-o', 'c-p', 'c-l', 'c-p', 'c-o'][n]}">${i}</i>${ar() ? a : en}</span>`).join('')}</div></div></section>

  <section class="cf-sec"><div class="wrap">${secHead('02 · ' + t('featured'), t('featT'), ar() ? 'اسحب ←' : 'swipe →')}
    <div class="cf" id="cf">${cf.map((c, i) => `<a class="cf-card" data-i="${i}" href="#case-${c.id}">${coverOf(c) ? `<img src="${coverOf(c)}" alt="">` : typoCover(c, i)}${c.kpis?.roas ? `<span class="badge">${nf(c.kpis.roas, 1)}×</span>` : ''}
      <div class="ov"><small>${esc(L(c.sub))}</small><h3>${esc(L(c.title))}</h3>${kpiStrip(c).replace('class="kpis"', 'class="k"')}</div></a>`).join('')}</div>
    <div class="cf-nav"><button data-cf="-1" aria-label="prev">←</button><button data-cf="1" aria-label="next">→</button></div><div class="cf-dots" id="cfd">${cf.map(() => '<i></i>').join('')}</div>
    <p style="text-align:center;margin-top:30px"><a class="btn" style="background:#fff;color:var(--ink);border-color:#fff" href="#work">${t('allWork')} →</a></p></div></section>

  <section><div class="wrap">${secHead('03 · ' + t('exp'), t('expT'), ar() ? 'أربع محطات' : 'four chapters')}
    <div class="pols">${topCos.map((c, i) => `<a class="pol rv ${c.children ? 'stack' : ''}" style="--r:${tilt(i + 1)}" href="#co-${c.slug}"><span class="tape"></span><img loading="lazy" src="${c.photo}" alt="">${c.children ? `<div class="subs">${c.children.map(k => `<span>${coBy(k).name}</span>`).join('')}</div>` : ''}<div class="cap"><b>${c.name}</b><span class="hand">${L(c.chapter)}</span></div></a>`).join('')}</div></div></section>

  ${tvSection(artProjects)}

  <section class="tst-sec" id="tst" hidden></section>

  <section><div class="wrap">${secHead('06 · ' + t('clients'), ar() ? 'براندات كبرت معايا' : 'Brands I’ve grown', ar() ? 'اضغط على أي واحدة' : 'tap one for its case')}
    <div class="stickers">${clientWall.map(([n, id], i) => `<a class="stk rv" style="--r:${tilt(i)};${clientsC[i % 3]}" href="#case-${id}">${n}</a>`).join('')}</div></div></section>
  ${contactBlock()}</div>`;
}
/* Netflix-style art block */
const tvSection = list => `<section class="tv" id="tv"><div class="tv-stage">
  ${list.map((p, i) => `<div class="tv-bg ${i === 0 ? 'on' : ''}" data-tvbg="${i}" style="opacity:${i === 0 ? 1 : 0};background-image:url('${p.bg || p.gallery?.[0]?.src || p.videos?.[0]?.poster || p.cover || p.poster || ''}')"></div>`).join('')}
  <div class="tv-info" id="tvi"></div>
  <div class="tv-row">${list.map((p, i) => `<button class="tv-th ${i === 0 ? 'on' : ''}" data-tv="${i}"><img loading="lazy" src="${'assets/art/thumbs/' + p.id + '.jpg'}" alt=""><span>${esc(L(p.title)).split(' — ')[0]}</span></button>`).join('')}</div>
</div></section>`;
function tvInfo(i) {
  const p = artProjects[i];
  return `<div class="anim"><p class="kick c-o">04 · ${t('art')}</p><h3>${esc(L(p.title)).split(' — ')[0]}</h3>
    <div class="meta"><span>${esc(L(p.category))}</span>${p.year || p.season ? `<span>· ${p.year || p.season}</span>` : ''}</div>
    <p>${(() => { const d = L(p.description) || L(p.sections?.[0]?.body) || ''; return esc(d.length > 170 ? d.slice(0, 170) + '…' : d); })()}</p>
    <div style="display:flex;gap:10px;margin-top:18px;flex-wrap:wrap"><a class="btn" href="#art-${p.id}">▶ ${ar() ? 'افتح المشروع' : 'Open project'}</a><a class="btn o" style="color:#fff;border-color:rgba(255,255,255,.5)" href="#art">${t('seeArt')}</a></div></div>`;
}
let filter = 'all';
function work() {
  const list = filter === 'all' ? cases : cases.filter(c => c.kind === filter);
  return `<div class="view"><div class="wrap ph-head"><p class="kick">${t('work')}</p><h1>${t('workT')}</h1><p>${t('workP')}</p>${marks()}</div>
  <section style="padding-top:10px"><div class="wrap">
    <div class="filters">${['all', 'leadgen', 'ecom', 'creative'].map(f => `<button data-f="${f}" class="${f === filter ? 'on' : ''}">${t(f)} · ${f === 'all' ? cases.length : cases.filter(c => c.kind === f).length}</button>`).join('')}</div>
    <div class="grid">${list.map(caseCard).join('')}</div></div></section>${contactBlock()}</div>`;
}
function caseView(c) {
  lbItems = []; vmItems = [];
  const landscape = c.videos?.[0]?.orientation === 'landscape';
  const chips = (c.chips || []).filter(Boolean).map(x => `<span class="chip">${esc(x)}</span>`).join('');
  const vids = vidBlock(c.videos);
  return `<div class="view"><div class="wrap ph-head">
    <a class="back" href="#work">← ${t('back')}</a><p class="kick">${esc(L(c.sub))}</p><h1>${esc(L(c.title))}</h1>
    ${c.angle ? `<p>${esc(L(c.angle))}</p>` : ''}<div class="chips">${chips}${c.role ? `<span class="chip" style="background:var(--orange)">${t('role')}: ${esc(L(c.role))}</span>` : ''}</div></div>
  <div class="wrap">
    ${blk(t('videos'), vids)}
    ${c.credits ? blk(ar() ? 'الكريدتس' : 'Credits', creditsBlock(c.credits, c.creditsNote)) : ''}
    ${blk(t('results'), metricGrid(c.metrics))}
    ${c.monthly ? blk(t('monthly'), monthlyTable(c.monthly) + (c.monthlyNote ? `<p class="note">${esc(L(c.monthlyNote))}</p>` : '')) : ''}
    ${blk(t('story'), storyBlock(c.sections))}
    ${blk(t('gallery'), gallery(c.gallery))}
    ${c.founderContent ? blk(t('founder'), gallery(c.founderContent)) : ''}
    ${c.carousel ? blk(ar() ? 'كاروسيل الأسئلة الشائعة — إي كارت' : 'FAQ carousel — eCart Shopify Solutions', gallery(c.carousel, 'carousel')) : ''}
    ${c.bts ? blk(ar() ? 'كواليس التصوير' : 'Behind the scenes', vidBlock(c.bts) + gallery(c.btsPhotos, 'carousel')) : ''}
    ${blk(t('proof'), gallery(c.proof, 'proofs'))}
  </div>${contactBlock()}</div>`;
}
const artCard = (p, i = 0) => {
  const cv = p.cover || p.poster;
  return `<a class="acard rv" style="--r:${tilt(i)}" href="#art-${p.id}"><div class="cv">${cv ? `<img loading="lazy" src="${cv}" alt="">` : '<div class="yt">▶</div>'}</div><h3>${esc(L(p.title)).split(' — ')[0]}</h3><small>${esc(L(p.category))}</small></a>`;
};
function art() {
  return `<div class="view">${tvSection(artProjects)}
  <section><div class="wrap">${secHead(t('art'), t('artT'), ar() ? 'كل الأعمال' : 'all works')}<div class="agrid">${artProjects.map(artCard).join('')}</div></div></section>${contactBlock()}</div>`;
}
function artView(p) {
  lbItems = []; vmItems = [];
  const chips = [L(p.category), p.year || p.season].filter(Boolean).map(x => `<span class="chip">${esc(x)}</span>`).join('');
  const yt = p.videoId || (p.url && !p.videos) ? `<a class="btn extlink" href="${p.url}" target="_blank" rel="noopener">▶ ${t('watch')}${p.platform ? ' · ' + p.platform : ''}</a>` : '';
  const bg = p.bg || p.gallery?.[0]?.src || p.videos?.[0]?.poster || p.cover || p.poster;
  return `<div class="view"><section class="tv tv-hero" style="padding:0"><div class="tv-stage">
    ${bg ? `<div class="tv-bg on" style="opacity:1;background-image:url('${bg}')"></div>` : ''}
    <div class="tv-info"><div class="anim"><a class="back" style="border-color:#fff;color:#fff" href="#art">← ${t('back')}</a><p class="kick c-o">${t('art')}</p><h3>${esc(L(p.title))}</h3>
      <p>${esc(L(p.description))}</p><div class="chips">${chips}</div>${yt}</div></div></div></section>
  <div class="wrap">
    ${blk(t('videos'), vidBlock(p.videos))}
    ${blk(t('gallery'), gallery(p.gallery))}
    ${blk(t('story'), storyBlock(p.sections))}
    ${p.awards || p.selections ? blk(t('awards'), `<ul class="awards">${(p.awards || []).map(a => `<li>${esc(L(a))}</li>`).join('')}${(p.selections || []).map(s => `<li>${esc(s)}</li>`).join('')}</ul>`) : ''}
    ${p.credits ? blk(t('credits'), `<div class="credits">${p.credits.map(([k, v]) => `<div><small>${esc(L(k))}</small>${esc(v)}</div>`).join('')}</div>`) : ''}
  </div>${contactBlock()}</div>`;
}
function companyView(c) {
  const par = c.parent && coBy(c.parent);
  const kids = (c.children || []).map(coBy).filter(Boolean);
  return `<div class="view"><div class="wrap ph-head co-head">
    <div><a class="back" href="${par ? '#co-' + par.slug : '#'}">← ${par ? par.name : t('back')}</a><p class="kick">${L(c.chapter)}</p><h1>${c.name}</h1><p>${esc(L(c.role))}</p>
      <div class="chips">${par ? `<a class="chip" style="background:var(--lav)" href="#co-${par.slug}">${ar() ? 'تابعة لـ' : 'Part of'} ${par.name}</a>` : ''}<span class="chip">${L(c.period)}</span><span class="chip">${L(c.place)}</span></div></div>
    <a class="pol" style="--r:2deg"><span class="tape"></span><img src="${c.photo}" alt=""><div class="cap"><b>${c.name}</b><span class="hand">${L(c.chapter)}</span></div></a></div>
  <div class="wrap">
    ${c.quote ? `<blockquote class="quote rv"><span class="spin c-o">✸</span><p>${esc(L(c.quote))}</p><cite class="hand">— Anas</cite></blockquote>` : ''}
    ${blk(t('story'), `<div class="story">${c.points.map(p => `<article class="rv"><p>${esc(L(p))}</p></article>`).join('')}</div>`)}
    ${kids.length ? blk(ar() ? `الشركات تحت ${c.name}` : `Companies under ${c.name}`, `<div class="pols kids">${kids.map((k, i) => `<a class="pol rv" style="--r:${tilt(i)}" href="#co-${k.slug}"><span class="tape"></span><img loading="lazy" src="${k.photo}" alt=""><div class="cap"><b>${k.name}</b><span class="hand">${L(k.chapter)}</span></div></a>`).join('')}</div>`) : ''}
    ${blk(t('related'), `<div class="grid">${c.cases.map(byId).filter(Boolean).map(caseCard).join('')}</div>`)}<div class="blk"></div></div>${contactBlock()}</div>`;
}
const waLink = msg => `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
const contactBlock = () => `<section class="contact" id="contact"><div class="wrap">${marks().replace('class="marks"', 'class="marks" style="justify-content:flex-start;margin-bottom:20px"')}
  <h2 class="disp">${ar() ? 'يلا نعمل<br><em>حاجة تسيب أثر.</em>' : 'LET’S CREATE<br><em>SOMETHING IMPACTFUL.</em>'}</h2>
  <div class="ways">
    <a class="way" href="mailto:${contact.email}"><i>✉</i><span><small>${ar() ? 'الإيميل' : 'Email'}</small>${contact.email}</span></a>
    <a class="way" href="tel:${contact.phoneTel}" dir="ltr"><i>☏</i><span><small>${ar() ? 'الموبايل' : 'Phone'}</small>${contact.phone}</span></a>
    <a class="way" href="${waLink(ar() ? 'أهلاً أنس، شفت البورتفوليو بتاعك.' : 'Hi Anas, I saw your portfolio.')}" target="_blank" rel="noopener"><i class="wa"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z"/></svg></i><span><small>WhatsApp</small>${contact.phone}</span></a>
    <a class="way" href="${contact.cv}" download="Anas_Abdelazeem_CV.pdf"><i>⤓</i><span><small>${ar() ? 'السي في' : 'Resume'}</small>${ar() ? 'نزل PDF' : 'Download PDF'}</span></a>
  </div>
  <div class="row">${contact.social.map(([n, h]) => `<a class="btn o" href="${h}" target="_blank" rel="noopener">${n} ↗</a>`).join('')}</div>
  <a class="book" href="${waLink(ar() ? 'أهلًا أنس، عايز أحجز استشارة.' : 'Hi Anas, I’d like to book a consultation.')}" target="_blank" rel="noopener">
    <span class="spin">✸</span><b>${ar() ? 'احجز استشارتك دلوقتي' : 'Book your consultation now'}</b><small>${ar() ? 'على واتساب' : 'via WhatsApp'}</small><em>→</em></a>
  <div class="foot"><span>© ${new Date().getFullYear()} Anas Abdelazeem — ANAS ORIGINALS</span><span class="hand" style="font-size:20px">${ar() ? 'كل تجربة تستحق تتحكي.' : 'Every experience is a story.'}</span></div></div></section>`;

/* ---------- testimonials (people write them at #recommend; they appear on the home page automatically) ---------- */
let tstCache = null;
async function loadTestimonials() {
  const el = document.getElementById('tst'); if (!el) return;
  try {
    if (!tstCache) { const r = await fetch('/api/testimonials', { headers: { accept: 'application/json' } }); tstCache = r.ok ? (await r.json()).items || [] : []; }
  } catch { tstCache = []; }
  if (!tstCache.length || !document.body.contains(el)) return;
  el.innerHTML = `<div class="wrap">${secHead('05 · ' + (ar() ? 'قالوا عن الشغل' : 'Kind words'), ar() ? 'من ناس اشتغلت معاهم' : 'From people I’ve worked with', '')}
    <div class="tsts">${tstCache.map((x, i) => `<figure class="tst rv in" style="--r:${tilt(i)}" dir="${x.lang === 'ar' ? 'rtl' : 'ltr'}"><span class="q">“</span><blockquote>${esc(x.message)}</blockquote>
      <figcaption><b>${x.link ? `<a href="${esc(x.link)}" target="_blank" rel="noopener nofollow">${esc(x.name)} ↗</a>` : esc(x.name)}</b>${x.role ? `<span>${esc(x.role)}</span>` : ''}${x.relation ? `<small>${esc(x.relation)}</small>` : ''}</figcaption></figure>`).join('')}</div></div>`;
  el.hidden = false;
}
function recommendView() {
  const A = ar();
  return `<div class="view"><div class="wrap ph-head rec-head"><p class="kick">${A ? 'توصية' : 'Recommendation'}</p>
    <h1>${A ? 'اكتب كلمة عن شغلنا مع بعض' : 'Write a few words about working together'}</h1>
    <p>${A ? 'كلامك هيظهر في البورتفوليو بتاعي باسمك. شكرًا إنك واخد من وقتك ❤' : 'Your words will appear on my portfolio under your name. Thank you for taking the time ❤'}</p>${marks()}</div>
  <section style="padding-top:0"><div class="wrap"><form class="recf" id="recf" novalidate>
    <label>${A ? 'اسمك' : 'Your name'} *<input name="name" required minlength="2" maxlength="80" autocomplete="name"></label>
    <label>${A ? 'شغلانتك إيه؟' : 'What do you do?'}<input name="role" maxlength="120" placeholder="Media Buyer · Video Editor"></label>
    <label>${A ? 'اشتغلنا سوا فين؟' : 'Where did we work together?'}<input name="relation" maxlength="120" placeholder="${A ? 'مثلًا: صيت · إي كارت · TAG' : 'e.g. Seet · E-Cart · TAG'}"></label>
    <label>${A ? 'كلمتك عن الشغل' : 'Your recommendation'} *<textarea name="message" required minlength="15" maxlength="1200" rows="6"></textarea></label>
    <label>${A ? 'لينك حسابك (اختياري)' : 'Link to your profile (optional)'}<input name="link" type="url" maxlength="300" placeholder="https://"></label>
    <input class="hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
    <button class="btn" type="submit">${A ? 'ابعت التوصية' : 'Send recommendation'} →</button>
    <p class="recmsg" id="recmsg" role="status"></p>
  </form></div></section></div>`;
}
document.addEventListener('submit', async e => {
  if (e.target.id !== 'recf') return; e.preventDefault();
  const f = e.target, msg = document.getElementById('recmsg'), btn = f.querySelector('button');
  const data = Object.fromEntries(new FormData(f));
  if ((data.name || '').trim().length < 2 || (data.message || '').trim().length < 15) { msg.textContent = ar() ? 'اكتب اسمك وكلمة من ١٥ حرف على الأقل.' : 'Please add your name and at least 15 characters.'; return; }
  btn.disabled = true; msg.textContent = ar() ? 'بيتبعت…' : 'Sending…';
  try {
    const r = await fetch('/api/testimonials', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
    if (!r.ok) throw 0;
    tstCache = null;
    f.innerHTML = `<div class="recok"><b>${ar() ? 'وصلت، شكرًا جدًا!' : 'Received — thank you so much!'}</b><p>${ar() ? 'كلامك ظهر دلوقتي في الصفحة الرئيسية.' : 'Your words are now on the home page.'}</p><a class="btn o" href="#">${ar() ? 'شوفها' : 'See it'} →</a></div>`;
  } catch { btn.disabled = false; msg.textContent = ar() ? 'حصلت مشكلة، جرّب تاني.' : 'Something went wrong — please try again.'; }
});

/* ---------- interactions ---------- */
let cfI = 0, cfTimer;
function cfLayout() {
  const cards = [...document.querySelectorAll('.cf-card')]; if (!cards.length) return;
  const n = cards.length, mob = innerWidth < 720, dir = ar() ? -1 : 1;
  cards.forEach((el, i) => {
    let d = i - cfI; if (d > n / 2) d -= n; if (d < -n / 2) d += n;
    const ad = Math.abs(d), x = d * (mob ? 62 : 52) * dir, s = d === 0 ? 1.12 : 1 - Math.min(ad, 3) * 0.1;
    el.style.transform = `translate(-50%,-50%) translateX(${x}%) translateZ(${-ad * 120}px) rotateY(${-d * 18 * dir}deg) scale(${s})`;
    el.style.zIndex = 50 - ad; el.style.opacity = ad > 3 ? 0 : 1; el.style.filter = d === 0 ? 'none' : `brightness(${1 - ad * 0.22}) saturate(.8)`;
    el.style.pointerEvents = ad > 3 ? 'none' : 'auto';
  });
  document.querySelectorAll('#cfd i').forEach((d, i) => d.classList.toggle('on', i === cfI));
}
const cfGo = k => { const n = document.querySelectorAll('.cf-card').length; if (!n) return; cfI = (cfI + k + n) % n; cfLayout(); };
function cfInit() {
  const cf = document.getElementById('cf'); if (!cf) return; cfI = 0; cfLayout();
  clearInterval(cfTimer); cfTimer = setInterval(() => { if (!document.hidden && document.getElementById('cf')) cfGo(1); }, 3800);
  cf.addEventListener('click', e => { const card = e.target.closest('.cf-card'); if (card && +card.dataset.i !== cfI) { e.preventDefault(); cfI = +card.dataset.i; cfLayout(); } });
  let sx = null; cf.addEventListener('pointerdown', e => sx = e.clientX);
  cf.addEventListener('pointerup', e => { if (sx == null) return; const d = e.clientX - sx; if (Math.abs(d) > 40) { cfGo((d < 0 ? 1 : -1) * (ar() ? -1 : 1)); clearInterval(cfTimer); } sx = null; });
}
let tvI = 0, tvTimer;
function tvShow(i) {
  tvI = i; document.querySelectorAll('[data-tvbg]').forEach(b => { const on = +b.dataset.tvbg === i; b.style.opacity = on ? 1 : 0; b.classList.toggle('on', on); });
  document.querySelectorAll('[data-tv]').forEach(b => b.classList.toggle('on', +b.dataset.tv === i));
  const info = document.getElementById('tvi'); if (info) info.innerHTML = tvInfo(i);
}
function tvInit() {
  if (!document.getElementById('tv')) return; tvShow(0); clearInterval(tvTimer);
  tvTimer = setInterval(() => { if (document.getElementById('tvi') && !document.hidden) tvShow((tvI + 1) % artProjects.length); }, 6000);
}
let io;
function reveal() {
  io?.disconnect();
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
}

/* ---------- router ---------- */
const app = document.getElementById('app');
const curtain = document.getElementById('curtain');
let first = true;
function render(html, key) {
  const swap = () => { app.innerHTML = html; paintNav(key); window.scrollTo(0, 0); reveal(); cfInit(); tvInit(); loadTestimonials(); };
  if (first || matchMedia('(prefers-reduced-motion: reduce)').matches) { first = false; swap(); return; }
  curtain.classList.remove('go'); void curtain.offsetWidth; curtain.classList.add('go'); setTimeout(swap, 420); setTimeout(() => curtain.classList.remove('go'), 1000);
}
function route() {
  const h = location.hash.slice(1);
  if (h === 'contact') { if (!document.getElementById('contact')) render(home(), 'home'); setTimeout(() => document.getElementById('contact')?.scrollIntoView(), first ? 50 : 500); paintNav('contact'); return; }
  if (h === 'recommend') return render(recommendView(), 'home');
  if (h === 'work') return render(work(), 'work');
  if (h === 'art') return render(art(), 'art');
  if (h.startsWith('case-') && byId(h.slice(5))) return render(caseView(byId(h.slice(5))), 'work');
  if (h.startsWith('art-') && artProjects.find(p => p.id === h.slice(4))) return render(artView(artProjects.find(p => p.id === h.slice(4))), 'art');
  if (h.startsWith('co-') && companies.find(c => c.slug === h.slice(3))) return render(companyView(companies.find(c => c.slug === h.slice(3))), 'home');
  lbItems = []; render(home(), 'home');
}
function paintNav(key) {
  const items = [['home', '', '⌂'], ['work', 'work', '✸'], ['art', 'art', '▶'], ['contactN', 'contact', '✉']];
  const k = key === 'contact' ? 'contactN' : key;
  document.getElementById('nav').innerHTML = items.map(([n, h]) => `<a href="#${h}" class="${n === k ? 'on' : ''}">${t(n)}</a>`).join('');
  document.getElementById('tabbar').innerHTML = items.map(([n, h, i]) => `<a href="#${h}" class="${n === k ? 'on' : ''}"><i>${i}</i>${t(n)}</a>`).join('');
  document.getElementById('lang').textContent = ar() ? 'EN' : 'عربي';
}
function applyLang() { document.documentElement.lang = lang; document.documentElement.dir = ar() ? 'rtl' : 'ltr'; }
document.getElementById('lang').onclick = () => { lang = ar() ? 'en' : 'ar'; try { localStorage.setItem('lang', lang); } catch {} applyLang(); first = true; route(); };
app.addEventListener('click', e => {
  const f = e.target.closest('[data-f]'); if (f) { filter = f.dataset.f; app.innerHTML = work(); reveal(); return; }
  const b = e.target.closest('[data-lb]'); if (b) return openLb(+b.dataset.lb);
  const c = e.target.closest('[data-cf]'); if (c) { cfGo(+c.dataset.cf * (ar() ? -1 : 1)); clearInterval(cfTimer); return; }
  const vt = e.target.closest('[data-vm]'); if (vt) return openVm(+vt.dataset.vm);
  const vr = e.target.closest('[data-vr]'); if (vr) { const row = vr.parentElement.querySelector('.vrow'); row.scrollBy({ left: +vr.dataset.vr * row.clientWidth * 0.8 * (ar() ? -1 : 1), behavior: 'smooth' }); return; }
  const tv = e.target.closest('[data-tv]'); if (tv) { tvShow(+tv.dataset.tv); clearInterval(tvTimer); }
});
addEventListener('scroll', () => document.getElementById('hdr').classList.toggle('solid', scrollY > 10), { passive: true });
addEventListener('resize', cfLayout);
/* lightbox */
const lb = document.getElementById('lb'); let lbi = 0;
function openLb(i) { lbi = (i + lbItems.length) % lbItems.length; const it = lbItems[lbi]; lb.querySelector('img').src = it.src; lb.querySelector('figcaption').textContent = it.cap || ''; lb.hidden = false; }
lb.querySelector('.lb-x').onclick = () => lb.hidden = true;
lb.querySelector('.lb-prev').onclick = () => openLb(lbi - 1);
lb.querySelector('.lb-next').onclick = () => openLb(lbi + 1);
lb.addEventListener('click', e => { if (e.target === lb) lb.hidden = true; });
document.addEventListener('keydown', e => { if (lb.hidden) return; if (e.key === 'Escape') lb.hidden = true; if (e.key === 'ArrowRight') openLb(lbi + (ar() ? -1 : 1)); if (e.key === 'ArrowLeft') openLb(lbi + (ar() ? 1 : -1)); });
let tx = 0; lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
lb.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 50) openLb(lbi + (d < 0 ? 1 : -1)); });
document.addEventListener('play', e => { document.querySelectorAll('video').forEach(v => { if (v !== e.target) v.pause(); }); }, true);
/* video modal (no inline play, no download) */
const vm = document.getElementById('vm'), vmv = vm.querySelector('video');
function openVm(i) {
  const v = vmItems[i]; if (!v) return;
  vm.classList.toggle('land', isLand(v));
  vmv.src = v.src; vmv.poster = v.poster || '';
  vm.querySelector('.vm-t').textContent = L(v.title) || '';
  vm.querySelector('.vm-n').textContent = L(v.note) || '';
  vm.querySelector('.vm-c').innerHTML = (v.credits || []).map(([k, n]) => `<span><small>${esc(L(k))}</small>${esc(n)}</span>`).join('');
  vm.hidden = false; document.body.style.overflow = 'hidden'; vmv.play().catch(() => {});
}
function closeVm() { vmv.pause(); vmv.removeAttribute('src'); vmv.load(); vm.hidden = true; document.body.style.overflow = ''; }
vm.querySelector('.vm-x').onclick = closeVm;
vm.addEventListener('click', e => { if (e.target === vm) closeVm(); });
document.addEventListener('keydown', e => { if (!vm.hidden && e.key === 'Escape') closeVm(); });
vmv.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('hashchange', () => { if (!vm.hidden) closeVm(); });
addEventListener('hashchange', route);
applyLang(); route();
