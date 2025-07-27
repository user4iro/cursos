import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { courses } from "@/data/courses";
import { testimonials } from "@/data/testimonials";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";

export default function Index() {
  const [visibleTestimonials, setVisibleTestimonials] = useState(6);
  
  const loadMoreTestimonials = () => {
    setVisibleTestimonials(prev => Math.min(prev + 6, testimonials.length));
  };
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694e30?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Conviértete en un Experto en Crianza Animal
                </h1>
                <p className="mt-4 text-lg text-green-100">
                  Cursos profesionales en avicultura, porcicultura y piscicultura con acompañamiento veterinario gratuito por 1 año.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-100">
                  <Link to="/cursos">Ver Cursos</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-green-800">
                  <Link to="/testimonios">Testimonios</Link>
                </Button>
              </div>
              <div className="bg-green-800/70 p-4 rounded-lg">
                <h3 className="font-semibold text-xl mb-2">¡50% DE DESCUENTO POR TIEMPO LIMITADO!</h3>
                <p>Todos nuestros cursos con 50% de descuento. ¡Aprovecha esta oportunidad única!</p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560589227-e2012ee80cc4?q=80&w=800&auto=format&fit=crop" 
                  alt="Experto en crianza animal" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="text-green-800 font-semibold">Incluye acompañamiento veterinario gratuito por 1 año</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros cursos están diseñados para ayudarte a tener éxito en tu negocio de crianza animal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-green-500">
              <div className="mx-auto bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Acompañamiento Veterinario</h3>
              <p className="text-gray-600">
                Recibe acompañamiento veterinario gratuito por 1 año para resolver todas tus dudas y prevenir enfermedades en tus animales.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-green-500">
              <div className="mx-auto bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Ayuda en la Comercialización</h3>
              <p className="text-gray-600">
                Te ayudamos a encontrar clientes para tu primer lote de crianza. No te quedarás con la producción sin vender.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all border-2 hover:border-green-500">
              <div className="mx-auto bg-green-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 text-green-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Técnicas Rentables</h3>
              <p className="text-gray-600">
                Aprende métodos probados para reducir costos y aumentar la productividad de tu granja. Maximiza tus ganancias.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* All Courses Section with Animations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-10 -left-4 opacity-20 animate-bounce hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Nuestros Cursos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Domina las técnicas de crianza más eficientes y rentables con nuestros cursos especializados
            </p>
            <div className="absolute -top-12 -right-4 opacity-20 animate-pulse hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                <path d="M12 8v8"></path>
                <path d="M8 12h8"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={course.id} className={`animate-in fade-in slide-in-from-bottom-${4 + index} duration-700 delay-${index * 100}`}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/cursos">Ver todos los cursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Moved up as requested */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute -top-10 -left-6 opacity-20 animate-pulse hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros estudiantes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Historias de éxito de personas que transformaron su vida con nuestros cursos
            </p>
            <div className="absolute -top-12 -right-6 opacity-20 animate-bounce hidden md:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, visibleTestimonials).map((testimonial, index) => (
              <div key={testimonial.id} className={`animate-in fade-in slide-in-from-bottom duration-700 delay-${index * 100}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          {visibleTestimonials < testimonials.length && (
            <div className="text-center mt-10">
              <Button variant="outline" onClick={loadMoreTestimonials}>
                Cargar más testimonios
              </Button>
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/testimonios">Ver todos los testimonios</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Promotion Banner with Animated Icons */}
      <section className="bg-green-700 py-12 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -top-4 left-5 animate-bounce opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M18 12h-5v5a2 2 0 0 1-4 0v-5H4a2 2 0 0 1 0-4h5V3a2 2 0 0 1 4 0v5h5a2 2 0 0 1 0 4z"/>
            </svg>
          </div>
          <div className="absolute bottom-2 right-10 animate-pulse opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
              <line x1="9" y1="9" x2="9.01" y2="9"/>
              <line x1="15" y1="9" x2="15.01" y2="9"/>
            </svg>
          </div>
          <div className="absolute top-10 right-10 animate-spin-slow opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h2 className="text-2xl font-bold mb-2">Por la compra de tu primer curso</h2>
              <p className="text-green-100 max-w-md">
                Adquiere acompañamiento veterinario por 1 año GRATIS y te ayudamos a vender tu primer lote de crianza si aún no tienes clientes
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-100 animate-pulse">
              <Link to="/cursos">¡Aprovechar ahora!</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para convertirte en un experto en crianza animal?</h2>
            <p className="text-gray-300 mb-8">
              No esperes más para iniciar tu negocio rentable de crianza animal. 
              Nuestros cursos profesionales y el acompañamiento veterinario te garantizan el éxito.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/cursos">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}