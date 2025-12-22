// Las preguntas pueden incluir opcionalmente un campo "image" con una ruta relativa a la carpeta public
// Ejemplo: "image": "/quiz-images/pregunta-0.jpg"
// Si el campo image está presente, se mostrará encima del texto de la pregunta
export const questions = [
  {
    id: 0,
    text: "¿Qué capa de la atmósfera contiene aproximadamente el 90% del ozono terrestre que ayuda a proteger contra la radiación UV-B dañina?",
    options: ["Termosfera", "Estratosfera", "Mesosfera", "Troposfera"],
    correctAnswer: 1,
    explanation:
      "La mayor parte del ozono protector del planeta se encuentra en la estratosfera, por encima de la troposfera.",
    category: "CORE",
  },
  {
    id: 1,
    text: "Según la teoría de Rowland-Molina, ¿aproximadamente cuántas moléculas de ozono puede destruir un solo átomo de cloro en la estratosfera?",
    options: ["100", "10,000", "100,000", "1,000"],
    correctAnswer: 2,
    explanation:
      "Un solo átomo de cloro puede destruir ozono catalíticamente de forma repetida, con una estimación de aproximadamente 100,000 moléculas de ozono por átomo de cloro.",
    category: "CORE",
  },
  {
    id: 2,
    text: "¿Qué elemento se describe como aún más dañino para la capa de ozono estratosférica que el cloro?",
    options: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Bromo"],
    correctAnswer: 3,
    explanation:
      "Los refrigerantes que contienen bromo se destacan como especialmente dañinos para el ozono estratosférico, aún más que el cloro.",
    category: "CORE",
  },
  {
    id: 3,
    text: "¿Qué tratado internacional de 1987 abordó las sustancias que agotan la capa de ozono y solicitó la eliminación gradual de ciertos CFC, HCFC y halones?",
    options: [
      "El Protocolo de Kioto",
      "Las Enmiendas a la Ley de Aire Limpio de 1990",
      "El Acuerdo de París",
      "El Protocolo de Montreal",
    ],
    correctAnswer: 3,
    explanation:
      "El Protocolo de Montreal (firmado en 1987) es un tratado internacional centrado en las sustancias que agotan la capa de ozono y sus alternativas.",
    category: "CORE",
  },
  {
    id: 4,
    text: "¿Qué declaración describe mejor lo que sucedió en 2010 con respecto al HCFC-22 y HCFC-142b en los EE.UU.?",
    options: [
      "Se permitió todo el uso de HCFC en equipos nuevos siempre que se realizaran pruebas de fugas.",
      "Solo se restringieron los CFC; el HCFC-22 y el HCFC-142b no tenían restricciones.",
      "El HCFC-22 solo podía usarse en electrodomésticos recién fabricados, no para servicio.",
      "Se prohibió la producción, venta o importación de nuevos sistemas que usaran HCFC-22 o HCFC-142b (o mezclas que los contengan).",
    ],
    correctAnswer: 3,
    explanation:
      "Las reglas implementadas en 2010 restringieron los equipos nuevos que usan HCFC-22/HCFC-142b y limitaron estos refrigerantes al servicio de equipos existentes.",
    category: "CORE",
  },
  {
    id: 5,
    text: "¿Qué prohibió la Regla de Electrodomésticos Precargados para productos fabricados en o después de 2010?",
    options: [
      "El uso de HFC-410A en acondicionadores de aire residenciales",
      "La recuperación de refrigerantes durante el servicio",
      "La venta o distribución de productos y componentes de AC/R precargados que contengan HCFC-22 o HCFC-142b (o mezclas que los contengan)",
      "La venta de cualquier refrigerante con un GWP inferior a 150",
    ],
    correctAnswer: 2,
    explanation:
      "La regla se dirigió a productos/componentes precargados que contenían HCFC-22 o HCFC-142b (o mezclas) si se fabricaron en o después de 2010.",
    category: "CORE",
  },
  {
    id: 6,
    text: "¿Qué prohibió la Regla de Asignación (junto con los requisitos existentes de la EPA) con respecto a los electrodomésticos recién fabricados?",
    options: [
      "Cargar electrodomésticos recién fabricados con HCFC-22 o HCFC-142b virgen (o mezclas que los contengan)",
      "Vender cualquier refrigerante en cilindros desechables",
      "Usar refrigerante recuperado en sistemas existentes",
      "Reacondicionamiento de cualquier equipo a mezclas de menor GWP",
    ],
    correctAnswer: 0,
    explanation:
      "Prohibió cargar electrodomésticos recién fabricados con HCFC-22/HCFC-142b virgen, incluida la práctica de cargar un sistema cargado en seco con estos refrigerantes.",
    category: "CORE",
  },
  {
    id: 7,
    text: "A partir del 1 de enero de 2020, ¿qué restricción importante se aplicó a los refrigerantes HCFC?",
    options: [
      "Se prohibió la producción o importación de cualquier refrigerante HCFC; solo se podían usar HCFC recuperados o regenerados en equipos existentes.",
      "Todos los HCFC volvieron a ser legales para equipos nuevos.",
      "Solo se prohibió la producción o importación de HFC.",
      "Los HCFC podían ventilarse porque su ODP es bajo.",
    ],
    correctAnswer: 0,
    explanation:
      "Después del 1 de enero de 2020, se prohibió la producción/importación de HCFC, y los equipos existentes solo podían usar HCFC recuperados/regenerados.",
    category: "CORE",
  },
  {
    id: 8,
    text: "¿Qué combinación coincide mejor con el requisito de recuperación descrito para los técnicos en los Estados Unidos?",
    options: [
      "Recuperar solo refrigerantes con ODP = 0 y GWP < 1.",
      "Recuperar solo refrigerantes de hidrocarburos porque son inflamables.",
      "Recuperar refrigerantes con ODP > 0 y GWP > 1 (mayor que el dióxido de carbono).",
      "Recuperar solo refrigerantes con ODP > 1 independientemente del GWP.",
    ],
    correctAnswer: 2,
    explanation:
      "El requisito descrito se aplica a refrigerantes con potencial de agotamiento del ozono por encima de cero y potencial de calentamiento global superior al dióxido de carbono (mayor que 1).",
    category: "CORE",
  },
  {
    id: 9,
    text: "En la terminología de seguridad de ASHRAE, ¿qué indica una clasificación A2L para ciertos refrigerantes?",
    options: [
      "No inflamable y altamente tóxico",
      "Alta inflamabilidad equivalente a los hidrocarburos A3",
      "Menor inflamabilidad con una velocidad máxima de combustión inferior a 4 pulgadas por segundo",
      "Alta toxicidad y alta inflamabilidad",
    ],
    correctAnswer: 2,
    explanation:
      "A2L indica menor inflamabilidad (incluso menor que A2 típico) y se define aquí por una velocidad máxima de combustión inferior a 4 pulgadas por segundo.",
    category: "CORE",
  },
  {
    id: 10,
    text: "¿Qué enfatizaron las enmiendas de 1990 a la Ley de Aire Limpio además de expandir la autoridad de la EPA?",
    options: [
      "Eliminar inmediatamente todos los refrigerantes de alto GWP",
      "Eliminar la autoridad de la EPA sobre la aplicación",
      "Enfoques más rentables para reducir la contaminación del aire",
      "Permitir la ventilación sin restricciones de refrigerantes",
    ],
    correctAnswer: 2,
    explanation:
      "Las enmiendas de 1990 expandieron la autoridad de la EPA y aumentaron el énfasis en enfoques rentables para reducir las emisiones.",
    category: "CORE",
  },
  {
    id: 11,
    text: "Según el programa de la Ley de Aire Limpio descrito, ¿qué se ordenó que eliminara la EPA?",
    options: [
      "Refrigerantes que agotan la capa de ozono",
      "Todos los refrigerantes con GWP por encima de 150",
      "Solo refrigerantes de hidrocarburos",
      "Todos los refrigerantes, incluidos los gases exentos como el CO2",
    ],
    correctAnswer: 0,
    explanation:
      "El mandato se centró en eliminar los refrigerantes que agotan la capa de ozono, no en requerir la eliminación de refrigerantes de alto GWP.",
    category: "CORE",
  },

  {
    id: 12,
    text: "¿Qué sustancias se agregaron a la lista de productos químicos controlados bajo el Protocolo de Montreal en la Cuarta Reunión en 1992 (según lo descrito)?",
    options: [
      "HFC y PFC",
      "HCFC y bromuro de metilo",
      "Refrigerantes naturales como el CO2",
      "Refrigerantes A2L solamente",
    ],
    correctAnswer: 1,
    explanation:
      "Los HCFC y el bromuro de metilo se agregaron en 1992 a la lista de sustancias controladas bajo el Protocolo de Montreal.",
    category: "CORE",
  },
  {
    id: 13,
    text: "¿Cuál de los siguientes refrigerantes tiene el potencial de agotamiento del ozono (ODP) más alto?",
    options: [
      "R-410A (un HFC)",
      "R-134a (un HFC)",
      "R-12 (un CFC)",
      "R-744 (CO2)",
    ],
    correctAnswer: 2,
    explanation:
      "R-12 es un CFC y tiene un ODP significativo, mientras que R-410A y R-134a (ambos HFC) tienen ODP de cero, y R-744 es un refrigerante natural con ODP cero.",
    category: "CORE",
  },
  {
    id: 14,
    text: "¿Cuál es una de las principales razones por las que las regulaciones de la EPA requieren la recuperación de refrigerantes durante el servicio y eliminación de equipos?",
    options: [
      "Para cumplir con los objetivos de reducción de los GEI del Acuerdo de París",
      "Para proteger la capa de ozono estratosférica y minimizar las emisiones de GEI",
      "Para aumentar los ingresos de la EPA",
      "Para garantizar que los técnicos usen solo cilindros desechables",
    ],
    correctAnswer: 1,
    explanation:
      "La recuperación de refrigerantes es obligatoria para proteger la capa de ozono y reducir las emisiones de gases de efecto invernadero.",
    category: "CORE",
  },
  {
    id: 15,
    text: "¿Cuál de las siguientes opciones describe mejor el 'potencial de calentamiento global' (GWP) de un refrigerante?",
    options: [
      "La capacidad del refrigerante para destruir ozono en la estratosfera",
      "La eficiencia energética del refrigerante cuando se usa en un sistema",
      "Una medida de cuánto calienta el refrigerante la atmósfera en comparación con el dióxido de carbono durante un período de tiempo determinado",
      "La temperatura máxima que puede alcanzar un refrigerante",
    ],
    correctAnswer: 2,
    explanation:
      "El GWP mide el impacto del calentamiento de un refrigerante en relación con el CO2 durante un período específico (generalmente 100 años).",
    category: "CORE",
  },
  {
    id: 16,
    text: "¿Qué afirmación es cierta sobre la Enmienda de Kigali al Protocolo de Montreal?",
    options: [
      "Se centra en eliminar gradualmente los refrigerantes naturales como el CO2 y el amoníaco",
      "Requiere que todos los países eliminen los HFC inmediatamente",
      "Tiene como objetivo reducir gradualmente la producción y el consumo de HFC para reducir las emisiones de GEI",
      "Aumenta la producción permitida de CFC y halones",
    ],
    correctAnswer: 2,
    explanation:
      "La Enmienda de Kigali (2016) se dirige a los HFC para reducir su contribución al calentamiento global, aunque no agotan la capa de ozono.",
    category: "CORE",
  },
  {
    id: 17,
    text: "¿Por qué se consideran preferibles los refrigerantes de bajo GWP según las regulaciones modernas?",
    options: [
      "Tienen una mayor eficiencia energética en todos los sistemas",
      "Minimizan el impacto del calentamiento global si se liberan a la atmósfera",
      "Son más baratos de producir que los refrigerantes de alto GWP",
      "Tienen una vida útil más corta en la atmósfera en todos los casos",
    ],
    correctAnswer: 1,
    explanation:
      "Los refrigerantes de bajo GWP reducen el impacto del cambio climático porque calientan menos la atmósfera que los refrigerantes de alto GWP cuando se emiten.",
    category: "CORE",
  },
  {
    id: 18,
    text: "¿Cuál de los siguientes refrigerantes se clasifica como HFC?",
    options: ["R-22", "R-12", "R-410A", "R-717 (amoníaco)"],
    correctAnswer: 2,
    explanation:
      "R-410A es un hidrofluorocarbono (HFC). R-22 es un HCFC, R-12 es un CFC y R-717 es un refrigerante natural.",
    category: "CORE",
  },
  {
    id: 19,
    text: "Si un sistema contiene R-404A, ¿qué tipo de refrigerante es?",
    options: ["Un CFC", "Un HCFC", "Un HFC", "Un refrigerante natural"],
    correctAnswer: 2,
    explanation:
      "R-404A es una mezcla HFC. No tiene potencial de agotamiento del ozono, pero tiene un alto GWP.",
    category: "CORE",
  },
  {
    id: 20,
    text: "¿Cuál es el propósito principal del sistema de numeración de refrigerantes de la serie 400 (por ejemplo, R-404A, R-407C)?",
    options: [
      "Indicar que todos son refrigerantes naturales",
      "Identificarlos como mezclas zeotrópicas o casi azeotrópicas",
      "Mostrar que todos tienen un GWP inferior a 150",
      "Señalar que son hidrocarburos puros",
    ],
    correctAnswer: 1,
    explanation:
      "Los refrigerantes de la serie 400 son mezclas (zeotrópicas o casi azeotrópicas) de diferentes compuestos, generalmente HFC.",
    category: "CORE",
  },
  {
    id: 21,
    text: "¿Qué identifica la letra 'L' en la clasificación de seguridad de refrigerantes de ASHRAE (por ejemplo, A2L)?",
    options: [
      "Baja toxicidad",
      "Baja presión",
      "Menor inflamabilidad",
      "Bajo GWP",
    ],
    correctAnswer: 2,
    explanation:
      "En ASHRAE Standard 34, 'L' significa menor inflamabilidad; la 'A' se refiere a baja toxicidad y el número indica el nivel de inflamabilidad.",
    category: "CORE",
  },
  {
    id: 22,
    text: "¿Cuál de las siguientes afirmaciones sobre el amoníaco (R-717) es correcta?",
    options: [
      "Es un HFC con bajo GWP",
      "Es tóxico, inflamable y se usa comúnmente en refrigeración industrial",
      "Tiene un alto ODP y está prohibido en nuevos sistemas",
      "Es un refrigerante sintético desarrollado en la década de 1990",
    ],
    correctAnswer: 1,
    explanation:
      "El amoníaco es un refrigerante natural con ODP cero y GWP bajo, pero es tóxico e inflamable, por lo que se usa principalmente en aplicaciones industriales.",
    category: "CORE",
  },
  {
    id: 23,
    text: "¿Por qué los refrigerantes como el CO2 (R-744) se consideran amigables con el medio ambiente?",
    options: [
      "Tienen ODP alto pero GWP bajo",
      "Tienen ODP cero y GWP muy bajo (1)",
      "No requieren equipo de recuperación",
      "Pueden ventilarse libremente sin restricciones regulatorias",
    ],
    correctAnswer: 1,
    explanation:
      "El CO2 es un refrigerante natural con ODP cero y un GWP de 1 (la línea de base de referencia), lo que lo hace ecológico. Sin embargo, aún debe manejarse adecuadamente.",
    category: "CORE",
  },
  {
    id: 24,
    text: "¿Qué característica del R-410A lo convierte en un refrigerante común en sistemas residenciales y comerciales ligeros modernos?",
    options: [
      "Tiene un ODP muy bajo",
      "Tiene ODP cero y mejor eficiencia que el R-22 en muchas aplicaciones",
      "Es un refrigerante natural como el propano",
      "Tiene un GWP inferior a 150",
    ],
    correctAnswer: 1,
    explanation:
      "R-410A es un HFC (ODP cero) que ofrece buena eficiencia, aunque su GWP es alto (~2088), lo que impulsa la transición a alternativas de menor GWP.",
    category: "CORE",
  },
  {
    id: 25,
    text: "¿Cuál de los siguientes es verdadero sobre las mezclas zeotrópicas (serie 400)?",
    options: [
      "Se comportan como sustancias puras en todas las condiciones",
      "Pueden experimentar deslizamiento de temperatura (temperature glide) y fraccionamiento",
      "Nunca requieren carga de líquido",
      "Todos tienen GWP cero",
    ],
    correctAnswer: 1,
    explanation:
      "Las mezclas zeotrópicas tienen diferentes puntos de ebullición de sus componentes, lo que resulta en deslizamiento de temperatura y posible fraccionamiento durante fugas o carga incorrecta.",
    category: "CORE",
  },
  {
    id: 26,
    text: "¿Qué afirmación describe mejor los lubricantes de polioléster (POE) utilizados con refrigerantes HFC?",
    options: [
      "Son menos higroscópicos que los aceites minerales",
      "Son altamente higroscópicos y requieren un manejo cuidadoso para evitar la absorción de humedad",
      "No se pueden usar con ningún refrigerante HFC",
      "Son idénticos a los aceites minerales en todas las propiedades",
    ],
    correctAnswer: 1,
    explanation:
      "Los aceites POE son higroscópicos (absorben humedad fácilmente), lo que requiere almacenamiento y manejo cuidadosos para evitar la contaminación por humedad.",
    category: "CORE",
  },
  {
    id: 27,
    text: "¿Por qué es importante llenar los cilindros de refrigerante con líquido solo hasta el 80% de su capacidad?",
    options: [
      "Para facilitar la carga de vapor",
      "Para prevenir la sobrepresión hidrostática si la temperatura aumenta",
      "Para cumplir con las regulaciones de bajo GWP",
      "Para reducir el costo de envío",
    ],
    correctAnswer: 1,
    explanation:
      "Llenar solo hasta el 80% deja espacio para la expansión térmica del líquido; llenar en exceso puede causar presión hidrostática peligrosa.",
    category: "CORE",
  },
  {
    id: 28,
    text: "¿Cuál es el propósito de usar una bomba de vacío al dar servicio a sistemas de refrigeración y aire acondicionado?",
    options: [
      "Para cargar refrigerante en el sistema",
      "Para eliminar el aire, la humedad y los no condensables del sistema",
      "Para aumentar el punto de ebullición del refrigerante",
      "Para reducir el GWP del refrigerante",
    ],
    correctAnswer: 1,
    explanation:
      "La evacuación con bomba de vacío elimina el aire, la humedad y los no condensables que pueden afectar el rendimiento y la vida útil del sistema.",
    category: "CORE",
  },
  {
    id: 29,
    text: "¿Qué método se prefiere para cargar mezclas zeotrópicas (serie 400) en un sistema?",
    options: [
      "Carga de vapor únicamente",
      "Carga de líquido para evitar el fraccionamiento",
      "Carga a través del lado de succión como vapor",
      "Mezclar con un CFC primero, luego cargar",
    ],
    correctAnswer: 1,
    explanation:
      "La carga de líquido es preferible para las mezclas zeotrópicas para mantener la composición correcta de la mezcla y evitar el fraccionamiento.",
    category: "CORE",
  },
  {
    id: 30,
    text: "¿Cuál de las siguientes afirmaciones sobre los refrigerantes inflamables (A2L o A3) es correcta?",
    options: [
      "Nunca requieren precauciones especiales",
      "Deben manejarse de acuerdo con códigos y estándares de seguridad, incluidos el control de fuentes de ignición y la ventilación adecuada",
      "Pueden mezclarse libremente con refrigerantes no inflamables",
      "Están prohibidos en todos los sistemas de refrigeración",
    ],
    correctAnswer: 1,
    explanation:
      "Los refrigerantes inflamables requieren precauciones especiales de seguridad, incluyendo ventilación, eliminación de fuentes de ignición y cumplimiento de códigos como ASHRAE 15.",
    category: "CORE",
  },
  {
    id: 31,
    text: "¿Por qué es importante usar el lubricante correcto con un tipo particular de refrigerante?",
    options: [
      "Para garantizar la compatibilidad, el retorno de aceite adecuado y proteger los componentes del compresor",
      "Para aumentar el GWP del refrigerante",
      "Para cumplir solo con las regulaciones de la EPA sobre ODP",
      "Para permitir que el refrigerante se ventile sin penalización",
    ],
    correctAnswer: 0,
    explanation:
      "El aceite correcto asegura la lubricación adecuada del compresor, compatibilidad química con el refrigerante y retorno de aceite, previniendo fallos del sistema.",
    category: "CORE",
  },
  {
    id: 32,
    text: "Si un sistema tiene una fuga y pierde refrigerante, ¿cuál es el primer paso apropiado?",
    options: [
      "Recargar el refrigerante inmediatamente sin reparar la fuga",
      "Ventar el refrigerante restante para facilitar la reparación",
      "Localizar y reparar la fuga antes de recargar",
      "Cambiar a un refrigerante diferente sin reparar la fuga",
    ],
    correctAnswer: 2,
    explanation:
      "Las regulaciones y mejores prácticas requieren encontrar y reparar fugas antes de recargar, para prevenir emisiones continuas y desperdicios.",
    category: "CORE",
  },
  {
    id: 33,
    text: "¿Qué es un 'retrofit' de refrigerante?",
    options: [
      "Eliminar el refrigerante del sistema sin reemplazo",
      "Reemplazar el refrigerante existente con un refrigerante alternativo diferente, a menudo con modificaciones del sistema",
      "Instalar un nuevo compresor sin cambiar el refrigerante",
      "Llenar en exceso el sistema con el mismo refrigerante",
    ],
    correctAnswer: 1,
    explanation:
      "Un retrofit implica cambiar a un refrigerante diferente, lo que generalmente requiere cambios de aceite, ajustes del sistema y documentación adecuada.",
    category: "CORE",
  },
  {
    id: 34,
    text: "¿Cuál de los siguientes refrigerantes es conocido por tener un GWP muy alto (>3000)?",
    options: ["R-134a", "R-410A", "R-404A", "R-744"],
    correctAnswer: 2,
    explanation:
      "R-404A tiene un GWP muy alto (~3922), lo que impulsa su eliminación gradual en favor de alternativas de menor GWP.",
    category: "CORE",
  },
  {
    id: 35,
    text: "¿Por qué se evita mezclar diferentes tipos de refrigerantes en un sistema?",
    options: [
      "Puede causar reacciones químicas peligrosas, rendimiento deficiente del sistema y contaminación del refrigerante",
      "Aumenta la eficiencia energética del sistema",
      "Es requerido por las regulaciones de la EPA para todos los refrigerantes",
      "Reduce el costo del servicio",
    ],
    correctAnswer: 0,
    explanation:
      "Mezclar refrigerantes incompatibles puede causar problemas de rendimiento, daños al equipo y crear mezclas de desecho que deben desecharse, no reutilizarse.",
    category: "CORE",
  },
  {
    id: 36,
    text: "¿Cuál es el objetivo principal de las técnicas de recuperación, reciclaje y regeneración de refrigerantes?",
    options: [
      "Aumentar el costo del servicio de refrigerantes",
      "Reducir las emisiones, conservar refrigerantes y proteger el medio ambiente",
      "Reemplazar todos los refrigerantes con propano",
      "Eliminar completamente la necesidad de recuperación de refrigerantes",
    ],
    correctAnswer: 1,
    explanation:
      "La recuperación, el reciclaje y la regeneración minimizan las emisiones, conservan recursos y protegen la atmósfera al prevenir la liberación de refrigerantes.",
    category: "CORE",
  },
  {
    id: 37,
    text: "¿Qué es una 'fuga de alta presión' en un sistema de refrigeración?",
    options: [
      "Una fuga donde la presión del sistema es mayor que la presión atmosférica, empujando el refrigerante hacia afuera",
      "Una fuga donde la presión del sistema es menor que la presión atmosférica, aspirando aire hacia adentro",
      "Una fuga que solo ocurre durante el ciclo de descongelación",
      "Una fuga que es siempre aceptable bajo las regulaciones de la EPA",
    ],
    correctAnswer: 0,
    explanation:
      "Una fuga de alta presión ocurre cuando la presión interna excede la presión atmosférica, causando que el refrigerante escape al ambiente.",
    category: "CORE",
  },
  {
    id: 38,
    text: "¿Qué método de detección de fugas implica usar una solución de agua jabonosa aplicada a conexiones y juntas?",
    options: [
      "Detección de fugas con detector electrónico",
      "Detección de fugas con colorante ultravioleta",
      "Detección de fugas con agua jabonosa (burbujas)",
      "Detección de fugas ultrasónica",
    ],
    correctAnswer: 2,
    explanation:
      "El método de agua jabonosa muestra burbujas en el sitio de una fuga y es un método simple y efectivo para localizar fugas visualmente.",
    category: "CORE",
  },
  {
    id: 39,
    text: "¿Cuándo es apropiado para un técnico ventilar (liberar) refrigerante intencionalmente a la atmósfera?",
    options: [
      "Cuando el refrigerante es un HFC con bajo GWP",
      "Cuando el cilindro de recuperación está lleno",
      "Nunca; las regulaciones de la EPA prohíben la ventilación intencional de refrigerantes cubiertos",
      "Siempre que sea un refrigerante natural como CO2 o amoníaco",
    ],
    correctAnswer: 2,
    explanation:
      "La EPA prohíbe la ventilación intencional de refrigerantes con ODP>0 o GWP>1 durante el servicio, mantenimiento o eliminación.",
    category: "CORE",
  },
  {
    id: 40,
    text: "¿Qué información debe etiquetarse claramente en un cilindro de recuperación de refrigerante?",
    options: [
      "Solo el nombre del propietario",
      "El tipo de refrigerante contenido, fechas y advertencias de seguridad aplicables",
      "Solo el peso del cilindro",
      "Ninguna etiqueta es requerida por las regulaciones",
    ],
    correctAnswer: 1,
    explanation:
      "Los cilindros de recuperación deben etiquetarse con el tipo de refrigerante, fechas y cualquier información de seguridad relevante para prevenir contaminación y uso indebido.",
    category: "CORE",
  },
  {
    id: 41,
    text: "¿Cuál es una característica del refrigerante 'reclamado' en comparación con el refrigerante 'reciclado'?",
    options: [
      "El refrigerante reclamado ha sido procesado solo con filtros secadores",
      "El refrigerante reclamado ha sido analizado químicamente para cumplir con los estándares de pureza AHRI 700",
      "El refrigerante reciclado siempre es más puro que el reclamado",
      "No hay diferencia entre reclamado y reciclado",
    ],
    correctAnswer: 1,
    explanation:
      "El refrigerante reclamado se procesa y analiza para cumplir con las especificaciones de producto nuevo (AHRI 700), mientras que el reciclado solo se limpia sin pruebas de pureza.",
    category: "CORE",
  },
  {
    id: 42,
    text: "El refrigerante recuperado puede devolverse sin restricción a:",
    options: [
      "Solo al mismo sistema del que provino y nunca a ningún otro",
      "Cualquier sistema propiedad de un cliente diferente si no se vende",
      "El mismo sistema u otro sistema propiedad de la misma persona",
      "Cualquier sistema siempre que el refrigerante se filtre una vez",
    ],
    correctAnswer: 2,
    explanation:
      "El refrigerante recuperado puede usarse en el mismo sistema u otros sistemas propiedad de la misma persona, pero la transferencia de propiedad está restringida a menos que el refrigerante sea regenerado.",
    category: "CORE",
  },
  {
    id: 43,
    text: "Si se envía refrigerante recuperado para eliminación o a una instalación de regeneración, ¿qué tipo de recipiente se requiere?",
    options: [
      "Cualquier cilindro de refrigerante desechable",
      "Un cilindro de recuperación aprobado por DOT",
      "Un contenedor de vidrio con clasificación de vacío",
      "Un contenedor de plástico no presurizado",
    ],
    correctAnswer: 1,
    explanation:
      "Para eliminación o envío a regeneración, el refrigerante recuperado debe almacenarse en un cilindro de recuperación aprobado por DOT.",
    category: "CORE",
  },
  {
    id: 44,
    text: "Un cilindro de recuperación aprobado por DOT se identifica comúnmente por qué esquema de color?",
    options: [
      "Cuerpo gris con parte superior amarilla",
      "Cuerpo verde con parte superior gris",
      "Cuerpo rojo con parte superior negra",
      "Cuerpo azul con parte superior blanca",
    ],
    correctAnswer: 0,
    explanation:
      "Los cilindros de recuperación aprobados por DOT están pintados de gris con la parte superior amarilla.",
    category: "CORE",
    image: "/public/quiz-images/44.png",
  },
  {
    id: 45,
    text: "¿Qué declaración describe mejor el 'reciclaje' de refrigerante?",
    options: [
      "Almacenar refrigerante sin ningún procesamiento",
      "Limpieza para reutilización inmediata mediante separación de aceite y filtros secadores que reducen la humedad y acidez",
      "Destruir refrigerante contaminado mediante incineración controlada",
      "Verificar la pureza mediante análisis químico para cumplir con AHRI 700",
    ],
    correctAnswer: 1,
    explanation:
      "El reciclaje típicamente implica separación de aceite y uno o más pases a través de filtros secadores para reducir la humedad y acidez para su reutilización.",
    category: "CORE",
  },
  {
    id: 46,
    text: "¿Por qué se considera crítica la separación de aceite durante el reciclaje?",
    options: [
      "El aceite asegura que el refrigerante cumpla con AHRI 700 sin análisis",
      "El aceite aumenta la densidad del refrigerante y acelera la recuperación",
      "El aceite contiene gran parte del ácido y agua presente en el sistema",
      "El aceite previene el fraccionamiento en refrigerantes mezclados",
    ],
    correctAnswer: 2,
    explanation:
      "El aceite contaminado retiene la mayor parte del ácido y agua; no eliminarlo conduce a una limpieza deficiente y contaminación continua.",
    category: "CORE",
  },
  {
    id: 47,
    text: "¿Qué afirmación es verdadera sobre los estándares de pureza del refrigerante reciclado?",
    options: [
      "El refrigerante reciclado debe analizarse químicamente para certificación de pureza",
      "No hay estándares definidos para qué tan limpio debe estar el refrigerante reciclado para ser llamado reciclado",
      "El refrigerante reciclado debe destruirse si se filtró solo una vez",
      "El refrigerante reciclado siempre debe cumplir con AHRI 700",
    ],
    correctAnswer: 1,
    explanation:
      "El reciclaje no tiene requisito de estándar de pureza específico; el proceso puede incluir pases individuales o múltiples a través de dispositivos de limpieza.",
    category: "CORE",
  },
  {
    id: 48,
    text: "¿Qué condición debe cumplirse para que el refrigerante sea llamado 'regenerado'?",
    options: [
      "Debe devolverse solo al sistema original",
      "Debe mezclarse con refrigerante virgen para mejorar la pureza",
      "Debe analizarse químicamente y demostrarse que cumple con el estándar de pureza AHRI 700",
      "Debe pasarse a través de un solo filtro secador",
    ],
    correctAnswer: 2,
    explanation:
      "El refrigerante regenerado requiere análisis químico verificando que cumple con la pureza de producto nuevo AHRI 700.",
    category: "CORE",
  },
  {
    id: 49,
    text: "¿Qué declaración describe correctamente las reglas de transferencia de propiedad para refrigerante usado?",
    options: [
      "El refrigerante recuperado siempre puede venderse si se almacenó en un cilindro de recuperación",
      "El refrigerante recuperado y reciclado puede transferirse libremente si está etiquetado",
      "El refrigerante reciclado puede regalarse a cualquier técnico para su reutilización",
      "Solo el refrigerante regenerado puede transferirse o venderse a otra persona",
    ],
    correctAnswer: 3,
    explanation:
      "El refrigerante recuperado o reciclado no puede transferirse a otro propietario excepto para regeneración o destrucción; solo el refrigerante regenerado puede venderse/transferirse para uso.",
    category: "CORE",
  },
  {
    id: 50,
    text: "¿Qué práctica aborda con mayor precisión una preocupación de garantía del sistema?",
    options: [
      "Evitar el refrigerante regenerado porque puede invalidar garantías",
      "Usar refrigerante nuevo virgen o regenerado para sistemas grandes bajo garantía",
      "Mezclar refrigerante reciclado y recuperado para mejorar la limpieza",
      "Usar refrigerante reciclado porque tiene las pruebas de pureza más estrictas",
    ],
    correctAnswer: 1,
    explanation:
      "El refrigerante regenerado cumple con las especificaciones de pureza nuevas, mientras que el refrigerante reciclado no tiene prueba de pureza; usar refrigerante virgen o regenerado es más seguro para la protección de garantía.",
    category: "CORE",
  },
  {
    id: 51,
    text: "Si el refrigerante se usará en equipo propiedad de alguien distinto al propietario original, ¿qué debe hacerse primero?",
    options: [
      "El refrigerante debe cargarse en vapor en el nuevo sistema",
      "El refrigerante solo necesita reciclarse una vez",
      "El refrigerante puede transferirse si está en un cilindro gris/amarillo",
      "El refrigerante debe regenerarse",
    ],
    correctAnswer: 3,
    explanation:
      "El uso en equipo propiedad de una persona diferente requiere que el refrigerante sea regenerado; la propiedad de refrigerante recuperado/reciclado no puede transferirse para reutilización directa.",
    category: "CORE",
  },
  {
    id: 52,
    text: "Si se encuentra que un sistema R-22 contiene R-410A agregado, ¿cuál es el manejo correcto de la mezcla recuperada?",
    options: [
      "Ventilarlo porque el refrigerante mezclado está exento de las reglas de recuperación",
      "Recuperarlo en un cilindro R-22 y enviarlo a un regenerador para restaurarlo a AHRI 700",
      "Recuperarlo en un tanque dedicado y enviarlo a una instalación aprobada por la EPA para eliminación (típicamente incineración controlada)",
      "Reciclarlo en el sitio y reutilizarlo en otro sistema R-22 propiedad de la misma persona",
    ],
    correctAnswer: 2,
    explanation:
      "Una mezcla contaminada de R-22/R-410A no puede reutilizarse ni regenerarse; debe recuperarse en un tanque separado y enviarse para eliminación aprobada por la EPA.",
    category: "CORE",
  },
  {
    id: 53,
    text: "¿Qué factor puede hacer que la identificación del refrigerante por presión-temperatura no sea confiable, especialmente para mezclas de la serie 400?",
    options: [
      "Usar mangueras cortas con conexiones de abocinado de 1/4 de pulgada",
      "Fraccionamiento causado por fugas o carga de vapor cambiando el comportamiento de presión-temperatura de la mezcla",
      "Usar un cilindro de recuperación con cierre de flotador al 80% de llenado",
      "Etiquetar el contenido del cilindro según los requisitos del DOT",
    ],
    correctAnswer: 1,
    explanation:
      "Las mezclas no azeotrópicas (serie 400) pueden fraccionarse durante fugas o carga de vapor inadecuada, cambiando su curva de presión-temperatura de saturación y haciendo la identificación difícil o imposible.",
    category: "CORE",
    image: "/public/quiz-images/53.png",
  },
  {
    id: 54,
    text: "¿Cuál es el método preferido para romper el vacío de evacuación antes de abrir un sistema?",
    options: [
      "Introducir vapor de refrigerante hasta que la presión se iguale",
      "Permitir que el aire ambiente entre lentamente",
      "Introducir nitrógeno hasta ligeramente por encima de la presión atmosférica",
      "Dejar el sistema bajo vacío hasta que se complete la reparación",
    ],
    correctAnswer: 2,
    explanation:
      "Elevar la presión ligeramente por encima de la presión atmosférica con nitrógeno ayuda a evitar que la humedad y el aire sean aspirados hacia el sistema.",
    category: "CORE",
  },
  {
    id: 55,
    text: "¿Por qué la evacuación por sí sola es ineficaz para eliminar el aceite mineral y el ácido de un sistema?",
    options: [
      "La evacuación solo elimina contaminantes que pueden evaporarse",
      "El aceite mineral se descompone bajo vacío",
      "El ácido se neutraliza durante la evacuación",
      "El aceite y el ácido son filtrados por la bomba de vacío",
    ],
    correctAnswer: 0,
    explanation:
      "Solo los contaminantes capaces de evaporarse se eliminan durante la evacuación, dejando atrás aceite, ácido y partículas.",
    category: "CORE",
  },
  {
    id: 56,
    text: "¿Cuál es la causa principal de las quemaduras del compresor después de conversiones incorrectas de refrigerante?",
    options: [
      "Presión excesiva del sistema",
      "Aceite residual, ácido, humedad o contaminantes",
      "Dimensionamiento incorrecto del dispositivo de expansión",
      "Carga insuficiente de refrigerante",
    ],
    correctAnswer: 1,
    explanation:
      "Una limpieza inadecuada deja residuos dañinos que pueden provocar la formación de ácido y la falla del compresor.",
    category: "CORE",
  },
  {
    id: 57,
    text: "¿Por qué las soluciones de limpieza a base de agua son inaceptables para los sistemas de refrigeración?",
    options: [
      "Son demasiado costosas",
      "No eliminan el aceite de manera efectiva",
      "Introducen agua y otras impurezas no evaporables",
      "Reaccionan violentamente con el nitrógeno",
    ],
    correctAnswer: 2,
    explanation:
      "Las soluciones a base de agua sustituyen la contaminación por aceite por agua, que es difícil de eliminar y perjudicial para el sistema.",
    category: "CORE",
  },
  {
    id: 58,
    text: "¿Por qué nunca deben soplarse agentes de limpieza a través de un compresor?",
    options: [
      "Incrementan la temperatura de descarga",
      "Eliminan el aceite lubricante de las superficies deslizantes",
      "Dejan residuos corrosivos",
      "Obstruyen la línea de descarga",
    ],
    correctAnswer: 1,
    explanation:
      "Eliminar el aceite lubricante de las superficies del compresor puede provocar que el compresor se agarrote.",
    category: "CORE",
  },
  {
    id: 59,
    text: "¿Qué práctica siempre debe realizarse después del ensamblaje final del sistema durante una limpieza por quemadura o conversión?",
    options: [
      "Agregar aceite refrigerante adicional",
      "Realizar una prueba de ácido en el sistema en funcionamiento",
      "Reemplazar el dispositivo de expansión",
      "Presurizar el sistema con aire comprimido",
    ],
    correctAnswer: 1,
    explanation:
      "Una prueba de ácido ayuda a confirmar que los ácidos dañinos han sido eliminados antes de la operación a largo plazo.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-11.png",
  },
  {
    id: 60,
    text: "¿Por qué se prefiere QwikShot® Refrigerant and Oil Treatment en lugar de neutralizadores de ácido?",
    options: [
      "Es menos costoso",
      "Funciona solo con aceites minerales",
      "Elimina el ácido sin dejar residuos ni subproductos",
      "Aumenta la alcalinidad del sistema para protección contra la corrosión",
    ],
    correctAnswer: 2,
    explanation:
      "Eliminar el ácido sin dejar residuos evita introducir nuevos contaminantes en el sistema.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-12.png",
  },
  {
    id: 61,
    text: "¿Qué evidencia visual puede indicar la presencia de una fuga de refrigerante en un sistema?",
    options: [
      "Condensación en el evaporador",
      "Residuos de aceite en las superficies exteriores",
      "Escarcha en la línea de líquido",
      "Alto amperaje del compresor",
    ],
    correctAnswer: 1,
    explanation:
      "El refrigerante se vaporiza en el punto de fuga, dejando aceite no evaporable en la superficie.",
    category: "CORE",
  },
  {
    id: 62,
    text: "¿Cuál es la tasa mínima aproximada de fuga detectable por un detector electrónico típico?",
    options: [
      "5 onzas por año",
      "1 libra por año",
      "0.5 onzas por año",
      "0.05 onzas por hora",
    ],
    correctAnswer: 2,
    explanation:
      "Los detectores electrónicos de fugas son lo suficientemente sensibles para detectar tasas de fuga anuales muy pequeñas.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-13.png",
  },
  {
    id: 63,
    text: "¿Por qué nunca debe exponerse la sonda de un detector electrónico de fugas a altas concentraciones de refrigerante?",
    options: [
      "Puede dar lecturas falsas negativas",
      "Puede dañar permanentemente la sonda",
      "Provoca la descomposición del refrigerante",
      "Descarga la batería del detector",
    ],
    correctAnswer: 1,
    explanation:
      "Las altas concentraciones de refrigerante pueden destruir la sonda sensible del detector.",
    category: "CORE",
  },
  {
    id: 64,
    text: "¿Por qué se prefiere el nitrógeno seco en lugar del aire comprimido para la detección de fugas?",
    options: [
      "El nitrógeno es más pesado que el aire",
      "El aire comprimido es ilegal de usar",
      "El nitrógeno no contiene oxígeno ni humedad",
      "El aire comprimido no puede alcanzar altas presiones",
    ],
    correctAnswer: 2,
    explanation:
      "El oxígeno y la humedad del aire comprimido pueden causar explosiones y contaminar el sistema.",
    category: "CORE",
  },
  {
    id: 65,
    text: "¿Qué condición confirma la presencia de una fuga durante una prueba de caída de presión?",
    options: [
      "Cualquier cambio de presión con el tiempo",
      "Una caída de presión más allá de la precisión del manómetro y los efectos de temperatura",
      "Un aumento de presión después del aislamiento",
      "Presión estable durante 10 minutos",
    ],
    correctAnswer: 1,
    explanation:
      "Una fuga se indica cuando la pérdida de presión excede lo que puede explicarse por la tolerancia del manómetro o la variación de temperatura.",
    category: "CORE",
  },
  {
    id: 66,
    text: "¿Bajo qué condición se requiere la deshidratación de un sistema de refrigeración?",
    options: [
      "Siempre que un sistema tenga una fuga menor de refrigerante",
      "Cuando las presiones de operación del sistema exceden la presión atmosférica",
      "Cuando el sistema ha sido abierto y ha entrado aire",
      "Cada vez que se agrega aceite al sistema",
    ],
    correctAnswer: 2,
    explanation:
      "La deshidratación solo es necesaria cuando entra aire al sistema, lo cual ocurre si el sistema se abre.",
    category: "CORE",
  },
  {
    id: 67,
    text: "¿Cuál es el nivel mínimo de vacío requerido para deshidratar correctamente un sistema de refrigeración?",
    options: [
      "500 micrones",
      "2,000 micrones",
      "29 pulgadas de mercurio",
      "10–15 psig",
    ],
    correctAnswer: 0,
    explanation:
      "Se requiere un vacío profundo de al menos 500 micrones para eliminar la humedad del sistema.",
    category: "CORE",
  },
  {
    id: 68,
    text: "¿Por qué el uso de una bomba de vacío sobredimensionada puede ralentizar la eliminación de humedad?",
    options: [
      "Introduce gases no condensables",
      "Reduce la temperatura del aceite demasiado rápido",
      "Provoca la condensación del refrigerante",
      "Puede congelar el agua al reducir la presión demasiado rápido",
    ],
    correctAnswer: 3,
    explanation:
      "Una caída rápida de presión puede enfriar el agua lo suficiente como para congelarla, haciendo que la evacuación sea mucho más lenta.",
    category: "CORE",
  },
  {
    id: 69,
    text: "Durante una triple evacuación, ¿a qué presión se introduce normalmente el nitrógeno seco?",
    options: [
      "Por debajo de 500 micrones",
      "10–15 psig",
      "Solo a presión atmosférica",
      "Por encima de la presión máxima de trabajo del sistema",
    ],
    correctAnswer: 1,
    explanation:
      "El nitrógeno seco se agrega para elevar la presión del sistema a aproximadamente 10–15 psig entre evacuaciones.",
    category: "CORE",
  },
  {
    id: 70,
    text: "Si la presión aumenta desde un vacío profundo y se estabiliza por debajo de la presión atmosférica, ¿qué indica esto?",
    options: [
      "Una fuga en el sistema",
      "Solo gases no condensables",
      "Agua atrapada evaporándose",
      "Comportamiento normal del sistema",
    ],
    correctAnswer: 2,
    explanation:
      "Un aumento de presión que se estabiliza por debajo de la presión ambiente indica que el agua aún se está evaporando.",
    category: "CORE",
  },
  {
    id: 71,
    text: "¿Qué dispositivo de seguridad siempre debe instalarse aguas abajo de un regulador de presión de nitrógeno?",
    options: [
      "Válvula de alivio de presión o disco de ruptura",
      "Manómetro de micrones",
      "Juego de manómetros",
      "Separador de aceite",
    ],
    correctAnswer: 0,
    explanation:
      "Un dispositivo de alivio de presión evita la sobrepresurización accidental del sistema.",
    category: "CORE",
  },
  {
    id: 72,
    text: "¿Cuál es el propósito principal de la válvula de lastre de gas mostrada en la bomba de vacío?",
    options: [
      "Aumentar la velocidad de la bomba",
      "Evitar que la humedad y el refrigerante se condensen en el aceite",
      "Aislar la bomba del sistema",
      "Medir la profundidad del vacío",
    ],
    correctAnswer: 1,
    explanation:
      "La válvula de lastre de gas diluye los vapores para reducir la condensación de humedad o refrigerante en el aceite de la bomba.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-14.png",
  },
  {
    id: 73,
    text: "¿En qué punto durante la evacuación debe cerrarse la válvula de lastre de gas?",
    options: [
      "Inmediatamente después de arrancar la bomba",
      "Cuando el vacío alcanza al menos 20–25 pulgadas de mercurio",
      "Solo después de alcanzar 500 micrones",
      "Debe permanecer abierta durante toda la evacuación",
    ],
    correctAnswer: 3,
    explanation:
      "Dejar la válvula de lastre de gas abierta impide alcanzar un vacío profundo.",
    category: "CORE",
  },
  {
    id: 74,
    text: "¿Por qué se prefiere un manómetro electrónico de micrones sobre un manómetro de colector para una evacuación profunda?",
    options: [
      "Mide el tipo de refrigerante",
      "Puede soportar presiones más altas",
      "Proporciona una resolución precisa a presiones muy bajas",
      "Reemplaza la necesidad de una bomba de vacío",
    ],
    correctAnswer: 2,
    explanation:
      "Un manómetro de micrones mide con precisión niveles de vacío profundo donde los manómetros de colector carecen de resolución.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-15.png",
  },
  {
    id: 75,
    text: "¿Qué indica con mayor probabilidad una lectura del manómetro de micrones por encima de 5,000 micrones durante el período de espera?",
    options: [
      "Una fuga en el sistema",
      "Evaporación normal de la humedad",
      "Deshidratación adecuada",
      "Refrigerante fraccionado",
    ],
    correctAnswer: 0,
    explanation:
      "Un aumento por encima de 5,000 micrones sugiere una fuga en lugar de humedad residual.",
    category: "CORE",
  },
  {
    id: 76,
    text: "¿Por qué los refrigerantes no tóxicos aún pueden ser peligrosos en espacios cerrados?",
    options: [
      "Reaccionan químicamente con el oxígeno",
      "Desplazan el oxígeno en el aire",
      "Aumentan rápidamente la temperatura del aire",
      "Producen subproductos tóxicos de inmediato",
    ],
    correctAnswer: 1,
    explanation:
      "Incluso los refrigerantes clasificados como no tóxicos pueden causar asfixia al desplazar el oxígeno, especialmente en áreas con poca ventilación.",
    category: "CORE",
  },
  {
    id: 77,
    text: "¿Qué tasa mínima de ventilación se recomienda antes de trabajar con refrigerantes?",
    options: [
      "Un cambio de aire por hora",
      "Dos cambios de aire por hora",
      "Tres cambios de aire por hora",
      "Cuatro cambios de aire por hora",
    ],
    correctAnswer: 3,
    explanation:
      "Una ventilación adecuada requiere al menos cuatro cambios de aire por hora para reducir el riesgo de desplazamiento de oxígeno.",
    category: "CORE",
  },
  {
    id: 78,
    text: "¿Cuál es la causa principal de muerte en la mayoría de los accidentes fatales con refrigerantes?",
    options: [
      "Toxicidad química",
      "Lesiones por explosión",
      "Privación de oxígeno",
      "Congelación severa",
    ],
    correctAnswer: 2,
    explanation:
      "La mayoría de los accidentes fatales con refrigerantes resultan del desplazamiento del oxígeno por vapor de refrigerante, lo que provoca asfixia.",
    category: "CORE",
  },
  {
    id: 79,
    text: "¿Qué acción debe tomarse si ocurre una gran fuga de refrigerante en un espacio cerrado y no hay SCBA disponible?",
    options: [
      "Sellar la fuga inmediatamente",
      "Ventilar el espacio permaneciendo dentro",
      "Evacuar el área de inmediato",
      "Usar aire comprimido para dispersar los vapores",
    ],
    correctAnswer: 2,
    explanation:
      "Si no hay SCBA disponible durante una liberación grande, se requiere evacuación inmediata para evitar la asfixia.",
    category: "CORE",
  },
  {
    id: 80,
    text: "¿Cómo clasifica la Norma 34 de ASHRAE los refrigerantes por toxicidad?",
    options: [
      "Por punto de ebullición",
      "Por límite de exposición permisible",
      "Por presión de operación",
      "Por peso molecular",
    ],
    correctAnswer: 1,
    explanation:
      "Las clasificaciones de toxicidad se basan en los límites de exposición permisibles, separando los refrigerantes en grupos de baja y alta toxicidad.",
    category: "CORE",
  },
  {
    id: 81,
    text: "¿Qué clasificación de seguridad de ASHRAE representa un refrigerante con baja toxicidad y sin propagación de llama?",
    options: ["A1", "A2", "B1", "B3"],
    correctAnswer: 0,
    explanation:
      "Una clasificación A1 indica baja toxicidad (A) y no inflamabilidad (1).",
    category: "CORE",
    image: "/public/quiz-images/figure-c-16.png",
  },
  {
    id: 82,
    text: "¿Por qué los refrigerantes hidrocarburos se consideran un mayor riesgo de seguridad a pesar de sus buenas características de rendimiento?",
    options: [
      "Son altamente tóxicos",
      "Son inestables a bajas presiones",
      "Son altamente inflamables",
      "Se descomponen a temperatura ambiente",
    ],
    correctAnswer: 2,
    explanation:
      "Los refrigerantes hidrocarburos tienen excelentes propiedades, pero representan un mayor riesgo debido a su alta inflamabilidad.",
    category: "CORE",
  },
  {
    id: 83,
    text: "¿Qué indica la 'L' en una clasificación de refrigerante A2L?",
    options: [
      "Baja toxicidad",
      "Baja presión",
      "Baja tasa de fuga",
      "Baja inflamabilidad",
    ],
    correctAnswer: 3,
    explanation:
      "La 'L' indica una menor velocidad de combustión, lo que significa que el refrigerante es solo ligeramente inflamable.",
    category: "CORE",
  },
  {
    id: 84,
    text: "¿Cuál es el propósito de las marcas rojas en los sistemas que contienen refrigerantes inflamables?",
    options: [
      "Identificar al fabricante",
      "Indicar alta presión del sistema",
      "Alertar a los técnicos sobre la inflamabilidad",
      "Mostrar la dirección del flujo del refrigerante",
    ],
    correctAnswer: 2,
    explanation:
      "Las marcas rojas advierten a los técnicos que hay un refrigerante inflamable presente para que se puedan tomar precauciones adicionales.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-17.png",
  },
  {
    id: 85,
    text: "¿Cuál es la longitud mínima requerida de la marca roja en un tubo de proceso para refrigerantes inflamables?",
    options: ["½ pulgada", "¾ pulgada", "1 pulgada", "2 pulgadas"],
    correctAnswer: 2,
    explanation:
      "Los tubos de proceso deben tener al menos una pulgada de marca roja para indicar la presencia de un refrigerante inflamable.",
    category: "CORE",
  },
  {
    id: 86,
    text: "¿Por qué los cilindros de refrigerante nunca deben llenarse más allá del 80 % de su capacidad en peso?",
    options: [
      "Para permitir una detección precisa de fugas",
      "Para reducir la corrosión dentro del cilindro",
      "Para evitar que la expansión del líquido cause una ruptura",
      "Para cumplir con los requisitos de codificación por colores",
    ],
    correctAnswer: 2,
    explanation:
      "Dejar espacio de vapor evita una acumulación excesiva de presión por la expansión del líquido cuando aumentan las temperaturas.",
    category: "CORE",
  },
  {
    id: 87,
    text: "¿Qué método puede usarse para evitar el sobrellenado de un cilindro de recuperación de refrigerante?",
    options: [
      "Monitorear solo la presión de descarga",
      "Usar oxígeno para presurizar el sistema",
      "Estimar visualmente el nivel de llenado",
      "Pesar el cilindro durante el llenado",
    ],
    correctAnswer: 3,
    explanation:
      "Pesar el cilindro asegura que no se llene más allá de los límites de capacidad segura.",
    category: "CORE",
  },
  {
    id: 88,
    text: "Al preparar un cilindro de refrigerante para el envío, ¿cuál es el nivel máximo de llenado permitido para cumplir con los requisitos de seguridad?",
    options: [
      "60 por ciento de su capacidad",
      "70 por ciento de su capacidad",
      "80 por ciento de su capacidad",
      "100 por ciento de su capacidad",
    ],
    correctAnswer: 2,
    explanation:
      "Limitar el nivel de llenado al 80 por ciento permite espacio para la expansión térmica y reduce el riesgo de sobrepresión durante el transporte.",
    category: "CORE",
  },
  {
    id: 89,
    text: "¿Qué información debe incluirse en los documentos de envío de refrigerante para garantizar un manejo adecuado durante una emergencia?",
    options: [
      "Número de serie del cilindro y fabricante",
      "Tipo de aceite refrigerante y viscosidad",
      "Nombre correcto de envío, clase de peligro y número de identificación UN",
      "Modelo de la máquina de recuperación y fecha de servicio",
    ],
    correctAnswer: 2,
    explanation:
      "Estos detalles identifican el material peligroso y orientan a los equipos de emergencia en la selección de los procedimientos de seguridad correctos.",
    category: "CORE",
  },
  {
    id: 90,
    text: "¿Cuál es el propósito principal de la etiqueta de clasificación DOT mostrada en un cilindro de recuperación de refrigerante?",
    options: [
      "Indicar la propiedad del cilindro",
      "Identificar el refrigerante y los peligros asociados para los equipos de emergencia",
      "Verificar la máquina de recuperación utilizada",
      "Confirmar únicamente el código de color del cilindro",
    ],
    correctAnswer: 1,
    explanation:
      "La etiqueta de clasificación comunica información sobre los peligros para que los primeros respondedores puedan tomar las medidas de protección adecuadas.",
    category: "CORE",
    image: "/public/quiz-images/figure-c-18.png",
  },
  {
    id: 91,
    text: "Durante un incidente de derrame de refrigerante, ¿qué distancia mínima deben mantener los equipos de emergencia para mantener alejadas a las personas no autorizadas del área?",
    options: [
      "25 metros (80 pies)",
      "50 metros (165 pies)",
      "75 metros (250 pies)",
      "100 metros (330 pies)",
    ],
    correctAnswer: 3,
    explanation:
      "Mantener una distancia de al menos 100 metros ayuda a reducir los riesgos de exposición mientras los equipos manejan el material peligroso.",
    category: "CORE",
  },
  {
    id: 92,
    text: "¿Qué técnicos tienen permiso para comprar refrigerantes para dar servicio o instalar equipos de refrigeración y aire acondicionado?",
    options: [
      "Cualquier técnico empleado por una empresa de HVAC",
      "Solo técnicos certificados en recuperación de refrigerante",
      "Solo técnicos con certificación de la Sección 609",
      "Cualquier técnico que trabaje en sistemas de menos de cinco libras",
    ],
    correctAnswer: 1,
    explanation:
      "La venta de refrigerantes para servicio o instalación está restringida a técnicos que estén debidamente certificados en recuperación de refrigerante.",
    category: "TYPE 1",
  },
  {
    id: 93,
    text: "¿Qué condición descalifica a un equipo para ser reparado bajo la certificación de la Sección 608 Tipo I?",
    options: [
      "Contener menos de cinco libras de refrigerante",
      "Estar sellado herméticamente en fábrica",
      "Estar diseñado para uso doméstico",
      "Estar clasificado como aire acondicionado de vehículos motorizados",
    ],
    correctAnswer: 3,
    explanation:
      "Los aires acondicionados de vehículos motorizados y los sistemas similares a MVAC están excluidos de la Sección 608 Tipo I y requieren otras certificaciones.",
    category: "TYPE 1",
  },
  {
    id: 94,
    text: "¿Cuál de las siguientes opciones define mejor un electrodoméstico pequeño según las normas de la EPA?",
    options: [
      "Cualquier electrodoméstico que utilice refrigerantes alternativos",
      "Un producto cargado en fábrica, sellado herméticamente, con cinco libras o menos de refrigerante",
      "Cualquier dispositivo de refrigeración residencial",
      "Un electrodoméstico que rara vez recibe servicio",
    ],
    correctAnswer: 1,
    explanation:
      "Un electrodoméstico pequeño se fabrica completamente, se carga y se sella herméticamente en una fábrica con una carga de refrigerante de cinco libras o menos.",
    category: "TYPE 1",
  },
  {
    id: 95,
    text: "¿Quién es el responsable final de garantizar la recuperación del refrigerante antes de que un electrodoméstico pequeño sea desechado definitivamente?",
    options: [
      "El fabricante original del equipo",
      "El primer técnico en la cadena de disposición",
      "El propietario del equipo",
      "La última persona en la cadena de disposición",
    ],
    correctAnswer: 3,
    explanation:
      "La última persona en la cadena de disposición, como un reciclador de chatarra metálica, debe asegurarse de que el refrigerante haya sido recuperado adecuadamente.",
    category: "TYPE 1",
  },
  {
    id: 96,
    text: "¿Qué refrigerante se ha considerado aceptable para su uso en refrigeración doméstica a pesar de ser inflamable?",
    options: ["R-134a", "R-600a", "R-22", "R-404A"],
    correctAnswer: 1,
    explanation:
      "R-600a (isobutano) es un refrigerante inflamable aceptable para aplicaciones de refrigeración doméstica.",
    category: "TYPE 1",
  },
  {
    id: 97,
    text: "¿Cuál es la carga máxima permitida de refrigerante inflamable para equipos de refrigeración doméstica?",
    options: [
      "150 g (5.3 oz)",
      "200 g (7.0 oz)",
      "57 g (2.0 oz)",
      "300 g (10.6 oz)",
    ],
    correctAnswer: 2,
    explanation:
      "Los equipos de refrigeración doméstica que utilizan refrigerantes inflamables están limitados a una carga máxima de 57 gramos (2.0 onzas).",
    category: "TYPE 1",
  },
  {
    id: 98,
    text: "¿Cuál es el propósito principal de las marcas rojas en tuberías y conductos en aparatos que usan refrigerantes hidrocarburos?",
    options: [
      "Indicar la dirección del flujo del refrigerante",
      "Identificar al fabricante",
      "Alertar a los técnicos sobre la presencia de un refrigerante inflamable",
      "Cumplir con requisitos estéticos",
    ],
    correctAnswer: 2,
    explanation:
      "Las marcas rojas advierten al personal de servicio que hay un refrigerante inflamable presente para que se puedan tomar precauciones de seguridad adicionales.",
    category: "TYPE 1",
  },
  {
    id: 99,
    text: "Al usar un dispositivo de recuperación pasivo en un sistema con un compresor inoperante, ¿qué método de conexión mejora la recuperación del refrigerante?",
    options: [
      "Conectar solo el lado de baja",
      "Conectar solo el lado de alta",
      "Usar el compresor del sistema intermitentemente",
      "Conectar tanto el lado de alta como el de baja",
    ],
    correctAnswer: 3,
    explanation:
      "Conectar ambos lados maximiza la diferencia de presión y mejora la recuperación del refrigerante cuando el compresor no está operando.",
    category: "TYPE 1",
  },
  {
    id: 100,
    text: "¿Cuál es el porcentaje requerido de recuperación de refrigerante al dar servicio a un electrodoméstico pequeño con un compresor funcionando?",
    options: [
      "70 por ciento de la carga de placa",
      "80 por ciento de la carga de placa",
      "90 por ciento de la carga de placa",
      "100 por ciento de la carga de placa",
    ],
    correctAnswer: 2,
    explanation:
      "Cuando el compresor está operando, debe recuperarse al menos el 90 por ciento de la carga de refrigerante indicada en la placa.",
    category: "TYPE 1",
  },
  {
    id: 101,
    text: "¿Qué afirmación describe correctamente el equipo de recuperación dependiente del sistema?",
    options: [
      "Solo puede usarse en sistemas con más de 15 libras de refrigerante",
      "Requiere un separador de aceite para operar",
      "Puede usarse en electrodomésticos pequeños porque su carga es de cinco libras o menos",
      "Siempre debe estar permanentemente adherido al electrodoméstico",
    ],
    correctAnswer: 2,
    explanation:
      "El equipo de recuperación dependiente del sistema es adecuado para electrodomésticos pequeños porque contienen cinco libras o menos de refrigerante.",
    category: "TYPE 1",
  },
  {
    id: 102,
    text: "¿Qué afirmación describe mejor el equipo de recuperación autónomo?",
    options: [
      "Requiere que el compresor del electrodoméstico opere durante la recuperación",
      "Depende de componentes externos del sistema para funcionar",
      "Opera de forma independiente del electrodoméstico al que se le da servicio",
      "Solo puede usarse en sistemas sin fugas",
    ],
    correctAnswer: 2,
    explanation:
      "El equipo de recuperación autónomo funciona por sí solo sin depender de los componentes internos del electrodoméstico.",
    category: "TYPE 1",
  },
  {
    id: 103,
    text: "¿Cuándo se requiere que un técnico tenga disponible equipo de recuperación autónomo certificado?",
    options: [
      "Solo al dar servicio a sistemas comerciales grandes",
      "Solo al tener una certificación Tipo I",
      "Siempre que el compresor del sistema esté inoperable",
      "Al tener cualquier certificación de la EPA más allá de Tipo I",
    ],
    correctAnswer: 3,
    explanation:
      "Cualquier certificación de la EPA más allá de Tipo I requiere acceso a equipo de recuperación o reciclaje autónomo certificado.",
    category: "TYPE 1",
  },
  {
    id: 104,
    text: "¿Cuál es una ventaja de usar una unidad de recuperación autónoma en lugar de recuperación dependiente del sistema?",
    options: [
      "Elimina la necesidad de cilindros de recuperación",
      "Reduce el riesgo de sobrecalentar el compresor del sistema",
      "Requiere múltiples conexiones de servicio",
      "Solo funciona en sistemas que no tienen fugas",
    ],
    correctAnswer: 1,
    explanation:
      "Las unidades autónomas evitan exigir al compresor del equipo, reduciendo el riesgo de sobrecalentamiento y daño.",
    category: "TYPE 1",
  },
  {
    id: 105,
    text: "¿Por qué es innecesario intentar una recuperación del 80–90% cuando un electrodoméstico pequeño ha tenido una fuga de refrigerante?",
    options: [
      "El equipo de recuperación no puede medir porcentajes con precisión",
      "Los sistemas con fugas apagan automáticamente las unidades de recuperación",
      "Las regulaciones de la EPA prohíben altos niveles de recuperación en sistemas con fugas",
      "El refrigerante restante puede ser menor que el porcentaje objetivo",
    ],
    correctAnswer: 3,
    explanation:
      "Si el refrigerante se ha fugado, la carga restante puede estar por debajo del porcentaje objetivo, haciendo imposible una recuperación más alta.",
    category: "TYPE 1",
  },
  {
    id: 106,
    text: "¿Qué condición mostrada en la Figura I–1 permite la combustión de un refrigerante inflamable?",
    options: [
      "Concentración por debajo del límite inferior de inflamabilidad",
      "Concentración entre los límites inferior y superior de inflamabilidad con una fuente de ignición",
      "Concentración por encima del límite superior de inflamabilidad",
      "Cualquier concentración cuando hay oxígeno presente",
    ],
    correctAnswer: 0,
    explanation:
      "La combustión ocurre solo cuando la concentración está entre los límites inferior y superior de inflamabilidad y existe una fuente de ignición.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-1.png",
  },
  {
    id: 107,
    text: "¿Qué práctica de seguridad se requiere al recuperar refrigerantes inflamables?",
    options: [
      "Usar llamas abiertas para detectar fugas",
      "Poner a tierra el sistema, la unidad de recuperación y el tanque de recuperación",
      "Operar solo en espacios cerrados",
      "Aumentar la presión del sistema durante la recuperación",
    ],
    correctAnswer: 2,
    explanation:
      "Una puesta a tierra adecuada evita chispas de electricidad estática que podrían encender refrigerantes inflamables.",
    category: "TYPE 1",
  },
  {
    id: 108,
    text: "¿Qué indica con mayor probabilidad un olor penetrante durante la recuperación?",
    options: [
      "Descomposición normal del aceite",
      "Presencia solo de humedad",
      "Formación de ácido por una quemadura del compresor",
      "Identificación incorrecta del refrigerante",
    ],
    correctAnswer: 1,
    explanation:
      "Un olor fuerte sugiere contaminación ácida causada por una quemadura del compresor, lo que requiere limpieza del sistema y reemplazo de componentes.",
    category: "TYPE 1",
  },
  {
    id: 109,
    text: "¿Cuál es el propósito principal del tubo de proceso mostrado en la Figura I–2?",
    options: [
      "Acceso permanente para la carga de refrigerante",
      "Ventilación del exceso de presión",
      "Acceso temporal para la recuperación de refrigerante",
      "Ubicación de montaje para manómetros de presión",
    ],
    correctAnswer: 3,
    explanation:
      "El tubo de proceso proporciona un tubo sellado al que se puede acceder temporalmente para recuperación y carga.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-2.png",
  },
  {
    id: 110,
    text: "¿Por qué no debe dejarse instalado permanentemente el tipo de válvula de acceso perforante mostrada en la Figura I–3?",
    options: [
      "Restringe el flujo de refrigerante",
      "Interfiere con la operación del compresor",
      "No está diseñada para ser a prueba de explosiones",
      "Puede eventualmente tener fugas de refrigerante",
    ],
    correctAnswer: 0,
    explanation:
      "Las válvulas de acceso tipo perforación no son sellos permanentes y pueden permitir que el refrigerante se fugue con el tiempo.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-3.png",
  },
  {
    id: 111,
    text: "¿Qué característica del cilindro de carga graduado en la Figura I–4 permite una medición precisa del refrigerante?",
    options: [
      "Un compresor interno",
      "Una columna de vidrio transparente con escalas calibradas",
      "Una válvula de alivio en la base",
      "Una bolsa de recuperación desmontable",
    ],
    correctAnswer: 2,
    explanation:
      "La columna de vidrio transparente con escalas permite a los técnicos determinar el volumen de refrigerante y convertirlo a masa con precisión.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-4.png",
  },
  {
    id: 112,
    text: "¿Qué refrigerantes no están obligados a recuperarse usando dispositivos de recuperación aprobados por la EPA?",
    options: [
      "R-134a y R-410A",
      "R-404A y R-32",
      "Amoníaco y dióxido de azufre",
      "R-290 y R-441A",
    ],
    correctAnswer: 1,
    explanation:
      "El amoníaco y el dióxido de azufre no se recuperan con equipos regulados por la EPA debido a sus propiedades y peligros únicos.",
    category: "TYPE 1",
  },
  {
    id: 113,
    text: "¿Qué información se encuentra típicamente en la placa de datos mostrada en la Figura I–5?",
    options: [
      "Requisitos de vacío para recuperación",
      "Soluciones de limpieza aprobadas",
      "Tipo de refrigerante usado en el electrodoméstico",
      "Umbrales de tasa de fuga",
    ],
    correctAnswer: 3,
    explanation:
      "La placa de datos identifica detalles clave del sistema, incluyendo el tipo de refrigerante usado en el electrodoméstico.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-5.png",
  },
  {
    id: 114,
    text: "¿Por qué debe identificarse el tipo de refrigerante en un sistema antes de comenzar la recuperación?",
    options: [
      "Para calcular la capacidad de enfriamiento del sistema",
      "Para seleccionar la máquina de recuperación y el cilindro aprobados por DOT correctos",
      "Para determinar la viscosidad del aceite del compresor",
      "Para decidir si la recuperación es legalmente requerida",
    ],
    correctAnswer: 1,
    explanation:
      "Diferentes refrigerantes requieren máquinas de recuperación y cilindros compatibles, clasificados para sus presiones y propiedades específicas.",
    category: "TYPE 1",
  },
  {
    id: 115,
    text: "¿Cuál es la consecuencia principal de mezclar dos tipos diferentes de refrigerante durante la recuperación?",
    options: [
      "Reducción de la eficiencia del sistema",
      "Presiones de operación más altas",
      "El refrigerante no puede reutilizarse y puede requerir destrucción",
      "Solo es posible una recuperación parcial",
    ],
    correctAnswer: 2,
    explanation:
      "Los refrigerantes mezclados no pueden reutilizarse y a menudo deben enviarse a una instalación aprobada para su destrucción.",
    category: "TYPE 1",
  },
  {
    id: 116,
    text: "¿Qué etiquetado de cilindro de recuperación permite el uso tanto con R-410A como con refrigerantes de menor presión?",
    options: [
      "DOT-4BA",
      "DOT-4BW",
      "DOT-4BA400 o DOT-4BW400",
      "Cualquier cilindro certificado por DOT",
    ],
    correctAnswer: 2,
    explanation:
      "Los cilindros etiquetados DOT-4BA400 o DOT-4BW400 están clasificados para presiones más altas como R-410A y también pueden manejar refrigerantes de menor presión.",
    category: "TYPE 1",
  },
  {
    id: 117,
    text: "Al usar una válvula perforante sin soldadura en una tubería, ¿qué debe hacerse después de completar el servicio?",
    options: [
      "Dejar la válvula instalada permanentemente",
      "Presurizar el sistema para probar la válvula",
      "Retirar la válvula y sellar el tubo",
      "Reemplazar la sección de tubería",
    ],
    correctAnswer: 2,
    explanation:
      "Las válvulas perforantes sin soldadura son temporales y deben retirarse y sellarse el tubo para evitar fugas.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-6.png",
  },
  {
    id: 118,
    text: "Los métodos de recuperación dependientes del sistema están limitados a aparatos que contienen ¿cuánto refrigerante?",
    options: [
      "5 libras o menos",
      "10 libras o menos",
      "15 libras o menos",
      "20 libras o menos",
    ],
    correctAnswer: 2,
    explanation:
      "La recuperación dependiente del sistema solo puede usarse en aparatos que contienen 15 libras o menos de refrigerante.",
    category: "TYPE 1",
  },
  {
    id: 119,
    text: "¿Cuál es una ventaja clave de conectar las mangueras de recuperación a los puertos de servicio tanto del lado de alta como del lado de baja?",
    options: [
      "Menor presión en el cilindro de recuperación",
      "Reducción del riesgo de no condensables",
      "Recuperación más rápida y eliminación más completa del refrigerante",
      "Eliminación de la necesidad de una máquina de recuperación",
    ],
    correctAnswer: 2,
    explanation:
      "Usar ambos puertos acelera la recuperación y asegura que el refrigerante se elimine de ambos lados del sistema.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-7.png",
  },
  {
    id: 120,
    text: "¿Por qué los técnicos deben evitar atrapar refrigerante líquido en las mangueras de servicio?",
    options: [
      "Aumenta el tiempo de recuperación",
      "La expansión del líquido puede causar presión excesiva y falla de la manguera",
      "Contamina el cilindro de recuperación",
      "Impide lecturas precisas de presión",
    ],
    correctAnswer: 1,
    explanation:
      "El refrigerante líquido atrapado puede expandirse al calentarse, creando presiones peligrosamente altas en la manguera.",
    category: "TYPE 1",
  },
  {
    id: 121,
    text: "En un sistema que utiliza un tubo capilar, ¿dónde se encuentra el lado de alta presión?",
    options: [
      "Entre la salida del dispositivo de expansión y la entrada del compresor",
      "Solo dentro del serpentín del condensador",
      "Entre la descarga del compresor y la entrada del dispositivo de expansión",
      "En la salida del evaporador",
    ],
    correctAnswer: 2,
    explanation:
      "El lado de alta presión se ubica entre la descarga del compresor y la entrada del dispositivo de estrangulamiento.",
    category: "TYPE 1",
    image: "/public/quiz-images/figure-i-8.png",
  },
  {
    id: 122,
    text: "¿Qué precaución debe tomarse al operar el compresor del sistema durante la recuperación?",
    options: [
      "Operar solo por encima de 10 psig de presión de succión",
      "Nunca permitir que la presión de succión baje de 4 pulgadas de mercurio de vacío",
      "Hacer funcionar el compresor continuamente para acelerar la recuperación",
      "Desactivar el ventilador del condensador",
    ],
    correctAnswer: 1,
    explanation:
      "Operar por debajo de 4 pulgadas de mercurio de vacío puede sobrecalentar y dañar el compresor.",
    category: "TYPE 1",
  },
  {
    id: 123,
    text: "¿Por qué nunca debe operarse un compresor hermético cuando se utiliza una máquina de recuperación autónoma?",
    options: [
      "Aumenta el consumo eléctrico",
      "Puede introducir no condensables",
      "El compresor depende del flujo de refrigerante para enfriarse",
      "Reduce la circulación de aceite",
    ],
    correctAnswer: 2,
    explanation:
      "Los compresores herméticos dependen del flujo de refrigerante para el enfriamiento del motor, lo cual está ausente durante la recuperación autónoma.",
    category: "TYPE 1",
  },
  {
    id: 124,
    text: "Si la presión del sistema es 0 psig después de conectarse a un sistema sellado, ¿qué debe hacerse?",
    options: [
      "Comenzar la recuperación de inmediato",
      "Agregar nitrógeno para elevar la presión",
      "No comenzar la recuperación porque el refrigerante se ha fugado",
      "Cambiar a recuperación pasiva",
    ],
    correctAnswer: 2,
    explanation:
      "Una lectura de 0 psig indica que el refrigerante se ha fugado y que aire o humedad pueden haber entrado al sistema.",
    category: "TYPE 1",
  },
  {
    id: 125,
    text: "¿Cuál es el nivel final requerido de vacío profundo después de reparaciones y verificación de fugas?",
    options: [
      "1000 micrones",
      "800 micrones",
      "500 micrones o menos",
      "200 micrones únicamente",
    ],
    correctAnswer: 2,
    explanation:
      "Se requiere un vacío profundo final de al menos 500 micrones, siendo 300 micrones lo ideal.",
    category: "TYPE 1",
  },
  {
    id: 126,
    text: "¿Por qué los gases no condensables son perjudiciales en un sistema de refrigeración?",
    options: [
      "Disminuyen la viscosidad del aceite",
      "Aumentan la eficiencia del condensador",
      "Elevan la presión del sistema y reducen la transferencia de calor",
      "Mejoran el flujo del refrigerante",
    ],
    correctAnswer: 2,
    explanation:
      "Los no condensables aumentan la presión del lado de alta y reducen el área efectiva de transferencia de calor del condensador.",
    category: "TYPE 1",
  },
  {
    id: 127,
    text: "¿Qué método puede ayudar a liberar refrigerante atrapado en el aceite del compresor cuando el compresor no está funcionando?",
    options: [
      "Enfriar el compresor con agua",
      "Activar el calentador del cárter o golpear suavemente el compresor",
      "Abrir completamente la válvula de descarga",
      "Aumentar el flujo de aire del condensador",
    ],
    correctAnswer: 1,
    explanation:
      "Calentar el aceite o golpear suavemente el compresor ayuda a liberar refrigerante atrapado en el cárter de aceite.",
    category: "TYPE 1",
  },
  {
    id: 128,
    text: "¿Cómo puede identificarse la presencia de gases no condensables en un cilindro de recuperación?",
    options: [
      "Por un cambio de color del aceite",
      "Por un peso reducido del refrigerante",
      "Comparando la presión real con la presión esperada a una temperatura estable",
      "Observando escarcha en el cilindro",
    ],
    correctAnswer: 2,
    explanation:
      "Si la presión real es mayor que la esperada para el refrigerante a una temperatura estable, pueden estar presentes no condensables.",
    category: "TYPE 1",
  },
  {
    id: 129,
    text: "¿Por qué debe permitirse que un sistema o cilindro de recuperación se estabilice a temperatura ambiente antes de verificar gases no condensables?",
    options: [
      "Para evitar pérdida de refrigerante durante la prueba",
      "Para asegurar que las lecturas de presión y temperatura sean válidas para la comparación",
      "Para acelerar el proceso de recuperación",
      "Para reducir el riesgo de congelación",
    ],
    correctAnswer: 1,
    explanation:
      "Una comparación precisa con una tabla presión–temperatura requiere condiciones de presión y temperatura estables y conocidas.",
    category: "TYPE 1",
  },
  {
    id: 130,
    text: "¿Cuál es la acción recomendada si se sospecha contaminación del refrigerante en un cilindro de recuperación?",
    options: [
      "Ventar el refrigerante a la atmósfera",
      "Reutilizar el refrigerante solo en el mismo sistema",
      "Entregar el refrigerante para su reclamación",
      "Diluir el refrigerante con refrigerante nuevo",
    ],
    correctAnswer: 2,
    explanation:
      "El refrigerante sospechoso de estar contaminado debe enviarse para reclamación en lugar de reutilizarse.",
    category: "TYPE 1",
  },
  {
    id: 131,
    text: "En aparatos de MUY alta presión, ¿qué tipo de refrigerante se utiliza?",
    options: ["R-50", "R-410A", "R-503", "R-500"],
    correctAnswer: 2,
    explanation:
      "R-503 es el único refrigerante de la lista que se utiliza en aparatos de MUY alta presión. R-410A y R-22 se utilizan en aparatos de alta presión. R-500 se utiliza en aparatos de presión media.",
    category: "CORE",
  },
  {
    id: 132,
    text: "¿Cuál de los siguientes dispositivos está al final de la línea de líquido?",
    options: [
      "Compresor",
      "Dispositivo de expansión",
      "Evaporador",
      "Condensador",
    ],
    correctAnswer: 1,
    explanation:
      "La línea de líquido sirve para conectar el condensador con el dispositivo de expansión, que se encuentra al final.",
    category: "CORE",
  },
  {
    id: 133,
    text: "¿Cuánto dinero da la EPA a quienes reportan a otras personas que liberan refrigerantes a la atmósfera?",
    options: ["$10,000", "$25,000", "$5,000", "7000"],
    correctAnswer: 0,
    explanation:
      "Las personas pueden reportar sus hallazgos a la EPA a través del sitio web oficial de la EPA.",
    category: "CORE",
  },
  {
    id: 134,
    text: "¿A cuál de los siguientes grupos de refrigerantes pertenece el R-22?",
    options: ["HFC", "CFC", "HCFC", "Todos los anteriores"],
    correctAnswer: 2,
    explanation:
      "R-22 forma parte de la clase HCFC (hidroclorofluorocarbonos).",
    category: "CORE",
  },
  {
    id: 135,
    text: "Al inspeccionar fugas en varios sistemas, ¿qué gas debe usarse?",
    options: ["Carbono", "Nitrógeno", "Oxígeno", "Hidrógeno"],
    correctAnswer: 1,
    explanation:
      "El nitrógeno es relativamente estable y tiene una baja temperatura bajo presurización. Estas características lo hacen útil al verificar fugas.",
    category: "CORE",
  },
  {
    id: 136,
    text: "¿Cuál de los siguientes términos describe mejor el proceso de cambiar un refrigerante de líquido a gas mediante el uso de calor?",
    options: [
      "Subcalentamiento",
      "Calor latente",
      "Condensación",
      "Calor total",
    ],
    correctAnswer: 1,
    explanation:
      "En el proceso de calentamiento latente, la temperatura no cambia, pero el estado cambia de líquido a gas.",
    category: "CORE",
  },
  {
    id: 137,
    text: "En un aparato de presión media, ¿cuál de los siguientes refrigerantes se utiliza?",
    options: ["R-11", "R-503", "R-500", "R-410A"],
    correctAnswer: 2,
    explanation:
      "R-11 se utiliza en aparatos de baja presión, R-500 en aparatos de presión media, R-503 en aparatos de MUY alta presión y R-410A en aparatos de alta presión.",
    category: "CORE",
  },
  {
    id: 138,
    text: "¿Cuál de los siguientes tiene el menor potencial de agotamiento del ozono?",
    options: [
      "HCFC",
      "CFC",
      "HFC",
      "Todos tendrán el mismo potencial de agotamiento",
    ],
    correctAnswer: 2,
    explanation:
      "Los refrigerantes HFC no contienen iones de cloro, que son responsables del agotamiento del ozono, lo que les da el menor potencial de agotamiento del ozono.",
    category: "CORE",
  },
  {
    id: 139,
    text: "La capa de ozono en la estratosfera se extiende ¿cuántas millas por encima de la superficie de la Tierra?",
    options: ["41", "21", "45", "31"],
    correctAnswer: 3,
    explanation:
      "La estratosfera se extiende hasta 31 millas de altura y se encuentra justo por encima de la troposfera.",
    category: "CORE",
  },
  {
    id: 140,
    text: "¿Cuál de los siguientes elementos es (son) una violación de la Ley de Aire Limpio (Clean Air Act)?",
    options: [
      "Falsificar o no mantener registros",
      "No alcanzar los niveles de evacuación requeridos antes de abrir o desechar aparatos",
      "Liberar intencionalmente refrigerantes CFC o HCFC o sus sustitutos mientras se reparan aparatos",
      "Todos los anteriores",
    ],
    correctAnswer: 3,
    explanation:
      "Todas las acciones enumeradas son violaciones de la Ley de Aire Limpio (Clean Air Act).",
    category: "CORE",
  },
  {
    id: 141,
    text: "¿En qué año tuvo lugar el Protocolo de Montreal?",
    options: ["2009", "1989", "1995", "2001"],
    correctAnswer: 1,
    explanation:
      "El Protocolo de Montreal entró en vigor en 1989 para proteger la capa de ozono eliminando gradualmente los químicos dañinos.",
    category: "CORE",
  },
  {
    id: 142,
    text: "¿Cuál de los siguientes se obtiene cuando el ozono reacciona con el ion de cloro?",
    options: ["Flúor", "Oxígeno", "HCl", "Todas las opciones son correctas"],
    correctAnswer: 1,
    explanation:
      "Cuando el ion de cloro reacciona con el ozono, se forman oxígeno y monóxido de cloro.",
    category: "CORE",
  },
  {
    id: 143,
    text: "A pesar de que el R-22 se considera no tóxico, este:",
    options: [
      "puede causar asfixia",
      "es un refrigerante de Clase I",
      "es más ligero que el aire",
      "puede detectarse por su color",
    ],
    correctAnswer: 0,
    explanation:
      "Aunque el R-22 no es tóxico, puede desplazar el oxígeno y causar asfixia en espacios confinados.",
    category: "CORE",
  },
  {
    id: 144,
    text: "Al usar un sistema de recuperación dependiente del sistema en un aparato operado por compresor, el técnico debe:",
    options: [
      "Nunca permitir que el refrigerante vaya al lado de alta del sistema",
      "Instalar un accesorio de acceso en los lados de alta y baja presión del sistema",
      "Hacer funcionar el compresor y recuperar solo del lado de alta del sistema",
      "Hacer funcionar el compresor y recuperar solo del lado de baja del sistema",
    ],
    correctAnswer: 2,
    explanation:
      "Con un compresor operando y un dispositivo de medición restringido, la recuperación se realiza solo desde el lado de alta.",
    category: "CORE",
  },
  {
    id: 145,
    text: "¿Qué norma debe cumplir el refrigerante reclamado antes de que pueda revenderse, según las regulaciones de la EPA?",
    options: ["ARI 740", "EPA 700", "ARI 740", "ARI 700"],
    correctAnswer: 3,
    explanation:
      "Las regulaciones de la EPA requieren que el refrigerante reclamado cumpla con las normas ARI 700 antes de su reventa.",
    category: "CORE",
  },
  {
    id: 146,
    text: "A diario, ¿cuál de las siguientes cosas debe verificarse en el equipo de recuperación de refrigerante?",
    options: [
      "Niveles de temperatura",
      "Tanto los niveles de aceite como si hay fugas de refrigerante",
      "Fugas de refrigerante",
      "Niveles de aceite",
    ],
    correctAnswer: 1,
    explanation:
      "El equipo de recuperación debe revisarse a diario para confirmar niveles adecuados de aceite y detectar fugas de refrigerante, a fin de garantizar una operación segura y efectiva.",
    category: "TYPE 1",
  },
  {
    id: 147,
    text: "Los técnicos que trabajan en electrodomésticos pequeños con sistemas sellados deben tener:",
    options: [
      "Certificación Universal 609",
      "Certificación TYPE 2",
      "Certificación Tipo I, II o III",
      "Certificación Tipo I o Universal",
    ],
    correctAnswer: 3,
    explanation:
      "Los técnicos que manipulan refrigerante en electrodomésticos pequeños deben tener certificación Tipo I o Universal.",
    category: "TYPE 1",
  },
  {
    id: 148,
    text: "¿Es verdadero o falso que los dispositivos de recuperación no deben usarse en equipos que contengan hidrógeno?",
    options: ["FALSO", "VERDADERO"],
    correctAnswer: 1,
    explanation:
      "Los sistemas que contienen hidrógeno pueden ser peligrosos, y no deben usarse dispositivos de recuperación en ellos.",
    category: "TYPE 1",
  },
  {
    id: 149,
    text: "Para determinar el tipo de refrigerante, ¿qué prueba de pureza se utiliza?",
    options: ["ARI 700", "ARI 900", "ARI 200", "ARI 500"],
    correctAnswer: 0,
    explanation:
      "ARI 700 es la norma reconocida utilizada para determinar la pureza del refrigerante.",
    category: "TYPE 1",
  },
  {
    id: 150,
    text: "El equipo de recuperación debe ser:",
    options: [
      "Usado en todos los equipos fabricados después del 15 de noviembre de 1995",
      "Usado en todos los equipos fabricados después del 1 de julio de 1995",
      "Aprobado por CSA",
      "Certificado por un laboratorio de pruebas aprobado por la EPA",
    ],
    correctAnswer: 3,
    explanation:
      "El equipo de recuperación debe estar certificado por un laboratorio de pruebas aprobado para garantizar el cumplimiento y la seguridad.",
    category: "TYPE 1",
  },
  {
    id: 151,
    text: "Solo se requiere una conexión de servicio para ¿cuál de los siguientes?",
    options: [
      "Ambos",
      "Unidades de recuperación dependientes del sistema",
      "Unidades de recuperación autónomas",
      "Ninguna de las anteriores",
    ],
    correctAnswer: 2,
    explanation:
      "Las unidades de recuperación autónomas están diseñadas para operar con solo una conexión de servicio.",
    category: "TYPE 1",
  },
  {
    id: 152,
    text: "La EPA define un electrodoméstico pequeño como:",
    options: [
      "Aparatos fabricados, cargados y sellados herméticamente en una fábrica que contienen 5 lb o menos de refrigerante",
      "Aparatos cargados y sellados herméticamente en una fábrica que contienen 8 lb o menos de refrigerante",
      "Aparatos cargados y sellados herméticamente en una fábrica que contienen 10 lb o menos de refrigerante",
      "Aparatos con volúmenes internos no mayores de 3 pies cúbicos",
    ],
    correctAnswer: 0,
    explanation:
      "Un electrodoméstico pequeño contiene 5 libras o menos de refrigerante y está sellado en fábrica.",
    category: "TYPE 1",
  },
  {
    id: 153,
    text: "En un sistema de refrigeración, el aire causa presión de descarga _____.",
    options: ["Sin cambios en", "Menor o mayor", "Menor", "Mayor"],
    correctAnswer: 3,
    explanation:
      "El aire en un sistema aumenta la presión de descarga e indica la presencia de no condensables.",
    category: "TYPE 1",
  },
  {
    id: 154,
    text: "Nunca debe hacerse esto cuando un sistema está en vacío profundo:",
    options: [
      "agregar refrigerante al sistema",
      "energizar el compresor",
      "energizar los ventiladores y sopladores del sistema",
      "usar un manómetro de micrones",
    ],
    correctAnswer: 1,
    explanation:
      "Energizar el compresor bajo vacío profundo puede dañar los devanados internos del motor.",
    category: "TYPE 1",
  },
  {
    id: 155,
    text: "Durante el proceso de recuperación, hay un olor fuerte. ¿Cuál de las siguientes opciones es la fuente más probable del problema?",
    options: [
      "Quemadura del condensador",
      "Quemadura del compresor",
      "Quemadura del acumulador",
      "Todo lo anterior",
    ],
    correctAnswer: 1,
    explanation:
      "Un olor fuerte durante la recuperación normalmente indica una quemadura del compresor.",
    category: "TYPE 1",
  },
  {
    id: 156,
    text: "Al usar un sistema de recuperación dependiente del sistema en un aparato operado por compresor, el técnico debe:",
    options: [
      "Hacer funcionar el compresor y recuperar solo del lado de alta del sistema",
      "Hacer funcionar el compresor y recuperar solo del lado de baja del sistema",
      "permitir que el refrigerante vaya al lado de alta del sistema",
      "Instalar accesorios de acceso en los lados de alta y baja presión del sistema",
    ],
    correctAnswer: 0,
    explanation:
      "En sistemas con dispositivos de medición restringidos, la recuperación se realiza solo desde el lado de alta.",
    category: "TYPE 1",
  },
  {
    id: 157,
    text: "¿Cuál método es el más efectivo para transportar cilindros de refrigeración?",
    options: ["Al revés", "En posición vertical", "No importa", "De lado"],
    correctAnswer: 1,
    explanation:
      "Los cilindros deben transportarse en posición vertical para evitar daños y fugas.",
    category: "TYPE 1",
  },
  {
    id: 158,
    text: "¿Cuál de los siguientes debe usar para purgar el sistema después de que el refrigerante haya sido recuperado?",
    options: ["Nitrógeno", "R-22", "Agua", "Aire comprimido"],
    correctAnswer: 0,
    explanation:
      "El nitrógeno se utiliza para purgar de forma segura los residuos del sistema después de la recuperación.",
    category: "TYPE 1",
  },
  {
    id: 159,
    text: "Solo una _________ estable le permite leer con precisión la presión del refrigerante.",
    options: ["Temperatura", "Volumen", "Densidad", "Todos los anteriores"],
    correctAnswer: 0,
    explanation:
      "Las lecturas de presión precisas requieren una temperatura estable.",
    category: "TYPE 1",
  },
  {
    id: 160,
    text: "El requisito de la EPA para reparar fugas en electrodomésticos pequeños es:",
    options: [
      "Todas las fugas deben repararse dentro de 30 días",
      "Las fugas no deben repararse",
      "Todas las fugas deben repararse de inmediato",
      "Las fugas deben repararse siempre que sea posible",
    ],
    correctAnswer: 3,
    explanation:
      "La reparación de fugas no es obligatoria, pero se recomienda siempre que sea posible.",
    category: "TYPE 1",
  },
  {
    id: 161,
    text: "Cuando ¿cuál de los siguientes se ventila en un ambiente cerrado, puede causar una explosión?",
    options: ["Oxígeno", "Dióxido de carbono", "Hidrógeno", "Nitrógeno"],
    correctAnswer: 2,
    explanation:
      "El hidrógeno es altamente inflamable y puede explotar cuando se libera en espacios cerrados.",
    category: "TYPE 1",
  },
  {
    id: 162,
    text: "¿Qué condición califica a un aparato como electrodoméstico pequeño según las regulaciones de la EPA?",
    options: [
      "Contiene menos de 10 libras de refrigerante",
      "Se carga en campo durante la instalación",
      "Se fabrica en fábrica, está sellado herméticamente y contiene 5 libras o menos de refrigerante",
      "Opera solo con refrigerantes de baja presión",
    ],
    correctAnswer: 2,
    explanation:
      "Un electrodoméstico pequeño se define como aquel fabricado en fábrica, sellado herméticamente y que contiene no más de cinco libras de refrigerante.",
    category: "TYPE 1",
  },
  {
    id: 163,
    text: "¿Qué sistema NO entra en la definición de un electrodoméstico pequeño?",
    options: [
      "Aire acondicionado terminal presurizado (PTAC)",
      "Deshumidificador sellado herméticamente",
      "Refrigerador doméstico",
      "Sistema de aire acondicionado de vehículo motorizado (MVAC)",
    ],
    correctAnswer: 3,
    explanation:
      "Los sistemas de aire acondicionado de vehículos motorizados requieren una certificación separada y no se clasifican como electrodomésticos pequeños.",
    category: "TYPE 1",
  },
  {
    id: 164,
    text: "¿Qué certificación se requiere para un técnico que manipula refrigerante al dar servicio a electrodomésticos pequeños?",
    options: [
      "Solo certificación Tipo II",
      "Certificación Tipo I o Universal",
      "Certificación MVAC",
      "No se requiere certificación",
    ],
    correctAnswer: 1,
    explanation:
      "Los técnicos que trabajan con refrigerante en electrodomésticos pequeños deben tener certificación Tipo I o Universal.",
    category: "TYPE 1",
  },
  {
    id: 165,
    text: "¿Cuál es el requisito mínimo de recuperación para equipos fabricados ANTES del 15 de noviembre de 1993?",
    options: [
      "90% de recuperación con el compresor operando",
      "80% de recuperación o lograr un vacío de 4 pulgadas",
      "Eliminación del 100% del refrigerante",
      "Aprobación de laboratorio de la EPA",
    ],
    correctAnswer: 1,
    explanation:
      "El equipo de recuperación más antiguo debe recuperar al menos el 80% del refrigerante o lograr un vacío de 4 pulgadas bajo condiciones ARI 740.",
    category: "TYPE 1",
  },
  {
    id: 166,
    text: "¿Qué requisito aplica al equipo de recuperación fabricado DESPUÉS del 15 de noviembre de 1993?",
    options: [
      "No se necesita aprobación si alcanza un vacío",
      "Debe recuperar 80% sin importar la operación del compresor únicamente",
      "Debe estar aprobado por un laboratorio externo aprobado por la EPA",
      "Los accesorios de baja pérdida son opcionales",
    ],
    correctAnswer: 2,
    explanation:
      "El equipo de recuperación fabricado después de esta fecha debe estar aprobado por un laboratorio externo aprobado por la EPA.",
    category: "TYPE 1",
  },
  {
    id: 167,
    text: "¿Por qué los accesorios del equipo de recuperación deben estar equipados con conexiones de baja pérdida?",
    options: [
      "Para aumentar la velocidad de recuperación",
      "Para reducir la contaminación del aceite",
      "Para evitar la pérdida de refrigerante al desconectar las mangueras",
      "Para permitir la operación sin un compresor",
    ],
    correctAnswer: 2,
    explanation:
      "Las conexiones de baja pérdida están diseñadas para minimizar las emisiones de refrigerante durante la desconexión de mangueras.",
    category: "TYPE 1",
  },
  {
    id: 168,
    text: "¿Qué acción debe realizarse ANTES de operar un dispositivo de recuperación autónomo?",
    options: [
      "Arrancar el compresor de inmediato",
      "Asegurarse de que la válvula de entrada del tanque de recuperación esté abierta",
      "Evacuar el sistema a 0 psig",
      "Calentar el aceite del compresor",
    ],
    correctAnswer: 1,
    explanation:
      "La válvula de entrada del tanque de recuperación debe estar abierta para evitar altas presiones de descarga durante la recuperación.",
    category: "TYPE 1",
  },
  {
    id: 169,
    text: "¿Por qué debe estabilizarse la temperatura de un cilindro de recuperación antes de verificar no condensables?",
    options: [
      "Para reducir la presión del refrigerante",
      "Para evitar la mezcla de refrigerantes",
      "Para asegurar la precisión de la tabla presión/temperatura",
      "Para acelerar el tiempo de recuperación",
    ],
    correctAnswer: 2,
    explanation:
      "Las lecturas de presión solo son significativas cuando la temperatura del cilindro es conocida y estable.",
    category: "TYPE 1",
  },
  {
    id: 170,
    text: "Al usar un proceso de recuperación dependiente del sistema con un compresor operando, ¿desde dónde debe recuperarse el refrigerante?",
    options: [
      "Solo del lado de baja",
      "De los lados de alta y baja",
      "De la salida del receptor",
      "Del lado de alta del sistema",
    ],
    correctAnswer: 3,
    explanation:
      "Con un compresor operando, la recuperación se realiza desde el lado de alta porque el compresor mueve el refrigerante hacia allí.",
    category: "TYPE 1",
  },
  {
    id: 171,
    text: "¿Qué situación requiere equipo y capacitación especiales de recuperación en lugar de dispositivos estándar aprobados por la EPA?",
    options: [
      "Electrodomésticos pequeños con refrigerantes CFC",
      "Refrigeradores domésticos con resistencias de descongelación",
      "Sistemas construidos antes de 1950 que usan refrigerantes poco comunes",
      "Unidades PTAC selladas herméticamente",
    ],
    correctAnswer: 2,
    explanation:
      "Los sistemas antiguos pueden contener refrigerantes como dióxido de azufre o cloruro de metilo, que requieren manejo especializado.",
    category: "TYPE 1",
  },
  {
    id: 172,
    text: "¿Qué certificación se requiere para técnicos que dan servicio a aparatos de alta presión, como sistemas residenciales tipo split?",
    options: [
      "Técnico Tipo I",
      "No se requiere certificación",
      "Técnico Tipo II o Técnico Universal",
      "Solo Técnico MVAC",
    ],
    correctAnswer: 2,
    explanation:
      "Los aparatos de alta presión y de muy alta presión requieren certificación Tipo II o Universal.",
    category: "TYPE 2",
  },
  {
    id: 173,
    text: "¿Qué gas se recomienda para presurizar un sistema recién instalado antes de verificar fugas?",
    options: [
      "Nitrógeno",
      "Oxígeno",
      "Vapor de refrigerante",
      "Aire comprimido",
    ],
    correctAnswer: 0,
    explanation:
      "El nitrógeno es inerte y seguro para presurizar sistemas durante la verificación de fugas.",
    category: "TYPE 2",
  },
  {
    id: 174,
    text: "¿Qué método es mejor para localizar con precisión el punto exacto de una fuga de refrigerante después de encontrar el área general?",
    options: [
      "Detector electrónico",
      "Burbujas de jabón",
      "Manómetro de presión",
      "Termómetro",
    ],
    correctAnswer: 1,
    explanation:
      "Las burbujas de jabón permiten identificar con precisión la ubicación de la fuga.",
    category: "TYPE 2",
  },

  {
    id: 175,
    text: "¿Qué componente es más probable que tenga una fuga en un compresor abierto que ha estado inactivo durante varios meses?",
    options: [
      "Serpentín del condensador",
      "Serpentín del evaporador",
      "Línea de succión",
      "Sello del eje giratorio",
    ],
    correctAnswer: 3,
    explanation:
      "El sello del eje giratorio puede resecarse y tener fugas después de largos períodos de inactividad.",
    category: "TYPE 2",
  },
  {
    id: 176,
    text: "¿Qué señal visible durante la inspección indica comúnmente una fuga de refrigerante?",
    options: [
      "Residuos de aceite",
      "Formación de óxido",
      "Acumulación de escarcha",
      "Cableado suelto",
    ],
    correctAnswer: 0,
    explanation:
      "Las trazas de aceite a menudo escapan junto con el refrigerante e indican una fuga.",
    category: "TYPE 2",
  },
  {
    id: 177,
    text: "El sobrecalentamiento excesivo en un sistema de alta presión generalmente indica ¿qué condición?",
    options: [
      "Sistema sobrecargado",
      "Flujo de aire del condensador restringido",
      "Baja carga de refrigerante",
      "Termostato defectuoso",
    ],
    correctAnswer: 2,
    explanation:
      "Una baja carga de refrigerante conduce a un sobrecalentamiento excesivo.",
    category: "TYPE 2",
  },
  {
    id: 178,
    text: "¿A qué tasa anual de fuga deben repararse los equipos de enfriamiento de confort con más de 50 lb de refrigerante?",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 1,
    explanation:
      "Los equipos de enfriamiento de confort requieren reparación cuando las fugas superan el 15% anual.",
    category: "TYPE 2",
  },
  {
    id: 179,
    text: "¿Cuál es el umbral requerido de tasa anual de fuga para sistemas de refrigeración de proceso comercial o industrial de más de 50 lb?",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 3,
    explanation:
      "Los sistemas de refrigeración de proceso deben repararse cuando las tasas de fuga superan el 35%.",
    category: "TYPE 2",
  },
  {
    id: 180,
    text: "¿Por qué deben revisarse y cambiarse regularmente el aceite y los filtros de una máquina de reciclaje?",
    options: [
      "El refrigerante recuperado puede contener contaminantes",
      "Para reducir el ruido de funcionamiento",
      "Para cumplir con requisitos de envío",
      "Para aumentar la velocidad del compresor",
    ],
    correctAnswer: 0,
    explanation:
      "El refrigerante recuperado puede contener ácidos, humedad y aceite que contaminan el sistema.",
    category: "TYPE 2",
  },
  {
    id: 181,
    text: "¿Qué riesgo existe cuando un equipo de recuperación con un compresor hermético realiza un vacío profundo?",
    options: [
      "Pérdida de precisión del refrigerante",
      "Sobrellenado del cilindro",
      "Sobrecalentamiento del compresor",
      "Dilución del aceite",
    ],
    correctAnswer: 2,
    explanation:
      "Los compresores herméticos dependen del flujo de refrigerante para enfriarse y pueden sobrecalentarse bajo vacío profundo.",
    category: "TYPE 2",
  },
  {
    id: 182,
    text: "¿Qué deben hacer los técnicos antes de cambiar el equipo de recuperación a un refrigerante diferente?",
    options: [
      "Aumentar la presión del condensador",
      "Purgar el equipo, cambiar el filtro y evacuar",
      "Agregar solo aceite nuevo",
      "Reemplazar todas las mangueras por unas nuevas",
    ],
    correctAnswer: 1,
    explanation:
      "La purga, el reemplazo del filtro y la evacuación evitan la contaminación cruzada.",
    category: "TYPE 2",
  },
  {
    id: 183,
    text: "¿Qué refrigerante requiere un juego dedicado de mangueras, manómetros y equipo de recuperación?",
    options: ["R-22", "R-410A", "R-404A", "R-134a"],
    correctAnswer: 3,
    explanation:
      "Los sistemas con R-134a requieren herramientas dedicadas para evitar contaminación.",
    category: "TYPE 2",
  },
  {
    id: 184,
    text: "¿Por qué un técnico podría recuperar refrigerante en fase líquida?",
    options: [
      "Para reducir el tiempo de recuperación",
      "Para evitar la entrada de humedad",
      "Para prevenir completamente la pérdida de aceite",
      "Para aumentar la presión del sistema",
    ],
    correctAnswer: 0,
    explanation:
      "La recuperación en líquido acelera el proceso general de recuperación.",
    category: "TYPE 2",
  },
  {
    id: 185,
    text: "Al dar servicio a un sistema con un receptor/tanque de almacenamiento, ¿dónde debe colocarse normalmente el refrigerante?",
    options: [
      "Entrada del evaporador",
      "Salida del condensador",
      "Receptor",
      "Línea de succión",
    ],
    correctAnswer: 2,
    explanation:
      "El receptor está diseñado para almacenar refrigerante durante el servicio.",
    category: "TYPE 2",
  },
  {
    id: 186,
    text: "¿Cuál es la unidad preferida para medir con precisión un vacío profundo durante la evacuación?",
    options: ["Pulgadas de mercurio", "PSIG", "Micrones", "Bar"],
    correctAnswer: 2,
    explanation:
      "Los micrones proporcionan la medición más precisa de los niveles de vacío profundo.",
    category: "TYPE 2",
  },
  {
    id: 187,
    text: "Cuando ¿cuál de los siguientes se ventila en un ambiente cerrado, puede causar una explosión?",
    options: ["Oxígeno", "Dióxido de carbono", "Hidrógeno", "Nitrógeno"],
    correctAnswer: 2,
    explanation:
      "Pequeñas cantidades de hidrógeno líquido pueden ser explosivas cuando se combinan con aire y pequeñas cantidades de energía.",
    category: "TYPE 2",
  },
  {
    id: 188,
    text: "El estado de un refrigerante que sale del receptor de líquido de un sistema de refrigeración es:",
    options: [
      "Líquido de baja presión",
      "Gas de baja presión",
      "Líquido de alta presión",
      "Gas de alta presión",
    ],
    correctAnswer: 2,
    explanation:
      "El refrigerante sale del receptor como un líquido de alta presión y está subenfriado por debajo de la interfaz del líquido.",
    category: "TYPE 2",
  },
  {
    id: 189,
    text: "Cuando la tasa anualizada de fuga alcanza _____ o más, las fugas en unidades de proceso industrial y refrigeración deben repararse con una carga de 50 libras o mayor.",
    options: ["40%", "30%", "10%", "20%"],
    correctAnswer: 1,
    explanation:
      "Los sistemas de refrigeración industrial y comercial deben repararse cuando la tasa anual de fuga excede el 30%.",
    category: "TYPE 2",
  },
  {
    id: 190,
    text: "Al evacuar un sistema, ¿cuál es el número mínimo de micrones que una bomba de vacío debe alcanzar?",
    options: [
      "500000 micrones",
      "50000 micrones",
      "500 micrones",
      "5000 micrones",
    ],
    correctAnswer: 2,
    explanation:
      "Un vacío final de 500 micrones es aceptable para una evacuación adecuada.",
    category: "TYPE 2",
  },
  {
    id: 191,
    text: "Un equipo de alta presión con una capacidad de menos de 200 libras. El nivel de un refrigerante HCFC o HFC debe evacuarse (recuperarse) hasta:",
    options: [
      "4 pulgadas de vacío",
      "0 pulgadas de vacío",
      "10 pulgadas de vacío",
      "15 pulgadas de vacío",
    ],
    correctAnswer: 1,
    explanation:
      "Los equipos de alta presión con menos de 200 libras deben evacuarse hasta 0 pulgadas de vacío.",
    category: "TYPE 2",
  },
  {
    id: 192,
    text: "¿Cuál de los siguientes se encuentra comúnmente en refrigerantes fabricados antes de 1950?",
    options: ["SO2", "HNO6", "NO2", "Ninguna de las anteriores"],
    correctAnswer: 0,
    explanation:
      "Los sistemas de refrigeración antiguos comúnmente usaban dióxido de azufre como refrigerante.",
    category: "TYPE 2",
  },
  {
    id: 193,
    text: 'Según las normas de la EPA, retirar ¿qué componente se considera una "reparación mayor"?',
    options: [
      "Motor del ventilador del evaporador",
      "Secador de la línea de líquido",
      "Compresor",
      "Interruptor",
    ],
    correctAnswer: 2,
    explanation: "Retirar un compresor se clasifica como una reparación mayor.",
    category: "TYPE 2",
  },
  {
    id: 194,
    text: "¿Cuál de los siguientes se usa para evitar que golpes transitorios de líquido entren al compresor?",
    options: [
      "Equipo de recuperación",
      "Controlador de cárter",
      "Acumulador",
      "Radiador",
    ],
    correctAnswer: 2,
    explanation:
      "Un acumulador evita que refrigerante líquido entre al compresor.",
    category: "TYPE 2",
  },
  {
    id: 195,
    text: "Los cilindros desechables deben ser:",
    options: [
      "Recuperados y usados de nuevo.",
      "Usados para aire.",
      "Desechados.",
      "Guardados.",
    ],
    correctAnswer: 2,
    explanation:
      "Los cilindros desechables deben desecharse adecuadamente después de la recuperación.",
    category: "TYPE 2",
  },
  {
    id: 196,
    text: "¿Qué eliminan los filtros secadores?",
    options: [
      "Solo moho",
      "Solo humedad",
      "Humedad y partículas",
      "Solo partículas",
    ],
    correctAnswer: 2,
    explanation:
      "Los filtros secadores eliminan la humedad y los contaminantes sólidos del sistema.",
    category: "TYPE 2",
  },
  {
    id: 197,
    text: "El uso de equipo de recuperación certificado es el primer paso para usar prácticas adecuadas de recuperación, y está certificado por:",
    options: [
      "Supervisores de campo de la EPA",
      "Laboratorio aprobado por la EPA",
      "Solo la EPA",
      "Fabricantes aprobados por UL",
    ],
    correctAnswer: 1,
    explanation:
      "El equipo de recuperación debe estar certificado por un laboratorio aprobado por la EPA.",
    category: "TYPE 2",
  },
  {
    id: 198,
    text: "¿Cuál de los siguientes no puede ser comprimido por un compresor?",
    options: ["Ambas opciones", "Ninguna de las opciones", "Vapor", "Líquido"],
    correctAnswer: 3,
    explanation: "Los líquidos no pueden ser comprimidos por un compresor.",
    category: "TYPE 2",
  },
  {
    id: 199,
    text: "Un equipo de alta presión con 210 libras de refrigerante R-407C debe evacuarse (recuperarse) hasta un nivel de:",
    options: [
      "0 pulgadas de vacío",
      "4 pulgadas de vacío",
      "15 pulgadas de vacío",
      "10 pulgadas de vacío",
    ],
    correctAnswer: 3,
    explanation:
      "Los equipos de alta presión con más de 200 libras deben evacuarse hasta 10 pulgadas de vacío.",
    category: "TYPE 2",
  },
  {
    id: 200,
    text: "Para una prueba de caída de presión, usar ______ seco es el mejor método para verificar fugas.",
    options: ["Carbono", "Agua", "Nitrógeno", "Aire"],
    correctAnswer: 2,
    explanation:
      "El nitrógeno es un gas inerte usado para probar sistemas de forma segura en busca de fugas.",
    category: "TYPE 2",
  },
  {
    id: 201,
    text: "La unidad primero debe ser ______ después de la instalación de cualquier tipo de sistema.",
    options: [
      "Cargada según las guías del fabricante.",
      "Presurizada con aire y revisada por fugas.",
      "Dejada 24 horas para permitir que el sistema se estabilice.",
      "Presurizada con un gas inerte y revisada por fugas.",
    ],
    correctAnswer: 3,
    explanation:
      "Los sistemas recién instalados primero deben presurizarse con un gas inerte y verificarse por fugas.",
    category: "TYPE 2",
  },
  {
    id: 202,
    text: "Todos los sistemas de enfriamiento de confort que contienen más de 50 libras de refrigerante deben repararse cuando la tasa anual de fuga excede _____ .",
    options: ["15%", "20%", "10%", "5%"],
    correctAnswer: 0,
    explanation:
      "Los sistemas de enfriamiento de confort deben repararse cuando las tasas de fuga exceden el 15%.",
    category: "TYPE 2",
  },
  {
    id: 203,
    text: "Si un equipo con fugas con un refrigerante regulado no puede repararse, debe ser:",
    options: [
      "convertido o retirado dentro de 12 meses.",
      "reemplazado dentro de 12 meses.",
      "convertido o retirado dentro de 3 meses.",
      "reemplazado dentro de 3 meses.",
    ],
    correctAnswer: 0,
    explanation:
      "Los equipos con fugas que no pueden repararse deben ser convertidos o retirados dentro de 12 meses.",
    category: "TYPE 2",
  },
  {
    id: 204,
    text: "Antes de cargar un sistema nuevo con refrigerante, ¿qué debe hacerse?",
    options: [
      "Presurizar con aire comprimido y verificar fugas.",
      "Presurizar con nitrógeno (clasificado como gas inerte) y verificar fugas.",
      "Presurizar con oxígeno y verificar fugas.",
      "Ninguna de las anteriores.",
    ],
    correctAnswer: 1,
    explanation:
      "El nitrógeno es un gas inerte y es seguro para presurizar un sistema de refrigeración para realizar pruebas de fugas antes de cargar refrigerante.",
    category: "TYPE 2",
  },
  {
    id: 205,
    text: "¿Qué refrigerante puede usarse para detección de fugas como gas trazador y presurizarse con nitrógeno?",
    options: ["R-12", "R-11", "R-22", "R-115"],
    correctAnswer: 2,
    explanation:
      "El R-22 se usa comúnmente como gas trazador mezclado con nitrógeno para ayudar a localizar fugas durante pruebas de presión.",
    category: "TYPE 2",
  },
  {
    id: 206,
    text: "¿Qué herramientas puede usar para encontrar el área general de las fugas y localizar fugas con precisión?",
    options: [
      "Burbujas de jabón.",
      "Buscar residuos de aceite.",
      "Un detector electrónico o ultrasónico de fugas proporcionará el área general de la fuga.",
      "Tinte para refrigerante.",
    ],
    correctAnswer: 2,
    explanation:
      "Los detectores electrónicos o ultrasónicos de fugas son efectivos para identificar el área general donde hay fugas de refrigerante.",
    category: "TYPE 2",
  },
  {
    id: 207,
    text: "Trazas de aceite alrededor de un accesorio de entrada de un visor (sight glass) de un sistema de refrigeración podrían ser indicio de:",
    options: [
      "Una fuga",
      "Aceite excesivo en el sistema",
      "Una sobrecarga",
      "Una restricción en la TXV",
    ],
    correctAnswer: 0,
    explanation:
      "El residuo de aceite alrededor de accesorios generalmente indica una fuga de refrigerante, ya que el aceite viaja con el refrigerante a través del sistema.",
    category: "TYPE 2",
  },
  {
    id: 208,
    text: "Describa maneras en que puede buscar fugas visualmente.",
    options: [
      "Usando burbujas de jabón",
      "Buscando trazas de aceite",
      "Sobrecalentamiento excesivo, causado por baja carga de refrigerante",
      "Todo lo anterior",
    ],
    correctAnswer: 3,
    explanation:
      "La detección visual de fugas puede incluir burbujas de jabón, residuos de aceite y síntomas de desempeño del sistema como el sobrecalentamiento excesivo.",
    category: "TYPE 2",
  },
  {
    id: 209,
    text: "La clasificación Tipo II, según la EPA, aplica a ¿qué equipo?",
    options: [
      "Electrodomésticos pequeños con cinco (5) libras de refrigerante o menos",
      "Refrigeradores, congeladores y aparatos de máquinas expendedoras",
      "Equipos de baja presión",
      "Equipos de aire acondicionado tipo split con cinco (5) libras de refrigerante o más",
    ],
    correctAnswer: 3,
    explanation:
      "La certificación Tipo II de la EPA aplica a equipos de alta y muy alta presión, como sistemas de aire acondicionado tipo split con cinco libras o más de refrigerante.",
    category: "TYPE 2",
  },
  {
    id: 210,
    text: "¿Cuáles son los requisitos de reparación de fugas para equipos de enfriamiento de confort y equipos comerciales que contienen 50 lb o más de refrigerante?",
    options: [
      "Deben repararse si la tasa de fuga excede 15% en equipos de enfriamiento de confort.",
      "Deben repararse si la tasa de fuga excede 35% en toda refrigeración de proceso comercial e industrial.",
      "a y b",
      "Ninguna de las anteriores",
    ],
    correctAnswer: 2,
    explanation:
      "Las regulaciones de la EPA requieren reparaciones cuando los equipos de enfriamiento de confort superan una tasa de fuga del 15% y cuando la refrigeración comercial o industrial supera una tasa de fuga del 35%.",
    category: "TYPE 2",
  },
  {
    id: 211,
    text: "¿Qué tipo de refrigerante fue el más común antes de prohibir los CFC y los HCFC?",
    options: ["R-12", "R-22", "R-500", "R-134A"],
    correctAnswer: 1,
    explanation:
      "El R-22 se usó ampliamente en sistemas de aire acondicionado y refrigeración antes de que los HCFC se eliminaran gradualmente debido a regulaciones ambientales.",
    category: "TYPE 2",
  },
  {
    id: 212,
    text: "El nivel requerido de evacuación para equipo de recuperación fabricado después del 15 de noviembre de 1993, en un sistema que contiene menos de 200 libras de refrigerante R-12, es:",
    options: [
      "0 pulgadas Hg",
      "4 pulgadas Hg",
      "10 pulgadas Hg",
      "15 pulgadas Hg",
    ],
    correctAnswer: 2,
    explanation:
      "El equipo de recuperación fabricado después del 15 de noviembre de 1993 debe ser capaz de evacuar sistemas con menos de 200 libras de refrigerante hasta 10 pulgadas de mercurio.",
    category: "TYPE 2",
  },
  {
    id: 213,
    text: "¿Cuál es el propósito del filtro secador y cuándo debe cambiarse?",
    options: [
      "Filtrar el aceite. Cambiar cada año",
      "Eliminar la humedad del refrigerante, reemplazar de forma rutinaria o cada vez que se abra un sistema",
      "Limpia el aire. Reemplazar mensualmente",
      "Seca filtros de aire. Reemplazar anualmente",
    ],
    correctAnswer: 1,
    explanation:
      "El filtro secador elimina la humedad y los contaminantes del refrigerante y debe reemplazarse cada vez que se abra el sistema o como parte del mantenimiento rutinario.",
    category: "TYPE 2",
  },
  {
    id: 214,
    text: "Los equipos de refrigeración de proceso industrial y refrigeración comercial con más de 50 libras de refrigerante y una tasa anual de fuga de ___ % requieren reparación según las regulaciones de la EPA.",
    options: ["0", "15", "35", "50"],
    correctAnswer: 2,
    explanation:
      "Las regulaciones de la EPA requieren reparaciones cuando el equipo de proceso industrial o de refrigeración comercial excede una tasa anual de fuga del 35%.",
    category: "TYPE 2",
  },
  {
    id: 215,
    text: "¿Cómo puede saber a través de un visor (sight glass) si hay exceso de humedad en el sistema?",
    options: [
      "Puede ver burbujas de humedad",
      "Buscar cambios de color del refrigerante",
      "Puede ver burbujas de gas",
      "El visor está claro",
    ],
    correctAnswer: 1,
    explanation:
      "Muchos visores contienen indicadores de humedad que cambian de color cuando hay exceso de humedad en el refrigerante.",
    category: "TYPE 2",
  },

  {
    id: 216,
    text: "Los chillers de enfriamiento de confort y todos los demás equipos con más de 50 libras de refrigerante con una tasa anual de fuga de ___ % requieren reparación según las regulaciones de la EPA:",
    options: ["0", "15", "35", "50"],
    correctAnswer: 1,
    explanation:
      "Los equipos de enfriamiento de confort deben repararse cuando la tasa anual de fuga excede el 15% según las normas de la EPA.",
    category: "TYPE 2",
  },
  {
    id: 217,
    text: "El uso de bombas de vacío grandes puede provocar la congelación del agua en el sistema. ¿Cuáles son maneras en que el técnico puede ayudar a prevenir la congelación?",
    options: [
      "Aumentar la presión introduciendo nitrógeno para contrarrestar la congelación",
      "Comenzar a cargar con vapor hasta que la presión esté por encima del punto de congelación",
      "a y b",
      "Ninguna de las anteriores",
    ],
    correctAnswer: 2,
    explanation:
      "Elevar la presión del sistema con nitrógeno o introducir vapor de refrigerante evita que la humedad se congele durante una evacuación profunda.",
    category: "TYPE 2",
  },
  {
    id: 218,
    text: "La mayor parte del líquido que se recuperará de un sistema se encontrará en el/la:",
    options: [
      "Condensador",
      "Receptor (cuando aplique)",
      "Lado de baja del sistema",
      "Evaporador",
    ],
    correctAnswer: 1,
    explanation:
      "Cuando está instalado, el receptor almacena la mayor parte de la carga de refrigerante líquido del sistema.",
    category: "TYPE 2",
  },
  {
    id: 219,
    text: "¿La formación de espuma al arranque puede encontrarse en qué componente? ¿Qué significa esto?",
    options: [
      "El refrigerante en un acumulador forma espuma a baja presión",
      "El refrigerante en el aceite del compresor causará espuma del aceite. Evite la migración de refrigerante con un calentador de cárter",
      "El refrigerante en el receptor forma espuma con alta presión",
      "El refrigerante en el condensador forma espuma en días calurosos",
    ],
    correctAnswer: 1,
    explanation:
      "La espuma ocurre cuando el refrigerante migra hacia el aceite del compresor y hierve al arranque, lo cual se evita con calentadores de cárter.",
    category: "TYPE 2",
  },
  {
    id: 220,
    text: "¿Cuáles son maneras preferidas de medir un vacío profundo?",
    options: [
      "Usar un manómetro analógico de vacío",
      "Medir hasta 500 micrones es preferido o pulgadas de mercurio (pulgadas Hg)",
      "Usar un manómetro compuesto de vacío en el manifold",
      "La medición no es necesaria",
    ],
    correctAnswer: 1,
    explanation:
      "Los manómetros de micrones proporcionan una medición precisa de niveles de vacío profundo, siendo 500 micrones el punto de referencia preferido.",
    category: "TYPE 2",
  },
  {
    id: 221,
    text: "Se convierte en responsabilidad del propietario mantener registros de todo el refrigerante agregado a unidades que contienen más de ___ libras de carga de refrigerante.",
    options: ["15 libras", "20 libras", "35 libras", "50 libras"],
    correctAnswer: 3,
    explanation:
      "Las regulaciones de la EPA requieren que los propietarios mantengan registros de servicio de refrigerante para sistemas que contienen más de 50 libras de refrigerante.",
    category: "TYPE 2",
  },
  {
    id: 222,
    text: "¿Qué significan las pulgadas HG?",
    options: [
      "Pulgadas en manómetro de alta",
      "Pulgadas en higrómetro",
      "Pulgadas de mercurio",
      "Pulgadas de agua",
    ],
    correctAnswer: 2,
    explanation:
      "Pulgadas de mercurio es una unidad estándar de medida utilizada para indicar la presión de vacío.",
    category: "TYPE 2",
  },
  {
    id: 223,
    text: "Las excepciones a los niveles de evacuación requeridos para equipos de recuperación que exigen que un aparato se evacue solo hasta 0 psig aplican a aparatos que:",
    options: [
      "Están siendo rescatados",
      "Están llenos de agua o sustancias que dañarían el equipo de recuperación",
      "Tienen motores de ventilador del evaporador defectuosos",
      "Tienen condensadores enfriados por aire",
    ],
    correctAnswer: 1,
    explanation:
      "Los sistemas contaminados con agua o sustancias dañinas solo están obligados a evacuarse hasta 0 psig para proteger el equipo de recuperación.",
    category: "TYPE 2",
  },
  {
    id: 224,
    text: "Al evacuar un sistema de compresión de vapor, ¿a cuántos micrones debe llegar el vacío?",
    options: ["50", "100", "250", "500"],
    correctAnswer: 3,
    explanation:
      "Un vacío de 500 micrones asegura que la humedad y los no condensables hayan sido eliminados eficazmente del sistema.",
    category: "TYPE 2",
  },
  {
    id: 225,
    text: "¿Por qué nunca debe arrancar un compresor hermético bajo vacío profundo?",
    options: [
      "El devanado del motor podría dañarse",
      "Las válvulas del compresor podrían dañarse",
      "El eje podría romperse",
      "La humedad en el refrigerante podría congelarse",
    ],
    correctAnswer: 0,
    explanation:
      "Sin el enfriamiento del refrigerante, los devanados del motor pueden sobrecalentarse y dañarse al operar bajo vacío profundo.",
    category: "TYPE 2",
  },
  {
    id: 226,
    text: "La condición y el estado del refrigerante que entra al receptor es:",
    options: [
      "Vapor sobrecalentado de alta presión",
      "Vapor sobrecalentado de baja presión",
      "Líquido subenfriado de alta presión",
      "Líquido subenfriado de baja presión",
    ],
    correctAnswer: 2,
    explanation:
      "El refrigerante entra al receptor como un líquido subenfriado de alta presión después de salir del condensador.",
    category: "TYPE 2",
  },
  {
    id: 227,
    text: "¿Qué es un receptor, dónde se ubica y cuál es el estado del refrigerante después de salir del receptor?",
    options: [
      "Después del condensador, líquido de alta presión / alta temperatura",
      "Después del compresor, líquido de alta presión / alta temperatura",
      "Después del evaporador, líquido de alta presión / alta temperatura",
      "Después de la TXV, líquido de alta presión / alta temperatura",
    ],
    correctAnswer: 0,
    explanation:
      "Un receptor se instala después del condensador y almacena refrigerante líquido, que permanece como un líquido de alta presión al salir del receptor.",
    category: "TYPE 2",
  },
  {
    id: 228,
    text: "¿Qué es la línea de líquido?",
    options: [
      "Línea entre el compresor y el dispositivo de medición",
      "Línea entre el evaporador y el dispositivo de medición",
      "Línea entre el condensador y el dispositivo de medición",
      "Línea entre el acumulador y el dispositivo de medición",
    ],
    correctAnswer: 2,
    explanation:
      "La línea de líquido transporta refrigerante líquido de alta presión desde el condensador hasta el dispositivo de medición.",
    category: "TYPE 2",
  },
  {
    id: 229,
    text: "¿Qué criterios debe cumplir el equipo de recuperación si fue fabricado después del 15 de noviembre de 1993?",
    options: [
      "Certificado por un laboratorio de la EPA",
      "Equipado con conexiones de baja pérdida",
      "Debe cumplir con los estrictos estándares de vacío",
      "Todo lo anterior",
    ],
    correctAnswer: 3,
    explanation:
      "El equipo de recuperación fabricado después de esta fecha debe cumplir con certificación de la EPA, incluir conexiones de baja pérdida y alcanzar los niveles de vacío requeridos.",
    category: "TYPE 2",
  },
  {
    id: 230,
    text: "¿Cuántas pulgadas de vacío de mercurio se requieren para HCFC-22, para aparatos que contienen más de 200 lb de refrigerante, usando equipo fabricado después del 15/11/1993?",
    options: ["4", "6", "10", "Ninguna de las anteriores"],
    correctAnswer: 2,
    explanation:
      "Las normas de la EPA requieren recuperación hasta 10 pulgadas de mercurio para sistemas grandes de HCFC-22 usando equipo de recuperación posterior a 1993.",
    category: "TYPE 2",
  },
  {
    id: 231,
    text: "¿Cuántas pulgadas de vacío de mercurio se requieren para HCFC-22, para aparatos que contienen más de 200 lb de refrigerante, usando equipo anterior al 15/11/1993?",
    options: ["4", "6", "10", "Ninguna de las anteriores"],
    correctAnswer: 0,
    explanation:
      "El equipo de recuperación más antiguo fabricado antes del 15 de noviembre de 1993 solo está obligado a lograr 4 pulgadas de vacío de mercurio.",
    category: "TYPE 2",
  },
  {
    id: 232,
    text: "Los técnicos que mantienen o dan servicio a equipos de baja presión deben tener certificación ______.",
    options: [
      "Solo Tipo I",
      "Solo Tipo II",
      "Tipo III o Universal",
      "Cualquier certificación de la EPA",
    ],
    correctAnswer: 2,
    explanation:
      "Los equipos de baja presión requieren técnicos certificados a nivel Tipo III o Universal.",
    category: "TYPE 3",
  },
  {
    id: 233,
    text: "Verdadero o Falso: La venta de refrigerantes CFC y HCFC está restringida a técnicos certificados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "Solo a técnicos certificados se les permite comprar refrigerantes CFC y HCFC.",
    category: "TYPE 3",
  },
  {
    id: 234,
    text: "Debido a que los sistemas de baja presión operan por debajo de la presión atmosférica, las fugas hacen que ______ entren al sistema.",
    options: ["Refrigerante", "Aceite", "Aire y humedad", "Solo agua líquida"],
    correctAnswer: 2,
    explanation:
      "Las fugas hacen que aire y humedad sean aspirados hacia sistemas que operan bajo vacío.",
    category: "TYPE 3",
  },
  {
    id: 235,
    text: "Verdadero o Falso: El agua caliente controlada es un método eficiente para verificar fugas en un sistema de baja presión cargado.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "El agua caliente controlada eleva de forma segura la presión del sistema para una detección de fugas efectiva.",
    category: "TYPE 3",
  },
  {
    id: 236,
    text: "Al presurizar un sistema de baja presión para pruebas de fugas, la presión no debe exceder ______.",
    options: ["5 psig", "8 psig", "10 psig", "15 psig"],
    correctAnswer: 2,
    explanation:
      "Presiones por encima de 10 psig pueden causar que falle el disco de ruptura.",
    category: "TYPE 3",
  },
  {
    id: 237,
    text: "Verdadero o Falso: Los sistemas con compresores de accionamiento abierto son propensos a fugas en el sello del eje.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "Los compresores de accionamiento abierto comúnmente tienen fugas en el sello del eje.",
    category: "TYPE 3",
  },
  {
    id: 238,
    text: "Una reparación se clasifica como una reparación mayor cuando implica la remoción del/de la ______.",
    options: [
      "Visor (sight glass)",
      "Compresor",
      "Válvula de alivio de presión",
      "Termostato",
    ],
    correctAnswer: 1,
    explanation:
      "Retirar el compresor califica el trabajo como una reparación mayor.",
    category: "TYPE 3",
  },
  {
    id: 239,
    text: "Los equipos de enfriamiento de confort que contienen más de 50 lb de refrigerante deben repararse cuando la tasa anual de fuga excede ______.",
    options: ["10%", "15%", "25%", "35%"],
    correctAnswer: 1,
    explanation:
      "La tasa anual de fuga permitida para sistemas de enfriamiento de confort es 15%.",
    category: "TYPE 3",
  },
  {
    id: 240,
    text: "Verdadero o Falso: Los sistemas de refrigeración de proceso comercial e industrial tienen una tasa de fuga permitida más alta que los sistemas de enfriamiento de confort.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "A los sistemas de refrigeración de proceso se les permite una tasa anual de fuga más alta.",
    category: "TYPE 3",
  },
  {
    id: 241,
    text: "La recuperación de refrigerante de sistemas R-11 o R-123 comienza con la remoción de ______.",
    options: ["Vapor", "Aceite", "Líquido", "Nitrógeno"],
    correctAnswer: 2,
    explanation:
      "Debe retirarse el refrigerante líquido antes de la recuperación de vapor.",
    category: "TYPE 3",
  },
  {
    id: 242,
    text: "Verdadero o Falso: Debe circularse agua a través de los tubos durante la recuperación para evitar la congelación.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "La circulación de agua evita la formación de hielo dentro de los tubos.",
    category: "TYPE 3",
  },
  {
    id: 243,
    text: "Durante la remoción de aceite, la temperatura del aceite debe elevarse a ______ para reducir el contenido de refrigerante.",
    options: ["100°F", "120°F", "130°F", "150°F"],
    correctAnswer: 2,
    explanation: "A 130°F, queda menos refrigerante disuelto en el aceite.",
    category: "TYPE 3",
  },
  {
    id: 244,
    text: "Verdadero o Falso: La carga inicial de un sistema de baja presión debe hacerse en fase de vapor.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "La carga en vapor evita que el agua en los tubos se congele bajo vacío profundo.",
    category: "TYPE 3",
  },
  {
    id: 245,
    text: "El equipo de recuperación fabricado después del 15 de noviembre de 1993 debe ser ______.",
    options: [
      "Operado manualmente",
      "Enfriado por aire únicamente",
      "Certificado por una organización aprobada por la EPA",
      "Diseñado solo para HCFC",
    ],
    correctAnswer: 2,
    explanation:
      "La certificación de la EPA garantiza que el equipo cumpla con los estándares requeridos.",
    category: "TYPE 3",
  },
  {
    id: 246,
    text: "Verdadero o Falso: Las purgas frecuentes pueden indicar que aire está entrando a un sistema de baja presión.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "Las purgas frecuentes sugieren infiltración de aire causada por fugas.",
    category: "TYPE 3",
  },
  {
    id: 247,
    text: "¿Dónde ocurren comúnmente las fugas en sistemas de baja presión?",
    options: [
      "Evaporador",
      "Condensador",
      "Unidad de purga",
      "Juntas o conexiones",
    ],
    correctAnswer: 3,
    explanation:
      "En sistemas de baja presión, las fugas ocurren con mayor frecuencia en juntas o conexiones porque el sistema opera bajo vacío, permitiendo que el aire sea aspirado a través de puntos de sellado débiles.",
    category: "TYPE 3",
  },
  {
    id: 248,
    text: "¿Dónde ocurren comúnmente las fugas en sistemas de compresor tipo accionamiento abierto?",
    options: [
      "Evaporador",
      "Condensador",
      "Sello del eje",
      "Torre de enfriamiento",
    ],
    correctAnswer: 2,
    explanation:
      "Los sistemas con compresor de accionamiento abierto comúnmente tienen fugas en el sello del eje porque es un componente móvil que debe mantener un sello alrededor del eje giratorio.",
    category: "TYPE 3",
  },
  {
    id: 249,
    text: "¿En sistemas de baja presión el refrigerante sale del sistema o el aire y la humedad entran?",
    options: [
      "El refrigerante se escapa a través de fugas de baja presión.",
      "El aire y la humedad entran al sistema de refrigeración porque opera en vacío.",
      "El refrigerante se fuga a través de sellos del eje y juntas.",
      "El aire y la humedad entran a través de la unidad de purga.",
    ],
    correctAnswer: 1,
    explanation:
      "Los sistemas de refrigeración de baja presión operan bajo vacío, por lo que las fugas hacen que el aire y la humedad sean aspirados hacia el sistema en lugar de que el refrigerante se fugue hacia afuera.",
    category: "TYPE 3",
  },
  {
    id: 250,
    text: "¿Cuándo debe verificarse por fugas un sistema de baja presión según la guía ASHRAE 3-1996?",
    options: [
      "Hay recomendaciones específicas.",
      "Durante verificaciones de presión",
      "Cuando el sistema sube de 1 mm Hg a un nivel por encima de 2.5 mm Hg durante pruebas de vacío",
      "Verificar fugas cada año",
    ],
    correctAnswer: 2,
    explanation:
      "La guía ASHRAE 3-1996 especifica que un sistema de baja presión debe verificarse por fugas si el nivel de vacío sube por encima de los límites aceptables durante la prueba, lo que indica posible infiltración de aire.",
    category: "TYPE 3",
  },
  {
    id: 251,
    text: "¿Qué hace una unidad de purga y qué es una unidad de purga de alta eficiencia?",
    options: [
      "Elimina el refrigerante del sistema. Un sistema de purga de alta eficiencia expulsará grandes cantidades de refrigerante",
      "Elimina el refrigerante del sistema. Un sistema de purga de alta eficiencia expulsará muy poco refrigerante",
      "Elimina el aceite del sistema. Un sistema de purga de alta eficiencia expulsará muy poco refrigerante",
      "Elimina el aire del sistema. Un sistema de purga de alta eficiencia expulsará muy poco refrigerante",
    ],
    correctAnswer: 3,
    explanation:
      "Una unidad de purga elimina gases no condensables como el aire de sistemas de baja presión, y una unidad de purga de alta eficiencia minimiza la pérdida de refrigerante al hacerlo.",
    category: "TYPE 3",
  },
  {
    id: 252,
    text: "¿Cómo funciona una unidad de purga de un compresor centrífugo?",
    options: [
      "Toma succión de la parte superior del evaporador, elimina el aire del sistema y devuelve el refrigerante al evaporador",
      "Toma succión de la parte superior del barril del chiller, elimina el aire del sistema y devuelve el refrigerante al evaporador",
      "Toma succión de la parte superior de la succión del compresor, elimina el aire del sistema y devuelve el refrigerante al evaporador",
      "Toma succión de la parte superior del condensador, elimina el aire del sistema y devuelve el refrigerante al evaporador",
    ],
    correctAnswer: 3,
    explanation:
      "La unidad de purga elimina el aire del condensador donde se acumulan los no condensables y dirige el refrigerante recuperado de regreso al evaporador.",
    category: "TYPE 3",
  },
  {
    id: 253,
    text: "¿Cuáles son maneras visibles de verificar fugas en un sistema de baja presión?",
    options: [
      "Funcionamiento excesivo de un sistema de purga",
      "Humedad excesiva continua en la unidad de purga podría indicar una fuga en el condensador o en el barril del chiller",
      "Alta presión de cabecera",
      "Todo lo anterior",
    ],
    correctAnswer: 3,
    explanation:
      "Todas las condiciones listadas son indicadores visuales u operativos que sugieren que aire o humedad pueden estar entrando al sistema debido a fugas.",
    category: "TYPE 3",
  },
  {
    id: 254,
    text: "¿Qué debe hacerse para verificar fugas en un sistema de baja presión?",
    options: [
      "Aumentar la presión en el sistema mediante el uso de nitrógeno",
      "Aumentar la presión en el sistema mediante el uso de oxígeno",
      "Aumentar la presión en el sistema mediante el uso de agua caliente controlada o mantas calefactoras",
      "Aumentar la presión en el sistema mediante el uso de agua caliente de caldera",
    ],
    correctAnswer: 2,
    explanation:
      "Los sistemas de baja presión se presurizan de forma segura para pruebas de fugas usando fuentes de calor controladas como agua caliente o mantas calefactoras, no gases.",
    category: "TYPE 3",
  },
  {
    id: 255,
    text: "¿Cuáles son maneras en que puede aumentar la presión en el sistema?",
    options: [
      "Agua caliente controlada",
      "Mantas calefactoras",
      "A y B",
      "Ninguna de las anteriores",
    ],
    correctAnswer: 2,
    explanation:
      "Tanto el agua caliente controlada como las mantas calefactoras elevan de forma segura la presión del sistema al aumentar la temperatura del refrigerante.",
    category: "TYPE 3",
  },

{
    id: 256,
    text: "¿Qué puede pasar si supera 10 psig mientras presuriza el sistema?",
    options: [
      "Los sellos del eje fallarán",
      "El disco de ruptura fallará",
      "El oxígeno combinado con el aceite en el sistema explotará",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 1,
    explanation:
      "Superar 10 psig puede hacer que el disco de ruptura reviente, el cual está diseñado para proteger el sistema contra sobrepresión.",
    category: "TYPE 3"
  },
  {
    id: 257,
    text: "¿Cómo debe probarse por fugas una caja de agua (water box)?",
    options: [
      "Retirar el agua, luego colocar la sonda del detector de fugas a través de la válvula de drenaje",
      "Retirar el agua, presurizar y verificar con un detector de gases",
      "Buscar burbujas en el agua",
      "Probar el agua para rastros de refrigerante"
    ],
    correctAnswer: 0,
    explanation:
      "Retirar el agua e insertar una sonda del detector de fugas permite una detección precisa de fugas de refrigerante dentro de la caja de agua.",
    category: "TYPE 3"
  },
  {
    id: 258,
    text: "¿Qué equipo debe usarse para probar un tubo?",
    options: [
      "Retirar los tubos y colocarlos en un probador de tubos",
      "Inspeccionar con un boroscopio",
      "Kit de prueba hidrostática de tubos",
      "Usar una linterna para exponer microagujeros"
    ],
    correctAnswer: 2,
    explanation:
      "Un kit de prueba hidrostática de tubos está diseñado para presurizar de forma segura los tubos con agua e identificar fugas sin arriesgar daños.",
    category: "TYPE 3"
  },
  {
    id: 259,
    text: "¿Cuáles son los requisitos de reparación de fugas para equipos de enfriamiento de confort y equipos comerciales que contienen 50 lb o más de refrigerante?",
    options: [
      "Reparar si la tasa de fuga excede 15% en equipos de enfriamiento de confort",
      "Reparar si la tasa de fuga excede 35% en toda refrigeración de proceso comercial e industrial",
      "A y B",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 2,
    explanation:
      "Las regulaciones de la EPA requieren reparaciones cuando las tasas de fuga exceden 15% para sistemas de enfriamiento de confort y 35% para sistemas de refrigeración comercial e industrial.",
    category: "TYPE 3"
  },
  {
    id: 260,
    text: "¿Cuáles son los ajustes típicos de presión para discos de ruptura en sistemas de baja presión y equipos de recuperación?",
    options: ["5 psig", "10 psia", "15 psig", "15 psia"],
    correctAnswer: 2,
    explanation:
      "Los discos de ruptura en sistemas de baja presión generalmente están clasificados a 15 psig para proteger el sistema contra la sobrepresurización.",
    category: "TYPE 3"
  },
  {
    id: 261,
    text: "¿Cómo debe un técnico recuperar refrigerante de un sistema que usa R-11 o R-123?",
    options: [
      "Retirar el líquido primero",
      "Recuperar el vapor restante después",
      "A y B",
      "Ninguna de las anteriores"
    ],
    correctAnswer: 2,
    explanation:
      "El procedimiento correcto de recuperación para refrigerantes de baja presión requiere retirar primero el líquido, seguido de la recuperación del vapor restante.",
    category: "TYPE 3"
  },
  {
    id: 262,
    text: "Después de retirar el líquido, aproximadamente ¿cuánto vapor permanecerá en el sistema en un chiller R-11 de 350 toneladas?",
    options: [
      "10 lb de vapor después de retirar todo el líquido",
      "20 lb de vapor después de retirar todo el líquido",
      "50 lb de vapor después de retirar todo el líquido",
      "100 lb de vapor después de retirar todo el líquido"
    ],
    correctAnswer: 3,
    explanation:
      "Incluso después de la recuperación del líquido, queda una cantidad significativa de refrigerante en vapor en chillers grandes de baja presión, típicamente alrededor de 100 libras para un sistema de 350 toneladas.",
    category: "TYPE 3"
  },
  {
    id: 263,
    text: "¿Cómo puede acelerar el proceso de recuperación de vapor?",
    options: [
      "Usar dos máquinas de recuperación",
      "Un calentador en el lado del recipiente de recuperación ayudará a evacuar el vapor más rápido",
      "Calentar el tanque de recuperación",
      "Recuperar en un día caluroso"
    ],
    correctAnswer: 1,
    explanation:
      "Aplicar calor al recipiente de recuperación incrementa la vaporización del refrigerante, permitiendo que la máquina de recuperación retire el vapor con mayor eficiencia.",
    category: "TYPE 3"
  },
  {
    id: 264,
    text: "En un sistema que usa un condensador enfriado por agua, ¿qué componentes deben mantenerse encendidos?",
    options: [
      "Las bombas de agua del sistema",
      "El compresor de recuperación",
      "El agua del condensador de recuperación",
      "Todo lo anterior"
    ],
    correctAnswer: 3,
    explanation:
      "Todos los componentes listados deben permanecer operativos para asegurar una adecuada eliminación de calor y una recuperación eficiente del refrigerante.",
    category: "TYPE 3"
  },
  {
    id: 265,
    text: "¿De dónde proviene típicamente el agua en un sistema de condensación enfriado por agua?",
    options: ["Evaporador", "Chiller", "Pozo profundo", "Suministro municipal de agua"],
    correctAnswer: 3,
    explanation:
      "La mayoría de los sistemas con condensador enfriado por agua usan suministros de agua municipales o agua de torre de enfriamiento proveniente de sistemas municipales.",
    category: "TYPE 3"
  },
  {
    id: 266,
    text: "¿Qué partes del sistema deben drenarse de agua antes de recuperar refrigerante?",
    options: ["Evaporador", "Condensador", "Torre de enfriamiento", "A y B"],
    correctAnswer: 3,
    explanation:
      "Tanto el evaporador como el condensador deben drenarse para evitar congelación o daños durante la recuperación de refrigerante.",
    category: "TYPE 3"
  },
  {
    id: 267,
    text: "¿Cómo debe tratar el técnico el aceite antes de retirarlo y por qué?",
    options: [
      "Probar el aceite con un kit de detección de refrigerante",
      "Se debe alcanzar una temperatura de aceite de 130°F al retirar el aceite para hervir el refrigerante",
      "Retirar el aceite primero",
      "Inyectar oxígeno en el aceite para expulsar el refrigerante"
    ],
    correctAnswer: 1,
    explanation:
      "Calentar el aceite a aproximadamente 130°F permite que el refrigerante disuelto hierva de forma segura antes de retirar el aceite.",
    category: "TYPE 3"
  },
  {
    id: 268,
    text: "¿Por qué nunca debe cargar refrigerante líquido en un vacío profundo?",
    options: [
      "El refrigerante se evaporará instantáneamente creando peligro de explosión",
      "Está bien inyectar refrigerante líquido",
      "Introducir refrigerante líquido en un vacío profundo hará que el refrigerante hierva y puede bajar la temperatura lo suficiente como para congelar el agua en los tubos",
      "El refrigerante líquido romperá el vacío"
    ],
    correctAnswer: 2,
    explanation:
      "Cargar refrigerante líquido en un vacío profundo provoca ebullición rápida, lo que puede congelar el agua dentro de los tubos y dañar el sistema.",
    category: "TYPE 3"
  },
  {
    id: 269,
    text: "Un disco de ruptura en un sistema de baja presión se abrirá a ¿cuál de los siguientes psig?",
    options: ["20 psig", "25 psig", "10 psig", "15 psig"],
    correctAnswer: 3,
    explanation:
      "Si la presión supera los límites seguros, el disco de ruptura se abre para liberar presión y proteger el sistema.",
    category: "TYPE 3"
  },
  {
    id: 270,
    text: "Con certificación Tipo III, ¿en qué tipo de equipos se puede trabajar?",
    options: [
      "Presión de vacío",
      "Baja presión",
      "Alta presión",
      "Presión media"
    ],
    correctAnswer: 1,
    explanation:
      "La certificación Tipo III aplica a técnicos que trabajan en equipos de baja presión.",
    category: "TYPE 3"
  },
  {
    id: 271,
    text: "¿Cuál es el estándar de seguridad para salas de máquinas?",
    options: ["AHRI-740", "ASHRAE-15", "EPA-740", "ASHRAE-34"],
    correctAnswer: 1,
    explanation:
      "Este estándar regula los requisitos de seguridad para salas de maquinaria de refrigeración.",
    category: "TYPE 3"
  },
  {
    id: 272,
    text: "Todos los cilindros de recuperación refrigerados están aprobados por esta agencia:",
    options: ["ARI", "EPA", "DOT", "OSHA"],
    correctAnswer: 2,
    explanation:
      "Los cilindros de recuperación deben cumplir requisitos de seguridad para el transporte.",
    category: "TYPE 3"
  },
  {
    id: 273,
    text: "Al evacuar refrigerante, debe circularse agua a través de los tubos para evitar:",
    options: [
      "Fugas de agua.",
      "Problemas de aceite.",
      "Fugas de refrigerante.",
      "Que el agua se congele."
    ],
    correctAnswer: 3,
    explanation:
      "La circulación de agua evita la congelación causada por bajas temperaturas durante la evacuación.",
    category: "TYPE 3"
  },
  {
    id: 274,
    text: "¿Cuál de los siguientes tipos de compresores son compresores de accionamiento abierto (open-drive)?",
    options: ["Alternativo", "Scroll", "Tornillo", "Centrífugo"],
    correctAnswer: 0,
    explanation:
      "Los compresores de accionamiento abierto típicamente tienen el motor ubicado fuera de la carcasa del compresor.",
    category: "TYPE 3"
  },
  {
    id: 275,
    text: "Para reparar un chiller R-22, el técnico debe:",
    options: [
      "debe tener una certificación Tipo III.",
      "debe tener una certificación Tipo II.",
      "debe tener una certificación Tipo I.",
      "no necesita una certificación."
    ],
    correctAnswer: 1,
    explanation:
      "Los sistemas con R-22 operan bajo alta presión y requieren la certificación apropiada.",
    category: "TYPE 2"
  },
  {
    id: 276,
    text: "Convierta 5 toneladas de energía en BTU por hora.",
    options: ["70,000", "80,000", "60,000", "50,000"],
    correctAnswer: 2,
    explanation: "Cada tonelada de refrigeración equivale a 12,000 BTU por hora.",
    category: "CORE"
  },
  {
    id: 277,
    text: "¿Qué temperatura debe alcanzarse al retirar aceite de un sistema de baja presión?",
    options: [
      "130 grados F.",
      "50 grados F.",
      "75 grados F.",
      "100 grados F."
    ],
    correctAnswer: 0,
    explanation:
      "Las temperaturas más altas reducen la cantidad de refrigerante atrapado en el aceite.",
    category: "TYPE 3"
  },
  {
    id: 278,
    text: "¿A qué tasa por año puede detectar fugas un detector electrónico de fugas?",
    options: [".5 oz", "1 oz", ".20 oz", ".25 oz"],
    correctAnswer: 3,
    explanation:
      "Los detectores electrónicos de fugas son capaces de detectar tasas anuales de fuga muy pequeñas.",
    category: "CORE"
  },
  {
    id: 279,
    text: "Para equipos de recuperación o reciclaje usados en sistemas de baja presión, el nivel de evacuación requerido por la EPA es:",
    options: [
      "25 mm de Hg absoluto.",
      "30 pulgadas Hg absoluto.",
      "20 pulgadas Hg.",
      "15 pulgadas Hg."
    ],
    correctAnswer: 0,
    explanation:
      "Los sistemas de baja presión requieren evacuación hasta un nivel de vacío profundo.",
    category: "TYPE 3"
  },
  {
    id: 280,
    text: "¿Cuál es el período de tiempo para reparar fugas sustanciales?",
    options: ["20 días", "45 días", "10 días", "30 días"],
    correctAnswer: 3,
    explanation:
      "Las fugas sustanciales deben repararse dentro del marco de tiempo de cumplimiento permitido.",
    category: "CORE"
  },
  {
    id: 281,
    text: "Al cargar un sistema de baja presión, introduzca refrigerante como vapor para elevar la temperatura de saturación del sistema a un mínimo de;",
    options: ["36 grados", "70 grados", "0 grados", "40 grados"],
    correctAnswer: 0,
    explanation:
      "Se requiere una temperatura mínima de saturación antes de agregar refrigerante líquido.",
    category: "TYPE 3"
  },
  {
    id: 282,
    text: "¿Qué porcentaje o más de la carga normal para sistemas de refrigeración industrial y comercial es una fuga sustancial?",
    options: ["30%", "35%", "20%", "25%"],
    correctAnswer: 1,
    explanation:
      "Las fugas en o por encima de este porcentaje se clasifican como sustanciales.",
    category: "CORE"
  },
  {
    id: 283,
    text: "¿Cuál de las siguientes opciones define mejor el proceso de recuperación de refrigerante en sistemas R-123?",
    options: [
      "Hacer funcionar el compresor y solo recuperar refrigerante en estado de vapor.",
      "Comenzar con la remoción de vapor y luego cambiar a recuperación de líquido.",
      "Comenzar con la remoción de líquido y luego cambiar a recuperación de vapor.",
      "Hacer funcionar el compresor y solo recuperar refrigerante en estado líquido."
    ],
    correctAnswer: 2,
    explanation:
      "La recuperación comienza con la remoción del líquido para acelerar el proceso, seguida de la recuperación del vapor.",
    category: "TYPE 3"
  },
  {
    id: 284,
    text: "¿Qué clasificación de seguridad aplica a muchos refrigerantes de reemplazo de próxima generación para R-410A usados en nuevos sistemas de enfriamiento de confort de alta presión?",
    options: ["A3", "B1", "A2L", "A1"],
    correctAnswer: 2,
    explanation:
      "Muchos reemplazos nuevos de R-410A se clasifican como A2L, lo que significa baja toxicidad y ligeramente inflamable.",
    category: "TYPE 2"
  },
  {
    id: 285,
    text: "Verdadero o Falso: Después del cambio de regla de la EPA en 2020, los sistemas de alta presión que usan refrigerantes HFC todavía están obligados a nivel federal a reparar fugas por encima del umbral anual.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 1,
    explanation:
      "Los requisitos de reparación de fugas fueron eliminados para sistemas solo HFC bajo la Sección 608 en 2020.",
    category: "TYPE 2"
  },
  {
    id: 286,
    text: "¿Qué característica del refrigerante es la razón PRINCIPAL de la transición de la industria alejándose del R-410A en sistemas de alta presión?",
    options: [
      "Alta presión de operación",
      "Alto potencial de agotamiento del ozono",
      "Alto potencial de calentamiento global",
      "Baja capacidad de enfriamiento"
    ],
    correctAnswer: 2,
    explanation:
      "El R-410A tiene ODP cero pero un GWP alto, lo cual se está reduciendo gradualmente bajo la ley federal.",
    category: "TYPE 2"
  },
  {
    id: 287,
    text: "Complete la oración: Al dar servicio a un sistema de alta presión que contiene un refrigerante A2L, los técnicos deben asegurar una ______ adecuada para reducir el riesgo de ignición.",
    options: ["Lubricación", "Ventilación", "Subenfriamiento", "Compresión"],
    correctAnswer: 1,
    explanation:
      "Una ventilación adecuada reduce el riesgo de acumulación de refrigerante inflamable.",
    category: "TYPE 2"
  },
  {
    id: 288,
    text: "¿Cuál de los siguientes refrigerantes es un A2L comúnmente usado en equipos nuevos de aire acondicionado de alta presión?",
    options: ["R-22", "R-410A", "R-454B", "R-134a"],
    correctAnswer: 2,
    explanation:
      "El R-454B es un refrigerante A2L desarrollado como un reemplazo de menor GWP para el R-410A.",
    category: "TYPE 2"
  },
  {
    id: 289,
    text: "Verdadero o Falso: La Sección 608 de la EPA requiere una certificación federal separada para dar servicio a refrigerantes A2L en sistemas de alta presión.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 1,
    explanation:
      "No se requiere ninguna certificación federal adicional más allá de la EPA 608.",
    category: "TYPE 2"
  },
  {
    id: 290,
    text: "¿Qué práctica se recomienda al recuperar un refrigerante A2L de un sistema de alta presión?",
    options: [
      "Recuperar sin ventilación",
      "Usar herramientas que produzcan chispas",
      "Asegurar que se eliminen las fuentes de ignición",
      "Aumentar la temperatura del sistema"
    ],
    correctAnswer: 2,
    explanation:
      "Los refrigerantes A2L son ligeramente inflamables y requieren control de ignición.",
    category: "TYPE 2"
  },
  {
    id: 291,
    text: "¿Qué tipo de aceite se usa típicamente con refrigerantes de alta presión basados en HFO?",
    options: [
      "Aceite mineral",
      "Alquilbenceno",
      "Polioléster (POE)",
      "Aceite de silicona"
    ],
    correctAnswer: 2,
    explanation:
      "Los refrigerantes HFO y HFC generalmente son compatibles con aceite POE.",
    category: "TYPE 2"
  },
  { 
    id: 292,
    text: "Verdadero o Falso: Ventear refrigerantes A2L de sistemas de alta presión está permitido porque tienen bajo GWP.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 1,
    explanation:
      "El venteo está prohibido a menos que el refrigerante esté específicamente exento.",
    category: "TYPE 2"
  },
  {
    id: 293,
    text: "¿Qué factor afecta MÁS los procedimientos de recuperación para refrigerantes A2L de alta presión en comparación con refrigerantes A1?",
    options: [
      "Tamaño del sistema",
      "Viscosidad del aceite",
      "Inflamabilidad",
      "Temperatura de operación"
    ],
    correctAnswer: 2,
    explanation:
      "La inflamabilidad leve requiere precauciones de seguridad adicionales durante la recuperación.",
    category: "TYPE 2"
  },
  {
    id: 294,
    text: "¿Qué refrigerante se usa comúnmente en chillers centrífugos de baja presión como un reemplazo de bajo GWP?",
    options: ["R-410A", "R-404A", "R-1233zd(E)", "R-32"],
    correctAnswer: 2,
    explanation:
      "El R-1233zd(E) es un refrigerante de baja presión y bajo GWP usado en chillers.",
    category: "TYPE 3"
  },
  {
    id: 295,
    text: "Verdadero o Falso: Los chillers de baja presión que usan refrigerantes HFO aún requieren recuperación de refrigerante antes de abrir el sistema.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation:
      "La recuperación es obligatoria antes de abrir cualquier sistema de refrigerante no exento.",
    category: "TYPE 3"
  },
  {
    id: 296,
    text: "¿Qué propiedad de los refrigerantes de baja presión incrementa el riesgo de infiltración de aire?",
    options: [
      "Alta temperatura de descarga",
      "Operar por debajo de la presión atmosférica",
      "Alta inflamabilidad",
      "Alta relación de compresión"
    ],
    correctAnswer: 1,
    explanation:
      "Los sistemas de baja presión a menudo operan por debajo de la presión atmosférica.",
    category: "TYPE 3"
  },
  {
    id: 297,
    text: "Complete la oración: En chillers de baja presión, la contaminación por humedad conduce principalmente a la formación de ______.",
    options: ["Dióxido de carbono", "Ácidos", "Espuma de aceite", "No condensables"],
    correctAnswer: 1,
    explanation: "La humedad reacciona con los refrigerantes para formar ácidos.",
    category: "TYPE 3"
  },
  {
    id: 298,
    text: "¿Qué clasificación de seguridad de refrigerantes es común para muchos refrigerantes de chillers de baja presión?",
    options: ["A3", "A2L", "A1", "B2"],
    correctAnswer: 2,
    explanation:
      "Muchos refrigerantes de baja presión no son inflamables y se clasifican como A1.",
    category: "TYPE 3"
  },
  {
    id: 299,
    text: "Verdadero o Falso: La Ley AIM ha incrementado el uso de refrigerantes de bajo GWP en nuevos chillers de baja presión.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 0,
    explanation: "La Ley AIM impulsa la adopción de alternativas de menor GWP.",
    category: "TYPE 3"
  },
  {
    id: 300,
    text: "¿Qué dispositivo se usa comúnmente para eliminar aire y humedad de chillers de baja presión durante la operación?",
    options: [
      "Válvula de expansión termostática",
      "Bomba de evacuación",
      "Unidad de purga",
      "Receptor"
    ],
    correctAnswer: 2,
    explanation: "Las unidades de purga eliminan no condensables y humedad.",
    category: "TYPE 3"
  },
  {
    id: 301,
    text: "¿Qué condición indica MÁS una fuga en un sistema de chiller de baja presión?",
    options: [
      "Alta presión del condensador",
      "Bajo nivel de aceite",
      "Presencia de aire o humedad",
      "Sobrecalentamiento reducido"
    ],
    correctAnswer: 2,
    explanation: "Las fugas permiten que aire y humedad entren a sistemas de baja presión.",
    category: "TYPE 3"
  },
  {
    id: 302,
    text: "Verdadero o Falso: Ventear refrigerantes de chillers de baja presión está permitido si el refrigerante tiene ODP cero.",
    options: ["Verdadero", "Falso"],
    correctAnswer: 1,
    explanation: "ODP cero no significa que el venteo esté permitido.",
    category: "TYPE 3"
  },
  {
    id: 303,
    text: "¿Qué factor ambiental se mejora MÁS al reemplazar R-11 o R-123 por refrigerantes HFO modernos en chillers?",
    options: [
      "Eficiencia energética",
      "Presión del sistema",
      "Potencial de agotamiento del ozono",
      "Potencial de calentamiento global"
    ],
    correctAnswer: 3,
    explanation: "Los refrigerantes HFO modernos reducen significativamente el GWP.",
    category: "TYPE 3"
  }



];
