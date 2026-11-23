// "Creative concept" section (carried over from the old portfolio) — concept + script work for brands.
const t = (en, ar) => ({ en, ar });
export const creativeConcepts = [
  {
    id: 'aurest',
    brand: 'Aurest / Aurmenu',
    category: t('Creative concept · talking-head content', 'كرييتف كونسبت · محتوى متحدث للكاميرا'),
    summary: t(
      'Restaurant-management software: two talking-head videos that turn product features (digital menu, add-ons to run your restaurant) into everyday restaurant-owner problems.',
      'برنامج إدارة مطاعم: فيديوهين بمتحدث للكاميرا بيحوّلوا مميزات المنتج (المنيو الرقمي، والإضافات اللي بتساعدك تدير مطعمك) لمشاكل يومية بيعيشها صاحب المطعم.'
    ),
    videos: [
      { src: 'assets/work/aurest/aurest-01-aurmenu.mp4', poster: 'assets/work/aurest/aurest-01-aurmenu-poster.jpg', title: t('Aurmenu — the digital menu', 'أورمينيو — المنيو الرقمي') },
      { src: 'assets/work/aurest/aurest-02-restaurant-addons.mp4', poster: 'assets/work/aurest/aurest-02-restaurant-addons-poster.jpg', title: t('Add-ons to help you run your restaurant', 'إضافات تساعدك في إدارة مطعمك') },
    ],
  },
  {
    id: 'marketing-content-agency',
    brand: t('Marketing & content company', 'شركة تسويق ومحتوى'), // TODO: company name
    category: t('Creative concept · talking-head ad', 'كرييتف كونسبت · إعلان بمتحدث للكاميرا'),
    summary: t(
      'A pain-led hook — “why do you keep spending money?” — that walks business owners from wasted ad spend to a managed, measured approach.',
      'هوك مبني على الألم — «ليه كل شوية تصرف فلوس؟» — بياخد صاحب البيزنس من الميزانية اللي بتضيع لطريقة شغل مُدارة ومقاسة.'
    ),
    videos: [
      { src: 'assets/work/marketing-content/stop-burning-budget.mp4', poster: 'assets/work/marketing-content/stop-burning-budget-poster.jpg', title: t('“Why do you keep spending money?”', '«ليه كل شوية تصرف فلوس؟»') },
    ],
  },
];
