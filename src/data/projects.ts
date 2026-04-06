export type WorkGalleryItem = {
  id: string;
  src: string;
  alt: string;
  viewport: 'desktop' | 'mobile';
};

export type WorkProject = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  tech: string[];
  challenge: string;
  solution: string;
  features: string[];
  heroMockup: string;
  gallery: WorkGalleryItem[];
  accent: string;
  gridClassName: string;
  github?: string;
  demo?: string;
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'ghayth',
    title: 'GhaythApp',
    tagline: 'Real-time property finance visibility.',
    summary: 'A comprehensive web-based ecosystem designed to replace fragmented manual spreadsheets with unified dashboards for transactions, budgets, and property-level analytics.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    challenge:
      'Management teams were struggling with scattered workflows across disconnected spreadsheets and messaging tools. This fragmentation made financial auditing unreliable and long-term forecasting nearly impossible due to data silos.',
    solution:
      'Engineered a centralized full-stack platform using Next.js and Node.js (Express). The system provides role-based flows and real-time transaction synchronization, allowing for a transparent and efficient decision-making process tied to each specific property unit.',
    features: [
      'Real-time tracking of all transactions with automated status transitions.',
      'Advanced planning and variance tracking per property to optimize expense management.',
      'A transparent, immutable activity log for every financial event to ensure accountability.',
    ],
    heroMockup: '/images/ghaytapp/landing.png',
    gallery: [
      {
        id: 'ghayth-desktop-1',
        src: '/images/ghaytapp/ghaytMain.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-2',
        src: '/images/ghaytapp/homear.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-3',
        src: '/images/ghaytapp/users.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-4',
        src: '/images/ghaytapp/units.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-5',
        src: '/images/ghaytapp/subs.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-6',
        src: '/images/ghaytapp/bank.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-7',
        src: '/images/ghaytapp/expenses.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-desktop-8',
        src: '/images/ghaytapp/recepts.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },

      {
        id: 'ghayth-desktop-9',
        src: '/images/ghaytapp/fullprofilepage.png',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      // {
      //   id: 'ghayth-mobile-1',
      //   src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
      //   alt: 'GhaythApp mobile transaction timeline',
      //   viewport: 'mobile',
      // },
    ],
    accent: 'from-cyan-400/25 to-blue-500/15',
    gridClassName: 'md:col-span-2 md:row-span-2',
  },
  // {
  //   id: 'freelance',
  //   title: 'Freelance Hub',
  //   tagline: 'Faster client-freelancer execution loop.',
  //   summary: "A specialized workspace that integrates project discovery, instant communication, and delivery workflows into a single, high-performance real-time product.",
  //   tech: ["React", "Laravel", "Socket.io", "Node.js", "MySQL", "Tailwind CSS"],
  //   challenge: "In traditional freelance environments, service negotiations and project updates are often delayed by fragmented communication. This leads to inconsistent status visibility and friction during critical delivery phases.",
  //   solution: "I designed an event-driven platform that bridges the gap between client and freelancer. By leveraging Socket.io and Laravel, I implemented an instant messaging system and a milestone-based delivery flow, ensuring the entire lifecycle is tracked in real-time.",
  //   features: [
  //     "Real-time conversation threads with live presence indicators and message status.",
  //     "A structured workflow with clear checkpoints and acceptance states for project handovers.",
  //     "Integrated rating and review modules with dynamic profile trust indicators.",
  //   ],
  //   heroMockup: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=2000&q=80',
  //   gallery: [
  //     {
  //       id: 'freelance-desktop-1',
  //       src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
  //       alt: 'Freelance Hub desktop workspace',
  //       viewport: 'desktop',
  //     },
  //     {
  //       id: 'freelance-mobile-1',
  //       src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  //       alt: 'Freelance Hub mobile chat',
  //       viewport: 'mobile',
  //     },
  //   ],
  //   accent: 'from-purple-400/25 to-pink-500/15',
  //   gridClassName: 'md:col-span-2',
  // }
  {
    id: 'domainhunt',
    title: 'DomainHunt',
    tagline: 'High-fidelity branding engine for premium domain discovery.',
    summary: "A specialized tool for domainers and brand strategists to generate, score, and validate ultra-short, 'Radio-Call' compliant .com names.",
    tech: ['Next.js', 'Llama 3.3', 'Tailwind CSS', 'Supabase', 'Framer Motion'],
    challenge: 'Domain generation is often cluttered with low-quality, multi-word names and phonetic ambiguities that dilute brand value.',
    solution: "Developed a 'Zero-Affix' scoring engine that enforces a strict Two-Word Rule and phonetic filtering to ensure every result is a dictionary-grade, memorable brand.",
    features: [
      'Phonetic Integrity Filter (Banning silent letters and ambiguous spellings)',
      'Contextual Anchor Logic for multi-word niches',
      'Instant DNS validation pipeline with high-velocity decision scoring',
    ],
    heroMockup: '/images/domainhunt/main.png',
    gallery: [
      {
        id: 'domainhunt-desktop-1',
        src: '/images/domainhunt/res.png',
        alt: 'DomainHunt desktop scoring table',
        viewport: 'desktop',
      },
      {
        id: 'domainhunt-desktop-2',
        src: '/images/domainhunt/res2.png',
        alt: 'DomainHunt desktop scoring table',
        viewport: 'desktop',
      },
      // {
      //   id: 'domainhunt-mobile-1',
      //   src: '/images/domainhunt/res_mobile.png',
      //   alt: 'DomainHunt mobile shortlist',
      //   viewport: 'mobile',
      // },
    ],
    accent: 'from-emerald-400/25 to-teal-500/15',
    gridClassName: 'md:col-span-3 md:row-span-1',
    github: 'https://github.com/Yahya-Nayb/DomainHunt',
    demo: 'https://huggingface.co/spaces/yahyanb/domain-hunt',
  },
  {
    id: 'velostream',
    title: 'VeloStream',
    tagline: 'The Ultimate Universal Media Downloader.',
    summary: 'A powerful, all-in-one tool designed to grab high-quality videos and audio from YouTube, Social Media, and other platforms with a single click.',
    tech: ['Next.js', 'yt-dlp', 'Tailwind CSS'],
    challenge: 'Most video downloaders are full of ads, slow, or limited to specific sites, making it hard for users to get their favorite content safely.',
    solution: "Built a clean, lightning-fast interface that handles the complex 'tech stuff' in the background, giving users a simple way to save media in any format.",
    features: ['Download from YouTube, Instagram, TikTok, Twitter, and more', "Simple 'Paste & Go' workflow with no distracting ads", 'Works perfectly on mobile and desktop browsers'],
    heroMockup: '/images/velostream/main.png',
    gallery: [
      {
        id: 'velostream-desktop-1',
        src: '/images/velostream/res.png',
        alt: 'VeloStream desktop processing queue',
        viewport: 'desktop',
      },
      {
        id: 'velostream-mobile-1',
        src: '/images/velostream/velo_mobile1.png',
        alt: 'VeloStream mobile quick actions',
        viewport: 'mobile',
      },
      {
        id: 'velostream-mobile-1',
        src: '/images/velostream/velo_mobile.png',
        alt: 'VeloStream mobile quick actions',
        viewport: 'mobile',
      },
    ],
    accent: 'from-orange-400/25 to-rose-500/15',
    gridClassName: 'md:col-span-2',
    github: 'https://github.com/Yahya-Nayb/VeloSteam',
  },

  {
    id: 'ynscanner',
    title: 'YNScanner',
    tagline: 'High-velocity data extraction and structured insights.',
    summary: 'An automated document processing utility engineered to parse complex unstructured inputs and transform them into verifiable, structured datasets.',
    tech: ['Next.js', 'Tailwind CSS'],
    challenge: 'Fragmented data sources and manual entry workflows resulted in high operational latency and significant data integrity issues.',
    solution: 'Developed a custom scanning engine utilizing optical character recognition (OCR) and pattern matching to extract and categorize entities with high technical precision.',
    features: ['Asynchronous OCR and entity extraction pipeline', 'Automated data categorization with confidence-based validation', 'Optimized low-latency dashboard for real-time processing'],
    heroMockup: '/images/yn-scanner/main.png',
    gallery: [
      {
        id: 'ynscanner-desktop-1',
        src: '/images/yn-scanner/res.png',
        alt: 'YNScanner desktop scanning dashboard',
        viewport: 'desktop',
      },
      // {
      //   id: 'ynscanner-mobile-1',
      //   src: '/images/yn-scanner/yns_mobile.jpg',
      //   alt: 'YNScanner mobile upload interface',
      //   viewport: 'mobile',
      // },
      // {
      //   id: 'ynscanner-mobile-2',
      //   src: '/images/yn-scanner/ynscanner_mobile2.jpg',
      //   alt: 'YNScanner mobile upload interface',
      //   viewport: 'mobile',
      // },
      // {
      //   id: 'ynscanner-mobile-3',
      //   src: '/images/yn-scanner/ynscanner_mobile3.jpg',
      //   alt: 'YNScanner mobile upload interface',
      //   viewport: 'mobile',
      // },
    ],
    accent: 'from-neutral-500/25 to-neutral-700/15',
    gridClassName: 'md:col-span-1',
    github: 'https://github.com/Yahya-Nayb/Qr-Code-Scanner',
    demo: 'https://ynscanner.vercel.app',
  },
];

export const getWorkById = (id: string) => WORK_PROJECTS.find((project) => project.id === id);
