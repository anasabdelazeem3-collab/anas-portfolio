// E-Cart Solutions (agency) — content, founder personal-brand partnership, and growth campaigns.
// Source: Anas's own account. Tone note: the founder's personal brand is HIS — present Anas as the content partner
// who helped surface Osama's own expertise, never as the author of his voice. Keep it elegant and respectful.
const t = (en, ar) => ({ en, ar });
const W = 'assets/work/ecart/';

export const ecartCase = {
  id: 'ecart-content-growth',
  client: 'E-Cart Solutions — إي كارت',
  category: 'creative',
  headline: t('Content that sells the agency — and a founder voice people trust', 'محتوى بيبيع الوكالة — وصوت مؤسس الناس بتثق فيه'),
  role: t('Content plan · scriptwriting · filming direction · on-camera host · campaign launches', 'خطة المحتوى · الكتابة · التصوير · المتحدث أمام الكاميرا · إطلاق الحملات'),

  // 1) Agency content — Anas planned, wrote, shot, and hosts. Videos first (site rule).
  agencyVideos: [
    ['01-no-new-media-buyer', t('You don’t need a new media buyer', 'إنت مش محتاج ميديا باير جديد')],
    ['02-before-raising-budget', t('Before you raise your ad budget', 'قبل ما تزوّد بادجت الإعلانات')],
    ['03-in-house-marketing-team', t('Having an in-house marketing team', 'وجود تيم ماركتينج داخلي')],
    ['04-when-to-rebrand-website', t('When does your website need a rebrand?', 'إمتى تعرف إن الويب سايت محتاج ري براندينج')],
    ['05-product-search', t('The customer searched for a product name', 'العميل كتب اسم منتج في السيرش')],
    ['06-cheap-website', t('Building a cheap website', 'تعمل ويب سايت رخيص')],
    ['07-left-without-buying', t('The customer left without buying', 'العميل خرج من غير ما يشتري')],
    ['08-website-weakest-link', t('Don’t let your website be your brand’s weakest link', 'متخليش الويب سايت أضعف حلقة في البراند بتاعك')],
  ].map(([f, title]) => ({ src: W + f + '.mp4', poster: W + f + '-poster.jpg', title })),

  sections: [
    {
      heading: t('Agency content — planned, written, shot and hosted', 'محتوى الوكالة — تخطيط وكتابة وتصوير وتقديم'),
      body: t(
        'A short-form series answering the questions e-commerce brand owners actually ask — ad budgets, conversion rate, websites, rebranding, cart abandonment. I built the plan, wrote the scripts, directed the shoots and presented on camera, in partnership with the agency’s founder, Osama Gamal.',
        'سلسلة فيديوهات قصيرة بتجاوب على الأسئلة اللي أصحاب البراندات في الإي كومرس بيسألوها فعلًا — بادجت الإعلانات، ومعدل التحويل، والويب سايت، والري براندينج، والسلات المتروكة. عملت الخطة، وكتبت، وأخرجت التصوير، وقدّمت أمام الكاميرا، بالمشاركة مع مؤسس الوكالة أسامة جمال.'
      ),
    },
    {
      heading: t('The founder’s voice — Q&A, unscripted', 'صوت المؤسس — سؤال وجواب، من غير سكريبت'),
      body: t(
        'Alongside the agency content, I partnered with Osama on his personal brand. The principle was simple: his knowledge is the content — our job was to surface it naturally. Using his usual Q&A style, I asked the questions and he answered on the spot, so advanced insight comes through without heavy editing or many cuts. That spontaneity is what builds trust. Each question was chosen for a specific audience: beginners, mid-level marketers, seniors and brand owners.',
        'جنب محتوى الوكالة، اشتغلت مع أسامة على البرسونال براندينج الخاص بيه. المبدأ كان بسيط: معرفته هي المحتوى — ودورنا إننا نطلّعها بشكل طبيعي. بأسلوبه المعتاد في الـ Q&A، كنت بسأل وهو بيجاوب تلقائيًا، فالمعلومة المتقدمة بتوصل من غير مونتاج تقيل أو كتات كتير — والتلقائية دي هي اللي بتبني الثقة. وكل سؤال كان مختار لجمهور محدد: المبتدئين، والميد ليفل، والسينيورز، وأصحاب البراندات.'
      ),
    },
    {
      heading: t('Growth campaigns', 'حملات النمو'),
      body: t(
        'I also launched the campaigns for the agency’s academy (courses), and lead-generation campaigns bringing in clients for professional Shopify store builds.',
        'وكمان كنت بطلق حملات أكاديمية الوكالة (الكورسات)، وحملات العملاء المحتملين لجلب عملاء لإنشاء متاجر Shopify احترافية.'
      ),
    },
  ],
  // Founder content shown as a respectful reference (his account), not as Anas's own channel.
  founderContent: [
    { src: W + 'founder-qa-grid-1.jpg', caption: t('Founder Q&A series — selected topics', 'سلسلة الـ Q&A مع المؤسس — موضوعات مختارة') },
    { src: W + 'founder-qa-grid-2.jpg', caption: t('Questions mapped to each audience level', 'أسئلة متوزعة على كل مستوى جمهور') },
  ],
  // Behind the scenes — on set (Anas hosting), raw camera clips.
  bts: ['bts-01', 'bts-02', 'bts-03', 'bts-04', 'bts-05'].map((f, i) => ({ src: W + 'bts/' + f + '.mp4', poster: W + 'bts/' + f + '-poster.jpg',
    title: t(['Script check before the take', 'Rolling — coffee bar set', 'Talking to camera', 'Through the camera monitor', 'Kitchen set take'][i], ['مراجعة السكريبت قبل التصوير', 'تصوير — ديكور الكوفي بار', 'كلام للكاميرا', 'من شاشة الكاميرا', 'تصوير في ديكور المطبخ'][i]) })),
  btsPhotos: [{ src: W + 'bts/bts-monitor.jpg', caption: t('On the monitor: ISO 800 · f/2.8 · 1/200', 'على شاشة الكاميرا: ISO 800 · f/2.8 · 1/200') }],
  // eCart Shopify Solutions — FAQ carousel ("Questions before we start?").
  carousel: [
    ['00-questions-before-we-start', 'Questions before we start?', 'أسئلة قبل ما نبدأ؟'],
    ['01-project-cost', 'How much does a project cost?', 'المشروع بيتكلف كام؟'],
    ['02-timeline', 'How long does a project take?', 'المشروع بياخد وقت قد إيه؟'],
    ['03-redesign', 'Can you redesign an existing store?', 'ينفع تعيدوا تصميم متجر موجود؟'],
    ['04-conversion', 'Can you guarantee better conversion?', 'تقدروا تضمنوا تحويل أعلى؟'],
    ['05-cheaper-option', 'Why choose eCart over a cheaper option?', 'ليه إي كارت بدل اختيار أرخص؟'],
    ['06-after-launch', 'What happens after launch?', 'إيه اللي بيحصل بعد الإطلاق؟'],
    ['07-still-have-a-question', 'Still have a question?', 'لسه عندك سؤال؟'],
  ].map(([f, en, ar]) => ({ src: W + 'faq/' + f + '.jpg', caption: t(en, ar) })),
  todo: [
    'Academy & Shopify lead-gen campaign results (screenshots) — to add numbers',
    'Approval from Osama to show his Q&A content on the portfolio',
  ],
};
