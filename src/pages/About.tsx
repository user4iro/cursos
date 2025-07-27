import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nosotros</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            Conoce más sobre AgriEdu Pro y nuestra misión de formar expertos en crianza animal
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  AgriEdu Pro nació en 2018 cuando un grupo de veterinarios y zootecnistas identificaron que muchos pequeños productores fracasaban en sus emprendimientos debido a la falta de conocimientos técnicos y prácticos en crianza animal.
                </p>
                <p>
                  Decidimos crear una plataforma educativa que brindara no solo conocimientos teóricos, sino también un acompañamiento práctico para asegurar el éxito de nuestros estudiantes en sus negocios de avicultura, porcicultura y piscicultura.
                </p>
                <p>
                  Hoy, más de 2000 estudiantes han transformado sus vidas con nuestros cursos y han establecido negocios rentables en el sector agropecuario.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552089123-2d26226fc2b7?q=80&w=800&auto=format&fit=crop" 
                alt="Nuestro equipo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compromiso</h3>
              <p className="text-gray-600">
                Nos comprometemos con el éxito de cada estudiante, brindando acompañamiento personalizado durante todo su proceso de aprendizaje y emprendimiento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovación</h3>
              <p className="text-gray-600">
                Constantemente investigamos y actualizamos nuestras metodologías para ofrecer las técnicas más avanzadas y rentables en crianza animal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Comunidad</h3>
              <p className="text-gray-600">
                Creamos una red de apoyo entre productores para compartir experiencias, generar alianzas comerciales y fortalecer el sector agropecuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Dr. Andrés Morales" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Andrés Morales</h3>
              <p className="text-gray-600">Médico Veterinario</p>
              <p className="text-gray-500 text-sm mt-2">Especialista en avicultura y producción animal</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Dra. Carolina Restrepo" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dra. Carolina Restrepo</h3>
              <p className="text-gray-600">Zootecnista</p>
              <p className="text-gray-500 text-sm mt-2">Especialista en nutrición animal y formulación de alimentos</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://randomuser.me/api/portraits/men/62.jpg" 
                  alt="Dr. Francisco Gómez" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Dr. Francisco Gómez</h3>
              <p className="text-gray-600">Médico Veterinario</p>
              <p className="text-gray-500 text-sm mt-2">Especialista en porcicultura y sanidad animal</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 relative">
                <img 
                  src="https://randomuser.me/api/portraits/women/28.jpg" 
                  alt="Ing. Laura Sánchez" 
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <div className="absolute bottom-0 right-1/3 bg-green-100 rounded-full p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold">Ing. Laura Sánchez</h3>
              <p className="text-gray-600">Ingeniera Acuícola</p>
              <p className="text-gray-500 text-sm mt-2">Especialista en piscicultura y sistemas acuapónicos</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">¿Listo para aprender con los mejores?</h2>
            <p className="text-green-100 mb-6">
              Nuestro equipo de expertos te guiará en cada paso de tu aprendizaje y emprendimiento
            </p>
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-100">
              <Link to="/cursos">Explorar cursos</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}