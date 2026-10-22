/**
 * ARCHIVO ÚNICO DE CONFIGURACIÓN
 * Aquí vive todo lo que Roy puede cambiar sin tocar el diseño:
 * número de WhatsApp, fotos, precios de las modalidades, textos de productos y preguntas.
 *
 * Regla: lo que dice "PENDIENTE" no está confirmado. No lo presentes como hecho.
 */

export const WHATSAPP = {
  /** Solo dígitos con código de país, sin + ni espacios. Ej.: "51999888777". Vacío = aún no configurado. */
  number: "",
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
    `Hola, Roy. Quiero conocer la modalidad ${nombre} de Santa Natura.`,
};

/** Alternativa si WhatsApp no abre. Déjalo vacío hasta tener el dato real. */
export const CONTACTO_ALTERNATIVO = {
  email: "", // PENDIENTE: correo de Roy
  telefono: "", // PENDIENTE: llamada o SMS
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
  foto: "",
  fotoAlt: "Roy, contador público y coach financiero",
};

export type Modalidad = {
  id: string;
  nombre: string;
  valorPublico: number;
  inversion: number;
  descuento: number; // porcentaje que declara Roy
  paraQuien: string;
  etiqueta?: string;
};

/** Datos entregados por Roy. No confirmados de forma independiente. */
export const MODALIDADES: Modalidad[] = [
  {
    id: "inicio",
    nombre: "Inicio",
    valorPublico: 300,
    inversion: 240,
    descuento: 20,
    paraQuien:
      "Para quien quiere conocer los productos y el funcionamiento con el menor monto de entrada de la tabla.",
    etiqueta: "Menor monto de entrada",
  },
  {
    id: "intermedio",
    nombre: "Intermedio",
    valorPublico: 600,
    inversion: 450,
    descuento: 25,
    paraQuien:
      "Para quien ya tiene claro que quiere probar con más productos y puede asumir ese monto sin afectar sus gastos del mes.",
  },
  {
    id: "avanzado",
    nombre: "Avanzado",
    valorPublico: 1500,
    inversion: 1050,
    descuento: 30,
    paraQuien:
      "Para quien ya conversó con Roy, entiende el plan y tiene un plan concreto de uso y presentación de los productos.",
  },
  {
    id: "mayor-descuento",
    nombre: "Mayor descuento",
    valorPublico: 2700,
    inversion: 1620,
    descuento: 40,
    paraQuien:
      "Para quien ya tiene experiencia o una red de personas interesadas y puede asumir un monto alto en productos.",
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
    imagen: "",
  },
  {
    id: "kalmapross",
    nombre: "Kalmapross",
    tipo: "Bebida de bienestar masculino",
    presentacion: "500 ml",
    ingredientes: "Lucraco, uña de gato, hojas de achiote, huamanpinta, maca y camu camu.",
    url: "https://santanatura.com.pe/shop/bebida-kalmapross-previene-la-prostata-de-santa-natura/",
    imagen: "",
  },
  {
    id: "tocosh",
    nombre: "Tocosh con uña de gato y muña",
    tipo: "Superalimento andino",
    presentacion: "15 sachets de 5 g (75 g)",
    ingredientes: "Tocosh, uña de gato y muña.",
    url: "https://santanatura.com.pe/shop/tocosh-con-una-de-gato-y-muna-santa-natura/",
    imagen: "",
  },
];

export const CATALOGO_URL = "https://santanatura.com.pe/shop/";

/** Texto que la propia ficha oficial incluye. Se muestra tal cual en la sección de productos. */
export const AVISO_PRODUCTOS =
  "Según el sitio oficial, estos productos se presentan como superalimentos, no como medicina, y las propiedades mencionadas son tradicionales. No sustituyen tratamiento médico. Ante molestias o dudas de salud, consulta a un profesional.";

export const PASOS = [
  { titulo: "Conoce los productos y las condiciones", texto: "Revisas qué ofrece Santa Natura y qué condiciones tiene la afiliación vigente, antes de poner un sol." },
  { titulo: "Elige una modalidad", texto: "Compáralas con calma. Elige según lo que puedes invertir sin afectar tus gastos, no según lo que parece más grande." },
  { titulo: "Aprende a presentar con responsabilidad", texto: "Hablar de un producto es contar lo que dice la ficha oficial, sin exagerar ni prometer resultados de salud." },
  { titulo: "Conversa con personas", texto: "Empiezas por tu círculo cercano, con respeto y sin presión. Se trata de conversar, no de insistir." },
  { titulo: "Haz seguimiento", texto: "Una conversación rara vez termina en una sola respuesta. Llevas un orden simple de a quién escribiste y cuándo." },
  { titulo: "Atiende clientes y, si el plan lo permite, suma socios", texto: "La parte de formar equipo depende de lo que permita el plan vigente. Se confirma antes de afiliarte." },
  { titulo: "Acompaña a tu equipo", texto: "Si llegas a tener personas contigo, tu trabajo pasa a ser orientarlas y no dejarlas solas." },
  { titulo: "Mide ventas, gastos y resultados", texto: "Anotas cuánto compraste, cuánto vendiste y cuánto gastaste. Sin números no hay negocio, solo ilusión." },
];

export const FAQ: { p: string; r: string }[] = [
  {
    p: "¿Cuánto dinero necesito para comenzar?",
    r: "Las modalidades de la tabla van de S/ 240 a S/ 1,620 de inversión en productos (datos de Roy, por confirmar con el plan vigente). No es necesario elegir la más alta: puedes empezar por la que te deje tranquilo con tus gastos del mes.",
  },
  {
    p: "¿Hay que pagar una inscripción o membresía?",
    r: "La información que maneja Roy indica que la afiliación se activa con una compra de productos. Si existiera algún otro costo, se confirma con el plan vigente antes de afiliarte.",
  },
  {
    p: "¿Es obligatorio comprar un kit?",
    r: "No se presenta ningún kit como requisito. Lo que sí hay es una compra de productos según la modalidad. Cualquier condición adicional se confirma con el plan vigente antes de afiliarte.",
  },
  {
    p: "¿Qué productos recibo?",
    r: "Son productos del catálogo de Santa Natura. Cuáles se pueden elegir y cómo se eligen en cada modalidad se confirma con el plan vigente antes de afiliarte.",
  },
  {
    p: "¿Cómo funciona el descuento?",
    r: "El descuento es una condición de compra: pagas menos que el valor público referencial por los mismos productos. Por ejemplo, en la modalidad Inicio el valor público referencial es S/ 300 y la inversión es S/ 240. Esa diferencia no es dinero en efectivo que recibes.",
  },
  {
    p: "¿El descuento es lo mismo que ganar dinero?",
    r: "No. Pagar menos por productos no es un ingreso. Un ingreso aparece cuando alguien compra a través de tu recomendación y tu margen o las bonificaciones del plan (si aplican) cubren lo que invertiste y gastaste.",
  },
  {
    p: "¿Necesito experiencia en ventas?",
    r: "No es un requisito conocido. Sí necesitas ganas de aprender a conversar, hacer seguimiento y llevar tus números. Roy te orienta en ese proceso.",
  },
  {
    p: "¿Puedo empezar sin dejar mi trabajo?",
    r: "Sí. Conocer la oportunidad no te exige renunciar a nada. Eso sí, requiere tiempo y constancia, y los resultados no están garantizados.",
  },
  {
    p: "¿Incluye una tienda virtual?",
    r: "Se confirma con la modalidad vigente. Y aunque la incluya, una tienda virtual no trae clientes por sí sola: tienes que darla a conocer.",
  },
  {
    p: "¿Tengo que vender?",
    r: "Depende de tu objetivo y del plan vigente. Comprar con descuento para uso propio es una cosa; querer generar ingresos implica que otras personas compren a través de ti. Roy te lo explica antes de que decidas.",
  },
  {
    p: "¿Hay una compra mínima posterior?",
    r: "Se confirma con el plan vigente antes de afiliarte. Es una pregunta importante: hazla antes de decidir.",
  },
  {
    p: "¿Qué comisiones o bonificaciones existen?",
    r: "Esta página no publica comisiones, bonos ni rangos porque no están confirmados con el plan oficial. Roy te comparte el plan vigente y lo revisan juntos.",
  },
  {
    p: "¿Cuánto puedo ganar?",
    r: "No hay una cantidad garantizada. Depende de tu constancia, tu forma de conversar, tu entorno, tus gastos y de las condiciones del plan. Cualquiera que te prometa una cifra segura no está siendo honesto.",
  },
  {
    p: "¿Qué pasa si no vendo?",
    r: "Los productos que compraste quedan contigo. Qué opciones existen si no los vendes (por ejemplo, devolución) se confirma con el plan vigente antes de afiliarte. Pregunta esto primero.",
  },
  {
    p: "¿Cómo conozco el plan completo?",
    r: "Escríbele a Roy por WhatsApp y pídele el plan vigente. Léelo con calma y consulta todo lo que no entiendas antes de comprar.",
  },
  {
    p: "¿Cómo me acompaña Roy?",
    r: "Te explica las modalidades, resuelve tus dudas y te ayuda a ordenar tus números. Es una orientación personal; no es un servicio de Santa Natura ni una garantía de resultados.",
  },
];

/** Lo que falta confirmar. Se muestra a los visitantes con transparencia. */
export const PENDIENTES_PUBLICOS = [
  "Costo y condiciones de envío",
  "Cómo y cuándo se activa la afiliación",
  "Compras posteriores o consumo mínimo",
  "Restricciones de la modalidad",
  "Qué productos se pueden elegir en cada modalidad",
];
