/**
 * =============================================================================
 * AttackPathGraphic.jsx — Five-step attack timeline (blog)
 * =============================================================================
 *
 * PURPOSE:
 *   Vertical timeline: attacker action + why the environment allowed it.
 *   Circle color warms as impact escalates (severity, not blame).
 *
 * DEPENDENCIES:
 *   - Used by: ShinyHuntersSalesforce.jsx
 *
 * =============================================================================
 */

const STEPS = [
  {
    title: 'Attacker contacts an employee, impersonates IT support',
    gap: 'Vishing — weak or missing verification for “IT” on a cold call or message.',
    circle: 'bg-white/[0.12] border-white/25 text-white/90',
  },
  {
    title: 'Employee enters credentials or approves a connected app',
    gap: 'Ungoverned OAuth, shared or generic accounts, or MFA gaps on the path.',
    circle: 'bg-white/[0.12] border-white/25 text-white/90',
  },
  {
    title: 'Attacker holds a valid session with real permissions',
    gap: 'Over-permissioned roles, stale identities, infrequent access reviews.',
    circle: 'bg-amber-950/80 border-amber-700/50 text-amber-100/95',
  },
  {
    title: 'Lateral movement — exports, integrations, code and logs',
    gap: 'Secrets or PII in Apex, error streams to third parties, integration sprawl.',
    circle: 'bg-red-950/70 border-red-700/55 text-red-100/95',
  },
  {
    title: 'Extortion pressure — pay or leak',
    gap: 'Data exposure, notifications, regulatory and trust impact.',
    circle: 'bg-red-950 border-red-600/70 text-red-50',
  },
]

export default function AttackPathGraphic() {
  return (
    <figure
      className="my-8 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 sm:px-6 sm:py-7"
      aria-label="Five-step attack path from initial contact to impact"
    >
      <figcaption className="mb-6">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/90 text-center">
          A typical attack path (simplified)
        </span>
        <span className="block text-xs text-white/50 mt-2 text-center leading-snug max-w-xl mx-auto">
          Headlines describe what happened; subtext is usually where the environment had room to give.
        </span>
      </figcaption>

      <div className="max-w-2xl mx-auto">
        {STEPS.map((step, i) => (
          <div key={step.title}>
            <div className="flex gap-4">
              <div className="flex w-8 shrink-0 justify-center">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs font-bold font-display ${step.circle}`}
                >
                  {i + 1}
                </div>
              </div>
              <div className={`min-w-0 ${i < STEPS.length - 1 ? '' : 'pb-1'}`}>
                <p className="text-[15px] sm:text-base font-semibold text-white/92 leading-snug">
                  {step.title}
                </p>
                <p className="text-[13px] sm:text-sm text-white/50 mt-1.5 leading-relaxed">{step.gap}</p>
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className="flex gap-4 -mt-2 mb-2">
                <div className="flex w-8 shrink-0 justify-center">
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-white/10" aria-hidden />
                </div>
                <div className="flex-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-2 text-center text-[11px] text-white/38 max-w-sm mx-auto leading-snug">
        No zero-day required — social engineering plus trust and access already in the org.
      </p>
    </figure>
  )
}
