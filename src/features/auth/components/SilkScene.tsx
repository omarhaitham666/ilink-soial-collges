import { useEffect, useRef } from 'react'

type Point = readonly [number, number]
type Curve = readonly [Point, Point, Point, Point, Point, Point, Point]
type Face = {
  outer: Curve
  inner: Curve
  tones: readonly [number, string][]
  side: 'left' | 'right'
  rim?: boolean
}

// Coordinates follow the left panel of the reference at 417 × 512.
// Each boundary is made from two connected cubic Bézier curves.
const leftTop: Curve = [
  [-20, 311], [45, 306], [76, 285], [117, 262],
  [160, 238], [188, 240], [219, 240],
]
const leftFold: Curve = [
  [-20, 379], [41, 378], [79, 365], [103, 334],
  [124, 296], [124, 248], [219, 240],
]
const leftBottom: Curve = [
  [-20, 490], [41, 447], [86, 395], [103, 334],
  [164, 278], [144, 256], [219, 240],
]

const rightBottom: Curve = [
  [219, 240], [247, 228], [261, 187], [300, 186],
  [347, 186], [380, 193], [425, 112],
]
const rightCorner: Curve = [
  [349, 139], [360, 117], [337, 76], [378, 30],
  [390, 11], [398, -1], [410, -17],
]
const rightLip: Curve = [
  [349, 139], [364, 131], [375, 106], [379, 72],
  [381, 39], [384, 21], [410, -17],
]
const rightOuter: Curve = [
  [349, 139], [372, 135], [403, 127], [425, 116],
  [445, 77], [427, 18], [425, -18],
]

// Draw the dark underside first, then the face that catches the light.
// Continuous upper-right satin fold.
// First cubic: tip to shoulder. Second cubic: shoulder to outer edge.
const rightRolledEdge: Curve = [
  [219, 240],
  [248, 231], [237, 184], [302, 155],
  [336, 141], [376, 137], [425, 112],
]
const faces: Face[] = [
  {
    outer: leftFold, inner: leftBottom, side: 'left',
    tones: [[0, '#39283f'], [.26, '#48364f'], [.64, '#68536f'], [1, '#ad94b7']],
  },
  {
    outer: leftTop, inner: leftFold, side: 'left', rim: true,
    tones: [[0, '#887392'], [.28, '#61506d'], [.54, '#776382'],
      [.78, '#b5a0c2'], [.94, '#e6d4f1'], [1, '#cdaedd']],
  },
  {
    outer: rightRolledEdge, inner: rightBottom, side: 'right',
    tones: [[0, '#c1a7cf'], [.25, '#a28aad'], [.60, '#796781'], [1, '#45374e']],
  },
  {
    outer: rightCorner, inner: rightLip, side: 'right',
    tones: [[0, '#57465f'], [.35, '#d5c2e0'], [.67, '#9985a5'], [1, '#514059']],
  },
  {
    outer: rightLip, inner: rightOuter, side: 'right', rim: true,
    tones: [[0, '#54435f'], [.20, '#67536f'], [.56, '#8f789b'],
      [.80, '#bda5ca'], [1, '#f1dff9']],
  },
]

// Close the small triangular turn where the upper-right fold rolls over.

function between(a: number, b: number, amount: number) {
  return a + (b - a) * amount
}

function threadPath(a: Curve, b: Curve, amount: number) {
  const pts = a.map(([x, y], i) => [
    between(x, b[i][0], amount),
    between(y, b[i][1], amount),
  ])
  const p = new Path2D()
  p.moveTo(pts[0][0], pts[0][1])
  for (const i of [1, 4]) {
    p.bezierCurveTo(
      pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1],
      pts[i + 2][0], pts[i + 2][1],
    )
  }
  return p
}

function facePath(a: Curve, b: Curve) {
  const p = threadPath(a, a, 0)
  p.lineTo(b[6][0], b[6][1])
  for (const i of [5, 2]) {
    p.bezierCurveTo(
      b[i][0], b[i][1], b[i - 1][0], b[i - 1][1],
      b[i - 2][0], b[i - 2][1],
    )
  }
  p.closePath()
  return p
}

// Two independent lengths of silk, pinned where their tips meet.
// Neighboring sections share tension. The broad sections carry more motion.
function createSilkDynamics() {
  const count = 13
  const makeStrip = () => ({
    offset: new Float64Array(count),
    speed: new Float64Array(count),
    twist: new Float64Array(count),
    spin: new Float64Array(count),
  })

  const left = makeStrip()
  const right = makeStrip()
  const step = 1 / 120
  let clock = 0
  let remainder = 0
  let lastTime = 0

  function advanceStrip(strip: typeof left, phase: number) {
    // Propagate forces first, then update positions together.
    for (let i = 1; i < count; i++) {
      const u = i / (count - 1)
      const next = Math.min(i + 1, count - 1)

      const wind =
        Math.sin(clock * 0.48 - u * 4.1 + phase) +
        0.24 * Math.sin(clock * 0.81 - u * 6.0 + phase * 1.7)

      const roll =
        Math.sin(clock * 0.43 - u * 5.2 + phase + 0.65)

      const stretch =
        strip.offset[i - 1] + strip.offset[next] - 2 * strip.offset[i]
      const torsion =
        strip.twist[i - 1] + strip.twist[next] - 2 * strip.twist[i]

      const targetOffset = wind * u * 15
      const targetTwist = roll * Math.sin(u * 1.75) * 0.32

      strip.speed[i] += step * (
        37 * stretch +
        8.5 * (targetOffset - strip.offset[i]) -
        4.8 * strip.speed[i]
      )

      strip.spin[i] += step * (
        30 * torsion +
        7 * (targetTwist - strip.twist[i]) -
        4.3 * strip.spin[i]
      )
    }

    for (let i = 1; i < count; i++) {
      strip.offset[i] += strip.speed[i] * step
      strip.twist[i] += strip.spin[i] * step
    }
  }

  function advance(seconds: number) {
    remainder += Math.min(0.08, Math.max(0, seconds - lastTime))
    lastTime = seconds

    while (remainder >= step) {
      clock += step
      advanceStrip(left, 0.20)
      advanceStrip(right, 1.55)
      remainder -= step
    }
  }

  function sample(values: Float64Array, distance: number) {
    const index = Math.min(1, Math.max(0, distance / 300)) * (count - 1)
    const i = Math.floor(index)
    return between(values[i], values[Math.min(count - 1, i + 1)], index - i)
  }

  function pose(point: Point): Point {
    const [x, y] = point
    const dx = x - 219
    const dy = y - 240

    // Axes of the reference ribbon, measured from the central tip.
    const along = dx * 0.79 - dy * 0.613
    const cross = dx * 0.613 + dy * 0.79
    const strip = along < 0 ? left : right
    const distance = Math.abs(along)

    const sway = sample(strip.offset, distance)
    const twist = sample(strip.twist, distance)

    // Opposite edges move by different amounts as a broad fold rolls.
    const normalShift = sway + cross * twist
    const tangentShift = -cross * twist * 0.30

    return [
      x + normalShift * 0.613 + tangentShift * 0.79,
      y + normalShift * 0.79 - tangentShift * 0.613,
    ]
  }

  function bend(curve: Curve): Curve {
    return [
      pose(curve[0]), pose(curve[1]), pose(curve[2]), pose(curve[3]),
      pose(curve[4]), pose(curve[5]), pose(curve[6]),
    ]
  }

  function sheen(side: Face['side']) {
    const strip = side === 'left' ? left : right
    return sample(strip.twist, 160)
  }

  return { advance, bend, sheen }
}

type SilkDynamics = ReturnType<typeof createSilkDynamics>

function drawFace(ctx: CanvasRenderingContext2D, face: Face, seconds: number, dynamics: SilkDynamics) {
  const a = dynamics.bend(face.outer)
  const b = dynamics.bend(face.inner)
  const outline = facePath(a, b)
  const left = face.side === 'left'

  ctx.save()
  ctx.clip(outline)

  const base = left
    ? ctx.createLinearGradient(45, 295, 100, 397)
    : ctx.createLinearGradient(330, 95, 355, 183)

  for (const [offset, color] of face.tones) base.addColorStop(offset, color)
  ctx.fillStyle = base
  ctx.fill(outline)

  // Individual fine threads curve around each face, following its twist.
  for (let i = 1; i < 100; i++) {
    const fraction = i / 100
    const glint = (Math.sin(i * 17.31) + 1) * 0.5
    ctx.strokeStyle = i % 3 === 0
      ? `rgba(255,235,255,${0.07 + glint * 0.13})`
      : `rgba(34,12,46,${0.035 + glint * 0.08})`
    ctx.lineWidth = 0.32
    ctx.stroke(threadPath(a, b, fraction))
  }

    // Pearl reflection following the folded threads.
  // Movement is deliberately slower than the cloth underneath.
  const phase = seconds * 0.23 + (left ? 0 : 1.4)
  const travel = Math.sin(phase)
  const ridge = 0.62 + dynamics.sheen(face.side) * 0.48 + 0.035 * Math.sin(phase + 0.45)

  // Follow the individual face: the lower fold, upper fold and upright
  // corner each get their own local highlight instead of one screen-wide band.
  const near: Point = [
    between(a[1][0], b[1][0], ridge),
    between(a[1][1], b[1][1], ridge),
  ]
  const far: Point = [
    between(a[5][0], b[5][0], ridge),
    between(a[5][1], b[5][1], ridge),
  ]
  const dx = far[0] - near[0]
  const dy = far[1] - near[1]
  const length = Math.max(1, Math.hypot(dx, dy))
  const ux = dx / length
  const uy = dy / length
  const position = 0.51 + 0.19 * travel
  const cx = between(near[0], far[0], position)
  const cy = between(near[1], far[1], position)
  const span = Math.max(16, length * 0.36)

  function reflectionBand(reach: number, peak: string) {
    const gradient = ctx.createLinearGradient(
      cx - ux * reach, cy - uy * reach,
      cx + ux * reach, cy + uy * reach,
    )
    gradient.addColorStop(0, 'rgba(231,198,252,0)')
    gradient.addColorStop(0.27, 'rgba(231,198,252,0.035)')
    gradient.addColorStop(0.52, peak)
    gradient.addColorStop(0.78, 'rgba(241,213,255,0.055)')
    gradient.addColorStop(1, 'rgba(231,198,252,0)')
    return gradient
  }

  ctx.save()
  ctx.globalCompositeOperation = 'screen'

  // A soft reflection spreads over neighboring threads and narrows naturally
  // as their paths converge near the tip.
  ctx.strokeStyle = reflectionBand(span * 1.3, 'rgba(223,184,249,0.28)')
  ctx.lineWidth = 2.4
  for (let i = -7; i <= 7; i++) {
    ctx.globalAlpha = Math.exp(-(i * i) / 24) * 0.48
    ctx.stroke(threadPath(a, b, ridge + i * 0.019))
  }

  // The strongest glint sits on a few silk fibers inside the soft reflection.
  ctx.globalAlpha = 1
  ctx.strokeStyle = reflectionBand(
    span * 0.78,
    face.rim ? 'rgba(255,249,255,0.96)' : 'rgba(248,229,255,0.63)',
  )
  ctx.lineWidth = 1.05
  ctx.stroke(threadPath(a, b, ridge))

  ctx.lineWidth = 0.48
  ctx.globalAlpha = 0.73
  ctx.stroke(threadPath(a, b, ridge + 0.014))
  ctx.globalAlpha = 0.40
  ctx.stroke(threadPath(a, b, ridge - 0.023))

  // Only the illuminated portion of the turned edge catches a pearl line.
  if (face.rim) {
    ctx.globalAlpha = 0.82
    ctx.strokeStyle = reflectionBand(span * 1.45, 'rgba(255,239,255,0.85)')
    ctx.lineWidth = 0.85
    ctx.stroke(threadPath(b, b, 0))
  }
  ctx.restore()
  ctx.restore()
}

function drawScene(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  seconds: number,
  dynamics: SilkDynamics,
) {
  ctx.clearRect(0, 0, width, height)
  ctx.save()

  // Center the near-touch itself, including on a shallow mobile banner.
  const scale = Math.max(width / 417, height / 512)
  ctx.translate(width * 0.525 - 219 * scale, height * 0.469 - 240 * scale)
  ctx.scale(scale, scale)

  // A low, elongated bloom beneath the tips follows their diagonal.
  ctx.save()
  ctx.translate(219, 240)
  ctx.rotate(-0.43)
  ctx.scale(1, 0.48)
  const bloom = ctx.createRadialGradient(0, 0, 0, 0, 0, 20)
  bloom.addColorStop(0, 'rgba(246,224,255,0.56)')
  bloom.addColorStop(0.18, 'rgba(217,169,249,0.29)')
  bloom.addColorStop(0.52, 'rgba(171,105,217,0.10)')
  bloom.addColorStop(1, 'rgba(141,80,188,0)')
  ctx.fillStyle = bloom
  ctx.fillRect(-20, -20, 40, 40)
  ctx.restore()
  for (const face of faces) {
    drawFace(ctx, face, seconds, dynamics)
  }

  // A tapered filament joins the tips, with the brightest point at its center.
  ctx.save()
  ctx.translate(219, 240)
  ctx.rotate(-0.43)
  const pearl = ctx.createLinearGradient(-6, 0, 6, 0)
  pearl.addColorStop(0, 'rgba(223,175,251,0)')
  pearl.addColorStop(0.32, 'rgba(241,209,255,0.58)')
  pearl.addColorStop(0.53, 'rgba(255,250,255,1)')
  pearl.addColorStop(0.75, 'rgba(239,206,255,0.60)')
  pearl.addColorStop(1, 'rgba(223,175,251,0)')
  ctx.fillStyle = pearl
  ctx.beginPath()
  ctx.moveTo(-6, 0.45)
  ctx.bezierCurveTo(-2.4, 0.2, -1.0, -0.85, 0.5, -0.8)
  ctx.quadraticCurveTo(3.4, -0.72, 6, -0.45)
  ctx.quadraticCurveTo(2.3, -0.1, 0.2, 0.60)
  ctx.quadraticCurveTo(-2.4, 0.70, -6, 0.45)
  ctx.fill()
  ctx.restore()
  ctx.restore()
}

export default function SilkScene() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let previous = 0
    let elapsed = 0
    const dynamics = createSilkDynamics()
    let inView = true
    let width = 1
    let height = 1

    function render(now: number) {
      if (!ctx || !inView || document.hidden) return

      // A calm fabric motion needs only 30 draws per second.
      if (!previous || now - previous >= 32) {
        if (previous && !reduce.matches) {
          elapsed += Math.min((now - previous) / 1000, 0.08)
        }
        previous = now
        dynamics.advance(elapsed)
        drawScene(ctx, width, height, elapsed, dynamics)
      }

      if (!reduce.matches) frame = requestAnimationFrame(render)
    }

    function refresh() {
      if (!canvas || !ctx) return
      cancelAnimationFrame(frame)
      previous = 0
      width = Math.max(1, canvas.clientWidth)
      height = Math.max(1, canvas.clientHeight)
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      const bufferWidth = Math.round(width * dpr)
      const bufferHeight = Math.round(height * dpr)

      if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
        canvas.width = bufferWidth
        canvas.height = bufferHeight
      }

      ctx.setTransform(canvas.width / width, 0, 0, canvas.height / height, 0, 0)
      if (inView && !document.hidden) frame = requestAnimationFrame(render)
    }

    const resize = new ResizeObserver(refresh)
    resize.observe(canvas)
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      refresh()
    })
    observer.observe(canvas)
    reduce.addEventListener('change', refresh)
    document.addEventListener('visibilitychange', refresh)
    refresh()

    return () => {
      cancelAnimationFrame(frame)
      resize.disconnect()
      observer.disconnect()
      reduce.removeEventListener('change', refresh)
      document.removeEventListener('visibilitychange', refresh)
    }
  }, [])

  return (
    <div
      className="auth-silk"
      aria-hidden="true"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse at 51% 48%, #24102e 0%, #110719 52%, #08030e 100%)',
      }}
    >
      <canvas
        ref={ref}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  )
}