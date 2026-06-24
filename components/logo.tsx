// app/components/logo.tsx
export default function DimoraIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Main shape - modern abstract design */}
      <path
        d="
          M256 30
          L420 130
          V320
          C420 380 375 420 320 420
          H200
          C250 380 280 330 280 280
          C280 190 210 130 130 130
          C100 130 75 135 55 145
          V130
          Z
        "
        fill="#062A78"
      />

      {/* Overlay shape for depth */}
      <path
        d="
          M55 145
          C100 130 130 130 155 130
          C240 130 310 200 310 285
          C310 330 290 380 255 420
          H10
          V145
          Z
        "
        fill="transparent"
        stroke="#062A78"
        strokeWidth="2"
      />

      {/* Accent element */}
      <circle
        cx="120"
        cy="280"
        r="40"
        fill="#F0B90B"
      />

      {/* Inner accent */}
      <circle
        cx="120"
        cy="280"
        r="20"
        fill="#062A78"
        opacity="0.3"
      />
    </svg>
  );
}