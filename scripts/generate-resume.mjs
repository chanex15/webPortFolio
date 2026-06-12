import PDFDocument from './node_modules/pdfkit/js/pdfkit.js'
import fs from 'node:fs'
import path from 'node:path'

// ─── Output path ──────────────────────────────────────────────────────────────
const OUT = path.resolve('christian-paul-amantiad-resume.pdf')

// ─── Palette ──────────────────────────────────────────────────────────────────
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

// ─── Page setup ───────────────────────────────────────────────────────────────
const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true })
doc.pipe(fs.createWriteStream(OUT))

const PAGE_W  = doc.page.width   // 595.28
const PAGE_H  = doc.page.height  // 841.89
const SB_W    = 210              // sidebar width
const SB_PAD  = 24               // sidebar horizontal padding
const SW      = SB_W - SB_PAD * 2
const SX      = SB_PAD

const MAIN_X  = SB_W + 32
const MAIN_W  = PAGE_W - MAIN_X - 28

// ─── Sidebar background ───────────────────────────────────────────────────────
doc.rect(0, 0, SB_W, PAGE_H).fill(SIDEBAR_BG)

// ─── Helper: draw circular photo ──────────────────────────────────────────────
function drawCircularPhoto(imgPath, cx, cy, r) {
  // Use a pre-clipped circular PNG - just draw it centered
  doc.image(imgPath, cx - r, cy - r, { width: r * 2, height: r * 2 })
  // Teal ring around photo
  doc.circle(cx, cy, r + 2)
    .lineWidth(2.5)
    .strokeColor(ACCENT)
    .stroke()
}

// ─── Profile photo ────────────────────────────────────────────────────────────
const PHOTO_R  = 52
const PHOTO_CX = SB_W / 2
const PHOTO_CY = 70
drawCircularPhoto('./profile_circle.png', PHOTO_CX, PHOTO_CY, PHOTO_R)

// ─── Sidebar state ────────────────────────────────────────────────────────────
let sy = PHOTO_CY + PHOTO_R + 18

// ─── Name ─────────────────────────────────────────────────────────────────────
doc.fillColor(WHITE).font('Helvetica-Bold').fontSize(16)
  .text('Christian Paul', SX, sy, { width: SW, align: 'center' })
sy = doc.y + 0
doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(16)
  .text('P. Amantiad', SX, sy, { width: SW, align: 'center' })
sy = doc.y + 4
doc.fillColor(SIDEBAR_DIM).font('Helvetica').fontSize(8.5)
  .text('Web Developer & Virtual Assistant', SX, sy, { width: SW, align: 'center' })
sy = doc.y + 20

// ─── Sidebar section heading ───────────────────────────────────────────────────
function sbHeading(label) {
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(8.5)
    .text(label.toUpperCase(), SX, sy, { width: SW, characterSpacing: 1.4 })
  sy = doc.y + 3
  doc.moveTo(SX, sy).lineTo(SX + SW, sy)
    .strokeColor('#1e3a3a').lineWidth(0.75).stroke()
  sy += 8
}

// ─── Sidebar plain lines ────────────────────────────────────────────────────
function sbLines(lines, { size = 8, color = SIDEBAR_FG, bold = false, gap = 3.5 } = {}) {
  for (const l of lines) {
    doc.fillColor(color)
      .font(bold ? 'Helvetica-Bold' : 'Helvetica')
      .fontSize(size)
      .text(l, SX, sy, { width: SW })
    sy = doc.y + gap
  }
  sy += 4
}

// ─── Sidebar icon line ──────────────────────────────────────────────────────
function sbIconLine(icon, text) {
  // Draw a small teal square as the "icon"
  doc.rect(SX, sy + 2, 6, 6).fill(ACCENT)
  doc.fillColor(SIDEBAR_FG).font('Helvetica').fontSize(8).text(text, SX + 10, sy, { width: SW - 10 })
  sy = doc.y + 3
}

// ─── CONTACT ─────────────────────────────────────────────────────────────────
sbHeading('Contact')
sbIconLine('>', 'Christianamantiad122@gmail.com')
sbIconLine('T', '+63 946 108 1979')
sbIconLine('@', 'Balulang, Cagayan de Oro City,\n  Philippines')
sy += 2
sbIconLine('W', 'whoiszircon.pages.dev')
sy += 4

// ─── Badge helper ─────────────────────────────────────────────────────────────
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

// ─── Sub-category label ───────────────────────────────────────────────────────
function sbSubLabel(label) {
  doc.fillColor(SIDEBAR_DIM).font('Helvetica-Bold').fontSize(7.5)
    .text(label, SX, sy, { width: SW, characterSpacing: 0.8 })
  sy = doc.y + 4
}

// ─── SKILLS ──────────────────────────────────────────────────────────────────
sbHeading('Skills')

sbSubLabel('FRONTEND')
sbBadgeRow(['TAILWINDCSS', 'CSS & HTML', 'RESPONSIVE', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT.JS'])

sbSubLabel('BACKEND')
sbBadgeRow(['REST.API', 'PYTHON', 'DJANGO', 'NODE.JS', 'MYSQL', 'POSTGRESQL'])

sbSubLabel('TOOLS')
sbBadgeRow(['GIT & GITHUB', 'FIGMA', 'VS CODE', 'NPM', 'LINUX', 'VERCEL', 'CLOUDFLARE'])

// ─── LANGUAGES ───────────────────────────────────────────────────────────────
sbHeading('Languages')

// Two-column language rows
function sbLanguageRow(lang, level) {
  doc.fillColor(SIDEBAR_FG).font('Helvetica').fontSize(8.5)
    .text(lang, SX, sy, { lineBreak: false })
  doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8.5)
    .text(level, SX + SW - 55, sy, { width: 55, align: 'right', lineBreak: false })
  sy += 14
}
sbLanguageRow('Filipino', 'Native')
sbLanguageRow('English', 'Professional')

// ─── MAIN COLUMN ─────────────────────────────────────────────────────────────
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
  // Teal left border block
  doc.rect(MAIN_X, my, 2.5, 999).fill(ACCENT) // placeholder height
  const startY = my
  doc.fillColor(MUTED).font('Helvetica').fontSize(9)
    .text(text, MAIN_X + 10, my, { width: MAIN_W - 10, lineGap: 2.5, align: 'justify' })
  const endY = doc.y
  // Redraw teal bar with correct height
  doc.rect(MAIN_X, startY, 2.5, endY - startY).fill(ACCENT)
  my = endY + 10
}

function mainEntry(title, dateBadge, sub, bullets, tags) {
  // Title + date badge on same line
  const titleStartY = my

  if (dateBadge) {
    // Draw date badge first (right-aligned)
    const badgeW = doc.font('Helvetica').fontSize(7.5).widthOfString(dateBadge) + 12
    const badgeX = MAIN_X + MAIN_W - badgeW
    doc.roundedRect(badgeX, my, badgeW, 13, 3)
      .fillAndStroke(ACCENT, ACCENT)
    doc.fillColor(WHITE).font('Helvetica').fontSize(7.5)
      .text(dateBadge, badgeX + 6, my + 3, { lineBreak: false })
  }

  // Teal circle dot
  doc.circle(MAIN_X + 5, titleStartY + 6, 4)
    .fillAndStroke(ACCENT, ACCENT)

  doc.fillColor(INK).font('Helvetica-Bold').fontSize(10.5)
    .text(title, MAIN_X + 16, my, { width: MAIN_W - 16 - (dateBadge ? doc.font('Helvetica').fontSize(7.5).widthOfString(dateBadge) + 18 : 0) })
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
    doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(8).text('▸', MAIN_X + 16, bY, { width: 10, lineBreak: false })
    doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
      .text(b, MAIN_X + 28, bY, { width: MAIN_W - 28, lineGap: 1.5 })
    my = doc.y + 3
  }

  my += 6
}

// Project card
function projectCard(title, techTags, desc, link) {
  const cardX = MAIN_X
  const cardW = MAIN_W
  const cardStartY = my

  // Estimate content height
  const descHeight = 28
  const cardH = 14 + descHeight + (link ? 14 : 0) + 10

  // Card background
  doc.roundedRect(cardX, cardStartY, cardW, cardH, 5)
    .fillAndStroke('#f8fafc', LINE_LIGHT)

  let cy = cardStartY + 10

  // Title
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(10)
    .text(title, cardX + 10, cy, { lineBreak: false })

  // Tech tags (right-aligned)
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

  // Description
  doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
    .text(desc, cardX + 10, cy, { width: cardW - 20, lineGap: 1.5 })
  cy = doc.y + 4

  // Link
  if (link) {
    doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8)
      .text('-> ' + link, cardX + 10, cy, { width: cardW - 20 })
    cy = doc.y + 4
  }

  my = Math.max(cy + 8, cardStartY + cardH + 6)
}

// ─── MAIN CONTENT: "About Me" heading ────────────────────────────────────────
doc.fillColor(INK).font('Helvetica-Bold').fontSize(22)
  .text('About Me', MAIN_X, my, { width: MAIN_W })
my = doc.y + 2
doc.moveTo(MAIN_X, my).lineTo(MAIN_X + 50, my)
  .strokeColor(ACCENT).lineWidth(2.5).stroke()
my += 14

// ─── OBJECTIVE ───────────────────────────────────────────────────────────────
mainHeading('Objective')
mainParagraph(
  'A motivated and detail-oriented BS Information Technology graduate with hands-on experience in web development, client management, and administrative support. Looking to apply strong organizational, communication, and technical skills as a Virtual Assistant to help businesses run efficiently and effectively in a remote setting.'
)

// ─── WORK EXPERIENCE ─────────────────────────────────────────────────────────
mainHeading('Work Experience')
mainEntry(
  'Freelance Virtual Assistant & Web Developer',
  '2022 – Present',
  'Self-Employed · Remote',
  [
    'Managed client communications, project timelines, and deliverables for multiple remote clients simultaneously.',
    'Built and maintained responsive websites based on client briefs, handling all coordination from planning to launch.',
    'Organized digital files, prepared reports, and maintained online records to keep client operations running smoothly.',
    'Conducted online research and compiled findings into clear, actionable summaries for client decision-making.',
  ]
)
mainEntry(
  'Sales Associate',
  '2021 – 2022',
  'RRJ / Mr. Lee · Retail',
  [
    'Handled customer inquiries professionally, consistently delivering a positive and helpful service experience.',
    'Coordinated with team members to maintain store operations and achieve sales targets.',
    'Developed strong communication and problem-solving skills while managing diverse customer needs daily.',
  ]
)

// ─── PROJECTS ────────────────────────────────────────────────────────────────
mainHeading('Projects')
projectCard(
  'Personal Portfolio Website',
  ['HTML', 'CSS', 'JavaScript'],
  'Designed and deployed a fully responsive personal portfolio. Managed hosting, domain setup, and ongoing content updates independently.',
  'whoiszircon.pages.dev'
)
projectCard(
  'Client Website Projects (Freelance)',
  ['HTML', 'CSS', 'JS', 'WordPress'],
  'Completed multiple client websites end-to-end — gathered requirements, designed layouts, applied feedback, and delivered on schedule while managing all client communications.',
  null
)
projectCard(
  'Task & Admin Management Tool',
  ['Python', 'Django'],
  'Built a simple web-based task tracker to manage to-dos, deadlines, and notes — demonstrating ability to create practical digital tools that improve organization and workflow.',
  null
)

// ─── EDUCATION ───────────────────────────────────────────────────────────────
mainHeading('Education')
mainEntry(
  'Bachelor of Science in Information Technology',
  null,
  null,
  []
)
// Uni name in italic accent below
my -= 10
doc.fillColor(ACCENT).font('Helvetica-Oblique').fontSize(8.5)
  .text('University of Science and Technology of Southern Philippines (USTP)', MAIN_X + 16, my, { width: MAIN_W - 16 })
my = doc.y + 3
doc.fillColor(MUTED).font('Helvetica').fontSize(8.5)
  .text('2022 – 2026', MAIN_X + 16, my, { width: MAIN_W - 16 })

// ─── Done ─────────────────────────────────────────────────────────────────────
doc.end()
console.log('✅ Resume PDF written to', OUT)
