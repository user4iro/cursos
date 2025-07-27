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
    image: "https://images.unsplash.com/photo-1592052224003-913edff37a14?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1535477421609-f90d8e309a8a?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
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
    title: "Crianza de Peces para Consumo",
    category: "Piscicultura Avanzada",
    description: "Aprende a criar peces como tilapia, mojarra, cachama, bagre y trucha en lagos artificiales con o sin geomembrana para producción comercial.",
    fullPrice: 180000,
    discountPrice: 90000,
    image: "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?q=80&w=800&auto=format&fit=crop",
    features: [
      "Diseño de lagos artificiales con y sin geomembrana",
      "Selección de especies rentables (tilapia, mojarra, cachama, bagre, trucha)",
      "Sistemas de oxigenación y mantenimiento del agua",
      "Alimentación estratégica para crecimiento óptimo",
      "Prevención y control de enfermedades acuáticas",
      "Técnicas de cosecha y procesamiento",
      "Comercialización directa y distribución a restaurantes"
    ]
  }
];