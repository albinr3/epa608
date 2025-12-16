// app/data.js

export const questions = [
    {
      id: 1,
      text: "¿Cuál es la fecha en la que se prohibió ventilar refrigerantes CFC y HCFC?",
      options: [
        "1 de julio de 1992",
        "1 de julio de 1993",
        "14 de noviembre de 1994",
        "1 de enero de 1995"
      ],
      correctAnswer: 0,
      explanation: "Desde el 1 de julio de 1992, es ilegal ventilar intencionalmente refrigerantes CFC o HCFC durante el servicio, mantenimiento, reparación o eliminación de aparatos.",
      category: 'Core'
    },
    {
      id: 2,
      text: "¿Qué tipo de refrigerante es el R-134a?",
      options: [
        "CFC",
        "HCFC",
        "HFC",
        "HFO"
      ],
      correctAnswer: 2,
      explanation: "El R-134a es un refrigerante HFC (Hidrofluorocarbono). No contiene cloro y, por lo tanto, no agota la capa de ozono.",
      category: 'Core'
    },
    {
      id: 3,
      text: "El ozono estratosférico ayuda a formar la tierra protectora...",
      options: [
        "Capa de iones",
        "Escudo contra la radiación UV",
        "Capa de nubes",
        "Campo magnético"
      ],
      correctAnswer: 1,
      explanation: "La capa de ozono en la estratosfera protege la superficie de la tierra de la dañina radiación ultravioleta (UV) del sol.",
      category: 'Core'
    },
    // --- EL MURO DE PAGO ESTÁ AQUÍ ---
    {
      id: 4,
      text: "PREGUNTA PREMIUM: ¿Cuál es la multa máxima por día por violación de la Ley de Aire Limpio?",
      options: [
        "$10,000",
        "$27,500",
        "$44,539",
        "$5,000"
      ],
      correctAnswer: 2,
      explanation: "La EPA puede imponer multas de hasta $44,539 por día, por violación.",
      category: 'Core'
    },
    {
      id: 5,
      text: "PREGUNTA PREMIUM: Al recuperar refrigerante, ¿qué debe hacerse primero?",
      options: [
        "Encender la máquina de recuperación",
        "Verificar el tipo de refrigerante",
        "Cambiar el filtro",
        "Pesar el tanque"
      ],
      correctAnswer: 1,
      explanation: "Siempre verifique el tipo de refrigerante antes de comenzar la recuperación.",
      category: 'Core'
    }
  ];
