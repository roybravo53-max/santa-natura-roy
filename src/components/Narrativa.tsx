import { PASOS, WHATSAPP } from "../site.config";
import { Pendiente, SectionHead, WaButton } from "./ui";

export function Problema() {
  return (
    <section id="problema" className="sec sec-cream">
      <div className="wrap">
        <SectionHead
          kicker="Tu sueldo paga tus gastos"
          title={
            <>
              ¿Qué estás construyendo <em>además de él?</em>
            </>
          }
        />
        <p className="big-quote">
          El problema no siempre es cuánto ganas. También importa cuántas opciones tienes si algo cambia.
        </p>
        <p className="lead narrow">
          Tener un empleo o un negocio pequeño es valioso: te sostiene. Pero cuando todo depende de una sola fuente, un
          imprevisto pesa el doble. Si te suena familiar, quizá te pasa alguna de estas cosas:
        </p>
        <ol className="editorial-list">
          <li>
            <span className="num">01</span>
            <div>
              <h3>Todo depende de una sola entrada</h3>
              <p>Si esa entrada se mueve, no hay un plan B armado.</p>
            </div>
          </li>
          <li>
            <span className="num">02</span>
            <div>
              <h3>Quieres emprender, pero te da miedo perder dinero</h3>
              <p>Y es un miedo razonable: por eso esta página te dice qué se sabe y qué todavía no.</p>
            </div>
          </li>
          <li>
            <span className="num">03</span>
            <div>
              <h3>Nunca has vendido</h3>
              <p>Y no sabes por dónde empezar a conversar con otras personas sin sentirte incómodo.</p>
            </div>
          </li>
        </ol>
        <p className="aside-note">Esto es una hipótesis sobre lo que muchas personas viven, no una afirmación sobre ti.</p>
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
            kicker="La oportunidad"
            title={
              <>
                No necesitas renunciar para <em>explorar</em>
              </>
            }
          />
          <p className="lead">
            Empiezas con productos que ya existen y con una modalidad de afiliación. No fabricas producto ni creas una
            marca desde cero.
          </p>
          <p className="lead">
            Lo que sí necesitas es tiempo, constancia, aprender a conversar con personas y llevar tus números con orden.
          </p>
        </div>
        <aside className="honest-box" aria-labelledby="no-es">
          <h3 id="no-es">Lo que esto no es</h3>
          <ul className="x-list">
            <li>No es dinero fácil ni rápido.</li>
            <li>No son ingresos garantizados.</li>
            <li>
              El descuento es una condición de compra, <strong>no una garantía de rentabilidad</strong>.
            </li>
            <li>Una tienda virtual no trae clientes automáticamente.</li>
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
          title="Santa Natura, según su propio sitio"
          lead="Esta es una página independiente de captación. Lo que sigue lo tomamos de santanatura.com.pe."
        />
        <div className="facts">
          <div>
            <h3>Quiénes son</h3>
            <p>
              Una marca peruana de productos naturales. Su página dice que, hace más de veinte años, sus fundadores
              recorrieron el Perú para reencontrar tradiciones del buen vivir y promover la buena salud con superalimentos.
            </p>
          </div>
          <div>
            <h3>Qué dicen que hacen</h3>
            <p>
              Su misión declarada es contribuir al bienestar físico, mental y espiritual con productos ecológicos,
              saludables y sostenibles.
            </p>
          </div>
          <div>
            <h3>Lo que no vas a ver aquí</h3>
            <p>
              No citamos certificaciones, premios ni cifras de la empresa porque no pudimos verificarlas en su sitio. Y esta
              propuesta de afiliación es distinta de sus <strong>franquicias</strong>, que ellos presentan por separado.
            </p>
          </div>
        </div>
        <p className="source">
          Fuente:{" "}
          <a href="https://santanatura.com.pe/nosotros/" target="_blank" rel="noopener noreferrer">
            santanatura.com.pe/nosotros
          </a>
          . Consultado el 22/10/2026.
        </p>
      </div>
    </section>
  );
}

const RECIBE: { t: string; d: string; confirmar?: boolean }[] = [
  { t: "Código de socio", d: "Tu identificación dentro de Santa Natura.", confirmar: true },
  { t: "Plataforma", d: "Un espacio para gestionar tus compras y tu actividad.", confirmar: true },
  { t: "Tienda virtual", d: "Solo si está incluida en la modalidad vigente. No trae clientes por sí sola.", confirmar: true },
  { t: "Compra con descuento", d: "Pagas menos que el valor público referencial por los productos de tu modalidad." },
  { t: "Plan comercial y formación", d: "Cómo funciona el plan y cómo aprender a presentarlo.", confirmar: true },
];

export function QueRecibe() {
  return (
    <section id="recibes" className="sec sec-white">
      <div className="wrap">
        <SectionHead
          kicker="Qué recibe el socio"
          title={
            <>
              Empieza con productos. <em>Aprende a construir un negocio.</em>
            </>
          }
          lead="Esto es lo que se espera de la afiliación. Lo marcado como “por confirmar” se verifica con el plan vigente antes de que decidas."
        />
        <ul className="recibe">
          {RECIBE.map((r) => (
            <li key={r.t}>
              <div>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </div>
              {r.confirmar && <Pendiente>Por confirmar</Pendiente>}
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
          kicker="El camino"
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
          <h3>Tres cosas distintas que no conviene mezclar</h3>
          <dl>
            <div>
              <dt>Descuento en tu compra</dt>
              <dd>Lo que ahorras al comprar como socio frente al valor público. No es dinero que recibes.</dd>
            </div>
            <div>
              <dt>Margen comercial</dt>
              <dd>
                La diferencia entre lo que pagaste por un producto y el precio al que lo vendes a otra persona. Existe solo
                si hay una venta.
              </dd>
            </div>
            <div>
              <dt>Bonificaciones del plan</dt>
              <dd>Pagos que el plan de compensación oficial podría contemplar. Su existencia y condiciones se confirman con el plan vigente.</dd>
            </div>
          </dl>
        </div>
        <div className="center-cta">
          <WaButton mensaje={WHATSAPP.messages.redes} origen="como_funciona" variante="oro">
            Quiero entender el plan de redes de mercadeo
          </WaButton>
        </div>
      </div>
    </section>
  );
}
