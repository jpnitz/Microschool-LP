type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="section-tight">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="headline mt-4 max-w-4xl">{title}</h1>
          <p className="subhead mt-6 max-w-3xl">{description}</p>
        </div>
        {children ? <div>{children}</div> : null}
      </div>
    </section>
  );
}
