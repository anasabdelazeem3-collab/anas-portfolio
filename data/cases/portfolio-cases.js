// Lead-gen & e-commerce case studies from the old portfolio, rewritten one by one against the screenshots Anas sent back.
// Rule: numbers come from the screenshots (or, where no new screenshot exists, from the old portfolio and are flagged).
// Derived figures carry their formula in a comment. Each case has its own angle — no two read alike.
// `logo` = key into data/clients.js (logo files to be supplied); clicking a client logo opens its case.
const t = (en, ar) => ({ en, ar });
const C = 'assets/work/cases/';

export const leadGenCases = [
  {
    id: 'alahli-snapchat', client: 'Al-Ahli Marketing — الأهلي للتسويق', logo: 'alahly', platform: 'Snapchat',
    period: t('Dec 1, 2024 – Feb 3, 2026', '١ ديسمبر ٢٠٢٤ – ٣ فبراير ٢٠٢٦'),
    headline: t('14 months, 3,189 leads — run in waves, not always-on', '١٤ شهر و٣٬١٨٩ ليد — بموجات مش بصرف مستمر'),
    metrics: { spendUSD: 25835.62, impressions: 5308426, clicks: 20758, ctr: 0.0039, leads: 3189, cplUSD: 8.10 }, // CPL = 25,835.62 ÷ 3,189
    sections: [
      { heading: t('The challenge', 'التحدي'), body: t('Keep a marketing agency’s pipeline full for more than a year on Snapchat without the cost per lead drifting up.', 'إزاي تفضل ماسورة العملاء لوكالة تسويق مليانة أكتر من سنة على سناب شات من غير ما تكلفة الليد تعلى.') },
      { heading: t('Structure', 'الستراكشر'), body: t('Audiences built on the customer journey rather than age/interest boxes, and budget released in waves — the spend line shows clear pushes (Feb, Apr, Jul–Aug, Oct–Nov 2025) with quiet periods between them.', 'جماهير مبنية على رحلة العميل بدل خانات السن والاهتمامات، والميزانية بتنزل على موجات — خط الصرف بيوضح دفعات واضحة (فبراير، أبريل، يوليو–أغسطس، أكتوبر–نوفمبر ٢٠٢٥) وبينها فترات هدوء.') },
      { heading: t('The insight', 'الإنسايت'), body: t('Pulsing kept the creative fresh and the cost per lead flat at ≈$8 across 5.3M impressions — volume without fatigue.', 'الموجات خلّت الكريتيف فريش وتكلفة الليد ثابتة حوالي ٨ دولار على ٥٫٣ مليون ظهور — حجم من غير ما الجمهور يزهق.') },
    ],
    proof: [{ src: C + 'alahli-snapchat-overview.jpg', caption: t('Snapchat Ads — Dec 2024 to Feb 2026', 'إعلانات سناب شات — ديسمبر ٢٠٢٤ لفبراير ٢٠٢٦') }],
  },
  {
    id: 'snapchat-leadgen', client: 'Al-Ahli Marketing — الأهلي للتسويق', logo: 'alahly', platform: 'Snapchat',
    period: t('Apr 1 – Oct 12, 2025', '١ أبريل – ١٢ أكتوبر ٢٠٢٥'),
    headline: t('Holding $8.06 per lead for six months', 'تكلفة ٨٫٠٦ دولار لليد ثابتة ٦ شهور'),
    metrics: { spendUSD: 9132.15, impressions: 2822093, clicks: 8622, ctr: 0.0031, leads: 1133, cplUSD: 8.06 },
    sections: [
      { heading: t('Objective', 'الهدف'), body: t('A steady lead flow through spring and summer at a predictable cost.', 'تدفق ليدز ثابت طول الربيع والصيف بتكلفة متوقعة.') },
      { heading: t('What the chart shows', 'الشارت بيقول إيه'), body: t('Leads and cost per lead move in opposite directions: the biggest lead spikes (late July, mid-September) land when CPL is at its lowest — scaling happened only when the auction was cheap.', 'الليدز وتكلفة الليد ماشيين عكس بعض: أكبر قفزات في الليدز (آخر يوليو ونص سبتمبر) جات وقت ما التكلفة كانت في أقل حالاتها — السكيل كان بيحصل بس لما المزاد يبقى رخيص.') },
    ],
    proof: [{ src: C + 'snapchat-leadgen-overview.jpg', caption: t('Leads vs cost per lead — Apr to Oct 2025', 'الليدز مقابل تكلفة الليد — أبريل لأكتوبر ٢٠٢٥') }],
  },
  {
    id: 'snapchat-b2b', client: 'B2B client — Snapchat', logo: null, platform: 'Snapchat',
    period: t('Sep 10 – Oct 12, 2025 (active)', '١٠ سبتمبر – ١٢ أكتوبر ٢٠٢٥ (فترة التشغيل)'),
    headline: t('A five-week B2B sprint on a consumer platform', 'سبرنت B2B خمس أسابيع على منصة استهلاكية'),
    metrics: { spendUSD: 2031.07, impressions: 373615, clicks: 1663, ctr: 0.0045, leads: 261, cplUSD: 7.78 },
    sections: [
      { heading: t('The bet', 'الرهان'), body: t('Snapchat isn’t the obvious B2B channel. The account sat idle until September, then ran a tight five-week test.', 'سناب شات مش القناة المتوقعة للـ B2B. الحساب كان واقف لحد سبتمبر، وبعدين اشتغل تيست مركز خمس أسابيع.') },
      { heading: t('The result', 'النتيجة'), body: t('The highest click rate of the three Snapchat cases (0.45%) and the lowest cost per lead ($7.78) — 261 business leads for ≈$2K.', 'أعلى نسبة نقر في حالات سناب التلاتة (٠٫٤٥٪) وأقل تكلفة لليد (٧٫٧٨ دولار) — ٢٦١ ليد بيزنس بحوالي ٢ ألف دولار.') },
    ],
    proof: [{ src: C + 'snapchat-b2b-overview.jpg', caption: t('Spend vs impressions — activity starts Sep 2025', 'الصرف مقابل الظهور — التشغيل بدأ سبتمبر ٢٠٢٥') }],
  },
  {
    id: 'meta-b2b-b2c', client: 'TODO client', logo: null, platform: 'Meta',
    period: t('Apr 1 – Oct 12, 2025', '١ أبريل – ١٢ أكتوبر ٢٠٢٥'),
    headline: t('One creative test carried 60% of the results', 'تيست كريتيف واحد شال ٦٠٪ من النتايج'),
    metrics: { spendUSD: 7355.48, conversations: 1524, cplUSD: 4.82 },
    // Campaigns (messaging conversations): creative data 20/7 – copy 908 · engagement 11/9 448 · creative data 20/7 120 · lead 1/10 40 · testing creative 14-4-G 10
    // 908 ÷ 1,524 = 59.6%
    sections: [
      { heading: t('Structure', 'الستراكشر'), body: t('Five campaigns driving messaging conversations across business and consumer audiences: creative tests, an engagement campaign and a lead-form test.', 'خمس حملات بتفتح محادثات رسائل مع جمهور البيزنس والأفراد: تيستات كريتيف، وحملة تفاعل، وتيست فورم ليدز.') },
      { heading: t('The insight', 'الإنسايت'), body: t('The duplicated “creative data 20/7” campaign alone produced 908 of 1,524 conversations. Finding the winning creative and duplicating it beat spreading budget evenly.', 'نسخة حملة «creative data 20/7» لوحدها جابت ٩٠٨ من ١٬٥٢٤ محادثة. إنك تلاقي الكريتيف الكسبان وتعمله نسخة أحسن من إنك توزّع الميزانية بالتساوي.') },
    ],
    proof: [{ src: C + 'meta-b2b-b2c-campaigns.jpg', caption: t('Meta Ads Manager — Apr to Oct 2025', 'مدير إعلانات ميتا — أبريل لأكتوبر ٢٠٢٥') }],
  },
  {
    id: 'meta-b2b-contract', client: 'TODO client', logo: null, platform: 'Meta',
    period: t('2024 – 2025', '٢٠٢٤ – ٢٠٢٥'),
    headline: t('A performance contract: 2,162 conversations at $5.27', 'عقد أداء: ٢٬١٦٢ محادثة بـ ٥٫٢٧ دولار'),
    metrics: { spendUSD: 11394.38, conversations: 2162, cplUSD: 5.27 },
    // Visible campaign results sum exactly to 2,162. Includes the Apr–Oct 2025 campaigns above → not added twice in totals.
    sections: [
      { heading: t('Accountability', 'المحاسبة على النتيجة'), body: t('Paid on performance, so every campaign had to earn its place: 13 campaigns across engagement, lead forms, traffic and WhatsApp sales, with hook rates held around 15–19%.', 'الدفع على الأداء، فكل حملة لازم تثبت إنها تستاهل مكانها: ١٣ حملة ما بين تفاعل وفورم ليدز وترافيك ومبيعات عبر واتساب، والـ Hook Rate ثابت حوالي ١٥–١٩٪.') },
      { heading: t('The insight', 'الإنسايت'), body: t('Two creative-led campaigns (908 + 481) delivered 64% of all conversations; lead-form tests that didn’t convert were switched off early.', 'حملتين معتمدين على الكريتيف (٩٠٨ + ٤٨١) جابوا ٦٤٪ من المحادثات، وتيستات الفورم اللي ما جابتش نتيجة اتقفلت بدري.') },
    ],
    proof: [{ src: C + 'meta-b2b-contract-campaigns.jpg', caption: t('Meta Ads Manager — campaign breakdown', 'مدير إعلانات ميتا — تفاصيل الحملات') }],
  },
  {
    id: 'meta-advanced-targeting', client: 'TODO client', logo: null, platform: 'Meta',
    period: t('2025', '٢٠٢٥'), // from old portfolio — no new screenshot
    headline: t('Creative first: a 22% hook rate', 'الكريتيف الأول: Hook Rate ٢٢٪'),
    metrics: { spendUSD: 3957.11, leads: 751, cplUSD: 5.26, hookRate: 0.22 },
    sections: [{ heading: t('The result', 'النتيجة'), body: t('751 leads at $5.26 with a 22% hook rate — the scroll-stop did the targeting work.', '٧٥١ ليد بـ ٥٫٢٦ دولار وHook Rate ٢٢٪ — وقف الإسكرول هو اللي عمل شغل التارجت.') }],
    proof: [],
    todo: ['New screenshot to confirm'],
  },
  {
    id: 'meta-leadgen', client: 'TODO client', logo: null, platform: 'Meta',
    period: t('2024 – 2025', '٢٠٢٤ – ٢٠٢٥'),
    headline: t('Twenty campaigns, one lesson: the offer is the targeting', 'عشرين حملة ودرس واحد: العرض هو التارجت'),
    metrics: { spendUSD: 8886.94, conversations: 1638, cplUSD: 5.42 },
    // Visible rows sum to 1,646 conversations (+ an awareness campaign reaching 198,806 people).
    sections: [
      { heading: t('Structure', 'الستراكشر'), body: t('Cold vs warm tests, retargeting, Instagram DM and WhatsApp campaigns, cinematic creative tests, plus an awareness campaign reaching 198.8K people to warm the market.', 'تيستات جمهور بارد مقابل دافي، وريتارجت، وحملات Instagram DM وواتساب، وتيستات كريتيف سينمائي، وحملة وعي وصلت لـ ١٩٨٫٨ ألف شخص عشان تسخّن السوق.') },
      { heading: t('The insight', 'الإنسايت'), body: t('Offer-led campaigns won: the discount campaign (357) and the founding campaign (205) were the top two by volume at ≈$2.6–4 per conversation, while the cinematic creative earned the best hook rate (30%).', 'الحملات المبنية على عرض هي اللي كسبت: حملة الخصم (٣٥٧) وحملة التأسيس (٢٠٥) كانوا الأعلى في الحجم بحوالي ٢٫٦–٤ دولار للمحادثة، والكريتيف السينمائي جاب أعلى Hook Rate (٣٠٪).') },
    ],
    proof: [{ src: C + 'meta-leadgen-campaigns.jpg', caption: t('Meta Ads Manager — 20 campaigns', 'مدير إعلانات ميتا — ٢٠ حملة') }],
  },
];

export const ecommerceCases = [
  {
    id: 'maysara', client: 'Maysara Factory — مصنع ميسرة', logo: 'maysarah', niche: t('Laundry products · B2B & B2C', 'منظفات غسيل · B2B وB2C'),
    period: t('2024 – 2025', '٢٠٢٤ – ٢٠٢٥'),
    headline: t('A factory selling to shops and homes: 1.13M SAR', 'مصنع بيبيع للمحلات والبيوت: ١٫١٣ مليون ريال'),
    metrics: { salesSAR: 1125375.57, netSAR: 878969, spendSAR: 190000, roas: 5.92 }, // ROAS = 1,125,375.57 ÷ 190,000
    breakdown: { coupons: -2365.47, shipping: -106718.12, taxes: -129520.25, paymentFees: -7802.73 },
    sections: [
      { heading: t('The challenge', 'التحدي'), body: t('One factory, two buyers: businesses ordering in bulk and households ordering a box.', 'مصنع واحد وعميلين: بيزنس بيطلب بالجملة وبيت بيطلب كرتونة.') },
      { heading: t('The insight', 'الإنسايت'), body: t('At 190K SAR of spend — the largest budget here — it still returned 5.92× with almost no discounting (coupons ≈0.2% of sales). Growth came from reach, not price cuts.', 'مع ١٩٠ ألف ريال صرف — أكبر ميزانية في الشغل ده — رجّع ٥٫٩٢ ضعف تقريبًا من غير خصومات (الكوبونات حوالي ٠٫٢٪ من المبيعات). النمو جه من الوصول مش من تكسير السعر.') },
    ],
    proof: [{ src: C + 'maysara-sales.jpg', caption: t('Store sales breakdown', 'تفاصيل مبيعات المتجر') }],
  },
  {
    id: 'sheis', client: 'She Is — شي إز', logo: 'sheis', niche: t('Women’s abayas', 'عبايات نسائية'),
    period: t('May 2024', 'مايو ٢٠٢٤'),
    headline: t('Target 250K. Delivered 267.7K.', 'التارجت ٢٥٠ ألف. اتحقق ٢٦٧٫٧ ألف.'),
    metrics: { salesSAR: 267726, goalSAR: 250000, visits: 47191, orders: 738, spendSAR: 40000, roas: 6.69 },
    // goal reached = 107%; AOV = 267,726 ÷ 738 = 362.8; visit→order = 738 ÷ 47,191 = 1.56%
    sections: [{ heading: t('The insight', 'الإنسايت'), body: t('A fashion month planned backwards from a sales target: 107% of goal, 1.56% of visits converting, AOV ≈363 SAR.', 'شهر فاشون متخطط بالعكس من تارجت المبيعات: ١٠٧٪ من الهدف، و١٫٥٦٪ من الزيارات اتحولت لطلبات، ومتوسط الطلب حوالي ٣٦٣ ريال.') }],
    proof: [{ src: C + 'sheis-may-2024.jpg', caption: t('Store monthly summary — May 2024', 'ملخص المتجر — مايو ٢٠٢٤') }],
  },
  {
    id: 'operamck', client: 'Operamck — أوبرا ماك', logo: 'operamak', niche: t('Cosmetics', 'مستحضرات تجميل'),
    period: t('February 2024', 'فبراير ٢٠٢٤'),
    headline: t('238 orders, 509K SAR: when every order is high-ticket', '٢٣٨ طلب بـ ٥٠٩ ألف ريال: لما كل طلب قيمته عالية'),
    metrics: { salesSAR: 508931, visits: 23722, orders: 238, spendSAR: 23000, roas: 22.13 },
    // AOV = 508,931 ÷ 238 = 2,138 SAR; ROAS = 508,931 ÷ 23,000
    sections: [{ heading: t('The insight', 'الإنسايت'), body: t('An average order of ≈2,138 SAR changes the maths: fewer, richer buyers — so targeting aimed at intent, not traffic. 22× return on 23K SAR.', 'متوسط طلب حوالي ٢٬١٣٨ ريال بيغيّر الحسبة: مشترين أقل بس قيمتهم أعلى — فالتارجت كان على النية مش على الزيارات. عائد ٢٢ ضعف على ٢٣ ألف ريال.') }],
    proof: [{ src: C + 'operamck-feb-2024.jpg', caption: t('Store monthly summary — Feb 2024', 'ملخص المتجر — فبراير ٢٠٢٤') }],
  },
  {
    id: 'oneline', client: 'One Line — ون لاين', logo: 'oneline', niche: t('Car charcoal · TikTok + Snapchat', 'فحم سيارات · تيك توك + سناب شات'),
    period: t('Sep 2023 – Dec 2024', 'سبتمبر ٢٠٢٣ – ديسمبر ٢٠٢٤'),
    headline: t('10 creatives and one after-sales offer', '١٠ كريتيفات وعرض واحد بعد البيع'),
    metrics: { salesSAR: 660997.30, netSAR: 647539.16, orders: 1898, spendSAR: 51590, roas: 12.81 },
    // ROAS (gross) = 660,997.30 ÷ 51,590; AOV = 660,997.30 ÷ 1,898 = 348
    sections: [
      { heading: t('Strategy', 'الاستراتيجية'), body: t('Ten creatives across AGC, UGC, gain and pain angles; a local-manufacturing story; and an installation discount after the sale to remove the last purchase barrier.', 'عشر كريتيفات بزوايا AGC وUGC والمكسب والألم؛ وقصة التصنيع المحلي؛ وخصم تركيب بعد البيع يشيل آخر حاجز قبل الشراء.') },
      { heading: t('Result', 'النتيجة'), body: t('1,898 orders and 661K SAR in sales (647.5K net) — almost no discount coupons needed.', '١٬٨٩٨ طلب و٦٦١ ألف ريال مبيعات (٦٤٧٫٥ ألف صافي) — تقريبًا من غير كوبونات خصم.') },
    ],
    proof: [{ src: C + 'oneline-store-sales.jpg', caption: t('Store sales & orders — Sep 2023 to Dec 2024', 'مبيعات وطلبات المتجر — سبتمبر ٢٠٢٣ لديسمبر ٢٠٢٤') }],
  },
  // From the old portfolio — no new screenshot yet (old result images kept; to replace with HD when available):
  { id: 'wanasim', client: 'Wanasim Al Ward — ونسيم الورد', logo: null, niche: t('Gifts & flowers', 'هدايا وورد'), period: t('August 2024', 'أغسطس ٢٠٢٤'),
    headline: t('Selling the occasion, not the flower: 13.7× ROAS', 'بيع المناسبة مش الوردة: ROAS ١٣٫٧'),
    metrics: { salesSAR: 520112, goalSAR: 550000, visits: 78205, orders: 908, spendSAR: 38000, roas: 13.69 }, // goal reached = 94.6% (old text wrongly said "exceeded")
    proof: [] },
  { id: 'asas', client: 'Asas Factory — مصنع أساس', logo: null, niche: t('Tea & coffee · B2B & B2C', 'شاي وقهوة · B2B وB2C'), period: t('2024 – 2025', '٢٠٢٤ – ٢٠٢٥'),
    headline: t('Repeat buyers: +119.77% growth', 'المشتري اللي بيرجع: نمو +١١٩٫٧٧٪'),
    metrics: { salesSAR: 1133423.51, orders: 3818, spendSAR: 136000, roas: 8.33, growth: 1.1977 },
    proof: [] },
  { id: 'home-electronics', client: 'Home Electronics — إلكترونيات منزلية', logo: null, niche: t('Electronics', 'إلكترونيات'), period: t('April 2024', 'أبريل ٢٠٢٤'),
    headline: t('8K SAR in, 151.8K SAR out', '٨ آلاف ريال صرف ← ١٥١٫٨ ألف مبيعات'),
    metrics: { salesSAR: 151769, goalSAR: 150000, visits: 14635, orders: 139, spendSAR: 8000, roas: 18.97 },
    proof: [] },
  // Honey store → see data/cases/ecom-store.js (full 2025–2026 case with new screenshots).
];
