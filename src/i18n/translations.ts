export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      process: "Process",
      contact: "Contact",
      startProject: "Start a Project"
    },
    hero: {
      headline: [
        { text: "One", green: false },
        { text: "strategy.", green: true },
      ],
      subheadline: "Full-spectrum brand building — from the first idea to the last touchpoint.",
      desc: "Not luck. Strategy, positioning, and execution without compromise.",
      btnWork: "See Our Work",
      btnProject: "Start a Project",
      stats: {
        s1: { n: "200+", l: "Brands Built" },
        s2: { n: "95%",  l: "Client Retention" },
        s3: { n: "8+",   l: "Years of Mastery" },
        s4: { n: "500+", l: "Campaigns Delivered" },
      }
    },
    statement: {
      label: "Our Philosophy",
      words: [
        "We don't believe",
        "in logos.",
        "We believe in",
        "market position.",
      ],
      stats: [
        { label: "Founded",    value: "2016" },
        { label: "Projects",   value: "500+" },
        { label: "Countries",  value: "12"   },
      ]
    },
    services: {
      label: "What We Do",
      title: "Everything you need to launch, scale, and lead.",
      subtitle: "Full-spectrum brand building — from the first idea to the last touchpoint.",
      items: [
        {
          id: "01",
          title: "Brand Strategy",
          desc: "Positioning, messaging hierarchy, and competitive differentiation. We map where you stand, where you need to be, and exactly how to get there.",
          tags: ["POSITIONING", "MESSAGING", "MARKET RESEARCH"]
        },
        {
          id: "02",
          title: "Visual Identity",
          desc: "Beyond just a logo. We create comprehensive design systems, typography guidelines, and visual assets that make your brand instantly recognizable.",
          tags: ["LOGO DESIGN", "BRAND GUIDELINES", "TYPOGRAPHY"]
        },
        {
          id: "03",
          title: "Social Media & Content",
          desc: "Engaging campaigns and continuous content creation that turns followers into loyal customers and amplifies your voice across all platforms.",
          tags: ["CONTENT CREATION", "CAMPAIGN MANAGEMENT", "COMMUNITY"]
        },
        {
          id: "04",
          title: "Digital Performance",
          desc: "Data-driven SEO, SEM, and performance marketing designed to maximize ROI, capture high-intent traffic, and scale your digital growth.",
          tags: ["SEO", "PAID ADS", "CONVERSION OPTIMIZATION"]
        }
      ]
    },
    portfolio: {
      label: "Featured Work",
      title: "Proof is in the portfolio.",
      projects: [
        {
          id: "01",
          client: "Aura Tech",
          category: "Tech / Brand Identity",
          title: "Redefining the future of cloud computing.",
        },
        {
          id: "02",
          client: "Vibe Studios",
          category: "Entertainment / Web Design",
          title: "A digital experience that moves to the beat.",
        },
        {
          id: "03",
          client: "Lumina Beauty",
          category: "E-Commerce / Performance Marketing",
          title: "Scaling a global beauty empire.",
        }
      ]
    },
    process: {
      label: "Our Process",
      title: "Methodical. Transparent. Relentless.",
      steps: [
        {
          id: "01",
          title: "Discovery & Audit",
          desc: "We dive deep into your brand, competitors, and market to uncover hidden opportunities."
        },
        {
          id: "02",
          title: "Strategy & Positioning",
          desc: "Crafting the blueprint. We define your unique value and exactly how to communicate it."
        },
        {
          id: "03",
          title: "Execution & Design",
          desc: "Bringing the strategy to life through world-class design, copywriting, and development."
        },
        {
          id: "04",
          title: "Launch & Scale",
          desc: "Deploying the assets, running the campaigns, and optimizing relentlessly for growth."
        }
      ]
    },
    results: {
      label: "Real Results",
      title: "Numbers that don't lie.",
      metrics: [
        { value: "350%",  label: "Average Revenue Growth",   desc: "across all client engagements" },
        { value: "220%",  label: "Lead Generation Increase",  desc: "measured in first 90 days" },
        { value: "95%",   label: "Client Retention Rate",     desc: "year over year" },
        { value: "200+",  label: "Brands Transformed",        desc: "across 12 countries" },
      ]
    },
    testimonials: {
      label: "What Clients Say",
      title: "Words from the results.",
      reviews: [
        { text: "BrandMe didn't just design a logo. They repositioned our entire business.", author: "Ahmed K., CEO MediCore" },
        { text: "Revenue grew 350% in 8 months. Strategy is everything.", author: "Laila R., Founder LuxHaven" },
        { text: "Finally an agency that understands brand isn't decoration — it's business.", author: "Tarek M., MD TechVault" },
        { text: "Our Instagram went from 3K to 90K in 6 months. The strategy was surgical.", author: "Nour S., Owner Brown Bag" },
        { text: "They think like CMOs, not designers. That's the difference.", author: "Sara A., Director Glow Studio" }
      ]
    },
    contact: {
      label: "Let's Talk",
      title: "Ready to dominate your market?",
      name: "Your Name",
      email: "Your Email",
      budget: "Project Budget",
      message: "Tell us about your goals...",
      submit: "Send Message",
      location: "Location",
      locValue: "Cairo, Egypt\nGlobal Reach",
      social: "Social",
      emailTitle: "Email",
      emailValue: "hello@brandme.agency"
    },
    footer: {
      rights: "© 2026 BrandMe Agency. All rights reserved.",
      backToTop: "Back to Top"
    }
  },
  ar: {
    nav: {
      work: "أعمالنا",
      services: "خدماتنا",
      process: "المنهجية",
      contact: "تواصل معنا",
      startProject: "ابدأ مشروعك"
    },
    hero: {
      headline: [
        { text: "إحنا", green: false },
        { text: "مش", green: false },
        { text: "بنعمل", green: false },
        { text: "براندات.", green: false },
        { text: "إحنا بنصنع", green: true },
        { text: "قادة.", green: false },
      ],
      subheadline: "بناء العلامات التجارية الشامل — من الفكرة الأولى حتى نقطة التماس الأخيرة.",
      desc: "مش حظ. دي استراتيجية وتموضع وتنفيذ بلا أي تنازل.",
      btnWork: "شاهد أعمالنا",
      btnProject: "ابدأ مشروعك",
      stats: {
        s1: { n: "+200", l: "علامة تجارية" },
        s2: { n: "%95",  l: "ولاء العملاء" },
        s3: { n: "+8",   l: "سنوات خبرة" },
        s4: { n: "+500", l: "حملة ناجحة" },
      }
    },
    statement: {
      label: "فلسفتنا",
      words: [
        "نحن لا نؤمن",
        "بالشعارات الجمالية.",
        "نحن نؤمن",
        "بالمكانة السوقية.",
      ],
      stats: [
        { label: "تأسست في",    value: "2016" },
        { label: "مشاريع",   value: "+500" },
        { label: "دولة",  value: "12"   },
      ]
    },
    services: {
      label: "ماذا نقدم",
      title: "كل ما تحتاجه للإنطلاق، التوسع، والريادة.",
      subtitle: "بناء العلامات التجارية الشامل — من الفكرة الأولى حتى نقطة التماس الأخيرة.",
      items: [
        {
          id: "01",
          title: "استراتيجية العلامة التجارية",
          desc: "تحديد التموضع، هيكلة الرسالة، والتمايز التنافسي. نرسم خريطة لمكانك الحالي، ومكانتك المستهدفة، وكيفية الوصول إليها بدقة.",
          tags: ["التموضع", "الرسالة الإعلامية", "أبحاث السوق"]
        },
        {
          id: "02",
          title: "الهوية البصرية",
          desc: "أبعد من مجرد شعار. نحن نبتكر أنظمة تصميم متكاملة، وإرشادات للخطوط، وأصول بصرية تجعل علامتك التجارية مميزة في لمح البصر.",
          tags: ["تصميم الشعار", "دليل الهوية", "الخطوط"]
        },
        {
          id: "03",
          title: "السوشيال ميديا والمحتوى",
          desc: "حملات تفاعلية وصناعة محتوى مستمر يحول المتابعين إلى عملاء مخلصين، ويضخم صوت علامتك التجارية عبر كل المنصات.",
          tags: ["صناعة المحتوى", "إدارة الحملات", "المجتمع الرقمي"]
        },
        {
          id: "04",
          title: "الأداء الرقمي",
          desc: "تحسين محركات البحث والتسويق بالأداء المعتمد على البيانات، مصمم لزيادة العائد على الاستثمار، وجذب الزيارات القيمة، وتوسيع نموك الرقمي.",
          tags: ["السيو SEO", "الإعلانات الممولة", "تحسين التحويلات"]
        }
      ]
    },
    portfolio: {
      label: "أبرز أعمالنا",
      title: "أعمالنا تتحدث عن نفسها.",
      projects: [
        {
          id: "01",
          client: "أورا تك",
          category: "تكنولوجيا / هوية بصرية",
          title: "إعادة تعريف مستقبل الحوسبة السحابية.",
        },
        {
          id: "02",
          client: "فايب ستوديوز",
          category: "ترفيه / تصميم ويب",
          title: "تجربة رقمية تنبض بالحياة والإيقاع.",
        },
        {
          id: "03",
          client: "لومينا بيوتي",
          category: "تجارة إلكترونية / تسويق رقمي",
          title: "توسيع إمبراطورية تجميل عالمية.",
        }
      ]
    },
    process: {
      label: "منهجيتنا",
      title: "منهجية دقيقة. شفافة. ولا تتوقف.",
      steps: [
        {
          id: "01",
          title: "الاستكشاف والتدقيق",
          desc: "نتعمق في علامتك التجارية، ومنافسيك، والسوق لاكتشاف الفرص الخفية."
        },
        {
          id: "02",
          title: "الاستراتيجية والتموضع",
          desc: "صياغة المخطط الأساسي. نحدد قيمتك الفريدة وكيفية إيصالها للجمهور بدقة."
        },
        {
          id: "03",
          title: "التنفيذ والتصميم",
          desc: "نحوّل الاستراتيجية إلى واقع ملموس من خلال تصميم عالمي، وكتابة إبداعية، وتطوير برمجي متقدم."
        },
        {
          id: "04",
          title: "الإطلاق والتوسع",
          desc: "نطلق الأصول، وندير الحملات، ونحسن الأداء بشكل مستمر لضمان أقصى نمو ممكن."
        }
      ]
    },
    results: {
      label: "نتائج حقيقية",
      title: "أرقام لا تكذب.",
      metrics: [
        { value: "%350",  label: "متوسط نمو الإيرادات",   desc: "عبر جميع تعاقدات العملاء" },
        { value: "%220",  label: "زيادة في توليد العملاء المحتملين",  desc: "تُقاس في أول 90 يوم" },
        { value: "%95",   label: "معدل الاحتفاظ بالعملاء",     desc: "على أساس سنوي" },
        { value: "+200",  label: "علامة تجارية تم تحويلها",        desc: "عبر 12 دولة" },
      ]
    },
    testimonials: {
      label: "ماذا يقول عملاؤنا",
      title: "كلمات من وحي النتائج.",
      reviews: [
        { text: "براند مي مش بس صمموا لوجو. هم أعادوا تموضع البيزنس بتاعنا كله.", author: "أحمد ك.، المدير التنفيذي لـ MediCore" },
        { text: "الأرباح زادت بنسبة 350٪ في 8 شهور. الاستراتيجية هي كل حاجة.", author: "ليلى ر.، مؤسسة LuxHaven" },
        { text: "أخيراً وكالة فاهمة إن البراند مش مجرد ديكور — ده بيزنس.", author: "طارق م.، المدير العام لـ TechVault" },
        { text: "الانستجرام بتاعنا نط من 3 آلاف لـ 90 ألف متابع في 6 شهور. الاستراتيجية كانت جراحية.", author: "نور س.، صاحبة Brown Bag" },
        { text: "تفكيرهم تفكير مديري تسويق مش مجرد مصممين. وده هو الفرق.", author: "سارة أ.، مديرة Glow Studio" }
      ]
    },
    contact: {
      label: "لنتحدث معاً",
      title: "جاهز تكتسح السوق بتاعك؟",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      budget: "ميزانية المشروع",
      message: "احكيلنا عن أهدافك...",
      submit: "إرسال الرسالة",
      location: "الموقع",
      locValue: "القاهرة، مصر\nنطاق عالمي",
      social: "السوشيال ميديا",
      emailTitle: "البريد الإلكتروني",
      emailValue: "hello@brandme.agency"
    },
    footer: {
      rights: "© 2026 وكالة براند مي. جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى"
    }
  }
};
