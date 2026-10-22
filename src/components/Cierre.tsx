import { useState } from "react";
import {
  AVISO_PRODUCTOS,
  CATALOGO_URL,
  CONTACTO_ALTERNATIVO,
  FAQ,
  PRODUCTOS,
  ROY,
  WHATSAPP,
} from "../site.config";
import { whatsappConfigurado } from "../lib/whatsapp";
import { track } from "../lib/analytics";
import { ImagenOMarcador, SectionHead, WaButton } from "./ui";

export function Productos() {
  return (
    <section id="productos" className="sec sec-white">
      <div className="wrap">
        <SectionHead
          kicker="Productos"
          title="Un catálogo de productos naturales que puedes conocer y aprender a recomendar."
          lead="Tres ejemplos del catálogo oficial. No es una tienda: para ver todo el catálogo y los precios vigentes, visita el sitio de Santa Natura."
        />
        <div className="productos">
          {PRODUCTOS.map((p) => (
            <article key={p.id} className="producto">
              <ImagenOMarcador
                className="producto-img"
                src={p.imagen}
                alt={`Presentación de ${p.nombre}`}
                marcador={`FOTO_${p.id.toUpperCase()} — Roy la adjunta`}
              />
              <div className="producto-body">
                <p className="producto-tipo">{p.tipo}</p>
                <h3>{p.nombre}</h3>
                <dl>
                  <dt>Presentación</dt>
                  <dd>{p.presentacion}</dd>
                  <dt>Ingredientes</dt>
                  <dd>{p.ingredientes}</dd>
                </dl>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="link-ext">
                  Ver ficha oficial
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="aviso-salud">{AVISO_PRODUCTOS}</p>
        <p className="source">
          <a href={CATALOGO_URL} target="_blank" rel="noopener noreferrer">
            Ver catálogo completo en santanatura.com.pe
          </a>
          . Consultado el 22/10/2026.
        </p>
      </div>
    </section>
  );
}

export function Acompanamiento() {
  return (
    <section id="roy" className="sec sec-cream">
      <div className="wrap split split-roy">
        <figure className="roy-fig">
          <ImagenOMarcador className="roy-foto" src={ROY.foto} alt={ROY.fotoAlt} marcador="FOTO_DE_ROY" />
          <figcaption>{ROY.fotoPie}</figcaption>
        </figure>
        <div>
          <SectionHead kicker="Quién te acompaña" title="Soy Roy. Te acompaño a decidir con números claros." />
          <p className="lead">{ROY.perfil}. Mi trabajo es que entiendas las condiciones antes de poner un sol.</p>
          <ul className="check-list">
            <li>Te explico las modalidades y qué significa cada monto.</li>
            <li>Te ayudo a ordenar tus gastos para saber cuánto puedes asumir.</li>
            <li>Te muestro cómo conversar con personas sin presionar a nadie.</li>
            <li>Te digo con claridad lo que todavía no está confirmado.</li>
          </ul>
          <p className="aside-note">
            Soy un orientador independiente. No represento oficialmente a Santa Natura ni garantizo resultados.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="preguntas" className="sec sec-white">
      <div className="wrap narrow-wrap">
        <SectionHead kicker="Preguntas frecuentes" title="Lo que casi todos preguntan antes de decidir" />
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.p}>
              <summary>{f.p}</summary>
              <p>{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  const [copiado, setCopiado] = useState(false);
  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP.messages.afiliarme);
      setCopiado(true);
      track("copiar_mensaje");
      window.setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(false);
    }
  };
  return (
    <section id="contacto" className="sec sec-green final">
      <div className="wrap center">
        <SectionHead
          light
          kicker="El siguiente paso"
          title={
            <>
              Una conversación no te compromete a <em>nada</em>.
            </>
          }
          lead="Escríbeme y te cuento cómo funciona, cuánto implica cada modalidad y qué falta confirmar. Tú decides después."
        />
        <div className="final-actions">
          <WaButton mensaje={WHATSAPP.messages.afiliarme} origen="cta_final" variante="oro" grande>
            QUIERO CONOCER EL NEGOCIO
          </WaButton>
          <WaButton mensaje={WHATSAPP.messages.sinDejarTrabajo} origen="cta_final_trabajo" variante="linea">
            Quiero empezar sin dejar mi trabajo
          </WaButton>
        </div>
        <div className="alternativa">
          <p>¿No se abre WhatsApp?</p>
          <button type="button" className="btn-texto" onClick={copiar}>
            {copiado ? "Mensaje copiado" : "Copiar el mensaje"}
          </button>
          <p className="alt-datos">
            Número de Roy: <strong>{whatsappConfigurado ? `+${WHATSAPP.number}` : WHATSAPP.placeholder}</strong>
            {CONTACTO_ALTERNATIVO.email && (
              <>
                {" "}
                · <a href={`mailto:${CONTACTO_ALTERNATIVO.email}`}>{CONTACTO_ALTERNATIVO.email}</a>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="foot-lead">
          Esta es una página de captación administrada por Roy. <strong>No es el sitio oficial de Santa Natura</strong> ni
          pertenece a la empresa.
        </p>
        <div className="foot-grid">
          <details>
            <summary>Aviso de ingresos</summary>
            <p>
              Los resultados dependen de cada persona y no están garantizados. Los montos, descuentos y condiciones que ves
              aquí son referenciales, los entregó Roy y se confirman con el plan vigente de Santa Natura. Las diferencias
              entre valor público e inversión son descuentos de compra, no ganancias. Participar implica invertir en
              productos y puede no generar ingresos.
            </p>
          </details>
          <details>
            <summary>Privacidad</summary>
            <p>
              Esta página no tiene formularios, no guarda tus datos y no usa cuentas. Si decides escribir por WhatsApp,
              compartes tu número y lo que escribas con Roy, quien lo usará solo para responderte. WhatsApp trata esos datos
              según sus propias políticas. Si la página usa herramientas de medición, solo registra clics en botones, sin
              datos personales.
            </p>
          </details>
          <details>
            <summary>Productos y salud</summary>
            <p>
              La información de productos proviene del sitio oficial de Santa Natura y puede cambiar. No sustituye consejo
              médico ni tratamiento. Los suplementos y superalimentos no son medicamentos.
            </p>
          </details>
        </div>
        <p className="foot-small">
          Contacto: WhatsApp de Roy ({whatsappConfigurado ? `+${WHATSAPP.number}` : WHATSAPP.placeholder}).
          Santa Natura es una marca de sus titulares; se nombra aquí solo para identificar los productos y la afiliación.
        </p>
      </div>
    </footer>
  );
}
