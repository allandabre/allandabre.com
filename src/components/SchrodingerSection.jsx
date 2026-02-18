import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function SchrodingerSection() {
  const canvasRef = useRef(null)
  const [headRef, headVis] = useScrollReveal()
  const [bodyRef, bodyVis] = useScrollReveal()
  const [noteRef, noteVis] = useScrollReveal()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let t = 0
    let rafId

    function setSize() {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(rect.width, 200) * dpr
      canvas.height = 215 * dpr
    }

    function draw() {
      const W = canvas.width
      const H = canvas.height
      const dpr = window.devicePixelRatio || 1
      ctx.clearRect(0, 0, W, H)

      const leftPad = 42 * dpr   // dedicated strip for Y-axis label
      const plotW = W - leftPad  // usable plot width
      const centerY = H / 2
      const amplitude = H * 0.36
      const k = 5.5
      const omega = 2.2
      const gamma = 2.8

      const fs = Math.round(11 * dpr)
      ctx.font = `${fs}px 'Courier New', monospace`

      // ── Y-axis label: rotated in the left padding strip ──
      ctx.save()
      ctx.fillStyle = 'rgba(255,255,255,0.55)'
      ctx.translate(13 * dpr, centerY)
      ctx.rotate(-Math.PI / 2)
      ctx.textAlign = 'center'
      ctx.fillText('RISK EXPOSURE', 0, 0)
      ctx.restore()

      // Faint vertical axis line separating label strip from plot
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255,255,255,0.10)'
      ctx.lineWidth = 1 * dpr
      ctx.moveTo(leftPad, 0)
      ctx.lineTo(leftPad, H - 28 * dpr)
      ctx.stroke()

      // ── Control Framework: dashed decay envelope ──
      ctx.setLineDash([5 * dpr, 5 * dpr])
      ctx.strokeStyle = 'rgba(13,148,136,0.45)'
      ctx.lineWidth = 1.5 * dpr
      ctx.shadowBlur = 0
      ctx.beginPath()
      for (let px = 0; px <= plotW; px++) {
        const x = px / plotW
        const y = centerY - amplitude * Math.exp(-gamma * x)
        if (px === 0) ctx.moveTo(leftPad + px, y)
        else ctx.lineTo(leftPad + px, y)
      }
      ctx.stroke()
      ctx.beginPath()
      for (let px = 0; px <= plotW; px++) {
        const x = px / plotW
        const y = centerY + amplitude * Math.exp(-gamma * x)
        if (px === 0) ctx.moveTo(leftPad + px, y)
        else ctx.lineTo(leftPad + px, y)
      }
      ctx.stroke()
      ctx.setLineDash([])

      // ── Risk: damped oscillating wave ──
      const gradFill = ctx.createLinearGradient(leftPad, 0, W, 0)
      gradFill.addColorStop(0, 'rgba(13,148,136,0.16)')
      gradFill.addColorStop(0.55, 'rgba(13,148,136,0.05)')
      gradFill.addColorStop(1, 'rgba(13,148,136,0.00)')
      ctx.beginPath()
      ctx.fillStyle = gradFill
      ctx.moveTo(leftPad, centerY)
      for (let px = 0; px <= plotW; px++) {
        const x = px / plotW
        const env = Math.exp(-gamma * x)
        ctx.lineTo(leftPad + px, centerY - amplitude * env * Math.sin(k * x * 2 * Math.PI - omega * t))
      }
      ctx.lineTo(W, centerY)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.strokeStyle = '#0d9488'
      ctx.lineWidth = 2.5 * dpr
      ctx.shadowColor = '#0d9488'
      ctx.shadowBlur = 12 * dpr
      for (let px = 0; px <= plotW; px++) {
        const x = px / plotW
        const env = Math.exp(-gamma * x)
        const y = centerY - amplitude * env * Math.sin(k * x * 2 * Math.PI - omega * t)
        if (px === 0) ctx.moveTo(leftPad + px, y)
        else ctx.lineTo(leftPad + px, y)
      }
      ctx.stroke()
      ctx.shadowBlur = 0

      // ── Baseline (dashed horizontal zero line) ──
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255,255,255,0.18)'
      ctx.lineWidth = 1 * dpr
      ctx.setLineDash([4 * dpr, 6 * dpr])
      ctx.moveTo(leftPad, centerY)
      ctx.lineTo(W, centerY)
      ctx.stroke()
      ctx.setLineDash([])

      // "High" tick — next to the wave peak on the left
      ctx.fillStyle = 'rgba(255,255,255,0.45)'
      ctx.textAlign = 'left'
      ctx.fillText('High', leftPad + 5 * dpr, centerY - amplitude + 14 * dpr)

      // X-axis endpoint labels
      ctx.fillStyle = 'rgba(255,255,255,0.50)'
      ctx.textAlign = 'left'
      ctx.fillText('← Transformation Start', leftPad + 4 * dpr, H - 20 * dpr)
      ctx.textAlign = 'right'
      ctx.fillText('Stable Environment →', W - 4 * dpr, H - 20 * dpr)

      // X-axis title
      ctx.textAlign = 'center'
      ctx.fillStyle = 'rgba(255,255,255,0.28)'
      ctx.fillText('CONTROL MATURITY OVER TIME', leftPad + plotW / 2, H - 6 * dpr)

      t += 0.014
      rafId = requestAnimationFrame(draw)
    }

    setSize()
    draw()

    const ro = new ResizeObserver(() => { setSize() })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
    }
  }, [])

  return (
    <section className="bg-dark-soft py-14 md:py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — transformation narrative */}
          <div className="flex-1 text-center lg:text-left">
            <span
              ref={headRef}
              className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-5 transition-all duration-700 ${
                headVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Enterprise Risk Transformation
            </span>

            <div
              ref={bodyRef}
              className={`mb-6 transition-all duration-700 delay-150 ${
                bodyVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold leading-[1.15] tracking-tight text-white mb-4">
                Transformation spikes risk.<br />
                <span className="text-primary">Controls bring stability.</span>
              </h2>
              <p className="text-sm text-white/45 leading-relaxed max-w-[400px] mx-auto lg:mx-0">
                Every major enterprise transformation — a new system go-live, a merger,
                a regulatory change — introduces volatility. Risk is high, processes are
                unsettled, and control gaps emerge. As a control framework is designed
                and implemented, the environment matures: volatility decreases, exposure
                is contained, and the organisation reaches a stable, auditable state.
              </p>
            </div>

            <p
              ref={noteRef}
              className={`text-sm text-white/30 leading-relaxed max-w-[400px] mx-auto lg:mx-0 transition-all duration-700 delay-300 ${
                noteVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              I build the control architectures that drive this transition — from
              high-risk turbulence at transformation start to a controlled,
              reliable enterprise environment.
            </p>
          </div>

          {/* Right — animated wave */}
          <div className="flex-1 w-full max-w-[560px]">
            <canvas
              ref={canvasRef}
              className="w-full block"
              style={{ height: '215px' }}
              aria-label="Animated chart showing risk exposure decreasing over control maturity time during enterprise transformation"
            />
            {/* Legend — two items only */}
            <div className="flex items-center justify-center gap-8 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-[2.5px] bg-primary rounded-full" style={{ boxShadow: '0 0 6px #0d9488' }} />
                <span className="text-[10px] text-white/30 uppercase tracking-wider font-mono">Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-[1.5px] border-t-2 border-dashed border-primary/45" />
                <span className="text-[10px] text-white/30 uppercase tracking-wider font-mono">Control Framework</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
