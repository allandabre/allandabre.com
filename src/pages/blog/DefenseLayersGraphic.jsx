/**
 * =============================================================================
 * DefenseLayersGraphic.jsx — Layered defense diagram for Salesforce security post
 * =============================================================================
 *
 * PURPOSE:
 *   Four complementary control areas after a valid session; ordered design → ops →
 *   lifecycle → technical surface.
 *
 * RESPONSIBILITIES:
 *   - Render one figure with caption and short footnote
 *
 * DEPENDENCIES:
 *   - Used by: ShinyHuntersSalesforce.jsx
 *   - Depends on: React
 *
 * =============================================================================
 */

const LAYERS = [
  {
    title: 'Identity & Entitlements',
    detail:
      'Every identity (user, integration, or app) has the access it needs and nothing more. Roles and permission sets reflect how the business actually operates. OAuth and connected-app consent paths are governed, not open by default.',
  },
  {
    title: 'IT General Controls',
    detail:
      'Changes to production go through a review gate. Privileged access is controlled and monitored. Logs are reviewed on a schedule, not just stored and forgotten.',
  },
  {
    title: 'Lifecycle & Access Reviews',
    detail:
      'Access stays current. Leavers are offboarded promptly, movers are re-evaluated, and periodic reviews confirm permissions still match roles. Segregation of duties is enforced where it matters.',
  },
  {
    title: 'Code & Observability',
    detail:
      'The review goes beyond configuration. Apex, metadata, and logs are scanned for secrets, PII, and integration risk. What\'s running in the environment is understood, not just what\'s configured.',
  },
]

export default function DefenseLayersGraphic() {
  return (
    <figure
      className="my-10 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 md:px-6 md:py-7"
      aria-label="Four complementary control areas after a valid session in a Salesforce environment"
    >
      <div className="max-w-3xl mx-auto border-l border-white/18 pl-5 md:pl-6">
        <figcaption className="mb-6 text-center">
          <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-primary/90 mb-2">
            What a defensible environment looks like
          </span>
          <p className="text-sm text-white/55 leading-relaxed text-balance">
            Four areas where posture is either strong or quietly drifting. Most environments have gaps in at least two.
          </p>
        </figcaption>

        {LAYERS.map((layer, i) => (
          <div
            key={layer.title}
            className={`flex gap-4 ${i < LAYERS.length - 1 ? 'pb-5 mb-5 border-b border-white/[0.08]' : 'pb-0'}`}
          >
            <span
              className="mt-0.5 w-7 shrink-0 text-right text-[11px] font-semibold tabular-nums text-primary/55"
              aria-hidden
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-white/90 font-display tracking-tight">
                {layer.title}
              </p>
              <p className="text-[15px] leading-relaxed text-white/58 mt-1.5">{layer.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 pt-4 border-t border-white/[0.08] text-center text-xs text-white/42 leading-relaxed max-w-3xl mx-auto">
        A risk lens, not a maturity score. Configuration reviews often stop at metadata; code and
        logs complete the picture.
      </p>
    </figure>
  )
}
