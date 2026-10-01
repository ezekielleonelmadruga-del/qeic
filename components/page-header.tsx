import { Reveal } from "@/components/motion/reveal";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
};

/** The intro block at the top of every inner page. */
export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <header className="border-b border-border bg-background pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-qeic-500">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance font-display text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {children ? (
            <div className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {children}
            </div>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
