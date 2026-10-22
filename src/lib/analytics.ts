import { ANALITICA } from "../site.config";

type Win = Window & {
  gtag?: (...a: unknown[]) => void;
  fbq?: (...a: unknown[]) => void;
  dataLayer?: unknown[];
};

/** Registra un evento solo si la herramienta ya está instalada en la página. No guarda datos personales. */
export function track(evento: string, datos: Record<string, string> = {}) {
  if (!ANALITICA.activa || typeof window === "undefined") return;
  const w = window as Win;
  try {
    w.gtag?.("event", evento, datos);
    w.fbq?.("trackCustom", evento, datos);
    if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: evento, ...datos });
  } catch {
    /* la analítica nunca debe romper la página */
  }
}
