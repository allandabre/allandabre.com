export default function Logo({ size = 36, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-label="Allan Dabre logo"
    >
      {/* Rounded square container */}
      <rect width="48" height="48" rx="10" fill="currentColor" />
      {/* A — geometric, clean peak with crossbar */}
      <path
        d="M10.5 36L18.5 12h1l8 24"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 28h10"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      {/* D — vertical stem with curved bowl */}
      <path
        d="M31 12v24"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M31 12h4c5.5 0 9 4.8 9 12s-3.5 12-9 12h-4"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
