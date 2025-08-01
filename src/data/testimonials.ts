export interface Testimonial {
  id: number;
  name: string;
  location: string;
  course: string;
  image: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Ramírez",
    location: "Cali, Colombia",
    course: "Crianza de Pollos de Engorde",
    image: "https://i1.rgstatic.net/ii/profile.image/655624606064640-1533324495797_Q512/Carlos-Ramirez-5.jpg",
    text: "Gracias a este curso pude empezar mi negocio de pollos de engorde. El acompañamiento veterinario me ha ayudado a mantener saludable mi lote y ya estoy vendiendo toda mi producción a restaurantes locales."
  },
  {
    id: 2,
    name: "María Fernández",
    location: "Medellín, Colombia",
    course: "Crianza de Gallinas de Postura",
    image: "https://diecisiete.org/wp-content/uploads/2023/08/Martha-Edna-Barrios-Serrano.jpeg",
    text: "Increíble la cantidad de conocimiento que adquirí. Empecé con 50 gallinas y ahora tengo más de 300. Vendo todos los huevos en mi comunidad y no doy abasto con la demanda."
  },
  {
    id: 3,
    name: "Juan Pérez",
    location: "Bogotá, Colombia",
    course: "Fabricación de Alimentos para Animales",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCen6fge1ypPXBX8-ea6EAYQq0iqVP0Fps2tqfmFYznS4LYdLxKDnRdgIkcO7DA4xyiSE&usqp=CAU",
    text: "He reducido los costos de alimentación de mis animales en un 40%. La fórmula que aprendí a preparar ha mejorado notablemente el rendimiento de mis pollos."
  },
  {
    id: 4,
    name: "Luisa Mendoza",
    location: "Barranquilla, Colombia",
    course: "Crianza de Peces en Estanques",
    image: "https://previews.123rf.com/images/trjiii1/trjiii12001/trjiii1200100209/137749433-middle-aged-woman-in-her-40s-sitting-outside-in-fall.jpg",
    text: "Ahora tengo tres estanques funcionando perfectamente. El curso me dio todas las herramientas para entender la crianza de tilapias y ya estoy vendiendo a restaurantes locales."
  },
  {
    id: 5,
    name: "Roberto Gómez",
    location: "Pereira, Colombia",
    course: "Crianza y Engorde de Cerdos",
    image: "https://i.pinimg.com/236x/b6/65/5f/b6655f13ad3da553bf87e063690e76e3.jpg",
    text: "Comencé con 2 cerdas reproductoras y ahora tengo una granja con 30 animales. El acompañamiento veterinario me ha permitido prevenir enfermedades y optimizar la producción."
  },
  {
    id: 6,
    name: "Ana Lucía Torres",
    location: "Cartagena, Colombia",
    course: "Crianza de Pollos de Engorde",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "Este curso cambió mi vida. Pasé de no saber nada sobre avicultura a tener un negocio que sustenta a mi familia. El apoyo para conseguir clientes fue fundamental."
  },
  {
    id: 7,
    name: "Diego Martínez",
    location: "Bucaramanga, Colombia",
    course: "Fabricación de Alimentos para Animales",
    image: "https://us.123rf.com/450wm/mettus/mettus1305/mettus130501990/19592904-primer-plano-el-retrato-de-una-hermosa-ni%C3%B1a-en-el-amanecer.jpg?ver=6",
    text: "No solo alimento a mis animales, ahora también vendo concentrado a mis vecinos. Un nuevo ingreso que no esperaba y que aprendí gracias al curso."
  },
  {
    id: 8,
    name: "Patricia Ortiz",
    location: "Pasto, Colombia",
    course: "Crianza de Gallinas de Postura",
    image: "https://us.123rf.com/450wm/nicexray/nicexray1612/nicexray161200044/67796365-woman-portrait-in-autumn-garden.jpg",
    text: "Con el acompañamiento veterinario logré controlar un brote de enfermedad que habría acabado con mis aves. El soporte es real y muy valioso."
  },
  {
    id: 9,
    name: "Fernando Rojas",
    location: "Ibagué, Colombia",
    course: "Crianza y Engorde de Cerdos",
    image: "https://i.pinimg.com/736x/89/7d/0a/897d0aa8c00ea03438fa7e249e61589f.jpg",
    text: "La técnica de alimentación que aprendí ha reducido el tiempo de engorde de mis cerdos en casi un mes. Más rentabilidad y mejores precios."
  },
  {
    id: 10,
    name: "Carolina Duarte",
    location: "Santa Marta, Colombia",
    course: "Crianza de Peces en Estanques",
    image: "https://img.freepik.com/foto-gratis/chica-gordita-casual-denim-al-aire-libre_23-2148804614.jpg?semt=ais_hybrid&w=740",
    text: "Logré implementar un sistema de recirculación de agua que ha mejorado la salud de mis peces y reducido el consumo de agua. Excelente curso."
  },
  {
    id: 11,
    name: "Javier Luna",
    location: "Manizales, Colombia",
    course: "Crianza de Pollos de Engorde",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3cp1d3_jFjBEhg-O18dGtnhkcPtxfrhHqfA&s",
    text: "En seis meses pasé de tener 100 pollos a más de 500. La metodología del curso es práctica y el soporte posterior ha sido clave para mi crecimiento."
  },
  {
    id: 12,
    name: "Marcela Bonilla",
    location: "Villavicencio, Colombia",
    course: "Fabricación de Alimentos para Animales",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "He mejorado la calidad de los huevos de mis gallinas significativamente con las fórmulas de alimentación que aprendí. Los clientes notan la diferencia."
  },
  {
    id: 13,
    name: "Ricardo Paredes",
    location: "Neiva, Colombia",
    course: "Crianza y Engorde de Cerdos",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    text: "El curso me dio la confianza para expandir mi negocio. Ahora también proceso embutidos y tengo un punto de venta directo al público."
  },
  {
    id: 14,
    name: "Valentina Suárez",
    location: "Armenia, Colombia",
    course: "Crianza de Gallinas de Postura",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Mejoré la producción de huevos en un 30% con los conocimientos adquiridos. El retorno de inversión del curso fue casi inmediato."
  },
  {
    id: 15,
    name: "Ernesto Vega",
    location: "Popayán, Colombia",
    course: "Crianza de Peces en Estanques",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "La densidad de siembra y las técnicas de alimentación que aprendí han maximizado la producción en el mismo espacio que tenía antes."
  },
  {
    id: 16,
    name: "Mónica Linares",
    location: "Sincelejo, Colombia",
    course: "Crianza de Pollos de Engorde",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    text: "El curso es muy completo y actualizado. Las técnicas funcionan y el apoyo en la comercialización me permitió encontrar clientes fijos rápidamente."
  },
  {
    id: 17,
    name: "Gabriel Castro",
    location: "Montería, Colombia",
    course: "Fabricación de Alimentos para Animales",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    text: "Ahora produzco mi propio concentrado con materias primas locales. Ha sido un cambio radical en la economía de mi granja."
  },
  {
    id: 18,
    name: "Sandra Ospina",
    location: "Valledupar, Colombia",
    course: "Crianza y Engorde de Cerdos",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    text: "La información sobre manejo sanitario y prevención de enfermedades ha sido invaluable. Tengo una piara sana y productiva."
  },
  {
    id: 19,
    name: "Andrés Moreno",
    location: "Tunja, Colombia",
    course: "Crianza de Gallinas de Postura",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    text: "Empecé como un proyecto familiar y ahora es nuestro sustento principal. Las gallinas son muy productivas con el sistema que me enseñaron."
  },
  {
    id: 20,
    name: "Julia Restrepo",
    location: "Cúcuta, Colombia",
    course: "Crianza de Peces en Estanques",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    text: "El curso supera las expectativas. Con la ayuda del equipo, conseguí clientes mayoristas para toda mi producción de tilapia."
  }
];