import { WHATSAPP } from "../site.config";
import { WaButton } from "./ui";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker kicker-gold">Santa Natura Perú · orientación de Roy</p>
          <h1>
            ¿Y si empiezas a construir una <em>nueva fuente de ingresos</em> sin dejar tu trabajo actual?
          </h1>
          <p className="hero-sub">
            Conoce cómo afiliarte a Santa Natura, acceder a productos con descuento y aprender a desarrollar un negocio de
            recomendación y redes de mercadeo, con orientación paso a paso.
          </p>
          <div className="hero-cta">
            <WaButton mensaje={WHATSAPP.messages.afiliarme} origen="hero" variante="oro" grande>
              QUIERO CONOCER EL NEGOCIO
            </WaButton>
            <p className="hero-apoyo">
              Te explico las modalidades, la inversión y cómo comenzar. Sin promesas de dinero fácil.
            </p>
          </div>
        </div>

        <figure className="ledger" aria-label="Ilustración: tu sueldo cubre tus gastos; queda un espacio para lo que construyes además">
          <div className="ledger-row">
            <span className="ledger-label">Tu sueldo</span>
            <div className="bar bar-full">
              <span>paga tus gastos</span>
            </div>
          </div>
          <div className="ledger-row">
            <span className="ledger-label">Además de él</span>
            <div className="bar bar-open">
              <span>¿qué estás construyendo?</span>
            </div>
          </div>
          <figcaption>Ilustración conceptual, sin cifras.</figcaption>
        </figure>
      </div>
      <div className="steps-edge" aria-hidden="true" />
    </section>
  );
}
