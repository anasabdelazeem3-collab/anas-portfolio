// E-commerce store (KSA) — 2025 → 2026. Client name: TODO.
// Sources (5 screenshots): store analytics (Jan–Aug 2025, full 2025), ad platform campaigns 2025 (79 campaigns, totals row),
// Meta Ads Manager 2025 (28 campaigns, visible rows only) and Meta 2026 Jan 1–Aug 26 (visible rows only).
// Where a screenshot shows no totals row, figures are sums of the VISIBLE rows and labelled as such.
const t = (en, ar) => ({ en, ar });
const W = 'assets/work/ecom-store/';

export const ecomStoreCase = {
  id: 'ecom-store-2025',
  client: t('Honey e-commerce store', 'متجر عسل إلكتروني'), // same store as the old portfolio's “Honey niche” case — name TODO
  market: t('Saudi Arabia', 'السعودية'),
  period: t('Jan 2025 – Aug 2026', 'يناير ٢٠٢٥ – أغسطس ٢٠٢٦'),
  category: 'ecommerce',
  platforms: ['TikTok', 'Meta'], // old case: Meta + TikTok; the 79-campaign table (hook rate column) is TikTok
  adSpend2025SAR: 120505.72, // from the old case (Meta + TikTok) → blended ROAS on store sales = 973,899 ÷ 120,505.72 = 8.08
  headline: t('Nearly 1M SAR in a year — and a clear map of what to cut', 'قرابة مليون ريال في سنة — وخريطة واضحة للي يتقطع'),
  angle: t(
    'A testing system, not a lucky campaign: structured ABO/CBO/Advantage+ tests, cut fast when they fail, budget concentrated on winners.',
    'نظام تيست مش حملة محظوظة: تيستات ABO وCBO وAdvantage+ منظمة، والضعيف بيتقفل بسرعة، والميزانية بتتركز على الكسبان.'
  ),

  store2025: {
    // Store analytics, Jan 1 – Dec 31 2025 (growth vs previous period as shown by the platform)
    salesSAR: 973940, salesGrowth: 3.0272,  // 973.94K, +302.72%
    orders: 2390, ordersGrowth: 2.9311,      // 2.39K, +293.11%
    aovSAR: 393.9, aovGrowth: -0.0128,
    repeatPurchaseRate: 0.222,
    returnRate: 0.0004,
    abandonedCartRecovery: 0,                // 0% — not activated → opportunity
    // Jan 1 – Aug 28 2025: 626.51K SAR, 1.62K orders, AOV 375.9, repeat 16.9%
    // Derived Sep–Dec 2025 ≈ 347K SAR (~36% of the year in 4 months — offers season / Black Friday tests)
  },
  adsPlatform2025: {
    // Totals row: 79 campaigns, Jan 1 – Dec 31 2025
    campaigns: 79, purchases: 1329, cpaSAR: 73.95, purchaseValueSAR: 367789.55, platformROAS: 4.069,
    impressions: 10920863, clicks: 112178, ctr: 0.0103, cpcSAR: 0.88, cpmSAR: 9.00, hookRate: 0.3608,
    addToCarts: 9112, costPerATC: 10.79,
    // Derived: spend ≈ CPM × impressions / 1000 ≈ 98,288 SAR (= CPA × purchases ≈ 98,280)
    // click → add-to-cart = 8.1%; add-to-cart → purchase = 14.6%  ← the leak is after the cart
    // attributed value = 37.8% of the store's 2025 sales
  },
  meta2025Visible: {
    // Visible rows (11 of 28). Best: test-sales-Advantage+22/11 → 230 purchases, CPA 36.22, spend 8,330.19, value 43,665.74, ROAS 5.24
    // Messaging campaigns: 2,119 conversations for 9,134.52 SAR (≈4.31 SAR/conversation); cheapest test-eng-24/11 at 1.73
  },
  meta2026Visible: {
    // Jan 1 – Aug 26 2026, 13 visible sales campaigns (+1 traffic campaign: 5,014 clicks at 0.12 SAR)
    purchases: 1001, spendSAR: 55334.87, valueSAR: 201001.42, roas: 3.63, cpaSAR: 55.28,
    // Winner: new-sales-ABO-28/1 → 466 purchases, CPA 43.32, ROAS 4.72, 1,802 add-to-carts
    // Top 3 (ABO 28/1, CBO 27/1, ABO 11/4 copy): 62% of spend → 75% of value, ROAS 4.39
    // Failed tests (ROAS < 1.5: edge ABO 14/3 0.22, edge CBO 9/3 1.46, ABO 28/6 0.99, LLK 14/7 1.05…) capped at ≈7.8K SAR (14% of spend)
  },

  sections: [
    { heading: t('Snapshot', 'نظرة سريعة'), body: t(
      'Saudi honey e-commerce store, scaled on TikTok and Meta. 2025: 973.9K SAR in sales from 2.39K orders (+303% vs the previous period) on 120.5K SAR total ad spend — a blended ROAS of 8.08, AOV ≈394 SAR, 22.2% repeat-purchase rate and returns near zero.',
      'متجر عسل إلكتروني في السعودية، اتعمله سكيل على تيك توك وميتا. في ٢٠٢٥: مبيعات ٩٧٣٫٩ ألف ريال من ٢٫٣٩ ألف طلب (+٣٠٣٪ عن الفترة السابقة) بإجمالي صرف إعلاني ١٢٠٫٥ ألف ريال — يعني ROAS إجمالي ٨٫٠٨، ومتوسط الطلب حوالي ٣٩٤ ريال، ونسبة تكرار شراء ٢٢٫٢٪، والمرتجعات تقريبًا صفر.') },
    { heading: t('Account structure', 'ستراكشر الحساب'), body: t(
      'Campaigns named by method and launch date so every test is traceable: Advantage+ sales, ABO vs CBO splits, lookalike (LLK) and new-acquisition audiences, “edge” creative tests, a traffic campaign for cheap reach, and messaging campaigns that start sales conversations. 79 campaigns on one platform in 2025 alone — testing was the engine.',
      'الحملات متسمية بطريقة الشغل وتاريخ الإطلاق عشان كل تيست يبقى متتبع: Advantage+ للمبيعات، وتقسيم ABO مقابل CBO، وجماهير Lookalike واستحواذ جديد، وتيستات كريتيف «edge»، وحملة ترافيك لوصول رخيص، وحملات رسائل بتفتح محادثات بيع. ٧٩ حملة على منصة واحدة في ٢٠٢٥ لوحدها — التيست كان هو المحرك.') },
    { heading: t('Results', 'النتايج'), body: t(
      '2025 on TikTok: 1,329 purchases worth 367.8K SAR (platform ROAS 4.07) from ≈98K SAR — 10.9M impressions at a 9 SAR CPM and a 36% hook rate. On Meta, the Black-Friday-season Advantage+ test hit ROAS 5.24 at a 36 SAR CPA. 2026 (Jan–Aug, visible campaigns): 1,001 purchases, 201K SAR value, ROAS 3.63.',
      'في ٢٠٢٥ على تيك توك: ١٬٣٢٩ عملية شراء بقيمة ٣٦٧٫٨ ألف ريال (ROAS المنصة ٤٫٠٧) من حوالي ٩٨ ألف ريال — ١٠٫٩ مليون ظهور بـ CPM ٩ ريال وHook Rate ٣٦٪. وعلى ميتا، تيست Advantage+ في موسم الجمعة البيضاء جاب ROAS ٥٫٢٤ بتكلفة شراء ٣٦ ريال. وفي ٢٠٢٦ (يناير–أغسطس، الحملات الظاهرة): ١٬٠٠١ عملية شراء بقيمة ٢٠١ ألف ريال وROAS ٣٫٦٣.') },
    { heading: t('The insight', 'الإنسايت'), body: t(
      'Concentration beats spread: in 2026 three campaigns took 62% of the budget and returned 75% of the value (ROAS 4.39), while failed tests were cut at ≈14% of spend. And the next lever is visible in the data: 8.1% of clicks add to cart but only 14.6% of carts buy — with abandoned-cart recovery at 0%, the cart is where the next growth is.',
      'التركيز أحسن من التشتيت: في ٢٠٢٦ تلات حملات خدوا ٦٢٪ من الميزانية ورجّعوا ٧٥٪ من القيمة (ROAS ٤٫٣٩)، والتيستات الفاشلة اتقفلت عند حوالي ١٤٪ من الصرف. والخطوة الجاية باينة في الداتا: ٨٫١٪ من النقرات بتضيف للسلة، لكن ١٤٫٦٪ بس من السلات بتشتري — ومع إن استرداد السلات المتروكة ٠٪، يبقى النمو الجاي في السلة.') },
  ],
  proof: [
    { src: W + 'store-full-year-2025-hd.jpg', caption: t('Store analytics — full year 2025', 'تحليلات المتجر — سنة ٢٠٢٥ كاملة') },
    { src: W + 'store-jan-aug-2025-hd.jpg', caption: t('Store analytics — Jan–Aug 2025', 'تحليلات المتجر — يناير–أغسطس ٢٠٢٥') },
    { src: W + 'ads-platform-2025-campaigns-hd.jpg', caption: t('TikTok Ads — 79 campaigns, 2025', 'إعلانات تيك توك — ٧٩ حملة في ٢٠٢٥') },
    { src: W + 'meta-2025-campaigns-hd.jpg', caption: t('Meta Ads Manager — 2025', 'مدير إعلانات ميتا — ٢٠٢٥') },
    { src: W + 'meta-2026-campaigns-hd.jpg', caption: t('Meta Ads Manager — Jan–Aug 2026', 'مدير إعلانات ميتا — يناير–أغسطس ٢٠٢٦') },
  ],
  todo: [
    'Store / client name and niche',
    
    'Meta totals rows for 2025 and 2026 (only visible rows are summed)',
    'Platform ROAS 4.069 vs value ÷ spend 3.74 — attribution setting differs; keep platform figure?',
  ],
};
