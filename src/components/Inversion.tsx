import { MODALIDADES, PENDIENTES_PUBLICOS, WHATSAPP, type Modalidad } from "../site.config";
import { soles } from "../lib/whatsapp";
import { SectionHead, WaButton } from "./ui";

function Tarjeta({ m }: { m: Modalidad }) {
  const diferencia = m.valorPublico - m.inversion;
  return (
    <article className="modalidad">
      <header>
        <h3>{m.nombre}</h3>
        {m.etiqueta && <span className="tag">{m.etiqueta}</span>}
      </header>
      <p className="mod-inv">
        <span className="mod-label">Inversión en productos</span>
        <strong>{soles(m.inversion)}</strong>
      </p>
      <dl className="mod-datos">
        <div>
          <dt>Valor público referencial</dt>
          <dd>{soles(m.valorPublico)}</dd>
        </div>
        <div>
          <dt>Descuento</dt>
          <dd>{m.descuento}%</dd>
        </div>
        <div>
          <dt>Puntos para escoger productos</dt>
          <dd>{m.puntos} puntos</dd>
        </div>
        <div>
          <dt>Diferencia de precio</dt>
          <dd>{soles(diferencia)}</dd>
        </div>
      </dl>
      <p className="mod-quien">
        <strong>Podría servir si:</strong> {m.paraQuien}
      </p>
      <WaButton
        mensaje={WHATSAPP.modalidad(m.nombre)}
        origen="tabla_inversion"
        modalidad={m.id}
        variante="linea"
      >
        Quiero conocer esta modalidad
      </WaButton>
    </article>
  );
}

export function Inversion() {
  return (
    <section id="modalidades" className="sec sec-cream">
      <div className="wrap">
        <SectionHead
          kicker="Modalidades de inversión"
          title="Cuatro formas de comenzar. Ninguna es “la mejor”."
          lead="La inversión es en productos. La afiliación se activa con una compra de productos. Elige según lo que puedes asumir sin afectar tus gastos del mes."
        />
        <div className="modalidades">
          {MODALIDADES.map((m) => (
            <Tarjeta key={m.id} m={m} />
          ))}
        </div>

        <div className="nota-inv">
          <h3>Lee esto antes de elegir</h3>
          <ul className="x-list">
            <li>
              La diferencia entre el valor público y tu inversión <strong>no es ganancia en efectivo</strong>: es el ahorro
              al comprar esos productos.
            </li>
            <li>Un mayor descuento exige una mayor inversión. No significa mayor resultado.</li>
            <li>“Millonario” es el nombre del pack. No describe un resultado ni garantiza ganancias.</li>
            <li>Montos, puntos y porcentajes provienen del plan que maneja Roy; él te confirma que sigan vigentes al escribirle.</li>
          </ul>
          <p className="pend-title">Todavía por confirmar con Roy:</p>
          <ul className="pend-list">
            {PENDIENTES_PUBLICOS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <WaButton mensaje={WHATSAPP.messages.modalidades} origen="tabla_general" variante="verde">
            Quiero comparar las modalidades con Roy
          </WaButton>
        </div>
      </div>
    </section>
  );
}
