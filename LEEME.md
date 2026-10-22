# Landing de captación · Santa Natura (Roy)

Página independiente de Roy. **No es el sitio oficial de Santa Natura.**

## Cómo usarla
- `npm install` · `npm run dev` (ver en pantalla) · `npm run build` (versión de producción en `dist/`) · `npm run check` (verifica descuentos de la tabla).
- **Todo lo editable está en `src/site.config.ts`**: número de WhatsApp, mensajes, fotos, modalidades y precios, productos, pasos y preguntas.

## Pendientes de Roy (datos que faltan)
1. Número de WhatsApp (`WHATSAPP.number`, formato `51999888777`). Hoy se ve el marcador `[WHATSAPP_DE_ROY]`.
2. Foto de Roy (`ROY.foto`) y fotos de los 3 productos (`PRODUCTOS[].imagen`), en la carpeta `public/`. Hoy hay marcadores visibles.
3. Plan oficial vigente: envío, activación, compras posteriores, restricciones, qué productos se eligen, tienda virtual, comisiones/bonificaciones, política si no vendes. Está marcado como “por confirmar” en la página.
4. Confirmar los montos de la tabla con el plan vigente (los cálculos de descuento sí cuadran: 20/25/30/40 %).
5. Dominio final (reemplazar `REEMPLAZAR-DOMINIO` en `index.html` y `SITIO.url`) e imagen para compartir (`public/og.png`, 1200×630).
6. Correo o teléfono alternativo (`CONTACTO_ALTERNATIVO`), si quieres uno.
7. Revisión de normativa publicitaria peruana (INDECOPI, DIGESA/registro sanitario) y de las condiciones de afiliación con Santa Natura.
8. Herramienta de analítica (Google Analytics/Pixel): no hay IDs puestos. Los clics se envían solo si instalas la herramienta.

## Verificado vs. no verificado
Verificado (22/10/2026, sitio oficial): fichas de Concentrado de Alcachofa, Kalmapross y Tocosh (ingredientes, presentación, enlaces); nosotros (más de 20 años, misión); franquicias aparecen como sección aparte.
No verificado: cualquier dato de afiliación (el sitio público no lo describe), registros sanitarios (no aparecen en las fichas), certificaciones (no se citan), y todo lo que dijo Roy sobre modalidades.
Nota: `/nosotros-2/` da error 404; se usó `/nosotros/`.
