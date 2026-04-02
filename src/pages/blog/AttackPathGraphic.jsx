/**
 * =============================================================================
 * AttackPathGraphic.jsx — Horizontal attack-path diagram (blog)
 * =============================================================================
 *
 * PURPOSE:
 *   Four-stage flow: vishing → credential/MFA path → cloud session → exfiltration.
 *   Layout inspired by common kill-chain infographics (colored headers, icons, arrows).
 *
 * RESPONSIBILITIES:
 *   - Render responsive diagram: horizontal on md+, stacked on small screens
 *
 * DEPENDENCIES:
 *   - Used by: ShinyHuntersSalesforce.jsx
 *
 * =============================================================================
 */

import { Fragment } from 'react'

function ArrowRight({ className = '' }) {
  return (
    <svg
      className={`shrink-0 text-white/25 ${className}`.trim()}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      aria-hidden
    >
      <path d="M1 6h14m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowDown({ className = '' }) {
  return (
    <svg
      className={`text-white/25 ${className}`.trim()}
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      aria-hidden
    >
      <path d="M6 1v14m0 0-4-4m4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconVishing() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-sky-400/95" fill="none" aria-hidden>
      <rect x="17" y="9" width="14" height="20" rx="7" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M24 29v5M19 38h10" />
      <path
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.45"
        d="M7 18c-3 3-3 9 0 12M4 15c-4 5-4 13 0 18M41 18c3 3 3 9 0 12M44 15c4 5 4 13 0 18"
      />
    </svg>
  )
}

function IconPhishLink() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-emerald-400/95" fill="none" aria-hidden>
      <g transform="translate(9 4) scale(1.25)">
        <path
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </g>
      <rect x="7" y="31" width="34" height="12" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="37" r="1.75" fill="currentColor" opacity="0.82" />
      <circle cx="24" cy="37" r="1.75" fill="currentColor" opacity="0.82" />
      <circle cx="30.5" cy="37" r="1.75" fill="currentColor" opacity="0.82" />
    </svg>
  )
}

function IconSession() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-rose-400/95" fill="none" aria-hidden>
      <circle cx="16" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="24" r="3" fill="currentColor" opacity="0.25" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M24 24h18" />
      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M30 24v5M34 24v5M38 24v5" />
    </svg>
  )
}

function IconExfil() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 text-rose-300/95" fill="none" aria-hidden>
      <ellipse cx="18" cy="13" rx="11" ry="4" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" d="M7 13v11M29 13v11" />
      <ellipse cx="18" cy="24" rx="11" ry="4" stroke="currentColor" strokeWidth="2" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M31 24h12M39 19l5 5-5 5"
      />
      <ellipse cx="18" cy="35" rx="11" ry="4" stroke="currentColor" strokeWidth="2" opacity="0.4" />
    </svg>
  )
}

const STAGES = [
  {
    header: 'Initial access',
    headerClass: 'bg-sky-600/90 text-white',
    Icon: IconVishing,
    title: 'Vishing',
    detail: 'Call or message posing as IT or help desk',
  },
  {
    header: 'Credential path',
    headerClass: 'bg-emerald-700/90 text-white',
    Icon: IconPhishLink,
    title: 'Phishing or OAuth',
    detail: 'Link, fake portal, or malicious connected app',
  },
  {
    header: 'Cloud session',
    headerClass: 'bg-rose-800/90 text-white',
    Icon: IconSession,
    title: 'Valid access',
    detail: 'SSO, session, or approved integration',
  },
  {
    header: 'SaaS impact',
    headerClass: 'bg-rose-950/90 text-white border-t border-white/10',
    Icon: IconExfil,
    title: 'Data exfiltration',
    detail: 'Bulk query, export, or API pulls sensitive data out',
  },
]

export default function AttackPathGraphic() {
  return (
    <figure
      className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-6 sm:px-5 sm:py-7 overflow-hidden"
      aria-label="Four-stage attack path from vishing to SaaS data theft"
    >
      <figcaption className="mb-6 px-1">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/90 text-center">
          A typical attack path (simplified)
        </span>
        <span className="block text-xs text-white/50 mt-2 text-center leading-snug max-w-xl mx-auto">
          Stages chain together; defenses fail when any single gate is weak.
        </span>
      </figcaption>

      {/* Desktop / tablet: horizontal flow */}
      <div className="hidden md:block max-w-5xl mx-auto">
        {/* Header strip: last two stages share “cloud” emphasis like a two-phase block */}
        <div className="flex rounded-t-lg overflow-hidden border border-white/10">
          <div className={`flex-1 min-w-0 px-2 py-2.5 text-center text-[10px] font-bold uppercase tracking-wide ${STAGES[0].headerClass}`}>
            {STAGES[0].header}
          </div>
          <div className={`flex-1 min-w-0 px-2 py-2.5 text-center text-[10px] font-bold uppercase tracking-wide border-l border-white/15 ${STAGES[1].headerClass}`}>
            {STAGES[1].header}
          </div>
          <div className="flex-[2] min-w-0 px-2 py-2.5 text-center text-[10px] font-bold uppercase tracking-wide border-l border-white/15 bg-gradient-to-r from-rose-800/95 to-rose-950/95 text-white">
            Cloud application targeting
          </div>
        </div>

        <div className="flex items-stretch border border-t-0 border-white/10 rounded-b-lg bg-black/20">
          {STAGES.map((stage, i) => (
            <Fragment key={stage.header}>
              <div className="flex min-w-0 flex-1 flex-col items-center px-2 py-5 text-center">
                <stage.Icon />
                <p className="mt-4 text-[15px] font-semibold text-white/92 leading-tight">{stage.title}</p>
                <p className="mt-1.5 text-[12px] text-white/48 leading-snug max-w-[11rem] mx-auto">{stage.detail}</p>
              </div>
              {i < STAGES.length - 1 && (
                <div className="flex shrink-0 items-center self-stretch px-0.5" aria-hidden>
                  <ArrowRight />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-0 max-w-md mx-auto">
        {STAGES.map((stage, i) => (
          <div key={stage.header}>
            <div className="rounded-xl border border-white/10 overflow-hidden bg-black/15">
              <div className={`px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wide ${stage.headerClass}`}>
                {i < 2 ? stage.header : i === 2 ? 'Cloud, phase A' : 'Cloud, phase B'}
              </div>
              <div className="flex flex-col items-center px-4 py-5">
                <stage.Icon />
                <p className="mt-3 text-[15px] font-semibold text-white/92">{stage.title}</p>
                <p className="mt-1.5 text-[13px] text-white/48 text-center leading-relaxed">{stage.detail}</p>
              </div>
            </div>
            {i < STAGES.length - 1 && (
              <div className="flex justify-center py-2">
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[11px] text-white/38 max-w-md mx-auto leading-snug px-2">
        No zero-day required: social engineering plus gaps in identity and SaaS governance.
      </p>
    </figure>
  )
}
