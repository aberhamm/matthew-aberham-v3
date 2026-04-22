import { cn } from '@/lib/utils';

interface SubsectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Subsection = ({ title, children, className }: SubsectionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs italic font-medium text-accent-pop">
        {title}
      </h3>
      <div className={cn('flex flex-col gap-3', className)}>{children}</div>
    </div>
  );
};
