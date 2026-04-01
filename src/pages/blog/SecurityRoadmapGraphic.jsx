/**
 * =============================================================================
 * SecurityRoadmapGraphic.jsx — Sequenced remediation roadmap with effort bars
 * =============================================================================
 *
 * PURPOSE:
 *   Four stages from assessment to scale; effort bars show relative lift, not duration.
 *   Inspired by roadmap-style diagrams — implemented as accessible HTML/CSS.
 *
 * DEPENDENCIES:
 *   - Used by: ShinyHuntersSalesforce.jsx
 *
 * =============================================================================
 */

const STAGES = [
  {
    title: 'Security Assessment',
    tag: 'Start here',
    tagClass: 'bg-emerald-500/15 text-emerald-300/95 border-emerald-500/30',
    borderClass: 'border-emerald-500/35',
    glow: 'shadow-[0_0_0_1px_rgba(16,185,129,0.12)]',
    body: 'Scope access, integrations, configuration, and code. Include AI-assisted scanning for secrets and risky patterns. Produce prioritized findings and a clear baseline. Bound the effort to weeks, not a multi-month program.',
    effort: 22,
    effortLabel: 'Relative effort',
  },
  {
    title: 'Entitlement remediation',
    tag: 'Quick wins',
    tagClass: 'bg-teal-500/15 text-teal-200/95 border-teal-500/30',
    borderClass: 'border-teal-500/35',
    glow: 'shadow-[0_0_0_1px_rgba(20,184,166,0.1)]',
    body: 'Tighten privileged access and integration accounts. Enforce MFA and session policies. Retire shared and stale accounts. Establish connected app and OAuth consent rules. Assign clear ownership for every integration and connected app in the environment.',
    effort: 32,
    effortLabel: 'Relative effort',
  },
  {
    title: 'IT General & Application Controls',
    tag: 'Foundation',
    tagClass: 'bg-sky-500/15 text-sky-200/95 border-sky-500/30',
    borderClass: 'border-sky-500/40',
    glow: 'shadow-[0_0_0_1px_rgba(14,165,233,0.1)]',
    body: 'Govern change and privileged access to production. Enforce periodic access reviews and segregation of duties. Review logs on a schedule, not only store them. Remove Salesforce access when people leave or change roles.',
    effort: 52,
    effortLabel: 'Relative effort',
  },
  {
    title: 'RBAC Redesign & Security Posture Design',
    tag: 'Heavy lift',
    tagClass: 'bg-violet-500/15 text-violet-200/95 border-violet-500/35',
    borderClass: 'border-violet-500/45',
    glow: 'shadow-[0_0_0_1px_rgba(139,92,246,0.12)]',
    body: 'Redesign RBAC to least privilege across roles and permission sets. Align integration identities and connected-app governance to that model. Document the intended security posture for the platform. Close the gap between how the environment runs today and how leadership expects it to run.',
    effort: 82,
    effortLabel: 'Relative effort',
  },
]

function EffortBar({ value, label }) {
  return (
    <div className="mt-4 pt-3 border-t border-white/[0.06]">
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">{label}</span>
        <span className="text-[10px] tabular-nums text-white/35">{value}%</span>
      </div>
      <div
        className="h-1.5 rounded-full bg-white/[0.08] overflow-hidden"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${label}: ${value} percent`}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function SecurityRoadmapGraphic() {
  return (
    <figure
      className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 sm:py-7"
      aria-label="Four-stage security roadmap with increasing relative effort"
    >
      <figcaption className="mb-5 text-center">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/90">
          A practical sequence
        </span>
        <span className="block text-xs text-white/50 mt-2 text-center leading-snug max-w-xl mx-auto">
          Stages stack: each step makes the next one easier to scope. Not a mandate to finish every
          box before the next conversation — a way to sequence work to your capacity.
        </span>
      </figcaption>

      <div className="flex flex-col gap-0 max-w-2xl mx-auto">
        {STAGES.map((stage, i) => (
          <div key={stage.title} className="flex flex-col items-center">
            <div
              className={`w-full rounded-xl border ${stage.borderClass} bg-white/[0.04] px-4 py-4 ${stage.glow}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 gap-y-1">
                <h3 className="text-base font-semibold text-white/92 font-display pr-2">{stage.title}</h3>
                <span
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${stage.tagClass}`}
                >
                  {stage.tag}
                </span>
              </div>
              <p className="text-[13px] sm:text-sm text-white/58 mt-2.5 leading-relaxed">{stage.body}</p>
              <EffortBar value={stage.effort} label={stage.effortLabel} />
            </div>
            {i < STAGES.length - 1 && (
              <div className="flex h-5 w-px shrink-0 bg-gradient-to-b from-white/20 to-white/10" aria-hidden />
            )}
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-[11px] text-white/38 max-w-lg mx-auto leading-relaxed">
        Bars are relative effort to implement well, not calendar time. Risk is highest when earlier
        stages are skipped — the assessment still makes that visible.
      </p>
    </figure>
  )
}
