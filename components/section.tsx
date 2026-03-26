import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ title, children, className }: SectionProps) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-widest font-mono text-accent-pop">{title}</h2>
      <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    </section>
  );
};
