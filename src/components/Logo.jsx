import { useState } from 'react'

export default function Logo({ size = 36, className = '' }) {
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={`cursor-pointer ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Allan Dabre logo"
      style={{
        overflow: 'visible',
        transform: hovered ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      }}
    >
      {/* Outer glow ring — expands far out */}
      <rect
        x="-6" y="-6" width="60" height="60"
        rx="17"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        style={{
          opacity: hovered ? 0.7 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.75)',
          transformOrigin: '24px 24px',
          transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      />

      {/* Second ring — tighter, slightly delayed feel */}
      <rect
        x="-2" y="-2" width="52" height="52"
        rx="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        style={{
          opacity: hovered ? 0.4 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.85)',
          transformOrigin: '24px 24px',
          transition: 'opacity 0.3s ease 0.05s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s',
        }}
      />

      {/* Background — strong brightness + teal glow shadow */}
      <rect
        width="48" height="48"
        rx="12"
        fill="currentColor"
        style={{
          filter: hovered
            ? 'brightness(1.6) saturate(1.3) drop-shadow(0 0 8px currentColor)'
            : 'brightness(1)',
          transition: 'filter 0.3s ease',
        }}
      />

      {/* AD mark — lifts noticeably */}
      <g
        style={{
          transform: hovered ? 'translateY(-3px)' : 'translateY(0px)',
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* A */}
        <path d="M14 8L5 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M14 8L23 40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M9 27H19" stroke="white" strokeWidth="3.5" strokeLinecap="round" />

        {/* D */}
        <line x1="27" y1="8" x2="27" y2="40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M27 8 A16 16 0 0 1 27 40" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  )
}
