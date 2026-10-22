/**
 * ARCHIVO ÚNICO DE CONFIGURACIÓN
 * Aquí vive todo lo que Roy puede cambiar sin tocar el diseño:
 * número de WhatsApp, fotos, precios de las modalidades, textos de productos y preguntas.
 *
 * Regla: lo que dice "PENDIENTE" no está confirmado. No lo presentes como hecho.
 */

export const WHATSAPP = {
  /** Solo dígitos con código de país, sin + ni espacios. Ej.: "51999888777". Vacío = aún no configurado. */
  number: "51901082417",
  /** Marcador visible mientras no haya número. */
  placeholder: "[WHATSAPP_DE_ROY]",
  messages: {
    afiliarme: "Hola, Roy. Quiero conocer cómo afiliarme a Santa Natura.",
    modalidades: "Hola, Roy. Quiero conocer las modalidades de inversión y descuento.",
    redes: "Hola, Roy. Me interesa desarrollar el negocio de redes de mercadeo.",
    sinDejarTrabajo: "Hola, Roy. Quiero saber cómo comenzar mientras sigo trabajando.",
  },
  /** Mensaje cuando la persona elige una modalidad concreta. */
  modalidad: (nombre: string) =>
    `Hola, Roy. Quiero conocer la modalidad ${nombre}.`,
};

/** Alternativa si WhatsApp no abre. Déjalo vacío hasta tener el dato real. */
export const CONTACTO_ALTERNATIVO = {
  email: "", // PENDIENTE: correo de Roy
  telefono: "+51 901 082 417",
};

/** Solo se activa si en la página existe la herramienta (gtag / fbq / dataLayer). No se inventan IDs. */
export const ANALITICA = {
  activa: true,
};

export const SITIO = {
  nombre: "Roy · Camino Santa Natura",
  url: "https://REEMPLAZAR-DOMINIO", // PENDIENTE: dominio final
};

export const ROY = {
  nombre: "Roy",
  perfil: "Contador público, coach financiero y emprendedor",
  /** Ruta de la foto (ej. "/roy.jpg" dentro de /public). Vacío = marcador visible. */
  foto: "/roy-jeanette.jpg",
  fotoAlt: "Roy junto a Jeanette Enmanuel frente al fondo de Santa Natura Network",
  fotoPie: "Roy junto a Jeanette Enmanuel, de Santa Natura Network.",
};

export type Modalidad = {
  id: string;
  nombre: string;
  valorPublico: number;
  inversion: number;
  descuento: number; // porcentaje que declara Roy
  puntos: number; // puntos para escoger productos en este pack
  paraQuien: string;
  etiqueta?: string;
};

/** Datos entregados por Roy. No confirmados de forma independiente. */
export const MODALIDADES: Modalidad[] = [
  {
    id: "basico",
    nombre: "Básico",
    valorPublico: 300,
    inversion: 240,
    descuento: 20,
    puntos: 50,
    paraQuien:
      "quieres conocer los productos y cómo funciona la afiliación con el menor monto de entrada.",
    etiqueta: "Menor monto de entrada",
  },
  {
    id: "profesional",
    nombre: "Profesional",
    valorPublico: 600,
    inversion: 450,
    descuento: 25,
    puntos: 100,
    paraQuien:
      "ya conoces los productos y quieres comenzar con más variedad, asumiendo ese monto sin afectar tus gastos del mes.",
  },
  {
    id: "empresarial",
    nombre: "Empresarial",
    valorPublico: 1500,
    inversion: 1050,
    descuento: 30,
    puntos: 250,
    paraQuien:
      "ya conversamos, entiendes el plan y tienes claro cómo usarías y presentarías esa cantidad de productos.",
  },
  {
    id: "millonario",
    nombre: "Millonario",
    valorPublico: 2700,
    inversion: 1620,
    descuento: 40,
    puntos: 450,
    paraQuien:
      "puedes asumir un monto alto en productos y ya revisamos juntos las condiciones.",
    etiqueta: "Mayor descuento",
  },
];

export type Producto = {
  id: string;
  nombre: string;
  tipo: string;
  presentacion: string;
  ingredientes: string;
  url: string;
  /** Ruta de imagen en /public. Vacío = marcador visible para que Roy adjunte la foto. */
  imagen: string;
  nota?: string;
};

/** Datos tomados de las fichas del sitio oficial (consultadas el 22/10/2026). Sin precios ni registro sanitario: no aparecen verificados. */
export const PRODUCTOS: Producto[] = [
  {
    id: "alcachofa",
    nombre: "Concentrado de Alcachofa",
    tipo: "Bebida concentrada",
    presentacion: "500 ml",
    ingredientes: "Alcachofas y camu camu.",
    url: "https://santanatura.com.pe/shop/concentrado-alcachofa-santa-natura/",
    imagen: "/prod-alcachofa.png",
  },
  {
    id: "kalmapross",
    nombre: "Kalmapross",
    tipo: "Bebida de bienestar masculino",
    presentacion: "500 ml",
    ingredientes: "Lucraco, uña de gato, hojas de achiote, huamanpinta, maca y camu camu.",
    url: "https://santanatura.com.pe/shop/bebida-kalmapross-previene-la-prostata-de-santa-natura/",
    imagen: "/prod-kalmapross.png",
  },
  {
    id: "tocosh",
    nombre: "Tocosh con uña de gato y muña",
    tipo: "Superalimento andino",
    presentacion: "15 sachets de 5 g (75 g)",
    ingredientes: "Tocosh, uña de gato y muña.",
    url: "https://santanatura.com.pe/shop/tocosh-con-una-de-gato-y-muna-santa-natura/",
    imagen: "/prod-tocosh.png",
  },
];

export const CATALOGO_URL = "https://santanatura.com.pe/shop/";

/** Texto que la propia ficha oficial incluye. Se muestra tal cual en la sección de productos. */
export const AVISO_PRODUCTOS =
  "Santa Natura presenta estos productos como superalimentos, no como medicina, y las propiedades mencionadas son tradicionales. No sustituyen un tratamiento médico: ante molestias o dudas de salud, consulta a un profesional.";

export const PASOS = [
  { titulo: "Conoce los productos y las condiciones", texto: "Revisas qué ofrece Santa Natura y qué condiciones tiene la afiliación vigente, antes de poner un sol." },
  { titulo: "Elige una modalidad", texto: "Compáralas con calma. Elige según lo que puedes invertir sin afectar tus gastos, no según lo que parece más grande." },
  { titulo: "Aprende a presentar con responsabilidad", texto: "Hablar de un producto es contar lo que dice la ficha oficial, sin exagerar ni prometer resultados de salud." },
  { titulo: "Conversa con personas", texto: "Empiezas por tu círculo cercano, con respeto y sin presión. Se trata de conversar, no de insistir." },
  { titulo: "Haz seguimiento", texto: "Una conversación rara vez termina en una sola respuesta. Llevas un orden simple de a quién escribiste y cuándo." },
  { titulo: "Atiende clientes y suma socios", texto: "Cuando alguien más quiere empezar, lo acompañas a afiliarse. Es opcional: tú decides hasta dónde llegar." },
  { titulo: "Acompaña a tu equipo", texto: "Si llegas a tener personas contigo, tu trabajo pasa a ser orientarlas y no dejarlas solas." },
  { titulo: "Mide ventas, gastos y resultados", texto: "Anotas cuánto compraste, cuánto vendiste y cuánto gastaste. Sin números no hay negocio, solo ilusión." },
];

export const FAQ: { p: string; r: string }[] = [
  {
    p: "¿Cuánto dinero necesito para comenzar?",
    r: "Los packs van de S/ 240 a S/ 1,620 de inversión en productos. No hace falta elegir el más alto: puedes empezar por el que te deje tranquilo con tus gastos del mes. Todas las compras son al contado; no existe crédito.",
  },
  {
    p: "¿Hay que pagar una inscripción o membresía?",
    r: "Según el plan vigente, el código de socio se activa con tu primera compra de productos (el pack que elijas). No se presenta ninguna inscripción ni kit aparte. Si algo cambia en las condiciones, te aviso antes de que compres.",
  },
  {
    p: "¿Es obligatorio comprar un kit?",
    r: "No. Lo que activa tu código es la primera compra de productos del pack que elijas.",
  },
  {
    p: "¿Qué productos recibo?",
    r: "Eliges productos del catálogo de Santa Natura con los puntos de tu pack: 50, 100, 250 o 450 puntos según la modalidad. Te oriento para que escojas bien.",
  },
  {
    p: "¿Cómo recojo o recibo mis productos?",
    r: "Al hacer el pedido en el sistema eliges el punto de recojo entre las tiendas autorizadas de Santa Natura, llamadas Sumaq Wasi, que están en varios distritos del Perú. Puedes consultar si tienen el producto que quieres y coordinar con ellos si hacen envíos. El paso a paso de cómo hacer pedidos desde tu tienda se enseña cuando ya tengas tu tienda virtual.",
  },
  {
    p: "¿Cómo funciona el descuento?",
    r: "El descuento es una condición de compra: pagas menos que el valor público referencial por los mismos productos. Por ejemplo, en el pack Básico el valor público es S/ 300 y tu inversión es S/ 240. Esa diferencia no es dinero en efectivo que recibes.",
  },
  {
    p: "¿El descuento es lo mismo que ganar dinero?",
    r: "No. Pagar menos por productos no es un ingreso. Aparte del descuento, el plan contempla bonos por cumplir metas (los ves más abajo), que dependen de tu actividad, de tu rango y de las condiciones del plan.",
  },
  {
    p: "¿Necesito experiencia en ventas?",
    r: "No es un requisito. Sí necesitas ganas de aprender a conversar, hacer seguimiento y llevar tus números. Yo te oriento en ese proceso.",
  },
  {
    p: "¿Puedo empezar sin dejar mi trabajo?",
    r: "Sí. Conocer la oportunidad no te exige renunciar a nada. Eso sí, requiere tiempo y constancia, y los resultados no están garantizados.",
  },
  {
    p: "¿Incluye una tienda virtual?",
    r: "Sí, el socio puede tener su tienda virtual y ahí se enseña a hacer pedidos. Una tienda virtual no trae clientes por sí sola: tienes que darla a conocer.",
  },
  {
    p: "¿Tengo que vender?",
    r: "Comprar con descuento para uso propio es una cosa; querer generar ingresos con los bonos implica que otras personas compren o se afilien contigo. Te explico qué corresponde a cada objetivo antes de que decidas.",
  },
  {
    p: "¿Tengo que comprar todos los meses?",
    r: "No estás obligado a comprar cada mes. Pero si pasan 3 meses sin comprar, tu código de socio se anula. Puedes volver a afiliarte después y no existe ninguna penalidad.",
  },
  {
    p: "¿Qué comisiones o bonificaciones existen?",
    r: "Además del descuento en tu compra, hay bonos por metas: Afilia, Liderazgo y Mercadeo, que ves más abajo con sus tablas. Existen otros bonos que te enseño cuando ya estés en el negocio, junto con cómo lograrlos.",
  },
  {
    p: "¿Cuánto puedo ganar?",
    r: "No hay una cantidad garantizada. Los bonos dependen de tu constancia, de las personas que se afilien o compren contigo, de tu rango y de cumplir las metas del plan. Cualquiera que te prometa una cifra segura no está siendo honesto.",
  },
  {
    p: "¿Qué pasa si no vendo?",
    r: "Los productos que compraste quedan contigo. Qué opciones existen si no los vendes (por ejemplo, devolución) no está confirmado en esta página: pregúntamelo antes de comprar.",
  },
  {
    p: "¿Cómo conozco el plan completo?",
    r: "Escríbeme por WhatsApp y te comparto el plan vigente. Léelo con calma y consulta todo lo que no entiendas antes de comprar.",
  },
  {
    p: "¿Cómo me acompaña Roy?",
    r: "Te explico las modalidades, resuelvo tus dudas y te ayudo a ordenar tus números. Es una orientación personal; no es un servicio de Santa Natura ni una garantía de resultados.",
  },
];

/** Lo que falta confirmar. Se muestra a los visitantes con transparencia. */
export const PENDIENTES_PUBLICOS = [
  "Cuánto vale en puntos cada producto del catálogo",
  "Costo y tiempos de envío (se coordina con la tienda Sumaq Wasi)",
  "Si existe devolución de productos",
  "Requisitos de cada rango para cobrar los bonos",
];

/** Tablas de bonos tomadas del material del plan que entregó Roy. Confirmar vigencia. */
export const BONOS = {
  afilia: {
    intro:
      "Se paga por única vez, sobre la primera compra de cada nuevo afiliado. La comisión se aplica al 100% del monto comisionable. Según tu rango, cobras hasta dos niveles de patrocinio.",
    filas: [
      { nivel: "1.er nivel", emprendedor: "25%", bronce: "25%" },
      { nivel: "2.º nivel", emprendedor: "—", bronce: "5%" },
    ],
  },
  liderazgo: {
    intro:
      "Un porcentaje del volumen de ventas de tu línea descendente, hasta 4 niveles. Los porcentajes y la cantidad de niveles dependen del rango que logres en el periodo en curso, y son independientes del rango de las personas de tu línea.",
    columnas: ["1.er nivel", "2.º nivel", "3.er nivel", "4.º nivel"],
    filas: [
      { rango: "Emprendedor", v: ["5%", "—", "—", "—"] },
      { rango: "Bronce", v: ["8%", "8%", "8%", "—"] },
      { rango: "Plata", v: ["8%", "10%", "10%", "—"] },
      { rango: "Oro y rangos superiores (hasta Imperial)", v: ["8%", "10%", "10%", "5%"] },
    ],
  },
  mercadeo: {
    intro:
      "Se logra cumpliendo objetivos de volumen de consumo personal (PP) en cada periodo de la tabla. Si no alcanzas el mínimo de un periodo, la calificación se reinicia. La primera compra (afiliación) no cuenta para este bono.",
    columnas: ["Periodo 1", "Periodo 2", "Periodo 3", "Periodo 4", "Bono"],
    filas: [
      ["Secuencia 1", "100 PP", "200 PP", "300 PP", "400 PP", "S/ 300"],
      ["Secuencia 2", "200 PP", "300 PP", "400 PP", "500 PP", "S/ 400"],
      ["Secuencia 3", "300 PP", "400 PP", "500 PP", "600 PP", "S/ 500"],
      ["Secuencia 4", "400 PP", "500 PP", "600 PP", "700 PP", "S/ 600"],
      ["Secuencia 5", "500 PP", "600 PP", "700 PP", "800 PP", "S/ 700"],
    ],
  },
};
