interface ExperienceProps {
  name: string;
  description: string;
  href?: string;
  period: {
    start: string;
    end: string;
  };
}

export default function Experience({
  name,
  description,
  href,
  period,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-row items-center gap-2">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-xs font-mono text-muted-foreground tracking-wide">
          {period.start} - {period.end}
        </span>
      </div>
      <p className="text-secondary-foreground text-sm">{description}</p>
    </div>
  );
}
