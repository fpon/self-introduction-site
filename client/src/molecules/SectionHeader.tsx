type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">{title}</h2>
  );
}
