// People Anas worked with. Facts come from each person's own pages (links below) or from Anas.
// `recommendation` stays empty until the person writes one — never invent it.
const t = (en, ar) => ({ en, ar });
export const people = [
  {
    id: 'osama-gamal', name: 'Osama Gamal', ar: 'أسامة جمال', initials: 'OG', company: 'e-cart',
    role: t('eCommerce & Performance Director · Founder of eCart Solutions & eCart Academy', 'مدير التجارة الإلكترونية والأداء · مؤسس إي كارت سوليوشنز وإي كارت أكاديمي'),
    about: t('Shares ads, CRO and growth strategies through eCart Solutions (Shopify store builds, redesigns, CRO and consulting) and eCart Academy (Shopify development, Shopify marketing and media-buying courses in Arabic). 8+ years, 300+ brands. I partnered with him on his Q&A personal-brand content.',
      'بيشارك استراتيجيات الإعلانات والـ CRO والنمو من خلال إي كارت سوليوشنز (بناء متاجر Shopify وإعادة تصميمها والـ CRO والاستشارات) وإي كارت أكاديمي (كورسات تطوير Shopify وتسويق المتاجر والميديا باينج بالعربي). +8 سنين و+300 براند. اشتغلت معاه على محتوى البرسونال براند بتاعه بأسلوب سؤال وجواب.'),
    links: [['Instagram', 'https://www.instagram.com/osamaagamall/'], ['YouTube', 'https://www.youtube.com/@osamagamal-07'], ['eCart Solutions', 'https://e-cart.co'], ['eCart Academy', 'https://e-cart.academy'], ['Linktree', 'https://linktr.ee/osama.ecart']],
    recommendation: null,
  },
  {
    id: 'ahmed-gamal', name: 'Ahmed Gamal “Jimmy”', ar: 'أحمد جمال «جيمي»', initials: 'AG', company: 'seet',
    role: t('Digital Marketing Manager · Performance marketing lead', 'مدير تسويق رقمي · قائد تسويق أداء'),
    about: t('Performance marketer connecting paid ads, analytics and consumer behaviour across Google, Meta, TikTok and Snapchat — 5+ years in Saudi Arabia, Egypt, Jordan and Kuwait. My marketing manager at Seet, and co-writer of one of the Seet scripts.',
      'مسوّق أداء بيربط الإعلانات المدفوعة بالتحليلات وسلوك المستهلك على جوجل وميتا وتيك توك وسناب، بخبرة +5 سنين في السعودية ومصر والأردن والكويت. كان الماركتنج مانجر بتاعي في صيت، وشريكي في كتابة واحد من سكريبتات صيت.'),
    links: [['Website', 'https://ahmedgamal.marketing/ar'], ['LinkedIn', 'https://www.linkedin.com/in/ahmedgamal21'], ['Behance', 'https://www.behance.net/ahmedgamal-marketing']],
    recommendation: null,
  },
  {
    id: 'ahmed-hamada', name: 'Ahmed Hamada (A11)', ar: 'أحمد حمادة (A11)', initials: 'A11', company: 'seet',
    role: t('Art director & motion graphics', 'آرت دايركتور وموشن جرافيك'),
    about: t('Built the complete look of Seet’s three motion videos — illustration, motion and creative direction — and co-storyboarded the Tom & Jerry video with me.',
      'عمل الشكل الكامل لتلات فيديوهات الموشن بتوع صيت: الإليستريشن والموشن والكريتيف دايركشن، وشاركني في ستوري بورد فيديو توم وجيري.'),
    links: [['Instagram', 'https://www.instagram.com/a11madhamada/']],
    recommendation: null,
  },
  {
    id: 'abdelrahman-eldesouky', name: 'Abdelrahman El Desouky', ar: 'عبد الرحمن الدسوقي', initials: 'AD', company: null,
    role: t('Content writer · Content creator · Creative strategist', 'كاتب محتوى · صانع محتوى · كريتيف ستراتيجيست'),
    about: t('Writes and creates content and shapes the creative strategy behind it.', 'بيكتب ويصنع المحتوى، وبيبني الاستراتيجية الإبداعية اللي وراه.'),
    links: [['Instagram', 'https://www.instagram.com/abdelrahmaneldesouky98/']],
    recommendation: null,
  },
];
