import Link from 'next/link';
import Icon from './Icon';

export default function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav className="breadcrumbs container" aria-label="Migas de pan">
      <ol>
        {items.map((item, index) => (
          <li key={item.label}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {index < items.length - 1 && <Icon name="arrow" size={13} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
