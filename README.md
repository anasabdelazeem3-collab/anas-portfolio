# Anas Abdelazeem — Portfolio (ANAS ORIGINALS)

موقع ستاتيك جاهز للرفع على Vercel. مفيهوش build ولا npm install.

## الرفع على Vercel (أسهل طريقة: 3 دقايق)

### الطريقة الأولى: من الكمبيوتر بالـ CLI
1. فك الضغط عن الملف، هيطلعلك فولدر `anas-portfolio`.
2. نزّل Node.js من nodejs.org لو مش موجود عندك.
3. افتح Terminal (أو PowerShell على ويندوز) جوه الفولدر واكتب:
   ```
   npx vercel login
   npx vercel --prod
   ```
4. جاوب على الأسئلة: Set up and deploy → **Y**، اسم المشروع مثلًا `anas-abdelazeem`،
   In which directory is your code → **./**، وأي سؤال عن build أو framework سيبه فاضي (Other / No).
5. هيطلعلك لينك زي `anas-abdelazeem.vercel.app`، وده الموقع.

### الطريقة التانية: GitHub + Vercel (أحسن للتعديلات بعدين)
1. اعمل repo جديد على github.com، ومن صفحته اختار **uploading an existing file** واسحب **محتوى** الفولدر كله (مش الفولدر نفسه).
   ملحوظة: GitHub من المتصفح بيقبل ملفات لحد 25MB، وأكبر فيديو عندنا 12MB، فكله تمام.
2. على vercel.com اختار **Add New → Project → Import** للـ repo ده.
3. Framework Preset = **Other**، وسيب Build Command وOutput Directory فاضيين. واضغط **Deploy**.
4. أي تعديل ترفعه على GitHub بعد كده، Vercel بينشره لوحده.

### دومين خاص (اختياري)
Vercel → المشروع → Settings → Domains → Add، واكتب الدومين، واتبع خطوات الـ DNS.

## محتوى الفولدر
| المسار | إيه هو |
|---|---|
| `index.html` · `styles.css` · `app.js` | الموقع نفسه: التصميم والحركات والصفحات |
| `data/*.js` | كل الكلام والأرقام والكيس ستديز (EN + AR). **ده اللي بتعدّل فيه** |
| `content/*.json` | نسخة JSON من نفس الداتا للقراية أو لأي أداة تانية، وفيها `brand.json` (الألوان والخطوط والحركات والقواعد) |
| `assets/` | الصور والفيديوهات واللوجو |
| `PROMPTS.md` | برومبتات جاهزة للتعديل بأي AI من غير ما التصميم يبوظ |
| `tools/export-content.mjs` | بيطلّع الـ JSON من جديد بعد أي تعديل: `node tools/export-content.mjs .` |
| `vercel.json` | إعدادات الكاش والأمان على Vercel |

## تجربة الموقع على جهازك قبل الرفع
```
npx serve .
```
وافتح اللينك اللي هيظهرلك. (فتح `index.html` بالدبل كليك مش هيشتغل، لأن الموقع بيستخدم ES modules.)

## متابعة الزوار (Analytics)
1. **Vercel Web Analytics:** من Vercel ← المشروع ← Analytics ← Enable. هتشوف عدد الزوار والصفحات اللي اتفتحت والدول والأجهزة وجايين منين. الكود موجود في الموقع ومستني التفعيل بس.
2. **Microsoft Clarity (مجاني):** عشان مدة القعدة على الموقع، ونزلوا لحد فين، والـheatmaps، وتسجيلات الجلسات.
   اعمل مشروع على clarity.microsoft.com، وانسخ الـProject ID، وحطه في `analytics.js` مكان `CLARITY_ID = ''`، وارفع التعديل.
