import { cn } from '@/lib/utils';
import { HTMLProps } from 'react';

export default function ComponentWrapper({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'bg-background relative flex min-h-[325px] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border select-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
