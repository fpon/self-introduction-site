type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-16">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
    </div>
  );
}
