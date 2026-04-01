/**
 * =============================================================================
 * ShinyHuntersSalesforce.jsx — Blog article (Salesforce security & ShinyHunters-style risk)
 * =============================================================================
 *
 * PURPOSE:
 *   Long-form article on vishing, OAuth abuse, Salesforce as blind spot, and
 *   remediation sequence — with attack path, defense layers, and roadmap graphics.
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
          Groups like ShinyHunters are not breaking into Salesforce. They are walking in through
          doors that were never closed. The platform is not compromised — the client environment is.
          And in every case that has been publicly reported, the root cause is the same: basic
          controls that were either missing or never applied to Salesforce in the first place.
        </P>
        <P>
          Consider LVMH — the parent company of Louis Vuitton, Dior, and Tiffany. Attackers called
          employees, impersonated IT support, and talked them into authorizing a malicious OAuth app
          disguised as Salesforce Data Loader. No connected app approval policy existed. Anyone could
          authorize. Multiple billion-dollar brands breached through the same door because the same
          basic control was missing.
        </P>

        <SectionTitle>How ShinyHunters actually operates</SectionTitle>
        <P>
          The playbook is remarkably simple. An attacker calls an employee, impersonates IT support,
          and creates urgency. The employee is directed to a convincing lookalike login page.
          Credentials are captured in real time. Within minutes, the attacker holds a valid session.
        </P>
        <P>
          From there, it is not about hacking. It is about access. The attacker moves through the
          environment using the permissions that identity already has — exporting data, accessing
          integrations, searching code and logs for high-leverage material. The goal is extortion,
          and the leverage comes from what was left exposed.
        </P>
        <P>
          No zero-day. No platform vulnerability. Just a phone call and an environment that was not
          ready.
        </P>

        <AttackPathGraphic />

        <SectionTitle>Why Salesforce is the blind spot</SectionTitle>
        <P>
          If a system manages sensitive customer data, supports financial processes, and integrates
          with critical enterprise platforms, it is typically governed with clearly defined controls
          and accountability. For many organizations, Salesforce sits at the center of that
          landscape.
        </P>
        <P>
          In practice, the same level of risk and control focus is often lacking compared to other
          core systems. Over time, the security posture evolves in ways that are not always fully
          understood — access models expand, connected apps and third-party integrations
          accumulate, and sensitive data or credentials can exist in code and logs without clear
          visibility.
        </P>
        <P>
          Where these elements are not aligned, exposure builds over time — often without being
          immediately visible.
        </P>

        <DefenseLayersGraphic />

        <SectionTitle>What to do about it — and where I can help</SectionTitle>
        <P>
          This does not require a large-scale program. It requires the right sequence, aligned to
          your capacity.
        </P>
        <P>
          It starts with a{' '}
          <strong className="font-semibold text-primary">Security Assessment</strong>
          {' '}
          — a clear view of the current state — and builds from there.
        </P>
        <P>
          Most teams do not need everything at once. They need the right things done well.
        </P>
        <P>
          The assessment establishes where to focus — bringing access, integrations, and code into
          scope from the outset, including AI-assisted scanning to surface risks across metadata and
          logic.
        </P>
        <LeadIn>From there:</LeadIn>
        <BulletList>
          <li>
            <span className="text-white/88 font-medium">Entitlement remediation</span> addresses the
            most immediate gaps.
          </li>
          <li>
            <span className="text-white/88 font-medium">IT General & Application Controls</span>{' '}
            establish consistency and discipline.
          </li>
          <li>
            Structural changes — such as RBAC redesign and broader security posture — follow as
            needed.
          </li>
        </BulletList>
        <P>
          The heavier lift is there when it makes sense, not as a day-one requirement.
        </P>

        <SecurityRoadmapGraphic />

        <P>
          If that sounds like a conversation worth having, it starts with a short call to scope what
          makes sense for your environment.
        </P>
      </div>
    </article>
  )
}
