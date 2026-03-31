import { Clock } from './clock';

export function Footer() {
  return (
    <footer className="text-muted-foreground row-start-3 flex w-full flex-col-reverse items-start justify-between text-xs font-mono sm:flex-row sm:items-center">
      <span className="text-muted-foreground">
        © {new Date().getFullYear()} Matthew Aberham
      </span>
      <Clock />
    </footer>
  );
}
