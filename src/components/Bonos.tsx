import { BONOS, WHATSAPP } from "../site.config";
import { SectionHead, WaButton } from "./ui";

export function Bonos() {
  const { afilia, liderazgo, mercadeo } = BONOS;
  return (
    <section id="bonos" className="sec sec-white">
      <div className="wrap">
        <SectionHead
          kicker="Bonos del plan"
          title="Además del descuento, el plan premia el cumplimiento de metas."
          lead="Estos son tres de los bonos del plan. Son porcentajes y montos de referencia, no ingresos garantizados: dependen de tu rango, tu actividad y las condiciones vigentes."
        />

        <div className="bono">
          <h3>Bono Afilia</h3>
          <p>{afilia.intro}</p>
          <div className="tabla-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Nivel</th>
                  <th scope="col">Emprendedor</th>
                  <th scope="col">Bronce</th>
                </tr>
              </thead>
              <tbody>
                {afilia.filas.map((f) => (
                  <tr key={f.nivel}>
                    <th scope="row">{f.nivel}</th>
                    <td>{f.emprendedor}</td>
                    <td>{f.bronce}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bono">
          <h3>Bono Liderazgo</h3>
          <p>{liderazgo.intro}</p>
          <div className="tabla-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Tu rango</th>
                  {liderazgo.columnas.map((c) => (
                    <th scope="col" key={c}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {liderazgo.filas.map((f) => (
                  <tr key={f.rango}>
                    <th scope="row">{f.rango}</th>
                    {f.v.map((x, i) => (
                      <td key={i}>{x}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bono">
          <h3>Bono Mercadeo</h3>
          <p>{mercadeo.intro}</p>
          <div className="tabla-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Secuencia</th>
                  {mercadeo.columnas.map((c) => (
                    <th scope="col" key={c}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mercadeo.filas.map((f) => (
                  <tr key={f[0]}>
                    <th scope="row">{f[0].replace("Secuencia ", "")}</th>
                    {f.slice(1).map((x, i) => (
                      <td key={i}>{x}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="aviso-salud">
          Existen otros bonos que te enseño cuando ya estés dentro, junto con cómo lograrlos. Ninguna de estas cifras es una promesa de ingreso: son las reglas del plan, y cumplirlas depende de ti. PP = puntos de volumen de consumo personal. Cuánto dura cada periodo y qué exige cada rango te lo detallo por WhatsApp.
        </p>
        <div className="center-cta">
          <WaButton mensaje={WHATSAPP.messages.redes} origen="bonos" variante="verde">
            Quiero conocer cómo funcionan los bonos
          </WaButton>
        </div>
      </div>
    </section>
  );
}
