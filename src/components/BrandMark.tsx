interface BrandMarkProps {
  compact?: boolean;
}

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <span className="brand-mark" aria-label="쿠러그">
      <span className="brand-symbol" aria-hidden="true">
        <span />
        <span />
      </span>
      {!compact && <span className="brand-text">쿠러그</span>}
    </span>
  );
}
