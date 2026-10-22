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
        <strong>Te puede servir si</strong> {m.paraQuien}
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
          kicker="Tu inversión"
          title="Elige cómo quieres comenzar"
          lead="Tu inversión es en productos, y tu afiliación se activa con tu primera compra. No hay una opción “mejor”: la correcta es la que puedes pagar sin tocar tus gastos del mes."
        />
        <div className="modalidades">
          {MODALIDADES.map((m) => (
            <Tarjeta key={m.id} m={m} />
          ))}
        </div>

        <div className="nota-inv">
          <h3>Antes de elegir, ten presente</h3>
          <ul className="x-list">
            <li>
              La diferencia entre el valor público y tu inversión <strong>no es ganancia en efectivo</strong>: es el ahorro
              al comprar esos productos.
            </li>
            <li>Un mayor descuento exige una mayor inversión. No significa un mayor resultado.</li>
            <li>“Millonario” es solo el nombre del pack. No describe un resultado ni garantiza ganancias.</li>
            <li>Los montos, puntos y porcentajes son los del plan vigente. Si algo cambia, te aviso antes de que compres.</li>
          </ul>
          <p className="pend-title">Lo que vemos juntos por WhatsApp antes de que compres:</p>
          <ul className="pend-list">
            {PENDIENTES_PUBLICOS.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <WaButton mensaje={WHATSAPP.messages.modalidades} origen="tabla_general" variante="verde">
            Quiero comparar las modalidades
          </WaButton>
        </div>
      </div>
    </section>
  );
}
