import { cn } from "@/lib/utils";

/**
 * Marca visual reutilizável. Quando a escola ainda não tem logo (ex.: Castelinho),
 * exibimos um selo tipográfico elegante com as iniciais.
 */
export function BrandLogo({
  src,
  nome,
  className,
  imgClassName,
}: {
  src?: string | null;
  nome: string;
  className?: string;
  imgClassName?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={`Logo ${nome}`}
        loading="lazy"
        className={cn("object-contain", imgClassName, className)}
      />
    );
  }

  const initials = nome
    .split(" ")
    .filter((w) => w.length > 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <span
      aria-label={`Marca ${nome}`}
      className={cn(
        "grid place-items-center rounded-2xl bg-primary-soft font-display text-xl font-extrabold text-primary",
        className,
      )}
    >
      {initials}
    </span>
  );
}
