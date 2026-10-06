import { ImageResponse } from 'next/og'
import { profile } from '@/lib/portfolio-data'

export const alt = 'Christian Paul Amantiad — Full-Stack Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #000005 0%, #04061a 45%, #0a0e2e 100%)',
          color: '#e8eeff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#00ffc8',
              boxShadow: '0 0 24px #00ffc8',
              display: 'flex',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: 10,
              textTransform: 'uppercase',
              color: '#00ffc8',
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#e8eeff',
            }}
          >
            Christian Paul Amantiad
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#00ffc8' }}>
            Full-Stack Web Developer
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: 'rgba(180,200,255,0.65)', maxWidth: 900 }}>
            Fast, secure, user-centered web applications — designed, developed,
            and shipped to production.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: 'rgba(180,200,255,0.55)',
          }}
        >
          <div style={{ display: 'flex' }}>whoiszircon.vercel.app</div>
          <div style={{ display: 'flex', gap: 10, color: '#00ffc8' }}>
            {profile.location.split(',')[0]} · {profile.githubHandle}
          </div>
          <div style={{ display: 'flex' }}>​</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
