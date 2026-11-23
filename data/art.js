// Art & acting projects — photo galleries mapped by project.
// Text/credits for existing projects carried over from the current site (actingWorks.ts).
const t = (en, ar) => ({ en, ar });

// Display rules:
// - Every acting project shows a 4:5 cover thumbnail taken from inside the project itself (list/grid view).
//   Projects with only a YouTube video (Ayam, Storytel, Etisalat) use the YouTube frame as cover.
// - Inside a project: video(s) FIRST, then the photo gallery, then the rest of the details.
export const artProjects = [
  {
    id: 'talabat-shahid',
    cover: 'assets/art/covers/talabat-shahid.jpg', // 4:5 thumbnail taken from inside the project
    title: t('Talabat × Shahid VIP — TV commercial', 'طلبات × شاهد VIP — إعلان'),
    category: t('Commercial · Actor (the Talabat rider)', 'إعلان · ممثل (طيار طلبات)'),
    year: '2022',
    videos: [
      { src: 'assets/art/talabat/talabat-shahid-ad.mp4', poster: 'assets/art/talabat/talabat-shahid-ad-poster.jpg', orientation: 'landscape' },
    ],
    gallery: [
      ['06-fitting-check.jpg', t('Wardrobe & helmet fitting', 'الفيتينج والخوذة')],
      ['01-rider-helmet-selfie.jpg', t('In character — the Talabat rider', 'في الكاركتر — طيار طلبات')],
      ['02-helmet-in-hand.jpg', t('Between takes — head shaved before army service', 'بين اللقطات — الشعر محلوق قبل دخول الجيش')],
      ['03-on-set-with-crew.jpg', t('On set with the crew', 'في اللوكيشن مع فريق العمل')],
      ['04-helmet-closeup.jpg', t('Waiting for the call', 'في انتظار الأكشن')],
      ['05-visor-down.jpg', t('Visor down', 'الخوذة مقفولة')],
    ].map(([f, caption]) => ({ src: `assets/art/talabat/${f}`, caption })),
    // Story written from Anas's own account. Sections render in this order after video + gallery.
    sections: [
      {
        heading: t('The offer', 'العرض'),
        body: t(
          'Shahid ran a general offer: VIP for EGP 20. The side offer came with Talabat — with every Talabat order you get a Shahid VIP Mobile subscription for free, and can continue on VIP for EGP 20 afterwards. Picture the customer seeing how much value they get, for just EGP 20.',
          'شاهد كان عامل عرض عام: اشتراك VIP بـ ٢٠ جنيه. أما العرض الجانبي فكان مع طلبات: مع كل أوردر من طلبات هتاخد اشتراك شاهد VIP موبايل ببلاش، وتقدر تكمّل بعدها في الـ VIP بـ ٢٠ جنيه. متخيل العميل شاف قد إيه هيستفاد، وبـ ٢٠ جنيه بس!'
        ),
      },
      {
        heading: t('The timing', 'التوقيت'),
        body: t(
          'The campaign landed around September–November, in offers season heading into White Friday — and right when the series "Mawdoo3 3a2ely" was trending, followed by "Room 207". Then came Ronaldo in Saudi Arabia and the start of the Roshn League. It read as a planned strategy across a full quarter, continuing through Ramadan with influencers and actors.',
          'الحملة نزلت تقريبًا من شهر ٩ لحد ١١، في موسم العروض وداخلين على الجمعة البيضاء، ووقتها كان مسلسل «موضوع عائلي» تريند، وبعده دخل «غرفة ٢٠٧»، ومننساش الدون في السعودية وبداية دوري روشن. ولحد رمضان عملوا شغل حلو مع كام إنفلونسر وكام ممثل — كاستراتيجية وخطة مدروسة لكوارتر كامل.'
        ),
      },
      {
        heading: t('Why it works — the funnel', 'ليه الحملة شغالة — الفانل'),
        body: t(
          'A customer who may or may not know you becomes a permanent prospect living inside your app. Two apps, double return. The customer journey completes and loyalty goes up because the offer is genuinely good. Inside the app you can upsell and cross-sell, and use tracking and analytics to learn what each person is into — series, wrestling, cartoons, anime, matches — and serve it to them.',
          'من عميل ميعرفكش أو يعرفك، عملتلي عميل محتمل دايم بايت جوه الـ App. تطبيقين وعائد مزدوج. الفانل أو رحلة العميل كملت ورفعت الولاء لأنه عرض كويس. وجوه التطبيق أقدر أعمل Upsell وCross-selling، وبالتراكينج والتحليلات أعرف اهتماماتك وميولك أكتر، فأجيبلك المسلسلات والمصارعة والكارتون والأنمي والماتشات.'
        ),
      },
      {
        heading: t('On set — my side of it', 'في اللوكيشن — دوري أنا'),
        body: t(
          'My job was acting, first and foremost. That’s what I cared about — not who the campaign was for or what it was saying. Around the performance I was focused on lighting and make-up for the character, the fitting, the director and production, the storyboard, playing off the actors beside me, finding my frame and angle, and keeping my continuity (raccord).',
          'شغلي كان التمثيل أولًا. ده اللي كنت مهتم بيه، مش الحملة أو الإعلان لمين وبيقول إيه. وحوالين الأداء كنت مركّز في الإضاءة والميكب للكاركتر، والفيتينج، والمخرج والإنتاج والتجهيز، والاستوري بورد، وأدائي مع الممثلين جنبي، وهاخد الكادر وزاويتي منين، والراكور بتاعي إيه.'
        ),
      },
      {
        heading: t('The cut — the lesson', 'القص — الدرس'),
        body: t(
          'When the ad came back in front of me, I noticed my part was longer and had been cut — and honestly, thank God it was. They kept only what served the idea and the offer. Don’t settle for the first idea or the first version of what you produce: always think how to use it from more than one angle.',
          'لما الإعلان عدّى قدامي تاني، شفت إن الفيديو بتاعي كان أطول من كده بس اتقص — والحمد لله إنه اتقص. قصّوا اللي يخدم الفكرة والـ Offer وبس. متتبسطش بأول فكرة، ولا بأول إنتاج للقطعة اللي عملتها؛ فكّر دايمًا إزاي تستفيد بيها من أكتر من زاوية.'
        ),
      },
      {
        heading: t('Every journey leads to the next', 'كل رحلة سبب لرحلة جديدة'),
        body: t(
          'I had just shaved my head — I was about to join the army. That period away from Cairo’s pace turned out to be one of the best of my life, and it made me ask what I really need. Learn something useful from every stage, merge it all together — it ends up serving your work.',
          'وساعتها كنت داخل الجيش فحلقت. والفترة دي كلها كانت غربة، ومن أحسن فترات حياتي — بيئة انضباطية قرّبتني من ربنا — وخلتني أفكر أنا محتاج إيه. خلّص كل مرحلة واتعلم منها حاجة تفيدك، وادمج كل ده مع بعض — هيفيدك في شغلك. كل منطقة ورحلة فيها سبب لرحلة جديدة، اعرف السبب ده.'
        ),
      },
    ],
  },
  {
    id: 'alhafid',
    cover: 'assets/art/covers/alhafid.jpg', // 4:5 thumbnail taken from inside the project
    title: t('Al Hafeed — Egyptian National Theater', 'الحفيد — المسرح القومي المصري'),
    category: t('Theatre play · Role: Sami', 'مسرحية · دور: سامي'),
    role: t('Sami', 'سامي'),
    season: '2022 / 2023',
    description: t(
      'Performed at the Egyptian National Theater, part of the Egyptian Fine Arts Sector. Adapted from the novel "The Grandson and Omm El-Arousa" by Abdul Hamid Gouda El-Sahhar.',
      'عرض مسرحي على المسرح القومي المصري، تابع للبيت الفني المصري. النص مقتبس من رواية «الحفيد وأم العروسة» للأديب عبد الحميد جودة السحار.'
    ),
    poster: 'assets/art/alhafid/01-poster.jpg',
    gallery: [
      ['02-full-stage.jpg', t('Full stage view', 'المسرح كاملًا'), true],
      ['04-oud-solo.jpg', t('On stage with the oud', 'على المسرح بالعود')],
      ['15-oud-closeup.jpg', t('With the oud — photo: Hader Elsayed', 'بالعود — تصوير: هادر السيد')],
      ['05-galabeya-portrait.jpg', t('A quiet moment', 'لحظة صامتة')],
      ['03-hospital-scene.jpg', t('The hospital scene', 'مشهد المستشفى')],
      ['06-argument.jpg', t('The argument', 'مشهد الجدال')],
      ['07-trio-confrontation.jpg', t('Three-way confrontation', 'مواجهة ثلاثية')],
      ['08-vest-trio.jpg', t('With the cast', 'مع فريق العمل')],
      ['09-vest-trio-tears.jpg', t('The emotional turn', 'لحظة التحوّل')],
      ['10-father-son.jpg', t('Father and son', 'الأب والابن')],
      ['11-dance-number.jpg', t('The dance number', 'الفاصل الاستعراضي')],
      ['12-family-music.jpg', t('The family music scene', 'المشهد الغنائي العائلي')],
      ['13-musical-finale.jpg', t('Musical finale', 'الختام الغنائي')],
      ['14-living-room.jpg', t('The living-room scene', 'مشهد غرفة المعيشة'), true],
    ].map(([f, caption, wide]) => ({ src: `assets/art/alhafid/${f}`, caption, wide: !!wide })),
    credits: [
      [t('My role', 'دوري'), 'سامي — Sami'],
      [t('Based on the novel by', 'مقتبس من رواية'), 'عبد الحميد جودة السحار — Abdul Hamid Gouda El-Sahhar'],
      [t('Dramaturgy & direction', 'دراماتورج وإخراج'), 'يوسف المنصور — Youssef El Mansour'],
      [t('Venue', 'المكان'), 'المسرح القومي المصري — البيت الفني المصري'],
    ],
  },
  {
    id: 'alwan',
    cover: 'assets/art/covers/alwan.jpg', // 4:5 thumbnail taken from inside the project
    title: t('Alwan (Colors) — my first acting work', 'ألوان — أول أعمالي التمثيلية'),
    category: t('Short film · Lead actor', 'فيلم قصير · ممثل'),
    description: t(
      'A short film about addiction, striving and slacking, procrastination, and escaping reality in harmful ways. A young man lost in his dreams loses himself when he disconnects from reality — running without refuge, calling for help, but his voice goes unheard.',
      'فيلم قصير عن الإدمان، والسعي والتكاسل، والتسويف، والهروب من الواقع بأساليب مضرة. عن شاب غرق في أحلامه فتاه عن نفسه لما بعد عن الواقع؛ بقى يجري من غير ملجأ، ينادي ويستغيث، لكن صوته مش مسموع.'
    ),
    url: 'https://www.facebook.com/reel/380622167885403',
    // TODO: year + more stills/details to come from Anas.
    poster: 'assets/art/alwan/01-poster.jpg',
    gallery: [],
    // Credits as printed on the official poster.
    credits: [
      [t('Actor', 'تمثيل'), 'Anas Abd Elazeem'],
      [t('Directed by', 'إخراج'), 'Eslam Hilal'],
      [t('Scriptwriter', 'سيناريو'), 'Mohamed Hilal'],
      [t('Music', 'موسيقى'), 'Ramy Elkasaby'],
      [t('Voiceover', 'تعليق صوتي'), 'Mohamed Elkholy'],
      [t('Translation', 'ترجمة'), 'Ahmed Samak'],
      [t('Typography', 'تايبوجرافي'), 'Ahmed Yahia'],
      [t('Poster design', 'تصميم البوستر'), 'Heba Akram'],
    ],
  },
  {
    id: 'fall-in-love',
    cover: 'assets/art/covers/fall-in-love.jpg', // 4:5 thumbnail taken from inside the project
    title: t('How Do You Make Two People Fall in Love?', 'كيف تجعل اثنان يقعان في الحب؟'),
    category: t('Award-winning short documentary', 'فيلم تسجيلي قصير حائز على جوائز'),
    description: t(
      'A short documentary produced by El-Nahda / Jesuit Cairo, screened at festivals in Egypt and abroad.',
      'فيلم تسجيلي قصير من إنتاج جمعية النهضة / جزويت القاهرة، عُرض في مهرجانات داخل مصر وخارجها.'
    ),
    url: 'https://www.facebook.com/share/v/19cKY6rhJB/',
    poster: 'assets/art/fall-in-love/02-poster-bw.jpg',
    gallery: [
      ['01-screening-alexandria.jpg', t('Screening at Jesuit Cultural Center, Alexandria', 'العرض في مركز الجزويت الثقافي بالإسكندرية'), true],
      ['02-poster-bw.jpg', t('Official poster', 'الملصق الرسمي')],
      ['03-poster-cast.jpg', t('Official poster with cast', 'الملصق الرسمي مع فريق العمل')],
      ['04-ismailia-first-prize.jpg', t('1st Prize — National Students Competition, Ismailia IFF 2022', 'المركز الأول — مسابقة الطلبة، مهرجان الإسماعيلية ٢٠٢٢')],
    ].map(([f, caption, wide]) => ({ src: `assets/art/fall-in-love/${f}`, caption, wide: !!wide })),
    // Awards carried over from the current site; laurels as printed on the posters.
    awards: [
      t('First place, Best Student Film — Ismailia International Film Festival, 2022', 'المركز الأول لأفضل فيلم طلابي — مهرجان الإسماعيلية السينمائي الدولي ٢٠٢٢'),
      t('Best Student Documentary — Manassat Film Festival, 2023', 'أفضل فيلم تسجيلي طلابي — مهرجان منصات ٢٠٢٣'),
      t('Best Short Documentary — 8th Participation Film Festival', 'أفضل فيلم تسجيلي قصير — مهرجان المشاركة الثامن'),
    ],
    selections: ['Regards de Femmes 2022', 'Story? International Student Documentary Festival 2023', 'Hollywood Arab Film Festival 2023', 'YOUKI 2023'],
    credits: [
      [t('Produced & directed by', 'إنتاج وإخراج'), 'Basma Sheren'],
      [t('Introducing', 'بطولة'), 'Yara Ashraf · Anas Abd Elazeem · Mohamed Elsoury · Basma Sheren'],
      [t('Co-writer', 'مشاركة في الكتابة'), 'Mohamed Elsoury'],
      [t('D.O.P', 'مدير التصوير'), 'Mohamed Hasan · Summer Elfeky'],
      [t('Editing', 'مونتاج'), 'Mohamed Bashir'],
      [t('Production', 'إنتاج'), 'El-Nahda Association for Scientific & Cultural Renaissance'],
    ],
  },
  {
    id: 'elfar3i',
    cover: 'assets/art/covers/elfar3i.jpg', // 4:5 thumbnail taken from inside the project
    title: t('El Far3i — Sumo', 'الفرعي — سومو'),
    category: t('Music video', 'فيديو كليب'),
    description: t('Appeared in a music video for the Jordanian singer El Far3i.', 'شاركت في فيديو كليب للمغني الأردني الفرعي.'),
    videoId: 'CNB3LAeJKrg',
    gallery: [
      ['01-burning-newspaper.jpg', t('The burning newspaper take', 'لقطة الجريدة المشتعلة')],
      ['02-smoke-scene.jpg', t('The smoke scene', 'مشهد الدخان')],
      ['03-overhead-setup.jpg', t('Setting up the overhead shot', 'تحضير اللقطة العلوية')],
      ['04-monitor.jpg', t('On the production monitor', 'على شاشة المراقبة')],
      ['05-at-the-monitor.jpg', t('Reviewing the take', 'مراجعة اللقطة')],
    ].map(([f, caption]) => ({ src: `assets/art/sumo/${f}`, caption })),
  },
  {
    id: 'ayam',
    cover: 'assets/art/covers/ayam.jpg', // 4:5 thumbnail taken from inside the project
    title: t('Ayam — Mohamed Nawara ft. Wael Elfashny', 'أيام — محمد نواره مع وائل الفشني'),
    category: t('Music video · One-shot take', 'فيديو كليب · لقطة واحدة مستمرة'),
    year: '2022',
    description: t(
      'Portrayed the Palestinian homeowner. The entire work was filmed in one continuous take.',
      'جسّدت شخصية صاحب البيت الفلسطيني، وتم تصوير العمل بالكامل في لقطة واحدة مستمرة (One-shot take).'
    ),
    videoId: 'OeK5_P8ftsE', url: 'https://www.youtube.com/watch?v=OeK5_P8ftsE',
    gallery: [
      { src: 'assets/art/ayam/01-portrait.jpg', caption: t('Character portrait — release 22/2/22', 'بورتريه الشخصية — موعد الإصدار ٢٢/٢/٢٢') },
      { src: 'assets/art/ayam/02-poster.jpg', caption: t('Official poster', 'البوستر الرسمي') },
    ],
    credits: [
      [t('Music & lyrics', 'موسيقى وكلمات'), 'محمد نواره — Mohamed Nawara'],
      [t('Vocals', 'غناء'), 'وائل الفشني — Wael Elfashny'],
    ],
  },
  {
    id: 'sacer-so-full-of-you',
    cover: 'assets/art/covers/sacer-so-full-of-you.jpg', bg: 'assets/art/thumbs/sacer-so-full-of-you.jpg',
    title: t('So Full of You — A conversation with my depression', 'So Full of You — حوار مع اكتئابي'),
    category: t('Fashion short film · Scarabaeus Sacer · Lead', 'فيلم قصير لبراند ملابس · Scarabaeus Sacer · بطولة'),
    description: t(
      'The first of two short films for the streetwear brand Scarabaeus Sacer (Sacer.eco | Streetwear Lisbon), directed by Dibo and screened in Egypt and Europe.',
      'الفيلم الأول من فيلمين قصيرين لبراند الملابس Scarabaeus Sacer (Sacer.eco | Streetwear Lisbon)، إخراج ديبو، وعُرضا في مصر وأوروبا.'
    ),
    platform: 'Instagram', url: 'https://www.instagram.com/p/CQ_wduchlkT/', // TODO confirm which link is which film
    gallery: [
      { src: 'assets/art/sacer/01-so-full-of-you-poster.jpg', caption: t('Official poster', 'البوستر الرسمي') },
      { src: 'assets/art/sacer/02-so-full-of-you-still.jpg', caption: t('Still from the film', 'لقطة من الفيلم'), wide: true },
    ],
    credits: [
      [t('Presented by', 'تقديم'), 'Scarabaeus Sacer'],
      [t('A film by', 'إخراج'), 'Dibo'],
      [t('Partners', 'شركاء'), 'kmt house · allthingsdibo · inhouse'],
    ],
  },
  {
    id: 'sacer-make-it-stop',
    cover: 'assets/art/covers/sacer-make-it-stop.jpg',
    title: t('Make It Stop — A conversation with my anxiety', 'Make It Stop — حوار مع قلقي'),
    category: t('Fashion short film · Scarabaeus Sacer · Lead', 'فيلم قصير لبراند ملابس · Scarabaeus Sacer · بطولة'),
    description: t(
      'The second short film for Scarabaeus Sacer, directed by Dibo — premiered with a screening event and shown in Egypt and Europe.',
      'الفيلم القصير التاني لبراند Scarabaeus Sacer، إخراج ديبو — اتعمله عرض أول وعُرض في مصر وأوروبا.'
    ),
    platform: 'Instagram', url: 'https://www.instagram.com/p/CUdBf5xjocc/', // TODO confirm which link is which film
    gallery: [
      { src: 'assets/art/sacer/03-make-it-stop-poster.jpg', caption: t('Official poster', 'البوستر الرسمي') },
      { src: 'assets/art/sacer/04-make-it-stop-premiere.jpg', caption: t('At the premiere', 'في العرض الأول') },
    ],
    credits: [
      [t('Presented by', 'تقديم'), 'Scarabaeus Sacer'],
      [t('A film by', 'إخراج'), 'Dibo'],
      [t('Partners', 'شركاء'), 'kmt house · allthingsdibo · inhouse'],
    ],
  },
  {
    id: 'storytel',
    title: t('Storytel — Imagine being a hero from your favourite novel', 'ستوريتل — تخيل أن تكون بطلًا من أبطال روايتك المفضلة'),
    category: t('Commercial · Mad Hatter', 'إعلان · Mad Hatter'),
    description: t('Played the Mad Hatter in a commercial for Storytel, the audiobook platform.', 'جسّدت شخصية Mad Hatter في إعلان لمنصة ستوريتل للكتب السمعية.'),
    videoId: 'Ar27SkvJhZ4', url: 'https://www.youtube.com/watch?v=Ar27SkvJhZ4',
    cover: 'assets/art/covers/storytel.jpg', bg: 'assets/art/storytel/02-hatter-stare.jpg',
    videos: [{ src: 'assets/art/ads/storytel.mp4', poster: 'assets/art/ads/storytel-poster.jpg', title: t('Storytel commercial — full ad', 'إعلان ستوريتل — كامل') }],
    gallery: [
      { src: 'assets/art/storytel/02-hatter-stare.jpg', caption: t('The interview look — direct to camera: orange-red brows and a curly red wig frame the face', 'لقطة الإنترفيو، مباشرة للكاميرا: حواجب برتقاني محمّر وباروكة حمرا كيرلي حوالين الوش') },
      { src: 'assets/art/storytel/01-hatter-smile.jpg', caption: t('Makeup: white base, red lines under the eyes and down the nose, crimson lips', 'المكياج: أساس أبيض، وخطوط حمرا تحت العين وعلى الأنف، وشفايف حمرا غامقة') },
      { src: 'assets/art/storytel/03-hatter-full-costume.jpg', caption: t('Costume: top hat with a red satin band, oversized silk bow, tweed coat with brocade cuffs', 'اللبس: قبعة عالية بشريط ساتان أحمر، وفيونكة حرير كبيرة، وبالطو تويد بأساور مطرّزة') },
    ],
  },
  {
    id: 'etisalat',
    title: t('Etisalat — 43rd Cairo International Film Festival', 'اتصالات — مهرجان القاهرة السينمائي الدولي ٤٣'),
    category: t('Commercial · Mad Hatter', 'إعلان · Mad Hatter'),
    description: t('Played the Mad Hatter in an Etisalat commercial celebrating the 43rd Cairo International Film Festival.', 'جسّدت شخصية Mad Hatter في إعلان لشركة اتصالات احتفالًا بالدورة ٤٣ من مهرجان القاهرة السينمائي الدولي.'),
    videoId: 'YYibK2At10Q', url: 'https://www.youtube.com/watch?v=YYibK2At10Q',
    cover: 'assets/art/covers/etisalat.jpg', bg: 'assets/art/storytel/03-hatter-full-costume.jpg',
    videos: [{ src: 'assets/art/ads/etisalat.mp4', poster: 'assets/art/ads/etisalat-poster.jpg', title: t('Etisalat × CIFF 43 commercial — full ad', 'إعلان اتصالات × مهرجان القاهرة ٤٣ — كامل') }],
  },
];
