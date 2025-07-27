import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredTestimonials = testimonials.filter((testimonial) =>
    testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimonios de nuestros estudiantes</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            Conoce las historias de éxito de quienes ya han transformado sus vidas con nuestros cursos
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input
                type="text"
                placeholder="Buscar por nombre, curso, ubicación..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-medium mb-2">No se encontraron testimonios</h3>
                <p className="text-gray-500 mb-4">Intenta con otra búsqueda</p>
                <Button onClick={() => setSearchTerm("")} variant="outline">
                  Mostrar todos los testimonios
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">¿Quieres ser nuestra próxima historia de éxito?</h2>
            <p className="text-gray-600 mb-6">
              Únete a cientos de estudiantes que han transformado sus vidas con nuestros cursos de crianza animal
            </p>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/cursos">Explorar cursos</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}