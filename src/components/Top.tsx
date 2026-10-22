import { useEffect, useState } from "react";
import { WHATSAPP } from "../site.config";
import { whatsappConfigurado } from "../lib/whatsapp";
import { WaButton } from "./ui";

export function AvisoConfig() {
  if (whatsappConfigurado) return null;
  return (
    <div className="aviso-config" role="note">
      Falta configurar el número: <strong>{WHATSAPP.placeholder}</strong>. Mientras tanto los botones abren WhatsApp con el
      mensaje listo, sin destinatario.
    </div>
  );
}

export function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Inicio">
        <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
          <rect width="32" height="32" rx="7" style={{ fill: "var(--g1)" }} />
          <path d="M7 23h5v-5h4v-5h4V8h5v15z" style={{ fill: "var(--gold)" }} />
        </svg>
        <span>
          Roy <small>· Camino Santa Natura</small>
        </span>
      </a>
      <nav aria-label="Principal" className="nav-desktop">
        <a href="#modalidades">Modalidades</a>
        <a href="#como">Cómo funciona</a>
        <a href="#preguntas">Preguntas</a>
      </nav>
    </header>
  );
}

/** Barra fija en móvil: aparece al pasar el hero y se oculta cerca del cierre. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    const fin = document.getElementById("contacto");
    if (!hero || !("IntersectionObserver" in window)) return;
    let heroVisto = true;
    let finVisto = false;
    const actualizar = () => setVisible(!heroVisto && !finVisto);
    const o1 = new IntersectionObserver(([e]) => {
      heroVisto = e.isIntersecting;
      actualizar();
    });
    const o2 = new IntersectionObserver(([e]) => {
      finVisto = e.isIntersecting;
      actualizar();
    });
    o1.observe(hero);
    if (fin) o2.observe(fin);
    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);
  return (
    <div className={`sticky-cta${visible ? " on" : ""}`} aria-hidden={!visible}>
      <WaButton mensaje={WHATSAPP.messages.afiliarme} origen="barra_fija" variante="oro">
        Escribirle a Roy
      </WaButton>
    </div>
  );
}
