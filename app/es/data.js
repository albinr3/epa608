// Las preguntas pueden incluir opcionalmente un campo "image" con una ruta relativa a la carpeta public
// Ejemplo: "image": "/quiz-images/pregunta-0.jpg"
// Si el campo image está presente, se mostrará encima del texto de la pregunta
export const questions = [
  
    {
      "id": 0,
      "text": "¿Qué capa de la atmósfera contiene aproximadamente el 90% del ozono terrestre que ayuda a proteger contra la radiación UV-B dañina?",
      "options": [
        "Termosfera",
        "Estratosfera",
        "Mesosfera",
        "Troposfera"
      ],
      "correctAnswer": 1,
      "explanation": "La mayor parte del ozono protector del planeta se encuentra en la estratosfera, por encima de la troposfera.",
      "category": "CORE"
    },
    {
      "id": 1,
      "text": "Según la teoría de Rowland-Molina, ¿aproximadamente cuántas moléculas de ozono puede destruir un solo átomo de cloro en la estratosfera?",
      "options": [
        "100",
        "10,000",
        "100,000",
        "1,000"
      ],
      "correctAnswer": 2,
      "explanation": "Un solo átomo de cloro puede destruir ozono catalíticamente de forma repetida, con una estimación de aproximadamente 100,000 moléculas de ozono por átomo de cloro.",
      "category": "CORE"
    },
    {
      "id": 2,
      "text": "¿Qué elemento se describe como aún más dañino para la capa de ozono estratosférica que el cloro?",
      "options": [
        "Oxígeno",
        "Nitrógeno",
        "Hidrógeno",
        "Bromo"
      ],
      "correctAnswer": 3,
      "explanation": "Los refrigerantes que contienen bromo se destacan como especialmente dañinos para el ozono estratosférico, aún más que el cloro.",
      "category": "CORE"
    },
    {
      "id": 3,
      "text": "¿Qué tratado internacional de 1987 abordó las sustancias que agotan la capa de ozono y solicitó la eliminación gradual de ciertos CFC, HCFC y halones?",
      "options": [
        "El Protocolo de Kioto",
        "Las Enmiendas a la Ley de Aire Limpio de 1990",
        "El Acuerdo de París",
        "El Protocolo de Montreal"
      ],
      "correctAnswer": 3,
      "explanation": "El Protocolo de Montreal (firmado en 1987) es un tratado internacional centrado en las sustancias que agotan la capa de ozono y sus alternativas.",
      "category": "CORE"
    },
    {
      "id": 4,
      "text": "¿Qué declaración describe mejor lo que sucedió en 2010 con respecto al HCFC-22 y HCFC-142b en los EE.UU.?",
      "options": [
        "Se permitió todo el uso de HCFC en equipos nuevos siempre que se realizaran pruebas de fugas.",
        "Solo se restringieron los CFC; el HCFC-22 y el HCFC-142b no tenían restricciones.",
        "El HCFC-22 solo podía usarse en electrodomésticos recién fabricados, no para servicio.",
        "Se prohibió la producción, venta o importación de nuevos sistemas que usaran HCFC-22 o HCFC-142b (o mezclas que los contengan)."
      ],
      "correctAnswer": 3,
      "explanation": "Las reglas implementadas en 2010 restringieron los equipos nuevos que usan HCFC-22/HCFC-142b y limitaron estos refrigerantes al servicio de equipos existentes.",
      "category": "CORE"
    },
    {
      "id": 5,
      "text": "¿Qué prohibió la Regla de Electrodomésticos Precargados para productos fabricados en o después de 2010?",
      "options": [
        "El uso de HFC-410A en acondicionadores de aire residenciales",
        "La recuperación de refrigerantes durante el servicio",
        "La venta o distribución de productos y componentes de AC/R precargados que contengan HCFC-22 o HCFC-142b (o mezclas que los contengan)",
        "La venta de cualquier refrigerante con un GWP inferior a 150"
      ],
      "correctAnswer": 2,
      "explanation": "La regla se dirigió a productos/componentes precargados que contenían HCFC-22 o HCFC-142b (o mezclas) si se fabricaron en o después de 2010.",
      "category": "CORE"
    },
    {
      "id": 6,
      "text": "¿Qué prohibió la Regla de Asignación (junto con los requisitos existentes de la EPA) con respecto a los electrodomésticos recién fabricados?",
      "options": [
        "Cargar electrodomésticos recién fabricados con HCFC-22 o HCFC-142b virgen (o mezclas que los contengan)",
        "Vender cualquier refrigerante en cilindros desechables",
        "Usar refrigerante recuperado en sistemas existentes",
        "Reacondicionamiento de cualquier equipo a mezclas de menor GWP"
      ],
      "correctAnswer": 0,
      "explanation": "Prohibió cargar electrodomésticos recién fabricados con HCFC-22/HCFC-142b virgen, incluida la práctica de cargar un sistema cargado en seco con estos refrigerantes.",
      "category": "CORE"
    },
    {
      "id": 7,
      "text": "A partir del 1 de enero de 2020, ¿qué restricción importante se aplicó a los refrigerantes HCFC?",
      "options": [
        "Se prohibió la producción o importación de cualquier refrigerante HCFC; solo se podían usar HCFC recuperados o regenerados en equipos existentes.",
        "Todos los HCFC volvieron a ser legales para equipos nuevos.",
        "Solo se prohibió la producción o importación de HFC.",
        "Los HCFC podían ventilarse porque su ODP es bajo."
      ],
      "correctAnswer": 0,
      "explanation": "Después del 1 de enero de 2020, se prohibió la producción/importación de HCFC, y los equipos existentes solo podían usar HCFC recuperados/regenerados.",
      "category": "CORE"
    },
    {
      "id": 8,
      "text": "¿Qué combinación coincide mejor con el requisito de recuperación descrito para los técnicos en los Estados Unidos?",
      "options": [
        "Recuperar solo refrigerantes con ODP = 0 y GWP < 1.",
        "Recuperar solo refrigerantes de hidrocarburos porque son inflamables.",
        "Recuperar refrigerantes con ODP > 0 y GWP > 1 (mayor que el dióxido de carbono).",
        "Recuperar solo refrigerantes con ODP > 1 independientemente del GWP."
      ],
      "correctAnswer": 2,
      "explanation": "El requisito descrito se aplica a refrigerantes con potencial de agotamiento del ozono por encima de cero y potencial de calentamiento global superior al dióxido de carbono (mayor que 1).",
      "category": "CORE"
    },
    {
      "id": 9,
      "text": "En la terminología de seguridad de ASHRAE, ¿qué indica una clasificación A2L para ciertos refrigerantes?",
      "options": [
        "No inflamable y altamente tóxico",
        "Alta inflamabilidad equivalente a los hidrocarburos A3",
        "Menor inflamabilidad con una velocidad máxima de combustión inferior a 4 pulgadas por segundo",
        "Alta toxicidad y alta inflamabilidad"
      ],
      "correctAnswer": 2,
      "explanation": "A2L indica menor inflamabilidad (incluso menor que A2 típico) y se define aquí por una velocidad máxima de combustión inferior a 4 pulgadas por segundo.",
      "category": "CORE"
    },
    {
      "id": 10,
      "text": "¿Qué enfatizaron las enmiendas de 1990 a la Ley de Aire Limpio además de expandir la autoridad de la EPA?",
      "options": [
        "Eliminar inmediatamente todos los refrigerantes de alto GWP",
        "Eliminar la autoridad de la EPA sobre la aplicación",
        "Enfoques más rentables para reducir la contaminación del aire",
        "Permitir la ventilación sin restricciones de refrigerantes"
      ],
      "correctAnswer": 2,
      "explanation": "Las enmiendas de 1990 expandieron la autoridad de la EPA y aumentaron el énfasis en enfoques rentables para reducir las emisiones.",
      "category": "CORE"
    },
    {
      "id": 11,
      "text": "Según el programa de la Ley de Aire Limpio descrito, ¿qué se ordenó que eliminara la EPA?",
      "options": [
        "Refrigerantes que agotan la capa de ozono",
        "Todos los refrigerantes con GWP por encima de 150",
        "Solo refrigerantes de hidrocarburos",
        "Todos los refrigerantes, incluidos los gases exentos como el CO2"
      ],
      "correctAnswer": 0,
      "explanation": "El mandato se centró en eliminar los refrigerantes que agotan la capa de ozono, no en requerir la eliminación de refrigerantes de alto GWP.",
      "category": "CORE"
    },
  
    {
      "id": 12,
      "text": "¿Qué sustancias se agregaron a la lista de productos químicos controlados bajo el Protocolo de Montreal en la Cuarta Reunión en 1992 (según lo descrito)?",
      "options": [
        "HFC y PFC",
        "HCFC y bromuro de metilo",
        "Refrigerantes naturales como el CO2",
        "Refrigerantes A2L solamente"
      ],
      "correctAnswer": 1,
      "explanation": "Los HCFC y el bromuro de metilo se agregaron en 1992 a la lista de sustancias controladas bajo el Protocolo de Montreal.",
      "category": "CORE"
    },
    {
      "id": 13,
      "text": "¿Cuál de los siguientes refrigerantes tiene el potencial de agotamiento del ozono (ODP) más alto?",
      "options": [
        "R-410A (un HFC)",
        "R-134a (un HFC)",
        "R-12 (un CFC)",
        "R-744 (CO2)"
      ],
      "correctAnswer": 2,
      "explanation": "R-12 es un CFC y tiene un ODP significativo, mientras que R-410A y R-134a (ambos HFC) tienen ODP de cero, y R-744 es un refrigerante natural con ODP cero.",
      "category": "CORE"
    },
    {
      "id": 14,
      "text": "¿Cuál es una de las principales razones por las que las regulaciones de la EPA requieren la recuperación de refrigerantes durante el servicio y eliminación de equipos?",
      "options": [
        "Para cumplir con los objetivos de reducción de los GEI del Acuerdo de París",
        "Para proteger la capa de ozono estratosférica y minimizar las emisiones de GEI",
        "Para aumentar los ingresos de la EPA",
        "Para garantizar que los técnicos usen solo cilindros desechables"
      ],
      "correctAnswer": 1,
      "explanation": "La recuperación de refrigerantes es obligatoria para proteger la capa de ozono y reducir las emisiones de gases de efecto invernadero.",
      "category": "CORE"
    },
    {
      "id": 15,
      "text": "¿Cuál de las siguientes opciones describe mejor el 'potencial de calentamiento global' (GWP) de un refrigerante?",
      "options": [
        "La capacidad del refrigerante para destruir ozono en la estratosfera",
        "La eficiencia energética del refrigerante cuando se usa en un sistema",
        "Una medida de cuánto calienta el refrigerante la atmósfera en comparación con el dióxido de carbono durante un período de tiempo determinado",
        "La temperatura máxima que puede alcanzar un refrigerante"
      ],
      "correctAnswer": 2,
      "explanation": "El GWP mide el impacto del calentamiento de un refrigerante en relación con el CO2 durante un período específico (generalmente 100 años).",
      "category": "CORE"
    },
    {
      "id": 16,
      "text": "¿Qué afirmación es cierta sobre la Enmienda de Kigali al Protocolo de Montreal?",
      "options": [
        "Se centra en eliminar gradualmente los refrigerantes naturales como el CO2 y el amoníaco",
        "Requiere que todos los países eliminen los HFC inmediatamente",
        "Tiene como objetivo reducir gradualmente la producción y el consumo de HFC para reducir las emisiones de GEI",
        "Aumenta la producción permitida de CFC y halones"
      ],
      "correctAnswer": 2,
      "explanation": "La Enmienda de Kigali (2016) se dirige a los HFC para reducir su contribución al calentamiento global, aunque no agotan la capa de ozono.",
      "category": "CORE"
    },
    {
      "id": 17,
      "text": "¿Por qué se consideran preferibles los refrigerantes de bajo GWP según las regulaciones modernas?",
      "options": [
        "Tienen una mayor eficiencia energética en todos los sistemas",
        "Minimizan el impacto del calentamiento global si se liberan a la atmósfera",
        "Son más baratos de producir que los refrigerantes de alto GWP",
        "Tienen una vida útil más corta en la atmósfera en todos los casos"
      ],
      "correctAnswer": 1,
      "explanation": "Los refrigerantes de bajo GWP reducen el impacto del cambio climático porque calientan menos la atmósfera que los refrigerantes de alto GWP cuando se emiten.",
      "category": "CORE"
    },
    {
      "id": 18,
      "text": "¿Cuál de los siguientes refrigerantes se clasifica como HFC?",
      "options": [
        "R-22",
        "R-12",
        "R-410A",
        "R-717 (amoníaco)"
      ],
      "correctAnswer": 2,
      "explanation": "R-410A es un hidrofluorocarbono (HFC). R-22 es un HCFC, R-12 es un CFC y R-717 es un refrigerante natural.",
      "category": "CORE"
    },
    {
      "id": 19,
      "text": "Si un sistema contiene R-404A, ¿qué tipo de refrigerante es?",
      "options": [
        "Un CFC",
        "Un HCFC",
        "Un HFC",
        "Un refrigerante natural"
      ],
      "correctAnswer": 2,
      "explanation": "R-404A es una mezcla HFC. No tiene potencial de agotamiento del ozono, pero tiene un alto GWP.",
      "category": "CORE"
    },
    {
      "id": 20,
      "text": "¿Cuál es el propósito principal del sistema de numeración de refrigerantes de la serie 400 (por ejemplo, R-404A, R-407C)?",
      "options": [
        "Indicar que todos son refrigerantes naturales",
        "Identificarlos como mezclas zeotrópicas o casi azeotrópicas",
        "Mostrar que todos tienen un GWP inferior a 150",
        "Señalar que son hidrocarburos puros"
      ],
      "correctAnswer": 1,
      "explanation": "Los refrigerantes de la serie 400 son mezclas (zeotrópicas o casi azeotrópicas) de diferentes compuestos, generalmente HFC.",
      "category": "CORE"
    },
    {
      "id": 21,
      "text": "¿Qué identifica la letra 'L' en la clasificación de seguridad de refrigerantes de ASHRAE (por ejemplo, A2L)?",
      "options": [
        "Baja toxicidad",
        "Baja presión",
        "Menor inflamabilidad",
        "Bajo GWP"
      ],
      "correctAnswer": 2,
      "explanation": "En ASHRAE Standard 34, 'L' significa menor inflamabilidad; la 'A' se refiere a baja toxicidad y el número indica el nivel de inflamabilidad.",
      "category": "CORE"
    },
    {
      "id": 22,
      "text": "¿Cuál de las siguientes afirmaciones sobre el amoníaco (R-717) es correcta?",
      "options": [
        "Es un HFC con bajo GWP",
        "Es tóxico, inflamable y se usa comúnmente en refrigeración industrial",
        "Tiene un alto ODP y está prohibido en nuevos sistemas",
        "Es un refrigerante sintético desarrollado en la década de 1990"
      ],
      "correctAnswer": 1,
      "explanation": "El amoníaco es un refrigerante natural con ODP cero y GWP bajo, pero es tóxico e inflamable, por lo que se usa principalmente en aplicaciones industriales.",
      "category": "CORE"
    },
    {
      "id": 23,
      "text": "¿Por qué los refrigerantes como el CO2 (R-744) se consideran amigables con el medio ambiente?",
      "options": [
        "Tienen ODP alto pero GWP bajo",
        "Tienen ODP cero y GWP muy bajo (1)",
        "No requieren equipo de recuperación",
        "Pueden ventilarse libremente sin restricciones regulatorias"
      ],
      "correctAnswer": 1,
      "explanation": "El CO2 es un refrigerante natural con ODP cero y un GWP de 1 (la línea de base de referencia), lo que lo hace ecológico. Sin embargo, aún debe manejarse adecuadamente.",
      "category": "CORE"
    },
    {
      "id": 24,
      "text": "¿Qué característica del R-410A lo convierte en un refrigerante común en sistemas residenciales y comerciales ligeros modernos?",
      "options": [
        "Tiene un ODP muy bajo",
        "Tiene ODP cero y mejor eficiencia que el R-22 en muchas aplicaciones",
        "Es un refrigerante natural como el propano",
        "Tiene un GWP inferior a 150"
      ],
      "correctAnswer": 1,
      "explanation": "R-410A es un HFC (ODP cero) que ofrece buena eficiencia, aunque su GWP es alto (~2088), lo que impulsa la transición a alternativas de menor GWP.",
      "category": "CORE"
    },
    {
      "id": 25,
      "text": "¿Cuál de los siguientes es verdadero sobre las mezclas zeotrópicas (serie 400)?",
      "options": [
        "Se comportan como sustancias puras en todas las condiciones",
        "Pueden experimentar deslizamiento de temperatura (temperature glide) y fraccionamiento",
        "Nunca requieren carga de líquido",
        "Todos tienen GWP cero"
      ],
      "correctAnswer": 1,
      "explanation": "Las mezclas zeotrópicas tienen diferentes puntos de ebullición de sus componentes, lo que resulta en deslizamiento de temperatura y posible fraccionamiento durante fugas o carga incorrecta.",
      "category": "CORE"
    },
    {
      "id": 26,
      "text": "¿Qué afirmación describe mejor los lubricantes de polioléster (POE) utilizados con refrigerantes HFC?",
      "options": [
        "Son menos higroscópicos que los aceites minerales",
        "Son altamente higroscópicos y requieren un manejo cuidadoso para evitar la absorción de humedad",
        "No se pueden usar con ningún refrigerante HFC",
        "Son idénticos a los aceites minerales en todas las propiedades"
      ],
      "correctAnswer": 1,
      "explanation": "Los aceites POE son higroscópicos (absorben humedad fácilmente), lo que requiere almacenamiento y manejo cuidadosos para evitar la contaminación por humedad.",
      "category": "CORE"
    },
    {
      "id": 27,
      "text": "¿Por qué es importante llenar los cilindros de refrigerante con líquido solo hasta el 80% de su capacidad?",
      "options": [
        "Para facilitar la carga de vapor",
        "Para prevenir la sobrepresión hidrostática si la temperatura aumenta",
        "Para cumplir con las regulaciones de bajo GWP",
        "Para reducir el costo de envío"
      ],
      "correctAnswer": 1,
      "explanation": "Llenar solo hasta el 80% deja espacio para la expansión térmica del líquido; llenar en exceso puede causar presión hidrostática peligrosa.",
      "category": "CORE"
    },
    {
      "id": 28,
      "text": "¿Cuál es el propósito de usar una bomba de vacío al dar servicio a sistemas de refrigeración y aire acondicionado?",
      "options": [
        "Para cargar refrigerante en el sistema",
        "Para eliminar el aire, la humedad y los no condensables del sistema",
        "Para aumentar el punto de ebullición del refrigerante",
        "Para reducir el GWP del refrigerante"
      ],
      "correctAnswer": 1,
      "explanation": "La evacuación con bomba de vacío elimina el aire, la humedad y los no condensables que pueden afectar el rendimiento y la vida útil del sistema.",
      "category": "CORE"
    },
    {
      "id": 29,
      "text": "¿Qué método se prefiere para cargar mezclas zeotrópicas (serie 400) en un sistema?",
      "options": [
        "Carga de vapor únicamente",
        "Carga de líquido para evitar el fraccionamiento",
        "Carga a través del lado de succión como vapor",
        "Mezclar con un CFC primero, luego cargar"
      ],
      "correctAnswer": 1,
      "explanation": "La carga de líquido es preferible para las mezclas zeotrópicas para mantener la composición correcta de la mezcla y evitar el fraccionamiento.",
      "category": "CORE"
    },
    {
      "id": 30,
      "text": "¿Cuál de las siguientes afirmaciones sobre los refrigerantes inflamables (A2L o A3) es correcta?",
      "options": [
        "Nunca requieren precauciones especiales",
        "Deben manejarse de acuerdo con códigos y estándares de seguridad, incluidos el control de fuentes de ignición y la ventilación adecuada",
        "Pueden mezclarse libremente con refrigerantes no inflamables",
        "Están prohibidos en todos los sistemas de refrigeración"
      ],
      "correctAnswer": 1,
      "explanation": "Los refrigerantes inflamables requieren precauciones especiales de seguridad, incluyendo ventilación, eliminación de fuentes de ignición y cumplimiento de códigos como ASHRAE 15.",
      "category": "CORE"
    },
    {
      "id": 31,
      "text": "¿Por qué es importante usar el lubricante correcto con un tipo particular de refrigerante?",
      "options": [
        "Para garantizar la compatibilidad, el retorno de aceite adecuado y proteger los componentes del compresor",
        "Para aumentar el GWP del refrigerante",
        "Para cumplir solo con las regulaciones de la EPA sobre ODP",
        "Para permitir que el refrigerante se ventile sin penalización"
      ],
      "correctAnswer": 0,
      "explanation": "El aceite correcto asegura la lubricación adecuada del compresor, compatibilidad química con el refrigerante y retorno de aceite, previniendo fallos del sistema.",
      "category": "CORE"
    },
    {
      "id": 32,
      "text": "Si un sistema tiene una fuga y pierde refrigerante, ¿cuál es el primer paso apropiado?",
      "options": [
        "Recargar el refrigerante inmediatamente sin reparar la fuga",
        "Ventar el refrigerante restante para facilitar la reparación",
        "Localizar y reparar la fuga antes de recargar",
        "Cambiar a un refrigerante diferente sin reparar la fuga"
      ],
      "correctAnswer": 2,
      "explanation": "Las regulaciones y mejores prácticas requieren encontrar y reparar fugas antes de recargar, para prevenir emisiones continuas y desperdicios.",
      "category": "CORE"
    },
    {
      "id": 33,
      "text": "¿Qué es un 'retrofit' de refrigerante?",
      "options": [
        "Eliminar el refrigerante del sistema sin reemplazo",
        "Reemplazar el refrigerante existente con un refrigerante alternativo diferente, a menudo con modificaciones del sistema",
        "Instalar un nuevo compresor sin cambiar el refrigerante",
        "Llenar en exceso el sistema con el mismo refrigerante"
      ],
      "correctAnswer": 1,
      "explanation": "Un retrofit implica cambiar a un refrigerante diferente, lo que generalmente requiere cambios de aceite, ajustes del sistema y documentación adecuada.",
      "category": "CORE"
    },
    {
      "id": 34,
      "text": "¿Cuál de los siguientes refrigerantes es conocido por tener un GWP muy alto (>3000)?",
      "options": [
        "R-134a",
        "R-410A",
        "R-404A",
        "R-744"
      ],
      "correctAnswer": 2,
      "explanation": "R-404A tiene un GWP muy alto (~3922), lo que impulsa su eliminación gradual en favor de alternativas de menor GWP.",
      "category": "CORE"
    },
    {
      "id": 35,
      "text": "¿Por qué se evita mezclar diferentes tipos de refrigerantes en un sistema?",
      "options": [
        "Puede causar reacciones químicas peligrosas, rendimiento deficiente del sistema y contaminación del refrigerante",
        "Aumenta la eficiencia energética del sistema",
        "Es requerido por las regulaciones de la EPA para todos los refrigerantes",
        "Reduce el costo del servicio"
      ],
      "correctAnswer": 0,
      "explanation": "Mezclar refrigerantes incompatibles puede causar problemas de rendimiento, daños al equipo y crear mezclas de desecho que deben desecharse, no reutilizarse.",
      "category": "CORE"
    },
    {
      "id": 36,
      "text": "¿Cuál es el objetivo principal de las técnicas de recuperación, reciclaje y regeneración de refrigerantes?",
      "options": [
        "Aumentar el costo del servicio de refrigerantes",
        "Reducir las emisiones, conservar refrigerantes y proteger el medio ambiente",
        "Reemplazar todos los refrigerantes con propano",
        "Eliminar completamente la necesidad de recuperación de refrigerantes"
      ],
      "correctAnswer": 1,
      "explanation": "La recuperación, el reciclaje y la regeneración minimizan las emisiones, conservan recursos y protegen la atmósfera al prevenir la liberación de refrigerantes.",
      "category": "CORE"
    },
    {
      "id": 37,
      "text": "¿Qué es una 'fuga de alta presión' en un sistema de refrigeración?",
      "options": [
        "Una fuga donde la presión del sistema es mayor que la presión atmosférica, empujando el refrigerante hacia afuera",
        "Una fuga donde la presión del sistema es menor que la presión atmosférica, aspirando aire hacia adentro",
        "Una fuga que solo ocurre durante el ciclo de descongelación",
        "Una fuga que es siempre aceptable bajo las regulaciones de la EPA"
      ],
      "correctAnswer": 0,
      "explanation": "Una fuga de alta presión ocurre cuando la presión interna excede la presión atmosférica, causando que el refrigerante escape al ambiente.",
      "category": "CORE"
    },
    {
      "id": 38,
      "text": "¿Qué método de detección de fugas implica usar una solución de agua jabonosa aplicada a conexiones y juntas?",
      "options": [
        "Detección de fugas con detector electrónico",
        "Detección de fugas con colorante ultravioleta",
        "Detección de fugas con agua jabonosa (burbujas)",
        "Detección de fugas ultrasónica"
      ],
      "correctAnswer": 2,
      "explanation": "El método de agua jabonosa muestra burbujas en el sitio de una fuga y es un método simple y efectivo para localizar fugas visualmente.",
      "category": "CORE"
    },
    {
      "id": 39,
      "text": "¿Cuándo es apropiado para un técnico ventilar (liberar) refrigerante intencionalmente a la atmósfera?",
      "options": [
        "Cuando el refrigerante es un HFC con bajo GWP",
        "Cuando el cilindro de recuperación está lleno",
        "Nunca; las regulaciones de la EPA prohíben la ventilación intencional de refrigerantes cubiertos",
        "Siempre que sea un refrigerante natural como CO2 o amoníaco"
      ],
      "correctAnswer": 2,
      "explanation": "La EPA prohíbe la ventilación intencional de refrigerantes con ODP>0 o GWP>1 durante el servicio, mantenimiento o eliminación.",
      "category": "CORE"
    },
    {
      "id": 40,
      "text": "¿Qué información debe etiquetarse claramente en un cilindro de recuperación de refrigerante?",
      "options": [
        "Solo el nombre del propietario",
        "El tipo de refrigerante contenido, fechas y advertencias de seguridad aplicables",
        "Solo el peso del cilindro",
        "Ninguna etiqueta es requerida por las regulaciones"
      ],
      "correctAnswer": 1,
      "explanation": "Los cilindros de recuperación deben etiquetarse con el tipo de refrigerante, fechas y cualquier información de seguridad relevante para prevenir contaminación y uso indebido.",
      "category": "CORE"
    },
    {
      "id": 41,
      "text": "¿Cuál es una característica del refrigerante 'reclamado' en comparación con el refrigerante 'reciclado'?",
      "options": [
        "El refrigerante reclamado ha sido procesado solo con filtros secadores",
        "El refrigerante reclamado ha sido analizado químicamente para cumplir con los estándares de pureza AHRI 700",
        "El refrigerante reciclado siempre es más puro que el reclamado",
        "No hay diferencia entre reclamado y reciclado"
      ],
      "correctAnswer": 1,
      "explanation": "El refrigerante reclamado se procesa y analiza para cumplir con las especificaciones de producto nuevo (AHRI 700), mientras que el reciclado solo se limpia sin pruebas de pureza.",
      "category": "CORE"
    },
    {
      "id": 42,
      "text": "El refrigerante recuperado puede devolverse sin restricción a:",
      "options": [
        "Solo al mismo sistema del que provino y nunca a ningún otro",
        "Cualquier sistema propiedad de un cliente diferente si no se vende",
        "El mismo sistema u otro sistema propiedad de la misma persona",
        "Cualquier sistema siempre que el refrigerante se filtre una vez"
      ],
      "correctAnswer": 2,
      "explanation": "El refrigerante recuperado puede usarse en el mismo sistema u otros sistemas propiedad de la misma persona, pero la transferencia de propiedad está restringida a menos que el refrigerante sea regenerado.",
      "category": "CORE"
    },
    {
      "id": 43,
      "text": "Si se envía refrigerante recuperado para eliminación o a una instalación de regeneración, ¿qué tipo de recipiente se requiere?",
      "options": [
        "Cualquier cilindro de refrigerante desechable",
        "Un cilindro de recuperación aprobado por DOT",
        "Un contenedor de vidrio con clasificación de vacío",
        "Un contenedor de plástico no presurizado"
      ],
      "correctAnswer": 1,
      "explanation": "Para eliminación o envío a regeneración, el refrigerante recuperado debe almacenarse en un cilindro de recuperación aprobado por DOT.",
      "category": "CORE"
    },
    {
      "id": 44,
      "text": "Un cilindro de recuperación aprobado por DOT se identifica comúnmente por qué esquema de color?",
      "options": [
        "Cuerpo gris con parte superior amarilla",
        "Cuerpo verde con parte superior gris",
        "Cuerpo rojo con parte superior negra",
        "Cuerpo azul con parte superior blanca"
      ],
      "correctAnswer": 0,
      "explanation": "Los cilindros de recuperación aprobados por DOT están pintados de gris con la parte superior amarilla.",
      "category": "CORE",
      "image": "/public/quiz-images/44.png"
    },
    {
      "id": 45,
      "text": "¿Qué declaración describe mejor el 'reciclaje' de refrigerante?",
      "options": [
        "Almacenar refrigerante sin ningún procesamiento",
        "Limpieza para reutilización inmediata mediante separación de aceite y filtros secadores que reducen la humedad y acidez",
        "Destruir refrigerante contaminado mediante incineración controlada",
        "Verificar la pureza mediante análisis químico para cumplir con AHRI 700"
      ],
      "correctAnswer": 1,
      "explanation": "El reciclaje típicamente implica separación de aceite y uno o más pases a través de filtros secadores para reducir la humedad y acidez para su reutilización.",
      "category": "CORE"
    },
    {
      "id": 46,
      "text": "¿Por qué se considera crítica la separación de aceite durante el reciclaje?",
      "options": [
        "El aceite asegura que el refrigerante cumpla con AHRI 700 sin análisis",
        "El aceite aumenta la densidad del refrigerante y acelera la recuperación",
        "El aceite contiene gran parte del ácido y agua presente en el sistema",
        "El aceite previene el fraccionamiento en refrigerantes mezclados"
      ],
      "correctAnswer": 2,
      "explanation": "El aceite contaminado retiene la mayor parte del ácido y agua; no eliminarlo conduce a una limpieza deficiente y contaminación continua.",
      "category": "CORE"
    },
    {
      "id": 47,
      "text": "¿Qué afirmación es verdadera sobre los estándares de pureza del refrigerante reciclado?",
      "options": [
        "El refrigerante reciclado debe analizarse químicamente para certificación de pureza",
        "No hay estándares definidos para qué tan limpio debe estar el refrigerante reciclado para ser llamado reciclado",
        "El refrigerante reciclado debe destruirse si se filtró solo una vez",
        "El refrigerante reciclado siempre debe cumplir con AHRI 700"
      ],
      "correctAnswer": 1,
      "explanation": "El reciclaje no tiene requisito de estándar de pureza específico; el proceso puede incluir pases individuales o múltiples a través de dispositivos de limpieza.",
      "category": "CORE"
    },
    {
      "id": 48,
      "text": "¿Qué condición debe cumplirse para que el refrigerante sea llamado 'regenerado'?",
      "options": [
        "Debe devolverse solo al sistema original",
        "Debe mezclarse con refrigerante virgen para mejorar la pureza",
        "Debe analizarse químicamente y demostrarse que cumple con el estándar de pureza AHRI 700",
        "Debe pasarse a través de un solo filtro secador"
      ],
      "correctAnswer": 2,
      "explanation": "El refrigerante regenerado requiere análisis químico verificando que cumple con la pureza de producto nuevo AHRI 700.",
      "category": "CORE"
    },
    {
      "id": 49,
      "text": "¿Qué declaración describe correctamente las reglas de transferencia de propiedad para refrigerante usado?",
      "options": [
        "El refrigerante recuperado siempre puede venderse si se almacenó en un cilindro de recuperación",
        "El refrigerante recuperado y reciclado puede transferirse libremente si está etiquetado",
        "El refrigerante reciclado puede regalarse a cualquier técnico para su reutilización",
        "Solo el refrigerante regenerado puede transferirse o venderse a otra persona"
      ],
      "correctAnswer": 3,
      "explanation": "El refrigerante recuperado o reciclado no puede transferirse a otro propietario excepto para regeneración o destrucción; solo el refrigerante regenerado puede venderse/transferirse para uso.",
      "category": "CORE"
    },
    {
      "id": 50,
      "text": "¿Qué práctica aborda con mayor precisión una preocupación de garantía del sistema?",
      "options": [
        "Evitar el refrigerante regenerado porque puede invalidar garantías",
        "Usar refrigerante nuevo virgen o regenerado para sistemas grandes bajo garantía",
        "Mezclar refrigerante reciclado y recuperado para mejorar la limpieza",
        "Usar refrigerante reciclado porque tiene las pruebas de pureza más estrictas"
      ],
      "correctAnswer": 1,
      "explanation": "El refrigerante regenerado cumple con las especificaciones de pureza nuevas, mientras que el refrigerante reciclado no tiene prueba de pureza; usar refrigerante virgen o regenerado es más seguro para la protección de garantía.",
      "category": "CORE"
    },
    {
      "id": 51,
      "text": "Si el refrigerante se usará en equipo propiedad de alguien distinto al propietario original, ¿qué debe hacerse primero?",
      "options": [
        "El refrigerante debe cargarse en vapor en el nuevo sistema",
        "El refrigerante solo necesita reciclarse una vez",
        "El refrigerante puede transferirse si está en un cilindro gris/amarillo",
        "El refrigerante debe regenerarse"
      ],
      "correctAnswer": 3,
      "explanation": "El uso en equipo propiedad de una persona diferente requiere que el refrigerante sea regenerado; la propiedad de refrigerante recuperado/reciclado no puede transferirse para reutilización directa.",
      "category": "CORE"
    },
    {
      "id": 52,
      "text": "Si se encuentra que un sistema R-22 contiene R-410A agregado, ¿cuál es el manejo correcto de la mezcla recuperada?",
      "options": [
        "Ventilarlo porque el refrigerante mezclado está exento de las reglas de recuperación",
        "Recuperarlo en un cilindro R-22 y enviarlo a un regenerador para restaurarlo a AHRI 700",
        "Recuperarlo en un tanque dedicado y enviarlo a una instalación aprobada por la EPA para eliminación (típicamente incineración controlada)",
        "Reciclarlo en el sitio y reutilizarlo en otro sistema R-22 propiedad de la misma persona"
      ],
      "correctAnswer": 2,
      "explanation": "Una mezcla contaminada de R-22/R-410A no puede reutilizarse ni regenerarse; debe recuperarse en un tanque separado y enviarse para eliminación aprobada por la EPA.",
      "category": "CORE"
    },
    {
      "id": 53,
      "text": "¿Qué factor puede hacer que la identificación del refrigerante por presión-temperatura no sea confiable, especialmente para mezclas de la serie 400?",
      "options": [
        "Usar mangueras cortas con conexiones de abocinado de 1/4 de pulgada",
        "Fraccionamiento causado por fugas o carga de vapor cambiando el comportamiento de presión-temperatura de la mezcla",
        "Usar un cilindro de recuperación con cierre de flotador al 80% de llenado",
        "Etiquetar el contenido del cilindro según los requisitos del DOT"
      ],
      "correctAnswer": 1,
      "explanation": "Las mezclas no azeotrópicas (serie 400) pueden fraccionarse durante fugas o carga de vapor inadecuada, cambiando su curva de presión-temperatura de saturación y haciendo la identificación difícil o imposible.",
      "category": "CORE",
      "image": "/public/quiz-images/53.png"
    }
  

]
