export const profile = {
  name: 'Christian Paul P. Amantiad',
  firstName: 'Christian',
  middleName: 'Paul',
  lastName: 'Amantiad',
  role: 'Developer & Designer',
  location: 'Cagayan de Oro City, Philippines',
  age: 22,
  gradYear: '2025-2026',
  school: 'USTP — Southern Philippines',
  goal: 'Cybersecurity Professional',
  github: 'https://github.com/chanex15',
  githubHandle: 'github.com/chanex15',
  facebook: 'https://www.facebook.com/chris.tian.39265/',
  telegram: 'https://web.telegram.org/a/#5206886094',
  emailUser: 'Christianamantiad122',
  emailDomain: 'gmail.com',
  tagline: 'Building fast, user-centered websites from concept to deployment.',
  heroImage: '/portfolio/me.jpg',
  aboutImage: '/portfolio/me2.jpg',
  resume: '/christian-paul-amantiad-resume.pdf',
}

export const roleTags = ['Web Dev', 'UI / UX','Cybersecurity']

export const aboutParagraphs = [
  "I'm an Information Technology graduate based in Cagayan de Oro City, Philippines. I specialize in building secure, user-centered web applications — from concept to deployment.",
  'I specialize in transforming ideas into live web applications, managing everything from initial design to final deployment. My professional focus lies at the intersection of software development and cybersecurity, where I strive to build applications that are as secure as they are user-friendly.',
]

export const stats = [
  { num: '22', label: 'Years Old' },
  { num: '2025-2026', label: 'IT Graduate' },
  { num: 'CDO', label: 'Philippines' },
]

export type Project = {
  index: string
  name: string
  url: string
  domain: string
  image: string
  blurb: string
  tags: string[]
}

export const projects: Project[] = [
  {
    index: '01',
    name: 'ZirconAI',
    url: 'https://zirconai.pages.dev/',
    domain: 'zirconai.pages.dev',
    image: '/portfolio/zirconai.png',
    blurb:
      'An experimental AI chatbot built with Next.js — featuring natural language processing for intelligent, context-aware responses. A personal exploration of conversational AI and prompt engineering.',
    tags: ['AI', 'Next.js'],
  },
  {
    index: '02',
    name: 'DENR Tools',
    url: 'https://denr-tools.vercel.app/',
    domain: 'denr-tools.vercel.app',
    image: '/portfolio/denr.png',
    blurb:
      'A custom web application developed for the Department of Environment and Natural Resources (DENR) — automating repetitive data tasks to improve operational efficiency and reduce manual processing time.',
    tags: ['Web App', "Gov't"],
  },
  {
    index: '03',
    name: 'ZRC Studio',
    url: 'https://zrcstudio.pages.dev/',
    domain: 'zrcstudio.pages.dev',
    image: '/portfolio/zrc.png',
    blurb:
      'Custom websites for local businesses & photographers. Fast delivery, mobile-ready, no templates.',
    tags: ['HTML/CSS', 'Web Design'],
  },
  {
    index: '04',
    name: 'Motor Shop Inventory',
    url: 'https://motorsample.vercel.app/',
    domain: 'motorsample.vercel.app',
    image: '/portfolio/motorsample.png',
    blurb:
      'Secure inventory management system with authentication for motor shop operations.',
    tags: ['React', 'Auth System'],
  },
  {
    index: '05',
    name: 'VividMe',
    url: 'https://vividme.vercel.app/',
    domain: 'vividme.vercel.app',
    image: '/portfolio/vivid.png',
    blurb:
      'Portfolio & booking platform for a freelance photographer. Packages, gallery, contact form.',
    tags: ['Next.js', 'Portfolio'],
  },
  {
    index: '06',
    name: 'Minneth',
    url: 'https://minneth-web.vercel.app/',
    domain: 'minneth-web.vercel.app',
    image: '/portfolio/Port1.jpeg',
    blurb: 'Social Media Content & Video Editor web portfolio.',
    tags: ['Next.js', 'Web Portfolio'],
  },
]

export const galleryItems = [
  {
    image: '/portfolio/1.jpg',
    num: 'Project 01',
    caption:
      'In my third year of college, I landed my first freelance client, developing a custom webpage for a group of TCM students\u2019 final project.',
  },
  {
    image: '/portfolio/2.jpg',
    num: 'Project 02',
    caption:
      "On that same day, one of my client's classmates referred me to build their Final Performance Task as well.",
  },
  {
    image: '/portfolio/3.jpg',
    num: 'Project 03',
    caption:
      'A long-time friend hired me to build a website for their small cafe, which was a great opportunity to deliver a paid project for a local business.',
  },
  {
    image: '/portfolio/4.jpg',
    num: 'Project 04',
    caption:
      'In my 4th year, I focused on backend architecture for a high-stakes capstone project. I developed a custom POS system and web platform for a local motor shop, using Python for the backend and Flutter for the interface.',
  },
  {
    image: '/portfolio/5.jpg',
    num: 'Project 05',
    caption:
      'To help a photography business grow, I designed and built a sleek webpage focused on professional branding and client acquisition.',
  },
  {
    image: '/portfolio/6.jpg',
    num: 'Project 06',
    caption:
      'While working in the office, I developed DENR-TOOLS, a custom application designed to automate repetitive tasks — significantly increasing workflow efficiency.',
  },
]

export const experience = [
  {
    period: '2024 — Present',
    role: 'Freelance Web Developer',
    company: 'Self-Employed · Remote',
    desc: "Designing and developing custom websites and web applications for clients across various industries. Handling everything from UI/UX design to full deployment — delivering responsive, performant, and visually polished digital experiences tailored to each client's needs.",
    skills: ['HTML / CSS', 'JavaScript', 'React', 'UI / UX Design', 'Vercel'],
  },
  {
    period: '2024 — 2025',
    role: 'Front-End Developer',
    company: 'Personal Projects & Open Source',
    desc: 'Built and shipped multiple personal projects including tools for government data, portfolio sites, and interactive web experiences. Focused on clean code architecture, responsive design, and modern CSS techniques including animations and glassmorphism aesthetics.',
    skills: ['Vanilla JS', 'CSS Animations', 'REST APIs', 'Git / GitHub'],
  },
  {
    period: '2023 — 2024',
    role: 'Web Design Enthusiast',
    company: 'Self-Taught · Cagayan de Oro',
    desc: 'Started the journey with self-directed learning through online resources and hands-on experimentation. Mastered HTML, CSS, and JavaScript fundamentals while developing a strong eye for design — turning passion projects into polished, production-ready websites.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
]

export const competencies = [
  'UI / UX Design',
  'JavaScript',
  'React',
  'Responsive Design',
  'Deployment',
  'REST APIs',
  'Next.js',
  'Authentication',
  'TypeScript',
  'Node.js',
  'Git / GitHub',
  'Cybersecurity',
]

export const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      'HTML / CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Tailwind CSS',
      'Responsive Design',
      'UI / UX Design',
    ],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Python', 'Django', 'REST APIs', 'MySQL', 'PostgreSQL', 'Authentication'],
  },
  {
    label: 'Tools & Other',
    skills: ['Git / GitHub', 'VS Code', 'Figma', 'Linux', 'Vercel', 'Cloudflare','Wireshark','Nmap','Kali-linux'],
  },
]
