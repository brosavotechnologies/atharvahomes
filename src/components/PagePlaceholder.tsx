export function PagePlaceholder({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-28 pt-40 lg:px-10">
      <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
      <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.15] text-foreground md:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-14 h-px w-24 bg-border" />
    </section>
  );
}
