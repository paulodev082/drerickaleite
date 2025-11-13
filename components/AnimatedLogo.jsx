// components/AnimatedLogo.jsx
export default function AnimatedLogo({ className = "", small = false }) {
  const size = small ? 36 : 48;
  return (
    <div className={className} aria-hidden>
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="80" height="80" rx="8" fill="#4C0C16"/>
        <path d="M20 55 L40 20 L60 55" stroke="#D9AD6A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="50%" y="70%" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="12" fill="#D9AD6A">EL</text>
      </svg>
    </div>
  );
}
