import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const DURATION = 4000

function easeOut(t) {
  return 1 - (1 - t) ** 3
}

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

// Clean exponential decay — no spike, no kink
function riskNorm(x) {
  return 0.08 + 0.85 * Math.exp(-x * 3.0)
}

// Sigmoid rise
function controlNorm(x) {
  return 0.04 + 0.88 * sigmoid(x * 6 - 3.6)
}

export default function SchrodingerSection() {
  const canvasRef = useRef(null)
  const [headRef, headVis] = useScrollReveal()
  const [bodyRef, bodyVis] = useScrollReveal()
  const [noteRef, noteVis] = useScrollReveal()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let rafId
    let startTime = null
    let phase = 'idle'
    let pulseT  = 0
    let pulseStart = null
    let hasPlayed = false

    function setSize() {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(rect.width, 200) * dpr
      canvas.height = 280 * dpr
    }

    function layout() {
      const dpr = window.devicePixelRatio || 1
      const W = canvas.width, H = canvas.height
      const leftPad  = 52 * dpr
      const rightPad = 12 * dpr
      const topPad   = 24 * dpr
      const botPad   = 44 * dpr
      const avail    = H - topPad - botPad
      const plotW    = W - leftPad - rightPad
      return { W, H, dpr, leftPad, rightPad, topPad, botPad, avail, plotW }
    }

    function drawFrame(drawProgress, pT) {
      const { W, H, dpr, leftPad, topPad, botPad, avail, plotW } = layout()
      ctx.clearRect(0, 0, W, H)

      // Animation sub-phases:
      // 0.00–0.12 → axes/grid fade in
      // 0.12–0.88 → lines draw left→right with glowing tips
      // 0.88–1.00 → crossover dot pops in
      const axisAlpha  = Math.min(drawProgress / 0.12, 1)
      const lineT      = Math.max(0, Math.min((drawProgress - 0.12) / 0.76, 1))
      const crossAlpha = Math.max(0, (drawProgress - 0.88) / 0.12)

      const rY = (x) => topPad + avail * (1 - riskNorm(x))
      const cY = (x) => topPad + avail * (1 - controlNorm(x))
      const maxPx = Math.floor(plotW * easeOut(lineT))

      // ── Grid ──
      ctx.globalAlpha = axisAlpha * 0.07
      ctx.setLineDash([4 * dpr, 6 * dpr])
      ctx.strokeStyle = 'rgba(255,255,255,1)'
      ctx.lineWidth = 1 * dpr
      for (let i = 0; i <= 4; i++) {
        const y = topPad + avail * (i / 4)
        ctx.beginPath()
        ctx.moveTo(leftPad, y)
        ctx.lineTo(leftPad + plotW, y)
        ctx.stroke()
      }
      ctx.setLineDash([])
      ctx.globalAlpha = 1

      // ── Axes ──
      ctx.globalAlpha = axisAlpha
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255,255,255,0.18)'
      ctx.lineWidth = 1 * dpr
      ctx.moveTo(leftPad, topPad)
      ctx.lineTo(leftPad, H - botPad)
      ctx.lineTo(leftPad + plotW, H - botPad)
      ctx.stroke()

      // Y-axis label
      const fs = Math.round(11 * dpr)
      ctx.font = `600 ${fs}px 'Courier New', monospace`
      ctx.save()
      ctx.fillStyle = 'rgba(255,255,255,0.75)'
      ctx.translate(14 * dpr, topPad + avail / 2)
      ctx.rotate(-Math.PI / 2)
      ctx.textAlign = 'center'
      ctx.fillText('LEVEL', 0, 0)
      ctx.restore()

      ctx.fillStyle = 'rgba(255,255,255,0.65)'
      ctx.textAlign = 'right'
      ctx.fillText('High', leftPad - 6 * dpr, topPad + 4 * dpr)
      ctx.fillText('Low',  leftPad - 6 * dpr, H - botPad + 4 * dpr)

      ctx.globalAlpha = 1

      // ── Risk area fill ──
      if (maxPx > 0) {
        const rGrad = ctx.createLinearGradient(leftPad, topPad, leftPad, H - botPad)
        rGrad.addColorStop(0, 'rgba(239,68,68,0.22)')
        rGrad.addColorStop(1, 'rgba(239,68,68,0.02)')
        ctx.beginPath()
        ctx.fillStyle = rGrad
        ctx.moveTo(leftPad, H - botPad)
        for (let px = 0; px <= maxPx; px++) ctx.lineTo(leftPad + px, rY(px / plotW))
        ctx.lineTo(leftPad + maxPx, H - botPad)
        ctx.closePath()
        ctx.fill()
      }

      // ── Control area fill ──
      if (maxPx > 0) {
        const cGrad = ctx.createLinearGradient(leftPad, topPad, leftPad, H - botPad)
        cGrad.addColorStop(0, 'rgba(13,148,136,0.02)')
        cGrad.addColorStop(1, 'rgba(13,148,136,0.22)')
        ctx.beginPath()
        ctx.fillStyle = cGrad
        ctx.moveTo(leftPad, H - botPad)
        for (let px = 0; px <= maxPx; px++) ctx.lineTo(leftPad + px, cY(px / plotW))
        ctx.lineTo(leftPad + maxPx, H - botPad)
        ctx.closePath()
        ctx.fill()
      }

      // ── Risk line ──
      if (maxPx > 0) {
        ctx.beginPath()
        ctx.strokeStyle = '#f87171'
        ctx.lineWidth = 2.5 * dpr
        ctx.shadowColor = '#f87171'
        ctx.shadowBlur = 8 * dpr
        for (let px = 0; px <= maxPx; px++) {
          const y = rY(px / plotW)
          if (px === 0) ctx.moveTo(leftPad, y)
          else ctx.lineTo(leftPad + px, y)
        }
        ctx.stroke()
        ctx.shadowBlur = 0

        // Glowing draw-head
        if (lineT < 1) {
          const tipY = rY(maxPx / plotW)
          ctx.beginPath()
          ctx.arc(leftPad + maxPx, tipY, 5 * dpr, 0, Math.PI * 2)
          ctx.fillStyle = '#fca5a5'
          ctx.shadowColor = '#f87171'
          ctx.shadowBlur = 16 * dpr
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      // ── Control line ──
      if (maxPx > 0) {
        ctx.beginPath()
        ctx.strokeStyle = '#0d9488'
        ctx.lineWidth = 2.5 * dpr
        ctx.shadowColor = '#0d9488'
        ctx.shadowBlur = 8 * dpr
        for (let px = 0; px <= maxPx; px++) {
          const y = cY(px / plotW)
          if (px === 0) ctx.moveTo(leftPad, y)
          else ctx.lineTo(leftPad + px, y)
        }
        ctx.stroke()
        ctx.shadowBlur = 0

        // Glowing draw-head
        if (lineT < 1) {
          const tipY = cY(maxPx / plotW)
          ctx.beginPath()
          ctx.arc(leftPad + maxPx, tipY, 5 * dpr, 0, Math.PI * 2)
          ctx.fillStyle = '#5eead4'
          ctx.shadowColor = '#0d9488'
          ctx.shadowBlur = 16 * dpr
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      // ── Find crossover ──
      let crossPx = null, crossY = null
      for (let px = 0; px < plotW - 1; px++) {
        const d0 = rY(px / plotW) - cY(px / plotW)
        const d1 = rY((px + 1) / plotW) - cY((px + 1) / plotW)
        if (d0 * d1 < 0) {
          const a = d0 / (d0 - d1)
          crossPx = px + a
          crossY  = rY(px / plotW) + a * (rY((px + 1) / plotW) - rY(px / plotW))
          break
        }
      }

      // ── Crossover marker ──
      if (crossPx !== null && crossAlpha > 0) {
        const popScale = crossAlpha < 0.6
          ? 1 + 0.4 * Math.sin((crossAlpha / 0.6) * Math.PI)
          : 1

        ctx.globalAlpha = Math.min(crossAlpha * 2, 1)

        // Pulsing outer ring (once fully visible)
        if (crossAlpha >= 1) {
          const r = (14 + 4 * Math.sin(pT * Math.PI * 2)) * dpr
          ctx.beginPath()
          ctx.arc(leftPad + crossPx, crossY, r, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255,255,255,${0.12 + 0.08 * Math.sin(pT * Math.PI * 2)})`
          ctx.lineWidth = 1.5 * dpr
          ctx.stroke()
        }

        // Static outer ring (while appearing)
        ctx.beginPath()
        ctx.arc(leftPad + crossPx, crossY, 11 * popScale * dpr, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255,255,255,0.28)'
        ctx.lineWidth = 1.5 * dpr
        ctx.stroke()

        // Inner dot
        ctx.beginPath()
        ctx.arc(leftPad + crossPx, crossY, 5 * popScale * dpr, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 10 * dpr
        ctx.fill()
        ctx.shadowBlur = 0

        // Label
        ctx.font = `900 ${Math.round(13 * dpr)}px 'Courier New', monospace`
        ctx.fillStyle = '#ffffff'
        ctx.shadowColor = '#ffffff'
        ctx.shadowBlur = 12 * dpr
        ctx.textAlign = 'center'
        ctx.fillText('GO-LIVE', leftPad + crossPx, crossY - 28 * dpr)
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }

      // ── X-axis labels ──
      ctx.font = `600 ${fs}px 'Courier New', monospace`
      ctx.globalAlpha = axisAlpha
      ctx.fillStyle = 'rgba(255,255,255,0.55)'
      ctx.textAlign = 'left'
      ctx.fillText('← Transformation Start', leftPad + 4 * dpr, H - botPad + 18 * dpr)
      ctx.textAlign = 'right'
      ctx.fillText('Mature State →', leftPad + plotW, H - botPad + 18 * dpr)
      ctx.textAlign = 'center'
      ctx.fillStyle = 'rgba(255,255,255,0.35)'
      ctx.fillText('TIME', leftPad + plotW / 2, H - 6 * dpr)
      ctx.globalAlpha = 1
    }

    function startAnimation() {
      cancelAnimationFrame(rafId)
      startTime = null
      pulseStart = null
      pulseT = 0
      phase = 'drawing'

      rafId = requestAnimationFrame(function tick(ts) {
        if (!startTime) startTime = ts
        const raw = Math.min((ts - startTime) / DURATION, 1)
        drawFrame(raw, 0)
        if (raw < 1) {
          rafId = requestAnimationFrame(tick)
        } else {
          phase = 'pulse'
          rafId = requestAnimationFrame(pulseTick)
        }
      })
    }

    function pulseTick(ts) {
      if (!pulseStart) pulseStart = ts
      pulseT = ((ts - pulseStart) / 2000) % 1
      drawFrame(1, pulseT)
      if (phase === 'pulse') rafId = requestAnimationFrame(pulseTick)
    }

    function stopAll() {
      cancelAnimationFrame(rafId)
      phase = 'idle'
    }

    setSize()

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasPlayed) {
            hasPlayed = true
            startAnimation()
          } else if (phase === 'idle') {
            // Resume pulse only — no re-draw
            phase = 'pulse'
            rafId = requestAnimationFrame(pulseTick)
          }
        } else {
          stopAll()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(canvas)

    const ro = new ResizeObserver(() => {
      setSize()
      if (phase === 'idle') drawFrame(1, 0)
    })
    ro.observe(canvas)

    return () => {
      stopAll()
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  return (
    <section className="bg-dark-soft py-14 md:py-20 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left */}
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
                When I'm embedded from the start of a transformation, the control framework
                is built in parallel — not bolted on after. Risk is actively managed as
                the program progresses, so that by the time you reach Go-Live, controls
                are already in place, tested, and operating. You arrive at go-live in a
                controlled state — not scrambling to catch up.
              </p>
            </div>

            <p
              ref={noteRef}
              className={`text-sm text-white/30 leading-relaxed max-w-[400px] mx-auto lg:mx-0 transition-all duration-700 delay-300 ${
                noteVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              I build the control architectures during transformation — so Go-Live
              is a milestone, not a moment of exposure.
            </p>
          </div>

          {/* Right */}
          <div className="flex-1 w-full max-w-[560px]">
            <canvas
              ref={canvasRef}
              className="w-full block"
              style={{ height: '280px' }}
              aria-label="Animated chart showing risk exposure declining and control maturity rising over time, crossing at the stabilization point"
            />
            <div className="flex items-center justify-center gap-8 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-[2.5px] rounded-full bg-[#f87171]" style={{ boxShadow: '0 0 6px #f87171' }} />
                <span className="text-[10px] text-white/35 uppercase tracking-wider font-mono">Risk Exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-[2.5px] rounded-full bg-primary" style={{ boxShadow: '0 0 6px #0d9488' }} />
                <span className="text-[10px] text-white/35 uppercase tracking-wider font-mono">Control Maturity</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
