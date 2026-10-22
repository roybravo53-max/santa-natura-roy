// Verifica que el descuento declarado coincida con los montos. Uso: npm run check
import { readFileSync } from "node:fs";
const src = readFileSync(new URL("../src/site.config.ts", import.meta.url), "utf8");
const re = /nombre: "([^"]+)",\s*valorPublico: (\d+),\s*inversion: (\d+),\s*descuento: (\d+)/g;
let m, ok = true, n = 0;
while ((m = re.exec(src))) {
  n++;
  const [, nombre, vp, inv, d] = m;
  const real = ((vp - inv) / vp) * 100;
  const bien = Math.abs(real - d) < 0.01;
  if (!bien) ok = false;
  console.log(`${bien ? "OK " : "ERROR"} ${nombre}: público ${vp}, inversión ${inv}, declarado ${d}%, calculado ${real.toFixed(2)}%`);
}
if (n !== 4) { ok = false; console.log("Se esperaban 4 modalidades, hay " + n); }
process.exit(ok ? 0 : 1);
