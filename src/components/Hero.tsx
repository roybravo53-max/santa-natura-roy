import { VIDEO, WHATSAPP } from "../site.config";
import { VideoRoy } from "./Video";
import { WaButton } from "./ui";

function AlertaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M12 2 1 21h22L12 2Zm1 15h-2v-2h2v2Zm0-4h-2V8h2v5Z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="vsl">
      <div className="wrap vsl-wrap">
        <p className="vsl-badge">
          <AlertaIcon /> Atención: si hoy solo dependes de un sueldo
        </p>
        <h1>
          Conoce cómo construir <em>otra fuente de ingresos sin dejar tu trabajo</em> con productos naturales peruanos
        </h1>
        <p className="vsl-sub">
          Sin experiencia en ventas. Sin promesas de dinero fácil. Con orientación paso a paso.
        </p>

        <VideoRoy />
        {VIDEO.duracion && <p className="video-meta">Mira el video completo ({VIDEO.duracion})</p>}

        <div className="vsl-cta">
          <WaButton mensaje={WHATSAPP.messages.afiliarme} origen="hero" variante="verde" grande>
            QUIERO CONOCER EL NEGOCIO
          </WaButton>
          <p className="hero-apoyo">
            Te explico las modalidades, la inversión y cómo comenzar. Sin promesas de dinero fácil.
          </p>
          <a className="vsl-leer" href="#problema">
            Prefiero leerlo por escrito ↓
          </a>
        </div>
      </div>
    </section>
  );
}
