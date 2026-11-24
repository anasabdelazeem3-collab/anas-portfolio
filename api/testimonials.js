// Testimonials: GET lists them, POST adds one. Stored as JSON files in Vercel Blob (store: portfolio-testimonials).
// To hide or delete one: Vercel → Storage → portfolio-testimonials → delete its file.
import { put, list } from '@vercel/blob';

const clean = (v, max) => String(v ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, max);

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { blobs } = await list({ prefix: 'testimonials/', limit: 200 });
      const items = (await Promise.all(blobs.map(async b => {
        try { const r = await fetch(b.url); return r.ok ? await r.json() : null; } catch { return null; }
      }))).filter(x => x && x.approved !== false).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=120');
      return res.status(200).json({ items });
    }
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      if (body.website) return res.status(200).json({ ok: true }); // honeypot
      const item = {
        name: clean(body.name, 80),
        role: clean(body.role, 120),
        relation: clean(body.relation, 120),
        message: clean(body.message, 1200),
        link: /^https?:\/\/\S+$/i.test(String(body.link || '').trim()) ? String(body.link).trim().slice(0, 300) : '',
        lang: /[؀-ۿ]/.test(String(body.message || '')) ? 'ar' : 'en',
        createdAt: Date.now(),
        approved: true,
      };
      if (item.name.length < 2 || item.message.length < 15) return res.status(400).json({ ok: false, error: 'name_or_message_too_short' });
      const key = `testimonials/${item.createdAt}-${Math.random().toString(36).slice(2, 8)}.json`;
      await put(key, JSON.stringify(item), { access: 'public', contentType: 'application/json', addRandomSuffix: false });
      return res.status(200).json({ ok: true });
    }
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ ok: false });
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'server_error' });
  }
}
