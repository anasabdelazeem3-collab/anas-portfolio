// Al-Ahly — early-stage lead magnet: "Matrix" explainer series for Top-of-Funnel acquisition.
// Source: Anas — "for Al-Ahly, when I was starting out, to produce a lead magnet and acquire new customers at the TOF stage."
const t = (en, ar) => ({ en, ar });
const W = 'assets/work/alahly/';
export const alahlyLeadMagnet = {
  id: 'alahly-matrix-lead-magnet',
  client: 'Al-Ahly — مؤسسة الأهلي',
  category: 'creative',
  funnelStage: 'TOF',
  headline: t('The Matrix series: a lead magnet for cold audiences', 'سلسلة ماتريكس: ليد ماجنت للجمهور البارد'),
  angle: t(
    'Before asking anyone for their details, give them something worth watching — explainer content on how platforms, trends and algorithms really work.',
    'قبل ما تطلب من حد بياناته، اديله حاجة تستاهل يتفرج عليها — محتوى بيشرح إزاي المنصات والتريندات والخوارزميات شغالة فعلًا.'
  ),
  // Videos first (site rule).
  videos: [
    ['matrix-01-data', t('Episode 1 — Inside the data', 'الحلقة ١ — جوه الداتا')],
    ['matrix-02-search-diet', t('Episode 2 — What people search for', 'الحلقة ٢ — الناس بتدوّر على إيه')],
    ['matrix-03-crowd-engagement', t('Episode 3 — The crowd & engagement', 'الحلقة ٣ — الجمهور والتفاعل')],
    ['matrix-04-algorithms-trend', t('Episode 4 — Trend, right timing & algorithms', 'الحلقة ٤ — التريند والتوقيت الصح والخوارزميات')],
    ['matrix-05-space', t('Episode 5 — Launch', 'الحلقة ٥ — الانطلاق')],
  ].map(([f, title]) => ({ src: W + f + '.mp4', poster: W + f + '-poster.jpg', title, orientation: 'landscape' })),
  role: t('Concept + visual direction (motion graphics × AI)', 'الفكرة + الاتجاه البصري (موشن جرافيك × AI)'),
  credits: [
    [t('Concept & visual direction', 'الفكرة والاتجاه البصري'), 'Anas Abdelazeem'],
    [t('Explainer scripts', 'كتابة سكريبتات الشرح'), 'Farid Youssef'],
    [t('Motion graphics', 'موشن جرافيك'), 'Mohamed El Assy'],
    [t('Marketing manager (TAG)', 'ماركتنج مانجر (TAG)'), 'Ahmed Gamal “Jimmy”'],
  ],
  sections: [
    { heading: t('Objective', 'الهدف'), body: t('At the start of the account the goal was simple: views, and a lead magnet that pulls new prospects in from social media at the top of the funnel (TOF).', 'في بداية الشغل على الحساب الهدف كان واضح: مشاهدات، وليد ماجنت يجيب عملاء محتملين جدد من السوشيال ميديا في مرحلة أعلى الفانل (TOF).') },
    { heading: t('The format', 'الفورمات'), body: t('A series, not one-off ads — each episode explains one idea (data, search, engagement, trends, algorithms) so the audience comes back for the next one. The call-to-action changed from episode to episode depending on its topic.', 'سلسلة مش إعلانات منفصلة — كل حلقة بتشرح فكرة واحدة (الداتا، البحث، التفاعل، التريند، الخوارزميات) عشان الجمهور يرجع للحلقة الجاية. والـ CTA كان بيختلف من حلقة للتانية حسب موضوعها.') },
    { heading: t('My role', 'دوري'), body: t('The idea, and how the visuals would be shot — combining motion graphics with AI.', 'الفكرة، وإزاي الفيجوال هيتصور — بدمج الموشن جرافيك مع الـ AI.') },
  ],
  todo: [
    'Episode titles above are inferred from the visuals — confirm real titles',
    'Any results (views, leads, CPL) and platform',
  ],
};
