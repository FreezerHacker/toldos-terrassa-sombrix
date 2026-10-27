export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="var(--color-primary)" />
      <path d="M8 14h32l4 12H4Z" fill="var(--color-accent)" />
      <path d="M14.4 14h6.4l-1.6 12h-7.2Zm12.8 0h6.4l2.4 12h-7.2Z" fill="var(--color-paper)" />
      <path d="M4 26a3.33 3.33 0 0 0 6.67 0 3.33 3.33 0 0 0 6.66 0 3.33 3.33 0 0 0 6.67 0 3.33 3.33 0 0 0 6.67 0 3.33 3.33 0 0 0 6.66 0A3.33 3.33 0 0 0 44 26Z" fill="var(--color-accent)" />
      <rect x="7" y="11" width="34" height="4" rx="2" fill="var(--color-sun)" />
      <rect x="10" y="34" width="28" height="3" rx="1.5" fill="var(--color-paper)" opacity=".35" />
    </svg>
  );
}
