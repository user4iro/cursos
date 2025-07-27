import MainLayout from "@/layouts/MainLayout";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Cursos Profesionales</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            Cursos diseñados por expertos para ayudarte a tener éxito en la crianza y producción animal
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Todos los cursos (50% de descuento)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">¿Por qué elegir nuestros cursos?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Conocimiento Práctico</h3>
              <p className="text-gray-600">
                Aprende técnicas que puedes implementar inmediatamente en tu negocio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Acompañamiento</h3>
              <p className="text-gray-600">
                Acompañamiento veterinario por un año completo para resolver todas tus dudas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rentabilidad</h3>
              <p className="text-gray-600">
                Aprende a maximizar tus ganancias y reducir costos en tu negocio de crianza.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Comercialización</h3>
              <p className="text-gray-600">
                Te ayudamos a encontrar clientes para vender tus primeros lotes de producción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="bg-green-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Oferta Especial: 50% de Descuento</h2>
            <p className="text-green-100 mb-6">
              Todos nuestros cursos están con un increíble 50% de descuento por tiempo limitado. 
              ¡No pierdas esta oportunidad de aprender con los mejores!
            </p>
            <div className="bg-white/10 p-4 rounded-lg inline-block">
              <p className="font-bold">
                Por la compra de tu primer curso, adquiere acompañamiento veterinario por 1 año GRATIS y te ayudamos a vender tu primer lote de crianza
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}