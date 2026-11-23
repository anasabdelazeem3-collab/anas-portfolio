/* Visitor analytics.
   1) Vercel Web Analytics — visitors, page views, top pages, countries, devices, referrers.
      Turn it on: Vercel → your project → Analytics → Enable. Nothing else to edit.
   2) Microsoft Clarity (free) — time on site, scroll depth, heatmaps and session recordings.
      Create a project at https://clarity.microsoft.com, copy its Project ID and paste it below. */
const CLARITY_ID = ''; // e.g. 'abc123xyz'

if (CLARITY_ID && location.hostname !== 'localhost') {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
}
/* Tell Vercel Analytics about hash routes (#work, #case-…) as separate pages. */
addEventListener('hashchange', () => { try { window.va && window.va('pageview', { route: location.hash || '/' }); } catch {} });
