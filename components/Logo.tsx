interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'w-8 h-8' }: LogoProps) {
  return (
    <div
      className={`${className} relative flex-shrink-0`}
      style={{
        background: 'conic-gradient(from 30deg, #FF6D00 0deg 120deg, #FFD600 120deg 240deg, #1A237E 240deg 360deg)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'rgba(255,255,255,0.2)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />
    </div>
  );
}
