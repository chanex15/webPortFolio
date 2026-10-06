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
  goal: 'Web dev & IT support',
  github: 'https://github.com/chanex15',
  githubHandle: 'github.com/chanex15',
  facebook: 'https://www.facebook.com/chris.tian.39265/',
  linkedin: 'https://www.linkedin.com/in/christian-paul-amantiad-60107b36b/',
  jobstreet: 'https://ph.jobstreet.com/profiles/christianpaul-amantiad-dcr0zJ4NrW',
  telegram: 'https://web.telegram.org/a/#5206886094',
  emailUser: 'Christianamantiad122',
  emailDomain: 'gmail.com',
  tagline: 'Building fast, user-centered websites from concept to deployment.',
  heroImage: '/portfolio/me2.jpg',
  aboutImage: '/portfolio/me2.jpg',
  resume: '/christian-paul-amantiad-resume.pdf',
}

export const roleTags = ['Web Dev', 'UI / UX', 'Programmer', 'Freelancer']

export const aboutParagraphs = [
  "I'm an Information Technology graduate and full-stack web developer based in Cagayan de Oro City, Philippines. I design, build, and deploy complete web applications — owning each project end to end, from first concept to a fast, polished, production-ready site.",
  'My work sits at the intersection of software engineering and cybersecurity. I build interfaces that are intuitive and responsive, then back them with secure, well-structured code — so everything I ship is as reliable and safe as it is easy to use.',
]

export const stats = [
  { num: '22', label: 'Years Old' },
  { num: '2022-2026', label: 'IT Graduate' },
  { num: 'CDO', label: 'Philippines' },
]

export type ProjectCategory = 'pure-code' | 'wordpress' | 'system-admin'

export type Project = {
  index: string
  name: string
  category: ProjectCategory
  url: string
  domain: string
  image: string
  blurb: string
  tags: string[]
}

export const projects: Project[] = [
     {
    index: '01',
    name: 'Vitalo',
    category: 'pure-code',
    url: 'https://vital-o.vercel.app/',
    domain: 'vital-o.vercel.app',
    image: '/portfolio/vitalo.jpg',
    blurb: 'Adaptive training plans, nutrition and real Filipino coaches in one calm dashboard.',
    tags: ['TypeScript', 'Next.js', 'Fitness', 'Habit Tracker'],
  },
  {
    index: '02',
    name: 'Northview Philippines',
    category: 'pure-code',
    url: 'https://northview-ph.vercel.app/',
    domain: 'northview-ph.vercel.app',
    image: '/portfolio/northview.jpg',
    blurb: 'Luxury island villas, beach homes and mountain stays managed across the Philippines.',
    tags: ['TypeScript', 'Next.js', 'Real Estate', 'Property Management'],
  },
  {
    index: '03',
    name: 'LAKBAY',
    category: 'pure-code',
    url: 'https://lakbay-pinas.vercel.app/',
    domain: 'lakbay-pinas.vercel.app',
    image: '/portfolio/lakbay.jpg',
    blurb: 'Private island journeys — 32 hand-scouted Philippine sanctuaries, from Palawan to Batanes.',
    tags: ['TypeScript', 'Next.js', 'Travel', 'Booking'],
  },
  {
    index: '04',
    name: 'Astral',
    category: 'pure-code',
    url: 'https://astral-int.vercel.app/',
    domain: 'astral-int.vercel.app',
    image: '/portfolio/astral.jpg',
    blurb: 'The intelligent workspace that helps teams cut through complexity and ship with confidence.',
    tags: ['TypeScript', 'Next.js', 'SaaS', 'Productivity'],
  },
  {
    index: '05',
    name: 'LeonHome',
    category: 'pure-code',
    url: 'https://leonhome.vercel.app/',
    domain: 'leonhome.vercel.app',
    image: '/portfolio/leon.jpg',
    blurb: 'Luxury smart-home architecture firm with Lutron, Crestron, Tesla and Bang & Olufsen integration.',
    tags: ['TypeScript', 'Next.js', 'Architecture', 'Smart Home'],
  },
  {
    index: '06',
    name: 'Nebula Store',
    category: 'pure-code',
    url: 'https://nebulastores.vercel.app/',
    domain: 'nebulastores.vercel.app',
    image: '/portfolio/nebula.jpg',
    blurb: 'Game store built for Nebula Deck & PC.',
    tags: ['TypeScript', 'Next.js', 'E-commerce', 'Gaming'],
  },
  {
    index: '07',
    name: 'Medinovas',
    category: 'pure-code',
    url: 'https://medinovas.vercel.app/',
    domain: 'medinovas.vercel.app',
    image: '/portfolio/medinova.jpg',
    blurb: 'MediNova Pharmaceuticals is committed to delivering high-quality, affordable medicines that help Filipino families live healthier lives.', 
    tags: ['TypeScript', 'Next.js', 'Web App'],
  },
  {
    index: '08',
    name: 'Geoffrey Designs',
    category: 'pure-code',
    url: 'https://geoffreys.vercel.app/',
    domain: 'geoffreys.vercel.app',
    image: '/portfolio/geoffrey.jpg',
    blurb: 'Timeless, climate-smart interiors for Filipino homes, resorts and workplaces.',
    tags: ['TypeScript', 'Next.js', 'Interior Design', 'Portfolio'],
  },
  {
    index: '09',
    name: 'ZirconAI',
    category: 'system-admin',
    url: 'https://zirconai.vercel.app/',
    domain: 'zirconai.vercel.app',
    image: '/portfolio/zirconai.png',
    blurb:
      'An experimental AI chatbot built with Next.js — featuring natural language processing for intelligent, context-aware responses. A personal exploration of conversational AI and prompt engineering.',
    tags: ['TypeScript', 'Next.js', 'AI', 'API Integration'],
  },
  {
    index: '10',
    name: 'DENR Tools',
    category: 'system-admin',
    url: 'https://denr-tools.vercel.app/',
    domain: 'denr-tools.vercel.app',
    image: '/portfolio/denr.png',
    blurb:
      'A custom web application developed for the Department of Environment and Natural Resources (DENR) — automating repetitive data tasks to improve operational efficiency and reduce manual processing time.',
    tags: ['TypeScript', 'Next.js', 'PDF Automation', "Gov't"],
  },
   {
    index: '11',
    name: 'zrcstudio',
    category: 'pure-code',
    url: 'https://zrcstudio.vercel.app/',
    domain: 'zrcstudio.vercel.app',
    image: '/portfolio/zrcstudio.png',
    blurb: 'ZIRCON STUDIO creates films and photographs for portraits, celebrations, and the people at the heart of them.',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS'],
  },
    {
    index: '12',
    name: 'cloud-gallery',
    category: 'pure-code',
    url: 'https://cloud-gallery-five.vercel.app/',
    domain: 'cloud-gallery-five.vercel.app',
    image: '/portfolio/cloud.png',
    blurb: 'ZR — Images in Orbit, a portrait, birthday, wedding, fashion and event photography showcase',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS'],
},
  {
    index: '13',
    name: 'Minneth',
    category: 'pure-code',
    url: 'https://minneth-web.vercel.app/',
    domain: 'minneth-web.vercel.app',
    image: '/portfolio/Port1.jpg',
    blurb: 'Social Media Content & Video Editor web portfolio.',
    tags: ['TypeScript', 'Next.js', 'Web Portfolio'],
  },
  {
    index: '14',
    name: 'Schedlify',
    category: 'system-admin',
    url: 'https://schedlify.vercel.app/',
    domain: 'schedlify.vercel.app',
    image: '/portfolio/schedlify.png',
    blurb: 'Map out your Monday-to-Sunday, dress it up in a look you actually like, and export it as an image or PDF. Built for students, planners, and anyone who lives by their timetable.',
    tags: ['TypeScript', 'Next.js', 'Scheduler'],
  },
  {
    index: '15',
    name: 'Courier',
    category: 'system-admin',
    url: 'https://zcourier.vercel.app/',
    domain: 'zcourier.vercel.app',
    image: '/portfolio/courier.jpeg',
    blurb: 'A delightfully fast, end-to-end encrypted messenger for the people you actually want to talk to. Works on Android.',
    tags: ['Dart', 'Flutter', 'Firebase', 'Supabase'],
  },
  {
    index: '16',
    name: 'Who is Zircon App',
    category: 'system-admin',
    url: 'https://who-is-zircon-apk.vercel.app/',
    domain: 'who-is-zircon-apk.vercel.app/',
    image: '/portfolio/whois.jpeg',
    blurb: 'A native Android shell that mirrors every edit you push to whoiszircon.vercel.app. Pull-to-refresh, status-bar tinting, splash, offline page all themed to match the live site.',
    tags: ['Kotlin', 'WebView', 'Android'],
  },
   {
    index: '17',
    name: 'Motor Shop Inventory',
    category: 'system-admin',
    url: 'https://motorsample.vercel.app/',
    domain: 'motorsample.vercel.app',
    image: '/portfolio/motorsample.png',
    blurb:
      'Secure inventory management system with authentication for motor shop operations.',
    tags: ['TypeScript', 'React', 'Supabase', 'Auth System'],
  },
  {
    index: '18',
    name: 'slidephoto',
    category: 'pure-code',
    url: 'https://slidephoto.vercel.app/',
    domain: 'slidephoto.vercel.app',
    image: '/portfolio/slide.png',
    blurb: 'A visual storytelling site capturing people, light, and moments through portraits, weddings, and events',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS'],
},
    {
    index: '19',
    name: 'VividMe',
    category: 'pure-code',
    url: 'https://vividme.vercel.app/',
    domain: 'vividme.vercel.app',
    image: '/portfolio/vivid.png',
    blurb:
      'Portfolio & booking platform for a freelance photographer. Packages, gallery, contact form.',
    tags: ['TypeScript', 'Next.js', 'Portfolio'],
  },

  {
    index: '20',
    name: 'circle-gallery',
    category: 'pure-code',
    url: 'https://circle-gallery.vercel.app/',
    domain: 'circle-gallery.vercel.app',
    image: '/portfolio/circle.png',
    blurb: 'ZR Studio — a photography portfolio covering portraits, birthdays, weddings, fashion, and events',
    tags: ['TypeScript', 'Next.js', 'TailwindCSS'],
},  {
    index: '21',
    name: 'LAKBAY (WordPress)',
    category: 'wordpress',
    url: 'https://lakbay.xo.je/',
    domain: 'lakbay.xo.je',
    image: '/portfolio/lakbay-Wordpress.jpeg',
    blurb:
      'The WordPress build of LAKBAY — a PHP-powered version of the Philippine island travel experience, managed end to end through the WordPress dashboard.',
    tags: ['PHP', 'WordPress', 'Elementor', 'MySQL'],
  },
  {
    index: '22',
    name: 'Estoria',
    category: 'wordpress',
    url: 'https://estoria.xo.je/',
    domain: 'estoria.xo.je',
    image: '/portfolio/estoria-Wordpress.jpeg',
    blurb:
      'A polished business and brand presence built on WordPress — responsive design with every page managed through the WP dashboard.',
    tags: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    index: '23',
    name: 'Buylix',
    category: 'wordpress',
    url: 'https://buylix-a.gt.tc/',
    domain: 'buylix-a.gt.tc',
    image: '/portfolio/buylix-wordpress.jpeg',
    blurb:
      'A straightforward WordPress business site — clean structure, fast pages, and content that can be updated right from the WP dashboard.',
    tags: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    index: '24',
    name: 'Manta Bag',
    category: 'wordpress',
    url: 'https://manta-bag.ct.ws/',
    domain: 'manta-bag.ct.ws',
    image: '/portfolio/Manta.jpeg',
    blurb:
      'A WordPress build for Manta Bag — a clean, product-focused storefront presence for the bag brand, managed end to end through the WP dashboard.',
    tags: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    index: '25',
    name: 'Barber CDO',
    category: 'wordpress',
    url: 'https://barbercdo.free.je/',
    domain: 'barbercdo.free.je',
    image: '/portfolio/Barber.jpeg',
    blurb:
      'A WordPress site for a Cagayan de Oro barbershop — services, gallery, and shop info presented in a sharp, modern layout, all editable from the WP dashboard.',
    tags: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    index: '26',
    name: 'Calle Vintage',
    category: 'wordpress',
    url: 'https://calle-vintage.site.je/',
    domain: 'calle-vintage.site.je',
    image: '/portfolio/calle.jpeg',
    blurb:
      'A WordPress site for Calle Vintage — a vintage-inspired shop presence with a curated, old-soul aesthetic, built and maintained entirely on WordPress.',
    tags: ['PHP', 'WordPress', 'MySQL'],
  },
  {
    index: '27',
    name: 'Panaderya CDO',
    category: 'wordpress',
    url: 'https://panaderyacdo.infinityfree.io/',
    domain: 'panaderyacdo.infinityfree.io',
    image: '/portfolio/panaderya.jpeg',
    blurb:
      'A WordPress site for a local Cagayan de Oro panaderya (bakery) — warm, approachable pages showcasing breads and products, updated right from the WP dashboard.',
    tags: ['PHP', 'WordPress', 'MySQL'],
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
    period: 'March 2026',
    role: 'Project Debugging & Code Support',
    company: '2nd-Year IT Students · Bugo, Cagayan de Oro',
    desc: 'Helped a group of 2nd-year IT students from Bugo get their school POS project back on track — a cashier-style system for handling payments and balances. Traced and fixed the JavaScript and Python errors blocking their build, resolved the Firebase database issues, and walked them through what caused each problem.',
    skills: ['Debugging', 'JavaScript', 'Python', 'Firebase'],
  },
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
    skills: ['Node.js', 'PHP', 'Laravel', 'Python', 'Django', 'REST APIs', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Authentication'],
  },
  {
    label: 'Tools & Other',
    skills: ['WordPress', 'Git / GitHub', 'VS Code', 'Figma', 'Linux', 'Vercel', 'Cloudflare','Wireshark','Nmap','Kali linux'],
  },
]
