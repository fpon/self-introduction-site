type SectionHeaderProps = {
  title: string;
  subtitle: string;
  description: string;
};

export function SectionHeader({
  title,
  subtitle,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="text-sm font-medium uppercase tracking-wider text-primary">
        {subtitle}
      </span>
      <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-4 text-muted">{description}</p>
    </div>
  );
}
