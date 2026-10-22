import type { ReactNode } from "react";
import { track } from "../lib/analytics";
import { waLink } from "../lib/whatsapp";

type WaProps = {
  mensaje: string;
  /** Nombre del evento de analítica y de dónde viene el clic. */
  origen: string;
  modalidad?: string;
  variante?: "oro" | "verde" | "linea";
  children: ReactNode;
  grande?: boolean;
};

export function WaButton({ mensaje, origen, modalidad, variante = "verde", children, grande }: WaProps) {
  return (
    <a
      className={`btn btn-${variante}${grande ? " btn-grande" : ""}`}
      href={waLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("clic_whatsapp", { origen, ...(modalidad ? { modalidad } : {}) })}
    >
      <WaIcon />
      <span>{children}</span>
    </a>
  );
}

export function WaIcon() {
  return (
    <svg className="wa-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12.04 2a9.9 9.9 0 0 0-8.43 15.1L2 22l5.06-1.55A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.25 15l-.3-.18-3 .92.95-2.92-.2-.31A8.1 8.1 0 0 1 12.04 3.8Zm-3.2 3.9c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.67 2.66 4.1 3.62 2.03.8 2.44.64 2.88.6.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.46-.4-.4-.54-.4Z"
      />
    </svg>
  );
}

export function SectionHead({
  kicker,
  title,
  lead,
  light,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
}) {
  return (
    <header className={`sec-head${light ? " on-dark" : ""}`}>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  );
}

/** Marcador visible para imágenes que Roy aún debe adjuntar. */
export function ImagenOMarcador({
  src,
  alt,
  marcador,
  className = "",
}: {
  src: string;
  alt: string;
  marcador: string;
  className?: string;
}) {
  if (src) return <img className={className} src={src} alt={alt} loading="lazy" />;
  return (
    <div className={`img-marcador ${className}`} role="img" aria-label={`Imagen pendiente: ${marcador}`}>
      <span>[{marcador}]</span>
    </div>
  );
}

export function Pendiente({ children }: { children: ReactNode }) {
  return <span className="chip-pendiente">{children}</span>;
}
