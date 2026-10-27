export default function Valance({ tone = 'accent' }: { tone?: 'accent' | 'primary' | 'surface' | 'paper' }) {
  return <div className={`valance valance--${tone}`} aria-hidden="true" />;
}
