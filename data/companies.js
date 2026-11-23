// Experience — six companies (roles & periods from the current site). Photo per company from data/personal-photos.js.
const t = (en, ar) => ({ en, ar });
export const companies = [
  { slug: 'e-cart', name: 'E-CART', chapter: t('Growth stories', 'حكايات النمو'), photo: 'assets/companies/ecart.jpg',
    role: t('Creative Strategist — E-Cart Solutions & Academy', 'مخطط استراتيجي إبداعي — إي كارت سوليوشنز والأكاديمية'),
    period: t('May 2026 – Present', 'مايو ٢٠٢٦ – الآن'), place: t('Remote', 'عن بُعد'),
    points: [
      t('Content plan, scripts, filming and on-camera hosting for the agency’s short-form series.', 'خطة المحتوى والكتابة والتصوير والتقديم أمام الكاميرا لسلسلة فيديوهات الوكالة.'),
      t('Content partner on the founder’s Q&A-style personal-brand content.', 'شريك محتوى في البرسونال براندينج للمؤسس بأسلوب سؤال وجواب.'),
      t('Campaigns for the academy’s courses and lead generation for Shopify store builds.', 'حملات كورسات الأكاديمية، وحملات ليد جن لإنشاء متاجر Shopify.'),
    ], cases: ['ecart-content-growth'] },
  { slug: 'al-ahly', parent: 'tag', name: 'AL AHLY', chapter: t('Marketing stories', 'حكايات التسويق'), photo: 'assets/companies/alahly.jpg',
    role: t('Marketing Specialist (In-House) — Al Ahly Marketing Agency', 'أخصائي تسويق — وكالة الأهلي للتسويق'),
    period: t('April 2025 – April 2026', 'أبريل ٢٠٢٥ – أبريل ٢٠٢٦'), place: t('Saudi Arabia', 'السعودية'),
    points: [
      t('Lead generation and client acquisition for the Saudi market across Snapchat, Meta and TikTok.', 'توليد العملاء واستقطابهم للسوق السعودي على سناب وميتا وتيك توك.'),
      t('Monthly target tracking: budget, leads, meetings and paid clients — later moved into a CRM.', 'متابعة شهرية للتارجت: الميزانية والليدز والاجتماعات والعملاء — واتنقلت بعدها على CRM.'),
      t('The “Matrix” motion + AI explainer series as a top-of-funnel lead magnet.', 'سلسلة «ماتريكس» بالموشن والـ AI كليد ماجنت لأعلى الفانل.'),
    ], cases: ['alahli-snapchat', 'alahly-matrix-lead-magnet', 'snapchat-leadgen'] },
  { slug: 'azraq', name: 'AZZRAK', chapter: t('Digital stories', 'حكايات رقمية'), photo: 'assets/companies/azzrak.jpg',
    role: t('Media Buyer (Mid-Level) — Azzrak', 'ميديا باير — أزرك'),
    period: t('2024 – March 2025', '٢٠٢٤ – مارس ٢٠٢٥'), place: t('Remote', 'عن بُعد'),
    points: [
      t('Paid campaigns on TikTok, Snapchat, Google and Meta for private products and Darb Shipping.', 'حملات مدفوعة على تيك توك وسناب وجوجل وميتا لمنتجات خاصة ولدرب شيبينج.'),
      t('Budget management focused on cost-efficiency and return.', 'إدارة ميزانيات بتركيز على الكفاءة والعائد.'),
    ], cases: ['maysara', 'sheis', 'operamck', 'oneline'],
    quote: t('Azzrak was the beginning — the place that opened marketing up for me. It taught me to persevere, and to treat people’s work and the money they spend as a trust. I hit real numbers for clients there and learned more than I can count. I’m proud I started somewhere like this.',
      'أزرك كانت البداية، المكان اللي فتحلي باب التسويق. علّمني أثابر في شغلي، وأتعامل مع شغل الناس وفلوسهم اللي بتتصرف كأمانة. حققت أرقام لعملاء واتعلمت حاجات كتير قوي. وأنا فخور إني بدأت في مكان زي ده.') },
  { slug: 'mohareb', name: 'MOHARB', chapter: t('Conversion stories', 'حكايات التحويل'), photo: 'assets/companies/moharb.jpg',
    role: t('Lead Generation Specialist — Moharb Corporation', 'أخصائي توليد عملاء — مؤسسة محارب'),
    period: t('2026 – Present', '٢٠٢٦ – الآن'), place: t('Saudi Arabia', 'السعودية'),
    points: [
      t('Lead-generation funnels on Meta, Google and TikTok for the Saudi market.', 'فانلز توليد عملاء على ميتا وجوجل وتيك توك للسوق السعودي.'),
      t('Audience, creative and landing-page strategy aimed at lead quality.', 'استراتيجية جمهور وكريتيف وصفحات هبوط هدفها جودة الليد.'),
    ], cases: ['ecom-store-2025'] },
  { slug: 'seet', parent: 'tag', name: 'SEET / SMT', chapter: t('Creative stories', 'حكايات إبداعية'), photo: 'assets/companies/seet.jpg',
    role: t('Business Development & Paid Ads Specialist — Seet / SMT', 'تطوير أعمال وإعلانات مدفوعة — صيت / SMT'),
    period: t('April 2025 – April 2026', 'أبريل ٢٠٢٥ – أبريل ٢٠٢٦'), place: t('Saudi Arabia', 'السعودية'),
    points: [
      t('Ad copywriting, campaign launches, sales follow-up and CRM — the whole pipeline.', 'كتابة الإعلانات وإطلاق الحملات ومتابعة السيلز والـ CRM — الرحلة كاملة.'),
      t('Celebrity-based packages for business owners.', 'باقات مشاهير لأصحاب البيزنس.'),
    ], cases: ['seet-crm-pipeline'] },
  { slug: 'tag', name: 'TAG', chapter: t('Al-Ahly & Seet, under one roof', 'الأهلي وصيت تحت سقف واحد'), photo: 'assets/companies/tag.jpg',
    role: t('Media Buyer & Lead Generation — TAG group (Al-Ahly Marketing Agency · Seet / SMT)', 'ميديا باير وتوليد عملاء — مجموعة TAG (وكالة الأهلي للتسويق · صيت / SMT)'),
    period: t('April 2025 – April 2026', 'أبريل ٢٠٢٥ – أبريل ٢٠٢٦'), place: t('Saudi Arabia', 'السعودية'),
    children: ['al-ahly', 'seet'],
    points: [
      t('One role across the TAG umbrella: Al-Ahly Marketing Agency and Seet / SMT are both TAG companies.', 'دور واحد تحت مظلة TAG: وكالة الأهلي للتسويق وصيت / SMT الاتنين شركات تابعة لـ TAG.'),
      t('End-to-end lead generation on Snapchat, Meta, TikTok and Google — from copy and launch to sales follow-up and CRM.', 'توليد عملاء من الأول للآخر على سناب وميتا وتيك توك وجوجل — من كتابة الإعلان والإطلاق لحد متابعة السيلز والـ CRM.'),
      t('Monthly performance reports for both companies: budget, leads, meetings and paying clients.', 'تقارير أداء شهرية للشركتين: الميزانية والليدز والاجتماعات والعملاء اللي دفعوا.'),
    ], cases: ['alahli-snapchat', 'seet-crm-pipeline', 'alahly-matrix-lead-magnet', 'meta-b2b-contract'] },
];
export const contact = {
  email: 'anasabdelazeem3@gmail.com',
  phone: '+20 100 835 2018', phoneTel: '+201008352018', whatsapp: '201008352018', cv: 'assets/cv/Anas_Abdelazeem_CV.pdf',
  social: [
    ['Instagram', 'https://www.instagram.com/anas.abdel3zeem/'],
    ['LinkedIn', 'https://www.linkedin.com/in/anas-abdelazeem-301b0a2a4/?locale=en'],
    ['Facebook', 'https://www.facebook.com/anss.abdelazeem'],
  ],
};
// Display order (top-level only; Al-Ahly & Seet live under TAG).
export const companyOrder = ['e-cart', 'mohareb', 'tag', 'azraq'];
