import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const projects = [
    {
      id: "hwasi",
      title: "hwasi",
      titleEn: "Luxury AI E-Commerce",
      description: "تطبيق متجر إلكتروني فاخر يقدم تجربة تسوق أسطورية. يتميز بشات ذكاء اصطناعي (AI) يتيح للمستخدمين تجربة الملابس افتراضياً قبل الشراء. مبني بـ Flutter بتصميم Legendary UI وباك اند قوي باستخدام Node.js و Supabase.",
      tags: ["Flutter", "AI Try-On", "Node.js", "Supabase", "Luxury UI"],
      iconClass: "icon-hwasi",
      themeClass: "card-hwasi",
      images: ["/hwasi-1.jpg", "/hwasi-2.jpg", "/hwasi-3.jpg", "/hwasi-4.jpg", "/hwasi-5.jpg"],
      icon: (
        <img src="/hwasi-logo.png" alt="hwasi Logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} />
      ),
      reverse: false,
    },
    {
      id: "iwaa",
      title: "إيواء - Iwaa",
      titleEn: "Mental Health Platform",
      description: "منصة عربية متكاملة للصحة النفسية، توفر بيئة رقمية آمنة تربط المستخدمين بنخبة من المتخصصين النفسيين. يتيح النظام تجربة علاجية متكاملة بدءاً من حجز المواعيد، مروراً بالمحادثات الفورية (Chat) المزودة بستيكرز مخصصة، وصولاً إلى جلسات الفيديو المباشرة بجودة عالية. تتميز المنصة بوجود ثلاث لوحات تحكم مستقلة (للإدارة، للمتخصصين، وللمستخدمين) لإدارة الجلسات، الكورسات التعليمية، والمدفوعات بدقة متناهية. تم بناء المشروع بأحدث التقنيات لضمان السرعة والأمان (Next.js 16, Express, Supabase).",
      tags: ["Next.js 16", "Express", "Supabase", "Video Sessions", "Mental Health"],
      iconClass: "icon-iwaa",
      themeClass: "card-iwaa",
      images: ["/iwaa-1.jpg", "/iwaa-2.jpg", "/iwaa-3.jpg", "/iwaa-4.jpg", "/iwaa-5.jpg", "/iwaa-6.jpg", "/iwaa-7.jpg", "/iwaa-8.jpg", "/iwaa-9.jpg", "/iwaa-10.jpg"],
      icon: (
        <img src="/iwaa-logo.png" alt="Iwaa Logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} />
      ),
      reverse: true,
      link: "https://iwaaforyou.com"
    },
    {
      id: "tv",
      title: "7esen TV",
      titleEn: "Live Sports & Streaming",
      description: "تطبيق مخصص لمتابعة البث المباشر للمباريات والمحتوى الرياضي، بتصميم عصري وسهل الاستخدام. يدعم مشاهدة بجودة عالية مع تنظيم القنوات حسب التصنيفات، وتحديثات فورية للمحتوى. الباك اند مبني على Strapi وإدارة الروابط عبر Node.js.",
      tags: ["Flutter", "Strapi", "Node.js", "Live Stream", "HLS"],
      iconClass: "icon-tv",
      themeClass: "card-tv",
      images: ["/tv-1.jpg", "/tv-2.jpg", "/tv-3.jpg", "/tv-4.jpg", "/tv-5.jpg"],
      icon: (
        <img src="/tv-logo.jpg" alt="7eSen TV Logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} />
      ),
      reverse: false,
    },
    {
      id: "vpn",
      title: "WaledNet VPN",
      titleEn: "Secure & Fast Connection",
      description: "تطبيق VPN مطوَّر بـ Flutter يعمل بتقنية V2Ray ويدعم SNI لتجاوز الحجب وتأمين الاتصال. يحتوي على نظام إدارة بروفايلات، فحص سرعة مدمج، تحديث تلقائي، وإشعارات Firebase. تصميم عصري مع دعم الوضع الليلي.",
      tags: ["Flutter", "V2Ray", "Firebase", "SNI", "Dark Mode"],
      iconClass: "icon-vpn",
      themeClass: "card-vpn",
      images: ["/vpn-1.jpg", "/vpn-2.jpg", "/vpn-3.jpg", "/vpn-4.jpg", "/vpn-5.jpg"],
      icon: (
        <img src="/vpn-logo.jpg" alt="WaledNet VPN Logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} />
      ),
      reverse: true,
    },
    {
      id: "quiz",
      title: "كازينو الألعاب",
      titleEn: "Quiz & Trivia Game",
      description: "تطبيق ترفيهي مبني بـ Flutter، يتيح إنشاء مسابقات بين 1 إلى 10 لاعبين مع حفظ أسمائهم. يدعم معلومات عامة، أفلام، موسيقى، ألغاز، وكلمات. نظام بطاقات صفراء وحمراء لخصم النقاط مع ترتيب النتائج النهائية.",
      tags: ["Flutter", "Arabic", "Multiplayer", "Offline", "10 Players"],
      iconClass: "icon-quiz",
      themeClass: "card-quiz",
      images: ["/quiz-1.jpg", "/quiz-2.jpg", "/quiz-3.jpg", "/quiz-4.jpg", "/quiz-5.jpg", "/quiz-6.jpg", "/quiz-7.jpg", "/quiz-8.jpg"],
      icon: (
        <img src="/quiz-logo.png" alt="كازينو الألعاب Logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}} />
      ),
      reverse: false,
    },
  ];

  return (
    <div className="wrap">
      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          AVAILABLE FOR WORK
        </div>
        <h1 className="hero-brand">7𝖊$𝖊𝒏</h1>
        <p className="hero-sub">APPS · تطبيقات</p>
        <div className="hero-line"></div>
        <div className="hero-desc-container">
          <p className="hero-desc">
            أنا حسين، مطور تطبيقات مصري (Mobile App Developer)، متخصص في بناء حلول برمجية متكاملة للموبايل والويب باستخدام تقنيات حديثة مثل <span className="hero-highlight">Flutter</span>، <span className="hero-highlight">Next.js</span>، و <span className="hero-highlight">Node.js</span>.
          </p>
          <p className="hero-desc">
            خلال مسيرتي، قمت بتطوير مشاريع متنوعة تجمع بين الأداء العالي وتجربة المستخدم السلسة، بدءاً من منصات متكاملة مثل (<span className="hero-highlight">Iwaa</span>)، وصولاً إلى تطبيقات البث والأدوات التقنية. وإلى جانب الجانب التقني، أنا مؤسس وأدير علامتي التجارية الخاصة (<span className="hero-highlight">hwasi</span>)، مما يمنحني عقلية تجارية (Business Mindset) تتيح لي فهم متطلبات السوق بدقة، وتحويل الأفكار إلى منتجات تقنية ناجحة وقابلة للتوسع.
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="stats">
        <div className="stat-item">
          <div className="stat-num">15+</div>
          <div className="stat-label">تطبيق وموقع</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">Flutter & Next.js</div>
          <div className="stat-label">التقنيات الأساسية</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">AR</div>
          <div className="stat-label">دعم كامل للعربية</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">∞</div>
          <div className="stat-label">مشاريع قادمة</div>
        </div>
      </div>

      {/* ── Section header ── */}
      <div className="sec-head">
        <div className="sec-line"></div>
        <span className="sec-label">MY PROJECTS</span>
        <div className="sec-line"></div>
      </div>

      {/* ── Projects List ── */}
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {/* ── Footer ── */}
      <div className="footer">
        <div className="footer-brand">7𝖊$𝖊𝒏</div>
        <p className="footer-copy">جميع الحقوق محفوظة · Built with Next.js, Flutter &amp; ❤</p>
      </div>
    </div>
  );
}
