import { WHATSAPP } from "../site.config";

export const whatsappConfigurado = /^\d{8,15}$/.test(WHATSAPP.number);

/** Construye un enlace wa.me. Sin número configurado abre WhatsApp con el mensaje listo para elegir contacto. */
export function waLink(mensaje: string): string {
  const texto = encodeURIComponent(mensaje);
  return whatsappConfigurado
    ? `https://wa.me/${WHATSAPP.number}?text=${texto}`
    : `https://wa.me/?text=${texto}`;
}

export const soles = (n: number) =>
  "S/ " + n.toLocaleString("es-PE", { maximumFractionDigits: 0 });
