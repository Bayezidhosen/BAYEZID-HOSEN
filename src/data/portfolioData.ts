import heroProfileImg from '@/src/assets/images/hero_bayezid_profile_1791298560791.jpg';
import projectBanglaNewsImg from '@/src/assets/images/project_banglanews_1791298574717.jpg';
import projectFitLogImg from '@/src/assets/images/project_fitlog_1791298586386.jpg';
import projectDevStackImg from '@/src/assets/images/project_devstack_1791298598217.jpg';
import projectWpBusinessImg from '@/src/assets/images/project_wpbusiness_1791298609273.jpg';
import { Project, Service, Skill, ExperienceItem, Testimonial, TechStackItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bayezid Hosen',
  bengaliName: 'বায়েজিদ হোসেন',
  role: 'Web Developer',
  specialization: 'WordPress & Laravel Developer',
  location: 'Rangpur, Bangladesh',
  email: 'bayezidhosen9080@gmail.com',
  secondaryEmail: 'bayezidhosen@gmail.com',
  githubUrl: 'https://github.com/bayezidhosen',
  linkedinUrl: 'https://linkedin.com/in/bayezidhosen',
  facebookUrl: 'https://facebook.com/bayezidhosen.dev',
  profileImage: heroProfileImg,
  tagline: "I Build Modern Web Experiences.",
  heroSummary: "I'm a Web Developer specializing in WordPress and Laravel. I create fast, scalable, responsive and visually engaging websites that help businesses grow online.",
  aboutDescription: "I'm Bayezid Hosen, a passionate Web Developer from Rangpur, Bangladesh. I mainly work with WordPress and Laravel and enjoy creating modern, responsive and user-friendly web applications.",
  stats: [
    { label: 'Years Experience', value: '3+', numeric: 3, detail: 'Specializing in web engineering' },
    { label: 'Projects Completed', value: '30+', numeric: 30, detail: 'Delivered to clients worldwide' },
    { label: 'Happy Clients', value: '20+', numeric: 20, detail: 'Long-term trusted partnerships' },
    { label: 'Commitment', value: '100%', numeric: 100, detail: 'On-time delivery & clean code' },
  ]
};

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'HTML5',
    category: 'frontend',
    level: 95,
    experience: '3+ Years',
    iconName: 'Code2',
    description: 'Semantic markup, accessibility (a11y), clean DOM structure and SEO optimization.',
  },
  {
    name: 'CSS3',
    category: 'frontend',
    level: 92,
    experience: '3+ Years',
    iconName: 'Palette',
    description: 'Responsive flexbox, grid layouts, animations, transitions and cross-browser consistency.',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 90,
    experience: '3+ Years',
    iconName: 'FileCode2',
    description: 'ES6+ modern syntax, asynchronous programming, DOM manipulation and event-driven architecture.',
  },
  {
    name: 'React',
    category: 'frontend',
    level: 88,
    experience: '2+ Years',
    iconName: 'Boxes',
    description: 'Component lifecycle, hooks, state management, reusable UI kits and performance profiling.',
  },
  {
    name: 'Next.js',
    category: 'frontend',
    level: 85,
    experience: '2+ Years',
    iconName: 'Layers',
    description: 'App router, Server-Side Rendering (SSR), Static Site Generation (SSG) and API routes.',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 94,
    experience: '3+ Years',
    iconName: 'Wind',
    description: 'Utility-first styling, design system tokens, responsive mobile-first views and custom configs.',
  },

  // Backend
  {
    name: 'PHP',
    category: 'backend',
    level: 92,
    experience: '3+ Years',
    iconName: 'Server',
    description: 'OOP PHP, modern PHP 8.x features, custom backend scripts, and server-side logic.',
  },
  {
    name: 'Laravel',
    category: 'backend',
    level: 90,
    experience: '2.5+ Years',
    iconName: 'Cpu',
    description: 'MVC structure, Eloquent ORM, Blade templating, authentication, migrations and REST APIs.',
  },
  {
    name: 'MySQL',
    category: 'backend',
    level: 88,
    experience: '3+ Years',
    iconName: 'Database',
    description: 'Relational database schema design, index optimization, complex joins and data integrity.',
  },

  // CMS & Frameworks
  {
    name: 'WordPress',
    category: 'cms',
    level: 95,
    experience: '3+ Years',
    iconName: 'Globe',
    description: 'Custom theme development, plugin integration, Elementor Pro customization and WooCommerce.',
  },

  // Tools
  {
    name: 'Git',
    category: 'tools',
    level: 90,
    experience: '3+ Years',
    iconName: 'GitBranch',
    description: 'Version control workflows, branching strategies, conflict resolution and cherry-picking.',
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 92,
    experience: '3+ Years',
    iconName: 'Github',
    description: 'Open source collaboration, repository management, GitHub Actions CI/CD and pull requests.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    shortDesc: 'Modern, responsive and high-performance websites.',
    fullDesc: 'End-to-end full stack development crafting blazing fast, secure, and SEO-ready web applications. Whether you need a corporate portal or dynamic SaaS web app, I write clean, maintainable code following modern web standards.',
    icon: 'Monitor',
    deliverables: [
      'Mobile-first responsive architecture',
      'Ultra-fast loading speed (<1s Core Web Vitals)',
      'Cross-browser and mobile device compatibility',
      'Clean, semantic, accessible code standards',
      'Search engine friendly structure (SEO)'
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
  },
  {
    id: 'wp-dev',
    number: '02',
    title: 'WordPress Development',
    shortDesc: 'Custom WordPress websites, themes, customization and optimization.',
    fullDesc: 'Specialized WordPress engineering that goes beyond basic drag-and-drop templates. I build lightweight custom themes, configure WooCommerce stores, create tailored Elementor widgets, and optimize databases for maximum speed.',
    icon: 'Layout',
    deliverables: [
      'Bespoke WordPress theme creation & child themes',
      'Advanced Elementor Pro customization & widgets',
      'WooCommerce online store setup & checkout optimization',
      'Speed optimization (90+ Google PageSpeed score)',
      'Malware protection, automated backups & security hardening'
    ],
    tools: ['WordPress', 'PHP', 'Elementor Pro', 'WooCommerce', 'MySQL']
  },
  {
    id: 'laravel-dev',
    number: '03',
    title: 'Laravel Development',
    shortDesc: 'Scalable Laravel applications with clean architecture and secure backend systems.',
    fullDesc: 'Building robust, enterprise-grade backends using PHP Laravel framework. From custom dashboards and RESTful API endpoints to database migrations and third-party integrations, I ensure bulletproof reliability and speed.',
    icon: 'Server',
    deliverables: [
      'Modular MVC architecture & clean code principles',
      'Secure role-based authentication & authorization',
      'High-performance REST API endpoints for web & mobile apps',
      'Payment gateway integrations (Stripe, SSLCommerz, PayPal)',
      'Efficient MySQL schema design with Eloquent ORM'
    ],
    tools: ['Laravel', 'PHP 8+', 'MySQL', 'REST APIs', 'Blade']
  },
  {
    id: 'ui-ux-impl',
    number: '04',
    title: 'UI/UX Implementation',
    shortDesc: 'Convert modern designs into pixel-perfect responsive websites.',
    fullDesc: 'Turning your Figma, Adobe XD, or sketch concepts into living, breathing web interfaces. I focus on pixel accuracy, fluid spacing, micro-interactions, dark mode support, and seamless tactile touch handling.',
    icon: 'Sparkles',
    deliverables: [
      'Pixel-perfect Figma to HTML / WordPress / React translation',
      'Fluid responsive typography and touch-first ergonomics',
      'Micro-animations & interactive transitions with Framer Motion',
      'Accessible dark mode and high-contrast color palettes',
      'Zero layout shifts (CLS < 0.05)'
    ],
    tools: ['Figma', 'Tailwind CSS', 'Framer Motion', 'React']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'bangla-news-24',
    title: 'Bangla News 24',
    subtitle: 'High-Performance Bilingual News & Editorial Portal',
    description: 'A modern, lightning-fast digital newspaper platform built with Next.js and Tailwind CSS. Features curated news categories, real-time breaking news ticker, custom Bengali typography, and server-side rendering for optimal SEO.',
    fullDescription: 'Bangla News 24 was engineered to solve high traffic spikes during breaking news events. By leveraging Next.js Incremental Static Regeneration (ISR) and optimized asset pipelines, the portal achieves sub-800ms load times and handles thousands of concurrent readers with zero lag.',
    image: projectBanglaNewsImg,
    category: 'Full-Stack',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'News API', 'Node.js'],
    githubUrl: 'https://github.com/bayezidhosen/bangla-news-24',
    liveUrl: 'https://banglanews24-preview.dev',
    highlights: [
      'Server-Side Rendering (SSR) for instant SEO indexing',
      'Bilingual content switching (Bengali / English)',
      'Dark mode reading mode with optimized typography',
      'Responsive editorial grid matching top media outlets'
    ],
    metrics: [
      { label: 'PageSpeed Score', value: '98/100' },
      { label: 'Load Time', value: '0.7s' },
      { label: 'SEO Audit', value: '100%' }
    ]
  },
  {
    id: 'fitlog',
    title: 'FitLog',
    subtitle: 'Daily Workout & Fitness Habit Tracking Dashboard',
    description: 'An intuitive web application for tracking workouts, routines, and physical transformation milestones. Features weekly performance analytics, body metric logs, and a clean, focused dark glassmorphism dashboard.',
    fullDescription: 'FitLog prioritizes distraction-free tracking with zero friction. Built with Next.js, React, and Tailwind CSS, it offers responsive interactive graphs, habit streak monitoring, and seamless mobile responsiveness for gym floor logging.',
    image: projectFitLogImg,
    category: 'Frontend',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Chart.js', 'Framer Motion'],
    githubUrl: 'https://github.com/bayezidhosen/fitlog-app',
    liveUrl: 'https://fitlog-tracker.dev',
    highlights: [
      'Interactive volume & repetition analytics charts',
      'Streak counter and automated milestone celebration',
      'Mobile-optimized touch targets for gym workouts',
      'Offline-capable local state synchronization'
    ],
    metrics: [
      { label: 'Daily Retention', value: '82%' },
      { label: 'FPS on Mobile', value: '60 FPS' },
      { label: 'Bundle Size', value: '54 KB' }
    ]
  },
  {
    id: 'dev-stack-builder',
    title: 'Dev Stack Builder',
    subtitle: 'Architectural Tech Stack Configurator & Generator',
    description: 'An interactive developer utility enabling engineers to assemble full-stack web architectures, compare compatibility matrices, evaluate deployment costs, and export turnkey starter boilerplate scripts.',
    fullDescription: 'Dev Stack Builder streamlines the architectural discovery phase for teams. Users drag and match frontend, backend, database, and devops layers, view real-time compatibility warnings, and generate production config files instantly.',
    image: projectDevStackImg,
    category: 'Tools',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Motion'],
    githubUrl: 'https://github.com/bayezidhosen/dev-stack-builder',
    liveUrl: 'https://devstackbuilder.dev',
    highlights: [
      'Interactive tech layer matrix (Frontend, Backend, DB, Cloud)',
      'Instant CLI generator and package.json export',
      'Community stack templates (Laravel+Vue, Next+Tailwind, MERN)',
      'Real-time bundle and performance impact estimator'
    ],
    metrics: [
      { label: 'Templates Created', value: '1.2k+' },
      { label: 'Export Formats', value: '5 Stacks' },
      { label: 'Lighthouse', value: '99/100' }
    ]
  },
  {
    id: 'wp-business-website',
    title: 'WordPress Business Website',
    subtitle: 'High-Converting Corporate Agency Portal',
    description: 'A bespoke corporate agency presence built on custom WordPress and PHP. Engineered with tailor-made Elementor widgets, dynamic pricing tables, client testimonial carousels, and sub-second load times.',
    fullDescription: 'This enterprise WordPress solution was engineered for high conversion rates. It avoids bloated pre-made templates by utilizing a custom lightweight PHP theme core, optimized database caching, and custom post types for staff, case studies, and dynamic inquiries.',
    image: projectWpBusinessImg,
    category: 'WordPress',
    technologies: ['WordPress', 'PHP', 'Elementor', 'WooCommerce', 'MySQL'],
    githubUrl: 'https://github.com/bayezidhosen/wp-business-corp',
    liveUrl: 'https://wpbusiness-showcase.dev',
    highlights: [
      'Custom Gutenberg & Elementor widgets coded in PHP',
      'Sub-second page load times with aggressive Redis caching',
      'Dynamic multi-step lead capture form with email routing',
      'Bespoke case study portfolio custom post types'
    ],
    metrics: [
      { label: 'GTmetrix Grade', value: 'A (99%)' },
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Database Queries', value: '14 queries/page' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: '2024 – Present',
    year: 'Current',
    title: 'Lead Freelance Web Developer',
    company: 'Independent Contractor / Freelance',
    type: 'Remote',
    location: 'Rangpur, Bangladesh (Global Clients)',
    description: 'Delivering end-to-end web engineering services for small-to-mid businesses, digital agencies, and startups. Leading development of custom WordPress themes, WooCommerce stores, and full-stack Laravel systems.',
    responsibilities: [
      'Developing responsive websites with clean semantic code and mobile-first ergonomics',
      'Building custom WordPress solutions including bespoke themes and tailored plugins',
      'Developing Laravel applications featuring secure authentication and RESTful APIs',
      'API integration with third-party payment gateways, CRM tools, and cloud services',
      'Website optimization resulting in sub-second load times and 90+ PageSpeed scores',
      'Bug fixing, legacy code modernization, and database performance profiling',
      'UI implementation converting Figma mockups into pixel-perfect web reality',
      'Client-focused development with regular milestones, sprint calls, and transparent delivery'
    ],
    technologies: ['WordPress', 'Laravel', 'PHP', 'React', 'Next.js', 'Tailwind CSS', 'MySQL']
  },
  {
    period: '2023 – 2024',
    year: '2023',
    title: 'Web Developer & CMS Specialist',
    company: 'Digital Solutions Lab',
    type: 'Contract / Freelance',
    location: 'Bangladesh',
    description: 'Spearheaded frontend and WordPress delivery for 15+ corporate clients. Focused on responsive design, performance optimization, and cross-browser stability.',
    responsibilities: [
      'Coded responsive layout templates using HTML5, modern CSS, and JavaScript',
      'Created custom Elementor themes and custom post types for client marketing portals',
      'Handled WordPress core and plugin updates, database backups, and security auditing',
      'Integrated dynamic forms, lead magnets, and customer inquiry notification systems',
      'Collaborated closely with designers to achieve pixel-perfect fidelity from Figma'
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'Git']
  },
  {
    period: '2022 – 2023',
    year: '2022',
    title: 'Junior Frontend & PHP Developer',
    company: 'Creative Tech House',
    type: 'Full-time / Apprenticeship',
    location: 'Rangpur, Bangladesh',
    description: 'Built foundational full-stack web development skills working on commercial websites, bug triage, and client maintenance tasks.',
    responsibilities: [
      'Developed responsive UI components using CSS Flexbox/Grid and JavaScript',
      'Assisted in writing custom PHP scripts and MySQL database queries for CRUD features',
      'Performed rigorous cross-device testing across iOS, Android, macOS, and Windows',
      'Refactored legacy CSS and JavaScript to boost mobile page speed'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Git', 'Bootstrap']
  }
];

export const TECH_STACK: TechStackItem[] = [
  { name: 'HTML5', category: 'Frontend', iconName: 'Code', description: 'Semantic, accessible and SEO-first document structure.', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', iconName: 'Palette', description: 'Modern CSS, Grid, Flexbox, custom properties, and animations.', color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', iconName: 'FileCode', description: 'ES6+ modules, async/await, DOM APIs, and dynamic logic.', color: '#F7DF1E' },
  { name: 'React', category: 'Frontend', iconName: 'Atom', description: 'Declarative component architecture, custom hooks, and state.', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', iconName: 'Layers', description: 'Production React framework with SSR, SSG, and API endpoints.', color: '#FFFFFF' },
  { name: 'Tailwind CSS', category: 'Frontend', iconName: 'Wind', description: 'Rapid utility styling system with responsive breakpoints.', color: '#38BDF8' },
  { name: 'PHP', category: 'Backend', iconName: 'Server', description: 'Modern object-oriented PHP 8.x for high-efficiency backends.', color: '#777BB4' },
  { name: 'Laravel', category: 'Backend', iconName: 'Cpu', description: 'Elegant PHP framework for scalable MVC web applications.', color: '#FF2D20' },
  { name: 'WordPress', category: 'CMS', iconName: 'Globe', description: 'Powering custom themes, WooCommerce stores, and CMS solutions.', color: '#21759B' },
  { name: 'MySQL', category: 'Database', iconName: 'Database', description: 'Relational data modeling, indexing, and fast query execution.', color: '#4479A1' },
  { name: 'Git', category: 'Tools', iconName: 'GitBranch', description: 'Distributed version control and branching best practices.', color: '#F05032' },
  { name: 'GitHub', category: 'Tools', iconName: 'Github', description: 'Collaborative code hosting, pull requests, and CI/CD workflows.', color: '#E6EDF3' },
  { name: 'Figma', category: 'Design', iconName: 'Figma', description: 'Inspecting design tokens, typography, and translating UI to code.', color: '#F24E1E' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rahim Chowdhury',
    position: 'Founder & CEO',
    company: 'Apex Digital Media',
    avatarText: 'RC',
    avatarBg: 'from-purple-600 to-indigo-600',
    rating: 5,
    testimonial: 'Bayezid engineered our news and media portal with Next.js and custom WordPress back-office. Page load times dropped by 65%, and our bounce rate improved dramatically. His communication is prompt and professional.',
    projectDelivered: 'Next.js & WordPress Portal'
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    position: 'Product Operations Lead',
    company: 'Elevate Fitness UK',
    avatarText: 'SJ',
    avatarBg: 'from-cyan-600 to-blue-600',
    rating: 5,
    testimonial: 'Working with Bayezid on our fitness app UI and Laravel API was seamless. He translated our design files into a pixel-perfect, responsive web application ahead of schedule. Truly a dependable developer!',
    projectDelivered: 'Laravel REST API & React UI'
  },
  {
    id: 'test-3',
    name: 'Tanvir Ahmed',
    position: 'Managing Director',
    company: 'Green Leaf Agro Trading',
    avatarText: 'TA',
    avatarBg: 'from-emerald-600 to-teal-600',
    rating: 5,
    testimonial: 'Bayezid built our corporate e-commerce presence with WooCommerce and custom PHP extensions. He is reliable, quick to respond, and truly understands business goals, not just code. Outstanding work!',
    projectDelivered: 'Custom WooCommerce Store'
  }
];
