// Case study — Seet (صيت) Marketing Foundation, KSA.
// Source of truth: two CRM "Report Master Sales" dashboard screenshots (Sep 1, 2025 – Apr 1, 2026):
//   all leads, and the same report filtered to Hot leads. Cold figures below are DERIVED (all − hot).
// Anas's role (as stated by him): ad copywriting, launching campaigns, sales follow-up and CRM.
const t = (en, ar) => ({ en, ar });
const W = 'assets/work/seet/';

export const seetCase = {
  id: 'seet-crm-pipeline',
  client: 'Seet Marketing Foundation — مؤسسة صيت',
  industry: t('Marketing services (B2B)', 'خدمات تسويق (B2B)'),
  market: t('Saudi Arabia', 'السعودية'),
  period: t('Sep 1, 2025 – Apr 1, 2026', '١ سبتمبر ٢٠٢٥ – ١ أبريل ٢٠٢٦'),
  category: 'lead-gen',
  headline: t('From ad to signed contract: owning the whole pipeline', 'من الإعلان للعقد: مسؤول عن الرحلة كاملة'),
  angle: t(
    'Not a CPL story — a closed-revenue story. Copy, launch, follow-up and CRM in one pair of hands.',
    'مش قصة تكلفة ليد — قصة إيراد متعاقد عليه. الكتابة والإطلاق والمتابعة والـ CRM في إيد واحدة.'
  ),
  role: t('Ad copywriting · campaign launch · sales follow-up · CRM', 'كتابة الإعلانات · إطلاق الحملات · متابعة السيلز · CRM'),

  // Videos first (site rule), then proof screenshots.
  videos: [
    { src: W + 'creative-01-budget-forecasting.mp4', poster: W + 'creative-01-budget-forecasting-poster.jpg', title: t('“Your budget went with the wind” — forecasting', '«ميزانيتك راحت في مهب الريح» — الـ Forecasting'),
      note: t('The Tom & Jerry script — a sequel to the earlier Seet video.', 'سكريبت توم وجيري — تكملة لفيديو صيت اللي قبله.'),
      credits: [
        [t('Script', 'كتابة'), 'Anas Abdelazeem'],
        [t('Storyboard', 'ستوري بورد'), 'Anas Abdelazeem · Ahmed Hamada (A11)'],
        [t('Illustration & creative direction', 'إليستريشن وكريتيف دايركشن'), 'Ahmed Hamada (A11)'],
        [t('Marketing manager', 'ماركتنج مانجر'), 'Ahmed Gamal “Jimmy”'],
      ] },
    { src: W + 'creative-02-ramadan-2050.mp4', poster: W + 'creative-02-ramadan-2050-poster.jpg', title: t('Ramadan 2050 — don’t leave planning to the last minute', 'رمضان ٢٠٥٠ — متسيبش التخطيط لآخر لحظة') },
    { src: W + 'creative-03-saudi-dialects.mp4', poster: W + 'creative-03-saudi-dialects-poster.jpg', title: t('Speaking each region’s dialect', 'نكلّم كل منطقة بلهجتها') },
    { src: W + 'creative-04-ugc-creative-ideas.mp4', poster: W + 'creative-04-ugc-creative-ideas-poster.jpg', title: t('UGC — creative & ideas', 'UGC — كريتيف وأفكار') },
  ],

  credits: [
    [t('Scripts', 'كتابة السكريبتات'), 'Anas Abdelazeem · Ahmed Gamal “Jimmy”'],
    [t('Illustration, motion & creative direction', 'إليستريشن وموشن وكريتيف دايركشن'), 'Ahmed Hamada (A11)'],
    [t('Marketing manager', 'ماركتنج مانجر'), 'Ahmed Gamal “Jimmy”'],
  ],
  creditsNote: t('Ahmed Hamada (A11) built the complete look of the three motion videos — from the references, the scripts and our market research and analysis — to attract the target client and lift Seet’s positioning.',
    'أحمد حمادة (A11) عمل الشكل الكامل للتلات فيديوهات الموشن، بناءً على الريفرنسات والكتابة والبحث والتحليل في السوق، عشان نجيب العميل المستهدف ونرفع بوزيشننج صيت.'),

  results: {
    // Hot-leads dashboard ONLY (per Anas: the all-leads screen is not used).
    meetings: 1332,
    hotMeetings: 1344,
    contracts: 77,
    followingUp: 980,
    notFollowingUp: 324,
    contractValueSAR: 423860,
    paidSAR: 389610,
    remainingSAR: 34250,
    saudiShare: 0.751,
    closeRate: 77 / 1332,            // 5.8%
    avgContractSAR: 423860 / 77,     // ≈ 5,505 SAR
    collectionRate: 389610 / 423860  // 91.9%
  },

  sections: [
    {
      heading: t('The challenge', 'التحدي'),
      body: t(
        'A marketing-services company selling to Saudi businesses needs more than leads: it needs meetings that turn into contracts — and contracts that actually get paid.',
        'شركة خدمات تسويق بتبيع لبيزنس في السعودية محتاجة أكتر من ليدز: محتاجة اجتماعات تتحول لعقود، وعقود تتدفع فعلًا.'
      ),
    },
    {
      heading: t('Strategy & structure', 'الاستراتيجية والستراكشر'),
      body: t(
        'One loop instead of handoffs: I wrote the ad copy, launched the campaigns, and followed the leads through sales and the CRM. Every lead is tagged Hot or Cold and tracked from meeting to follow-up to contract to payment (one-time or instalments), with nationality reported to keep targeting honest. Creative leaned on local relevance — regional dialects, seasonal hooks like Ramadan, motion-graphic storytelling and UGC.',
        'دايرة واحدة بدل ما الشغل يتسلّم من إيد لإيد: كتبت الإعلانات، وأطلقت الحملات، وتابعت الليدز في السيلز والـ CRM. كل ليد بيتصنّف Hot أو Cold وبيتتابع من الاجتماع للمتابعة للتعاقد للدفع (مرة واحدة أو دفعات)، والجنسية بتتقاس عشان التارجت يفضل صح. والكريتيف معتمد على القرب من الجمهور: اللهجات المحلية، والمواسم زي رمضان، والموشن جرافيك، والـ UGC.'
      ),
    },
    {
      heading: t('Results', 'النتائج'),
      body: t(
        'Hot leads: 1,332 meetings → 77 signed contracts worth 423,860 SAR — 389,610 SAR already collected (91.9%), 34,250 SAR remaining. 980 leads in active follow-up. 75.1% of leads are Saudi nationals.',
        'الليدز الـ Hot: ١٬٣٣٢ اجتماع ← ٧٧ عقد بقيمة ٤٢٣٬٨٦٠ ريال — اتحصّل منها ٣٨٩٬٦١٠ ريال (٩١٫٩٪) والمتبقي ٣٤٬٢٥٠ ريال. و٩٨٠ ليد في متابعة. و٧٥٫١٪ من الليدز سعوديين.'
      ),
    },
    {
      heading: t('The insight', 'الإنسايت'),
      body: t(
        'About 1 in 17 meetings became a contract (5.8%), at ≈5,505 SAR per contract, and more than 9 of every 10 riyals contracted were collected. Follow-up discipline turned meetings into paid revenue, not just bookings.',
        'تقريبًا كل ١٧ اجتماع بيطلع منهم عقد (٥٫٨٪)، بمتوسط حوالي ٥٬٥٠٥ ريال للعقد، وأكتر من ٩ من كل ١٠ ريال اتعاقد عليهم اتحصّلوا فعلًا. المتابعة المنضبطة هي اللي حوّلت الاجتماعات لفلوس مدفوعة، مش مجرد مواعيد.'
      ),
    },
  ],
  proof: [
    { src: W + 'crm-dashboard-hot-leads.jpg', caption: t('Same report filtered to Hot leads', 'نفس التقرير بفلتر الليدز الـ Hot') },
  ],
  todo: [
    'Ad platforms used (Meta / Snapchat / TikTok / Google?)',
    'Ad spend for the period → to compute cost per meeting and cost per contract / ROAS',
        'Is the Ramadan 2050 / dialects / UGC creative work by Anas (copy, concept, script)?',
  ],
};
