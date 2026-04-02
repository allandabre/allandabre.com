/**
 * =============================================================================
 * ShinyHuntersSalesforce.jsx: Blog article (Salesforce security & social-engineering risk)
 * =============================================================================
 *
 * PURPOSE:
 *   Long-form article on vishing, OAuth abuse, Salesforce as blind spot, and
 *   remediation, attack path, defense layers, and roadmap graphics.
 *
 * RESPONSIBILITIES:
 *   - Render article typography consistent with site dark theme (Blog)
 *
 * DEPENDENCIES:
 *   - Used by: pages/Blog.jsx
 *   - Depends on: React, shinyHuntersPostMeta, AttackPathGraphic, DefenseLayersGraphic,
 *     SecurityRoadmapGraphic
 *
 * =============================================================================
 */

import AttackPathGraphic from './AttackPathGraphic'
import DefenseLayersGraphic from './DefenseLayersGraphic'
import SecurityRoadmapGraphic from './SecurityRoadmapGraphic'
import { shinyHuntersPostMeta } from './shinyHuntersPostMeta'

function P({ children, className = '' }) {
  return (
    <p className={`mb-4 text-[17px] leading-[1.7] text-white/78 ${className}`.trim()}>{children}</p>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="mt-10 mb-4 text-xl md:text-[1.35rem] font-bold tracking-tight text-white/95 font-display">
      {children}
    </h2>
  )
}

function BulletList({ children }) {
  return (
    <ul className="mb-4 ml-1 space-y-2.5 text-[17px] leading-[1.7] text-white/78 list-disc pl-5 marker:text-primary/60">
      {children}
    </ul>
  )
}

function LeadIn({ children }) {
  return (
    <p className="mb-2 text-[17px] font-semibold text-white/88 font-display">{children}</p>
  )
}

export default function ShinyHuntersSalesforce({ onBack }) {
  return (
    <article className="w-full max-w-5xl">
      <button
        type="button"
        onClick={onBack}
        className="group flex items-center gap-2 text-sm text-white/40 hover:text-primary transition-colors mb-10"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform">
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        All insights
      </button>

      <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary/90 mb-4">{shinyHuntersPostMeta.date}</p>
      <h1 className="font-display text-3xl md:text-[2.1rem] font-bold text-white/95 leading-snug mb-4">
        {shinyHuntersPostMeta.title}
      </h1>
      <p className="text-lg text-white/55 mb-2 leading-relaxed">{shinyHuntersPostMeta.subtitle}</p>
      <p className="text-sm text-white/40 mb-10">{shinyHuntersPostMeta.readTime}</p>

      <div className="space-y-0">
        <P>
          Hacker groups like Shiny Hunters are not breaking into Salesforce. They walk through doors
          that were never closed. The platform is not compromised; the client environment is.
        </P>
        <P>
          A recent FBI FLASH identified two clusters, UNC6040 and UNC6395, targeting Salesforce
          tenants through help-desk vishing, malicious connected apps, and OAuth or API paths to bulk
          data, for theft and extortion. Public reporting has named firms across technology, travel,
          retail, and luxury.
        </P>

        <SectionTitle>How hacker groups actually operate</SectionTitle>
        <P>
          The playbook is simple. Someone calls an employee, impersonates IT, creates urgency, and
          directs the person to a fake login page. Credentials are captured in real time. Within
          minutes, the attacker holds a valid session.
        </P>
        <P>
          From there, this is not hacking in the Hollywood sense; it is access. The
          attacker moves through the environment using that identity&apos;s existing permissions,
          exporting data and searching code for high-leverage material. The goal is extortion.
        </P>
        <P>
          Consider LVMH, the luxury group whose brands include Louis Vuitton, Dior, Tiffany, and
          others. Attackers called employees and persuaded them to authorize a malicious OAuth app
          disguised as Salesforce Data Loader. No connected app approval policy existed, so anyone
          could authorize. Several billion-dollar brands were breached through the same gap because
          one basic control was missing.
        </P>
        <P>
          No zero-day. No platform vulnerability. Just a phone call and an environment that was not
          ready.
        </P>

        <AttackPathGraphic />

        <SectionTitle>Why Salesforce is the blind spot</SectionTitle>
        <P>
          When a system holds sensitive customer data, underpins financial processes, and connects to
          other critical platforms, we usually surround it with clear controls and clear ownership.
          For many organizations, Salesforce sits at the center of that landscape.
        </P>
        <P>
          In practice, that rigor rarely follows Salesforce the way it follows other core
          systems. Over time, the posture drifts in ways leadership may not fully see: access models
          widen, connected apps and integrations pile up, and sensitive data or credentials can
          linger in code and logs without a single owner asking hard questions.
        </P>
        <P>
          When those risks go unexamined, exposure accrues quietly. It does not always announce
          itself.
        </P>

        <DefenseLayersGraphic />

        <SectionTitle>What to do about it, and where I can help</SectionTitle>
        <P>
          It starts with a{' '}
          <strong className="font-semibold text-primary">Security Assessment</strong>{' '}
          (a clear view of the current state) and builds from there. None of this has to be a
          multi-year transformation. What it needs is a sequence that fits your
          capacity. Teams can work on several pieces at once, not one box at a time.
        </P>
        <P>
          Most teams do not need everything at once; they need the right things done well. The
          assessment cuts straight to what matters: access, integrations, and code, with AI-assisted
          scanning to surface risk across metadata and logic.
        </P>
        <LeadIn>From there:</LeadIn>
        <BulletList>
          <li>
            <span className="text-white/88 font-medium">Entitlement remediation</span> closes the
            most urgent gaps.
          </li>
          <li>
            <span className="text-white/88 font-medium">IT General & Application Controls</span>{' '}
            bring consistency and discipline.
          </li>
          <li>
            <span className="text-white/88 font-medium">Structural work</span>, such as RBAC
            redesign and a clearer security posture, follows when the time is right.
          </li>
        </BulletList>
        <P>
          The heavier lift shows up when it makes sense, not as a requirement on day one.
        </P>

        <SecurityRoadmapGraphic />

        <P>
          That roadmap is the same sequence in one view. If you want to explore how that fits
          your environment, start with a short call.
        </P>
      </div>
    </article>
  )
}
