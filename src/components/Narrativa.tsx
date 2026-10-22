import { PASOS, WHATSAPP } from "../site.config";
import { SectionHead, WaButton } from "./ui";

export function Problema() {
  return (
    <section id="problema" className="sec sec-cream">
      <div className="wrap">
        <SectionHead
          kicker="Una pregunta incómoda"
          title={
            <>
              Tu sueldo paga tus gastos. ¿Qué estás construyendo <em>además de él?</em>
            </>
          }
        />
        <p className="big-quote">Si mañana tu ingreso se detuviera, ¿cuántos meses podrías sostenerte?</p>
        <p className="lead narrow">
          Tu trabajo no es el problema: te sostiene. El problema es que todo tu futuro dependa de una sola puerta. Cuando esa
          puerta se cierra, no hay otra. Y no importa cuánto ganes: también importa cuántas opciones tienes.
        </p>
        <ol className="editorial-list">
          <li>
            <span className="num">01</span>
            <div>
              <h3>Trabajas hoy para pagar lo de hoy</h3>
              <p>El sueldo llega y se va. Y la sensación de estar construyendo algo tuyo no llega nunca.</p>
            </div>
          </li>
          <li>
            <span className="num">02</span>
            <div>
              <h3>Quieres emprender, pero el miedo a perder te frena</h3>
              <p>Es un miedo razonable. Por eso aquí te digo cuánto inviertes, qué recibes y qué no está garantizado.</p>
            </div>
          </li>
          <li>
            <span className="num">03</span>
            <div>
              <h3>Crees que no sabes vender</h3>
              <p>Nadie nace sabiendo. Conversar con personas se aprende paso a paso, y de eso trata el camino que te propongo.</p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function Oportunidad() {
  return (
    <section id="oportunidad" className="sec sec-white">
      <div className="wrap split">
        <div>
          <SectionHead
            kicker="Otra forma de verlo"
            title={
              <>
                No tienes que renunciar para empezar a <em>construir</em>
              </>
            }
          />
          <p className="lead">
            Dejar de depender de una sola entrada no empieza con un salto al vacío. Empieza con una decisión pequeña y un
            paso a la vez, sin dejar tu trabajo.
          </p>
          <p className="lead">
            Comienzas con productos que ya existen y una modalidad de afiliación: no fabricas nada ni creas una marca. Lo que
            pones tú es tiempo, constancia y ganas de aprender a conversar con personas y a llevar tus números con orden.
          </p>
        </div>
        <aside className="honest-box" aria-labelledby="no-es">
          <h3 id="no-es">Seamos claros desde el inicio</h3>
          <ul className="x-list">
            <li>Esto no es dinero fácil ni rápido.</li>
            <li>Nadie te puede garantizar ingresos. Yo tampoco.</li>
            <li>
              El descuento es un ahorro en tu compra, <strong>no una ganancia</strong>.
            </li>
            <li>Una tienda virtual no trae clientes sola: tendrás que darla a conocer.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function SantaNatura() {
  return (
    <section id="santa-natura" className="sec sec-cream">
      <div className="wrap">
        <SectionHead
          kicker="La marca"
          title="Los productos detrás de este negocio"
          lead="Santa Natura es una marca peruana de productos naturales. Esta es mi página personal: no es el sitio oficial de la empresa."
        />
        <div className="facts">
          <div>
            <h3>De dónde viene</h3>
            <p>
              Según su propio sitio, hace más de veinte años sus fundadores recorrieron el Perú para reencontrar tradiciones
              del buen vivir y promover la buena salud con superalimentos.
            </p>
          </div>
          <div>
            <h3>Qué buscan</h3>
            <p>
              Su misión es contribuir al bienestar físico, mental y espiritual con productos ecológicos, saludables y
              sostenibles.
            </p>
          </div>
          <div>
            <h3>Qué debes saber</h3>
            <p>
              Aquí empiezas como socio, comprando productos. Esta propuesta no es una <strong>franquicia</strong>: las
              franquicias de Santa Natura son otro modelo, que la empresa presenta por separado.
            </p>
          </div>
        </div>
        <p className="source">
          Información tomada de{" "}
          <a href="https://santanatura.com.pe/nosotros/" target="_blank" rel="noopener noreferrer">
            santanatura.com.pe/nosotros
          </a>
          .
        </p>
      </div>
    </section>
  );
}

const RECIBE: { t: string; d: string }[] = [
  { t: "Tu código de socio", d: "Es tu identificación dentro de Santa Natura. Se activa con tu primera compra de productos." },
  { t: "Productos con descuento", d: "Pagas menos que el valor público: de 20% a 40% según el pack que elijas." },
  { t: "Tu tienda virtual", d: "Ahí aprendes a hacer tus pedidos. No trae clientes sola: tendrás que darla a conocer." },
  { t: "Recojo cerca de ti", d: "Eliges el punto de recojo en las tiendas autorizadas Sumaq Wasi, en varios distritos del Perú, y consultas si hacen envíos." },
  { t: "Plan comercial y formación", d: "Bonos por cumplir metas y orientación para aprender a lograrlos." },
];

export function QueRecibe() {
  return (
    <section id="recibes" className="sec sec-white">
      <div className="wrap">
        <SectionHead
          kicker="Lo que recibirás"
          title={
            <>
              Empiezas con productos. <em>Aprendes a construir un negocio.</em>
            </>
          }
          lead="Esto es lo que recibirás como socio:"
        />
        <ul className="recibe">
          {RECIBE.map((r) => (
            <li key={r.t}>
              <div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Como() {
  return (
    <section id="como" className="sec sec-green">
      <div className="wrap">
        <SectionHead
          light
          kicker="Tu camino"
          title="¿Cómo puedes desarrollar esta oportunidad?"
          lead="Ocho pasos, en orden. Ninguno se salta."
        />
        <ol className="pasos">
          {PASOS.map((p, i) => (
            <li key={p.titulo}>
              <span className="paso-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="tres-cosas">
          <h3>Tres cosas distintas que no conviene confundir</h3>
          <dl>
            <div>
              <dt>Descuento en tu compra</dt>
              <dd>Lo que ahorras al comprar como socio frente al valor público. No es dinero que recibes.</dd>
            </div>
            <div>
              <dt>Margen comercial</dt>
              <dd>
                La diferencia entre lo que pagaste por un producto y el precio al que se lo vendes a otra persona. Solo existe
                si hay una venta.
              </dd>
            </div>
            <div>
              <dt>Bonos del plan</dt>
              <dd>Pagos por cumplir metas (más abajo ves tres de ellos). Dependen de tu rango y de cumplir sus condiciones.</dd>
            </div>
          </dl>
        </div>
        <div className="center-cta">
          <WaButton mensaje={WHATSAPP.messages.redes} origen="como_funciona" variante="oro">
            Quiero entender el negocio de redes de mercadeo
          </WaButton>
        </div>
      </div>
    </section>
  );
}
