interface ContourRingsProps { className?: string; color?: string; }

export default function ContourRings({ className = "", color = "#434A42" }: ContourRingsProps) {
  return (
    <div className={`contour-rings ${className}`}>
      <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="300" cy="300" r="80" stroke={color} strokeWidth="1" />
        <circle cx="300" cy="300" r="140" stroke={color} strokeWidth="1" />
        <circle cx="300" cy="300" r="200" stroke={color} strokeWidth="1" />
        <path d="M60 300c0-60 40-120 100-150" stroke={color} strokeWidth="1" />
        <circle cx="300" cy="300" r="260" stroke={color} strokeWidth="1" />
        <path d="M540 300c0 80-50 150-130 180" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  );
}