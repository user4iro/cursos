export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  fullPrice: number;
  discountPrice: number;
  image: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "pollos-engorde",
    title: "Crianza de Pollos de Engorde",
    category: "Avicultura",
    description: "Aprende las mejores técnicas para la crianza eficiente de pollos de engorde cob500 y ros 308. Desde la selección de aves hasta la comercialización del producto final.",
    fullPrice: 200000,
    discountPrice: 100000,
    image: "https://catedralatam.com/wp-content/uploads/2023/07/Cobb-Breeder-Guide-Spanish.jpg",
    features: [
      "Selección de razas cob500 y ros 308",
      "Preparación del galpón y equipos necesarios",
      "Manejo sanitario y prevención de enfermedades",
      "Alimentación y nutrición eficiente",
      "Estrategias de crecimiento acelerado",
      "Proceso de sacrificio y faenado",
      "Comercialización y marketing de tu producto"
    ]
  },
  {
    id: "gallinas-postura",
    title: "Crianza de Gallinas de Postura",
    category: "Avicultura",
    description: "Domina el manejo de gallinas ponedoras para producir huevos de calidad. Desde la cría hasta la comercialización de huevos frescos.",
    fullPrice: 220000,
    discountPrice: 110000,
    image: "https://avinews.com/wp-content/uploads/2023/10/gallinas-ponedoras-biozyme.jpg",
    features: [
      "Selección de razas ponedoras de alto rendimiento",
      "Diseño de instalaciones para gallinas ponedoras",
      "Manejo de iluminación para optimizar la postura",
      "Alimentación balanceada para máxima producción",
      "Recolección y clasificación de huevos",
      "Control de calidad y conservación",
      "Comercialización de huevos y subproductos"
    ]
  },
  {
    id: "cerdos",
    title: "Crianza y Engorde de Cerdos",
    category: "Porcicultura",
    description: "Aprende a criar cerdos de forma rentable con las técnicas más modernas de manejo, alimentación y reproducción porcina.",
    fullPrice: 240000,
    discountPrice: 120000,
    image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?q=80&w=800&auto=format&fit=crop",
    features: [
      "Selección de razas y genética porcina",
      "Instalaciones y equipos necesarios",
      "Manejo de la reproducción y maternidad",
      "Destete y recría eficiente",
      "Alimentación por etapas productivas",
      "Sanidad y bioseguridad en granjas porcinas",
      "Comercialización de carne y derivados"
    ]
  },
  {
    id: "piscicultura",
    title: "Crianza de Peces en Estanques",
    category: "Piscicultura",
    description: "Descubre cómo implementar y administrar un sistema de producción de peces rentable y sostenible en estanques artificiales.",
    fullPrice: 190000,
    discountPrice: 95000,
    image: "https://aneia.uniandes.edu.co/wp-content/uploads/2024/09/juan-nieto-portada.jpg",
    features: [
      "Diseño y construcción de estanques",
      "Selección de especies rentables (tilapia, trucha, etc.)",
      "Calidad del agua y parámetros físico-químicos",
      "Sistemas de aireación y recirculación",
      "Alimentación y nutrición de peces",
      "Prevención y control de enfermedades",
      "Cosecha y comercialización"
    ]
  },
  {
    id: "alimentos",
    title: "Fabricación de Alimentos para Animales",
    category: "Nutricion Animal",
    description: "Aprende a formular y fabricar alimentos balanceados para diferentes especies. Reduce costos y mejora la productividad de tu granja.",
    fullPrice: 180000,
    discountPrice: 90000,
    image: "https://i.ytimg.com/vi/4Sb2aaTUpsQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXJARa8E0rK7fNw3UU6l_Xb42pKQ",
    features: [
      "Materias primas y su valor nutricional",
      "Formulación de raciones balanceadas",
      "Equipos para procesamiento de alimentos",
      "Técnicas de mezclado y peletizado",
      "Manejo de nucleo y niveles proteicos",
      "Técnicas de conservacion",
      "reembasado de materias primas"
    ]
  }
];