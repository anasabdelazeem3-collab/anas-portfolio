# Prompts — Anas Abdelazeem portfolio

Ready-to-paste prompts for any AI builder (Claude, Lovable, v0, Cursor) to edit or rebuild this site **without breaking the design**. Always attach `content/brand.json` with the prompt.

---

## 1. Master prompt (rebuild / migrate the whole site)

```
You are editing my personal portfolio (Anas Abdelazeem — marketer & actor). It is a static, framework-free site:
index.html + styles.css + app.js (ES modules) + data/*.js. Hash routing: #work, #art, #case-<id>, #art-<id>, #co-<slug>, #contact.
Bilingual EN/AR with full RTL; language saved in localStorage.

Keep EXACTLY:
- Brand from content/brand.json (purple #3a044f, lavender #9c91f3, orange #f29423, ink, paper; Unbounded / Space Grotesk / Cairo / Caveat; logo assets/brand/logo.png).
- Editorial zine direction: grid paper, PORTFOLIO wordmark with the logo as the "O", handwritten signature, spinning ✸ ✦ ✳ icons,
  scanner frame that swaps ACTOR (assets/personal/scan-hatter.jpg) ↔ MARKETER (assets/personal/scan-book.jpg) as an orange scanline sweeps down and up, faces aligned, torn purple strip with a scrolling
  marquee and a cutout photo sticker (assets/hero/cutout-anas.png) with an orange outline, ticket-style stats, 3D coverflow of case studies,
  polaroid company cards, Netflix-style Art & Acting section, sticker wall of clients, torn purple contact footer.
- Mobile: floating dark tab bar at the bottom (Home / Work / Art & Acting / Contact), active tab = orange pill, large tap targets,
  horizontal snap scrolling for polaroids and videos, nothing overflows horizontally at 390px.
- Motion: curtain page transition with the logo, reveal-on-scroll, respect prefers-reduced-motion.
- All numbers come from data/*.js — never invent or round up results. Totals are USD (SAR ÷ 3.75).
- Contact details unchanged (see brand.json).

Task: <describe the change here>
Return only the files you changed.
```

## 2. Add a new marketing case study

```
Add a case study to data/cases/portfolio-cases.js (leadGenCases or ecommerceCases) for <brand>.
Data from the attached screenshots ONLY: platform, period, spend, results (leads / purchases / revenue / ROAS / CPL).
Write it in EN + AR with: angle (one line), sections = The challenge / Strategy & structure / Results / The insight.
Proof screenshots go to assets/work/<brand>/ and are listed in `proof`. If a number is not visible in a screenshot, leave it out
and add it to `todo`. Then add the brand to clientWall in app.js so its sticker opens the case.
After that, recompute data/totals.js (sales, orders, leads, ad spend in USD) and show the formula in the file comment.
```

## 3. Add a new art / acting project

```
Add a project to data/art.js: id, title (EN/AR), category, year, description, role.
Order on the page: video first (assets/art/<id>/*.mp4, compressed H.264 + faststart, with poster), then photos (gallery), then story sections,
credits and awards. Make a 4:5 cover from a frame INSIDE the project at assets/art/covers/<id>.jpg.
```

## 4. Update monthly reports

```
Update data/cases/monthly-reports.js with month, spent (USD), leads, cpl, meetings, paidClients from the attached report.
Numbers only — no Canva links on the site. Keep the table totals and CPL = spend ÷ leads.
For Seet, the case "Results" must match the CRM dashboard filtered to Hot leads.
```

## 5. Swap a photo

```
Replace <slot> with the attached photo. Slots: scanner (assets/personal/scan-book.jpg, 3:5, face near top),
strip sticker (assets/hero/cutout-anas.png, transparent PNG cutout), company polaroids (assets/companies/<slug>.jpg, 4:5).
Match lighting to the rest of the site; don't reuse the same personal photo in two places.
```

---

## Current numbers (snapshot)
- Sales generated (stores + leads): **$1,613,578** — stores 5,342,274.38 SAR + Seet Hot contracts 423,860 SAR + Honey 2026 201,001.42 SAR, ÷ 3.75
- Orders: **11,130** · Leads: **9,789** · Total ad spend: **$240,745**
- Seet (Hot leads, Sep 1 2025 – Apr 1 2026): 1,332 meetings · 77 contracts · 423,860 SAR value · 389,610 SAR collected · 34,250 SAR remaining
- Al-Ahly monthly (Aug 2025 – Jan 2026): $25,220 · 3,616 leads · CPL $6.97 · 62 paid clients
