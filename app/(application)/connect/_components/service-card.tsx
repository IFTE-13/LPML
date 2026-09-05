interface ServiceCardProps {
  title: string;
  description: string;
}

export function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="border border-border bg-card p-6">
      <h3 className="font-serif text-xl text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}