/**
 * =============================================================================
 * DefenseLayersGraphic.jsx — Layered defense diagram for Salesforce security post
 * =============================================================================
 *
 * PURPOSE:
 *   Visual “stack” of control layers that add friction after a valid session exists.
 *
 * RESPONSIBILITIES:
 *   - Render a single self-contained figure for the blog article
 *
 * DEPENDENCIES:
 *   - Used by: ShinyHuntersSalesforce.jsx
 *   - Depends on: React
 *
 * =============================================================================
 */

/** Top → bottom: operate the platform → design access → keep it true over time → code surface. */
const LAYERS = [
  {
    title: 'IT General Controls',
    detail:
      'How the platform is operated: change management, privileged access, logging that gets reviewed, backup and recovery you have tested.',
  },
  {
    title: 'Identity & Entitlements',
    detail:
      'Who may do what: RBAC and permission sets for people and integration accounts; OAuth and connected-app rules — including who may approve or consent. Least privilege that still fits how the business runs.',
  },
  {
    title: 'Lifecycle & Access Reviews',
    detail:
      'Whether access stays true over time: periodic user access reviews; access when people join, change roles, or leave; timely offboarding; approvals and SoD where policies require them.',
  },
  {
    title: 'Code & Observability',
    detail:
      'What configuration alone misses: Apex, metadata, logs — secrets, PII, handoffs to external systems; scanning across metadata and code.',
  },
]

export default function DefenseLayersGraphic() {
  return (
    <figure
      className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 md:px-6 md:py-7"
      aria-label="Diagram: four layers of control that add friction in a Salesforce environment"
    >
      <figcaption className="mb-5 text-center">
        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-primary/90 mb-1">
          How the pieces fit
        </span>
        <span className="block text-sm text-white/55 leading-snug max-w-[38rem] mx-auto">
          Read top to bottom: platform operations, then how access is designed, then whether it
          stays accurate as people and roles change, then code and logs. After someone has a valid
          session, gaps in any layer widen blast radius — these stack in parallel, not as a
          waterfall.
        </span>
      </figcaption>

      <div className="flex flex-col gap-0 max-w-3xl mx-auto">
        {LAYERS.map((layer, i) => (
          <div
            key={layer.title}
            className={`flex gap-3 pl-3 border-l-2 border-primary/55 py-3.5 ${
              i < LAYERS.length - 1 ? 'border-b border-white/[0.07]' : ''
            }`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white/88 font-display">{layer.title}</p>
              <p className="text-[15px] leading-snug text-white/60 mt-1">{layer.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-center text-xs text-white/40 leading-relaxed max-w-lg mx-auto">
        Not a maturity model — a way to see where drift hides. Reviews often stop at configuration;
        code and logs are the rest of the story.
      </p>
    </figure>
  )
}
