import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container, SectionHeading } from "@/components/site/Section";
import { diferenciais } from "@/content/grupo";

const icons: Record<string, LucideIcon> = {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Sprout,
  Users,
};

export function DiferenciaisSection() {
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow="Diferenciais" title="O que nos move" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item) => {
            const Icon = icons[item.icon] ?? Sprout;
            return (
              <div
                key={item.title}
                className="card-hover rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
