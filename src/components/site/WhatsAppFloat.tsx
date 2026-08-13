import { ExternalLink } from "@/components/site/ExternalLink";
import { MessageCircle } from "lucide-react";

import { whatsappLink } from "@/content/site";

export function WhatsAppFloat() {
  return (
    <ExternalLink
      href={whatsappLink}
      aria-label="Falar pelo WhatsApp com a Escola Castelo do Criar"
      className="fixed right-4 bottom-4 z-50 flex min-h-14 items-center gap-2 rounded-full bg-[oklch(0.68_0.16_150)] px-4 py-3 font-bold text-white shadow-lift transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </ExternalLink>
  );
}
