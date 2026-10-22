# Landing de captación · Santa Natura (Roy)

Página independiente de Roy. **No es el sitio oficial de Santa Natura.**

## Cómo usarla
- `npm install` · `npm run dev` (ver en pantalla) · `npm run build` (versión de producción en `dist/`) · `npm run check` (verifica descuentos de la tabla).
- **Todo lo editable está en `src/site.config.ts`**: número de WhatsApp, mensajes, fotos, modalidades y precios, productos, pasos y preguntas.

## Pendientes
1. Dominio final (reemplazar `REEMPLAZAR-DOMINIO` en `index.html` y `SITIO.url`) e imagen para compartir en redes (`public/og.png`, 1200x630; luego agregar la etiqueta og:image).
2. Datos que Roy aún no dio (se muestran como "por confirmar"): puntos de cada producto, costo y tiempos de envío, si hay devolución, requisitos de cada rango para los bonos, duración de cada periodo del Bono Mercadeo.
3. Confirmar que Jeanette Enmanuel autoriza usar su imagen en esta página (la foto es de Roy con ella) y que la leyenda "de Santa Natura Network" es la correcta.
4. Confirmar con Santa Natura que se pueden publicar sus tablas de bonos y los nombres de los packs (Básico, Profesional, Empresarial, Millonario) en una página de terceros, y revisar normativa publicitaria peruana (INDECOPI).
5. Herramienta de analítica (Google Analytics/Pixel): no hay IDs. Los clics se envían solo si la instalas.

## Verificado vs. no verificado
Verificado (22/10/2026, sitio oficial): fichas de Concentrado de Alcachofa, Kalmapross y Tocosh (ingredientes, presentación, enlaces); nosotros (más de 20 años, misión); franquicias aparecen como sección aparte.
Dato de Roy (con sus imágenes del plan; no verificado de forma independiente): packs, puntos, descuentos, bonos Afilia/Liderazgo/Mercadeo, anulación del código a los 3 meses sin comprar, compras al contado, recojo en tiendas Sumaq Wasi. No verificado: registros sanitarios (no aparecen en las fichas) y certificaciones (no se citan).
Nota: `/nosotros-2/` da error 404; se usó `/nosotros/`.
