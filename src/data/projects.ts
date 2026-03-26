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
};

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'ghayth',
    title: 'GhaythApp',
    tagline: 'Real-time property finance visibility.',
    summary: 'Unified dashboards for transactions, budgets, and property-level analytics to replace fragmented manual spreadsheets.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    challenge: 'The team had scattered workflows across spreadsheets and messaging tools, making auditing and forecasting unreliable.',
    solution: 'Built a centralized full-stack platform with role-based flows, live transaction updates, and budget timelines tied to each property unit.',
    features: ['Live transaction feed with status transitions', 'Budget planning and variance tracking per property', 'Audit-friendly activity timeline for every financial event'],
    heroMockup: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      {
        id: 'ghayth-desktop-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
        alt: 'GhaythApp desktop analytics dashboard',
        viewport: 'desktop',
      },
      {
        id: 'ghayth-mobile-1',
        src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
        alt: 'GhaythApp mobile transaction timeline',
        viewport: 'mobile',
      },
      {
        id: 'ghayth-desktop-2',
        src: 'https://images.unsplash.com/photo-1551281044-8b6f4f88c4ab?auto=format&fit=crop&w=1600&q=80',
        alt: 'GhaythApp desktop budgeting module',
        viewport: 'desktop',
      },
    ],
    accent: 'from-cyan-400/25 to-blue-500/15',
    gridClassName: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'freelance',
    title: 'Freelance Hub',
    tagline: 'Faster client-freelancer execution loop.',
    summary: 'A trust-first workspace that merges project discovery, chat, and delivery flow into one real-time product.',
    tech: ['React', 'Laravel', 'Socket.io', 'MySQL'],
    challenge: 'Service negotiations and project updates were delayed due to fragmented communication and inconsistent status visibility.',
    solution: 'Designed an event-driven platform with instant messaging, delivery checkpoints, and clear engagement lifecycle states.',
    features: ['Real-time conversation threads with online presence', 'Milestone-based delivery workflow with acceptance states', 'Client + freelancer profile trust indicators'],
    heroMockup: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      {
        id: 'freelance-desktop-1',
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
        alt: 'Freelance Hub desktop workspace',
        viewport: 'desktop',
      },
      {
        id: 'freelance-mobile-1',
        src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
        alt: 'Freelance Hub mobile chat',
        viewport: 'mobile',
      },
    ],
    accent: 'from-purple-400/25 to-pink-500/15',
    gridClassName: 'md:col-span-2',
  },
    {
    id: 'domainhunt',
    title: 'DomainHunt',
    tagline: 'AI-assisted domain opportunity scoring.',
    summary: 'Helps domain investors filter, score, and shortlist names based on trend and linguistic signals.',
    tech: ['Next.js', 'AI APIs', 'Tailwind CSS'],
    challenge: 'Domain discovery was noisy and repetitive, with no reliable way to prioritize high-potential names quickly.',
    solution: 'Implemented a scoring engine with contextual filters and a streamlined shortlist workflow focused on decision velocity.',
    features: ['Search + filter pipeline for large candidate sets', 'AI-assisted scoring and relevance hints', 'One-click shortlist and export flow'],
    heroMockup: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      {
        id: 'domainhunt-desktop-1',
        src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
        alt: 'DomainHunt desktop scoring table',
        viewport: 'desktop',
      },
      {
        id: 'domainhunt-mobile-1',
        src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80',
        alt: 'DomainHunt mobile shortlist',
        viewport: 'mobile',
      },
    ],
    accent: 'from-emerald-400/25 to-teal-500/15',
    gridClassName: 'md:col-span-1 md:row-span-2',

  },
  {
    id: 'velostream',
    title: 'VeloStream',
    tagline: 'High-speed media processing pipeline.',
    summary: 'A compact interface for fast media download and conversion, optimized around asynchronous server workflows.',
    tech: ['Next.js','Tailwind CSS', 'yt-dlp'],
    challenge: 'Users needed a fast and minimal workflow for media fetching without exposing complex backend tooling.',
    solution: 'Created a queue-based processing flow with clear state updates and resilient error handling around external CLI operations.',
    features: ['Asynchronous processing queue with live status', 'Format presets for download and conversion', 'Resilient retry logic for unstable source links'],
    heroMockup: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      {
        id: 'velostream-desktop-1',
        src: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1600&q=80',
        alt: 'VeloStream desktop processing queue',
        viewport: 'desktop',
      },
      {
        id: 'velostream-mobile-1',
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
        alt: 'VeloStream mobile quick actions',
        viewport: 'mobile',
      },
    ],
    accent: 'from-orange-400/25 to-rose-500/15',
    gridClassName: 'md:col-span-1',
  },

  {
    id: 'gescanner',
    title: 'GeScanner',
    tagline: 'AI-powered data extraction & insights.',
    summary: 'A high-velocity utility designed to automate document scanning and convert complex unstructured inputs into actionable, structured data.',
    tech: ['Next.js', 'Tailwind CSS'],
    challenge: 'Users struggled with manual data entry from physical and digital documents, leading to high error rates and wasted operational time.',
    solution: 'Developed an intelligent scanning engine using advanced AI vision models to parse, categorize, and extract key entities with high precision.',
    features: ['Real-time OCR and entity extraction pipeline', 'Automated categorization with AI-driven confidence scoring', 'Export-ready structured outputs for CRM and Database integration'],
    heroMockup: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      {
        id: 'gescanner-desktop-1',
        src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1600&q=80',
        alt: 'GeScanner desktop scanning dashboard',
        viewport: 'desktop',
      },
      {
        id: 'gescanner-mobile-1',
        src: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=900&q=80',
        alt: 'GeScanner mobile upload interface',
        viewport: 'mobile',
      },
      {
        id: 'gescanner-desktop-2',
        src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
        alt: 'GeScanner AI logic visualization',
        viewport: 'desktop',
      },
    ],
    accent: 'from-neutral-500/25 to-neutral-700/15',
    gridClassName: 'md:col-span-1', // يمكنك تغييرها لـ md:col-span-2 إذا أردت إعطاءه مساحة أكبر في الشبكة
  },
];

export const getWorkById = (id: string) => WORK_PROJECTS.find((project) => project.id === id);
