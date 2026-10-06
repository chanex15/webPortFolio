import PDFDocument from 'pdfkit'
import fs from 'node:fs'
import path from 'node:path'

// ─── Output path ──────────────────────────────────────────────────────────────
const OUT = path.resolve('public/christian-paul-amantiad-resume.pdf')

// ─── Palette (matches portfolio brand) ────────────────────────────────────────
const INK        = '#0f172a'
const MUTED      = '#475569'
const ACCENT     = '#0d9488'
const LINE_LIGHT = '#e2e8f0'
const SIDEBAR_BG = '#0f172a'
const WHITE      = '#ffffff'
const SIDEBAR_FG = '#e2e8f0'
const SIDEBAR_DIM= '#94a3b8'
const BADGE_BG   = '#1e293b'
const BADGE_TXT  = '#cbd5e1'

// ─── Content (mirrors lib/portfolio-data.ts) ──────────────────────────────────
const DATA = {
  name1: 'Christian Paul',
  name2: 'P. Amantiad',
  title: 'Full-Stack Web Developer',
  email: 'Christianamantiad122@gmail.com',
  phone: '+63 946 108 1979',
  location: 'Balulang, Cagayan de Oro City, Philippines',
  site: 'whoiszircon.vercel.app',
  github: 'github.com/chanex15',
  linkedin: 'linkedin.com/in/christian-paul-amantiad-60107b36b',

  objective:
    'A detail-oriented full-stack web developer who designs, builds, and deploys complete web applications end to end — from first concept to a fast, polished, production-ready site. Looking to bring clean interfaces, solid backends, and secure delivery practices to a team or client project.',

  skills: {
    Frontend: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Responsive Design'],
    Backend: ['Node.js', 'PHP', 'Laravel', 'Python', 'Django', 'REST APIs', 'MySQL', 'PostgreSQL', 'Firebase', 'Supabase', 'Auth Systems'],
    Tools: ['Git & GitHub', 'Figma', 'VS Code', 'Linux', 'Vercel', 'Cloudflare', 'Wireshark', 'Nmap'],
  },

  languages: [
    ['Filipino', 'Native'],
    ['English', 'Professional'],
  ],

  experience: [
    {
      title: 'Freelance Web Developer',
      date: '2024 – Present',
      sub: 'Self-Employed · Remote',
      bullets: [
        'Design and develop custom websites and web applications for clients across industries — handling UI/UX design, development, and deployment end to end.',
        'Deliver responsive, performant, visually polished digital experiences on Vercel, with custom domains and production monitoring.',
        'Manage the full client lifecycle: requirements, design feedback loops, launch, and post-launch support.',
      ],
    },
    {
      title: 'Project Debugging & Code Support',
      date: 'March 2026',
      sub: '2nd-Year IT Students · Bugo, Cagayan de Oro',
      bullets: [
        'Traced and fixed JavaScript and Python errors blocking a school POS project; resolved Firebase database issues.',
        'Walked the team through the root cause of each bug so they could debug independently going forward.',
      ],
    },
    {
      title: 'Front-End Developer — Personal Projects',
      date: '2024 – 2025',
      sub: 'Personal Projects & Open Source',
      bullets: [
        'Built and shipped tools for government data automation, portfolio sites, and interactive web experiences.',
        'Focused on clean architecture, responsive design, and modern CSS (animations, glassmorphism).',
      ],
    },
  ],

  projects: [
    {
      title: 'DENR Tools',
      tags: ['Next.js', 'TypeScript'],
      desc: 'Custom web app for the Department of Environment and Natural Resources automating repetitive data tasks — improving operational efficiency and cutting manual processing time.',
      link: 'denr-tools.vercel.app',
    },
    {
      title: 'Schedlify',
      tags: ['Next.js', 'TypeScript'],
      desc: 'Weekly schedule planner with image/PDF export, built for students and planners.',
      link: 'schedlify.vercel.app',
    },
    {
      title: 'Motor Shop Inventory',
      tags: ['React', 'Supabase'],
      desc: 'Secure inventory management system with authentication for motor shop operations.',
      link: 'motorsample.vercel.app',
    },
    {
      title: 'ZirconAI',
      tags: ['Next.js', 'AI'],
      desc: 'Experimental AI chatbot with natural language processing and context-aware responses.',
      link: 'zirconai.vercel.app',
    },
  ],

  education: {
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of Science and Technology of Southern Philippines (USTP)',
    years: '2022 – 2026',
  },
}

// ─── Page setup ───────────────────────────────────────────────────────────────
const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true })
doc.pipe(fs.createWriteStream(OUT))

const PAGE_W  = doc.page.width
const PAGE_H  = doc.page.height
const SB_W    = 210
const SB_PAD  = 24
const SW      = SB_W - SB_PAD * 2
const SX      = SB_PAD
const MAIN_X  = SB_W + 32
const MAIN_W  = PAGE_W - MAIN_X - 28

// ─── Sidebar background ───────────────────────────────────────────────────────
doc.rect(0, 0, SB_W, PAGE_H).fill(SIDEBAR_BG)

// ─── Sidebar helpers ──────────────────────────────────────────────────────────
let sy = 44

function sbHeading(label) {
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(8.5)
    .text(label.toUpperCase(), SX, sy, { width: SW, characterSpacing: 1.4 })
  sy = doc.y + 3
  doc.moveTo(SX, sy).lineTo(SX + SW, sy)
    .strokeColor('#1e3a3a').lineWidth(0.75).stroke()
  sy += 8
}

function sbLines(lines, { size = 8, color = SIDEBAR_FG, gap = 3.5 } = {}) {
  for (const l of lines) {
    doc.fillColor(color)
      .font('Helvetica')
      .fontSize(size)
      .text(l, SX, sy, { width: SW })
    sy = doc.y + gap
  }
  sy += 4
}

function sbIconLine(text) {
  doc.rect(SX, sy + 2, 6, 6).fill(ACCENT)
  doc.fillColor(SIDEBAR_FG).font('Helvetica').fontSize(8)
    .text(text, SX + 10, sy, { width: SW - 10 })
  sy = doc.y + 3
}

function sbBadgeRow(badges) {
  const BADGE_H    = 14
  const BADGE_VPAD = 3
  const BADGE_HPAD = 6
  const BADGE_GAP  = 4
  const ROW_GAP    = 5

  let rowX = SX
  let rowY = sy

  for (const badge of badges) {
    const textW = doc.font('Helvetica-Bold').fontSize(7).widthOfString(badge)
    const bw    = textW + BADGE_HPAD * 2

    if (rowX + bw > SX + SW + 2) {
      rowX  = SX
      rowY += BADGE_H + ROW_GAP
    }

    doc.roundedRect(rowX, rowY, bw, BADGE_H, 3)
      .fillAndStroke(BADGE_BG, ACCENT)
    doc.fillColor(BADGE_TXT).font('Helvetica-Bold').fontSize(7)
      .text(badge, rowX + BADGE_HPAD, rowY + BADGE_VPAD, { lineBreak: false })

    rowX += bw + BADGE_GAP
  }

  sy = rowY + BADGE_H + 10
}

function sbSubLabel(label) {
  doc.fillColor(SIDEBAR_DIM).font('Helvetica-Bold').fontSize(7.5)
    .text(label, SX, sy, { width: SW, characterSpacing: 0.8 })
  sy = doc.y + 4
}

// ─── Sidebar header (no photo — cleaner and no image dependency) ─────────────
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(16)
  .text(DATA.name1, SX, sy, { width: SW, align: 'center' })
sy = doc.y
doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(16)
  .text(DATA.name2, SX, sy, { width: SW, align: 'center' })
sy = doc.y + 4
doc.fillColor(SIDEBAR_DIM).font('Helvetica').fontSize(8.5)
  .text(DATA.title, SX, sy, { width: SW, align: 'center' })
sy += 20

// ─── Sidebar content ──────────────────────────────────────────────────────────
sbHeading('Contact')
sbIconLine(DATA.email)
sbIconLine(DATA.phone)
sbIconLine(DATA.location)
sbIconLine(DATA.site)
sbIconLine(DATA.github)
sbIconLine(DATA.linkedin)
sy += 4

sbHeading('Skills')
for (const [group, skills] of Object.entries(DATA.skills)) {
  sbSubLabel(group.toUpperCase())
  sbBadgeRow(skills)
}

sbHeading('Languages')
function sbLanguageRow(lang, level) {
  doc.fillColor(SIDEBAR_FG).font('Helvetica').fontSize(8.5)
    .text(lang, SX, sy, { lineBreak: false })
  doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8.5)
    .text(level, SX + SW - 55, sy, { width: 55, align: 'right', lineBreak: false })
  sy += 14
}
for (const [lang, level] of DATA.languages) sbLanguageRow(lang, level)

// ─── Main column helpers ──────────────────────────────────────────────────────
let my = 44

function mainHeading(label) {
  my += 4
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(10)
    .text(label.toUpperCase(), MAIN_X, my, { width: MAIN_W, characterSpacing: 1.2 })
  my = doc.y + 3
  doc.moveTo(MAIN_X, my).lineTo(MAIN_X + MAIN_W, my)
    .strokeColor(LINE_LIGHT).lineWidth(0.75).stroke()
  my += 10
}

function mainParagraph(text) {
  const startY = my
  doc.fillColor(MUTED).font('Helvetica').fontSize(9)
    .text(text, MAIN_X, my, { width: MAIN_W, lineGap: 2.5, align: 'justify' })
  const endY = doc.y
  doc.rect(MAIN_X - 8, startY, 2.5, endY - startY).fill(ACCENT)
  my = endY + 10
}

function mainEntry(title, dateBadge, sub, bullets) {
  const titleStartY = my

  if (dateBadge) {
    const badgeW = doc.font('Helvetica').fontSize(7.5).widthOfString(dateBadge) + 12
    const badgeX = MAIN_X + MAIN_W - badgeW
    doc.roundedRect(badgeX, my, badgeW, 13, 3)
      .fillAndStroke(ACCENT, ACCENT)
    doc.fillColor(WHITE).font('Helvetica').fontSize(7.5)
      .text(dateBadge, badgeX + 6, my + 3, { lineBreak: false })
  }

  doc.circle(MAIN_X + 5, titleStartY + 6, 4)
    .fillAndStroke(ACCENT, ACCENT)

  doc.fillColor(INK).font('Helvetica-Bold').fontSize(10.5)
    .text(title, MAIN_X + 16, my, {
      width: MAIN_W - 16 - (dateBadge ? doc.font('Helvetica').fontSize(7.5).widthOfString(dateBadge) + 18 : 0),
    })
  my = doc.y + 1

  if (sub) {
    doc.fillColor(MUTED).font('Helvetica-Oblique').fontSize(8.5)
      .text(sub, MAIN_X + 16, my, { width: MAIN_W - 16 })
    my = doc.y + 5
  } else {
    my += 4
  }

  for (const b of bullets) {
    const bY = my
    doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(8)
      .text('▸', MAIN_X + 16, bY, { width: 10, lineBreak: false })
    doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
      .text(b, MAIN_X + 28, bY, { width: MAIN_W - 28, lineGap: 1.5 })
    my = doc.y + 3
  }

  my += 6
}

function projectCard(title, techTags, desc, link) {
  const cardX = MAIN_X
  const cardW = MAIN_W
  const cardStartY = my

  doc.roundedRect(cardX, cardStartY, cardW, 10, 5).fillAndStroke('#f8fafc', LINE_LIGHT)

  let cy = cardStartY + 10

  doc.fillColor(INK).font('Helvetica-Bold').fontSize(10)
    .text(title, cardX + 10, cy, { lineBreak: false })

  if (techTags && techTags.length) {
    const tagsText = techTags.join(' · ')
    const tagsW    = doc.font('Helvetica-Bold').fontSize(7.5).widthOfString(tagsText) + 16
    const tagsX    = cardX + cardW - tagsW - 6
    doc.roundedRect(tagsX, cy - 1, tagsW, 14, 3)
      .fillAndStroke(ACCENT, ACCENT)
    doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(7.5)
      .text(tagsText, tagsX + 8, cy + 2, { lineBreak: false })
  }

  cy += 16

  doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
    .text(desc, cardX + 10, cy, { width: cardW - 20, lineGap: 1.5 })
  cy = doc.y + 4

  if (link) {
    doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8)
      .text('-> ' + link, cardX + 10, cy, { width: cardW - 20 })
    cy = doc.y + 4
  }

  my = cy + 8
}

// ─── Main content ─────────────────────────────────────────────────────────────
doc.fillColor(INK).font('Helvetica-Bold').fontSize(22)
  .text('About Me', MAIN_X, my, { width: MAIN_W })
my = doc.y + 2
doc.moveTo(MAIN_X, my).lineTo(MAIN_X + 50, my)
  .strokeColor(ACCENT).lineWidth(2.5).stroke()
my += 14

mainHeading('Objective')
mainParagraph(DATA.objective)

mainHeading('Work Experience')
for (const e of DATA.experience) mainEntry(e.title, e.date, e.sub, e.bullets)

mainHeading('Projects')
for (const p of DATA.projects) projectCard(p.title, p.tags, p.desc, p.link)

mainHeading('Education')
mainEntry(DATA.education.degree, null, null, [])
my -= 10
doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8.5)
  .text(DATA.education.school, MAIN_X + 16, my, { width: MAIN_W - 16 })
my = doc.y + 3
doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
  .text(DATA.education.years, MAIN_X + 16, my, { width: MAIN_W - 16 })

// ─── Done ─────────────────────────────────────────────────────────────────────
doc.end()
console.log('✅ Resume PDF written to', OUT)
