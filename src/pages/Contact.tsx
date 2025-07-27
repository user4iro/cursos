import { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // In a real implementation, this would send the form data to a server
    // or directly to WhatsApp
  };

  const contactWhatsApp = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre los cursos");
    window.open(`https://wa.me/573145287412?text=${message}`, "_blank");
  };

  return (
    <MainLayout>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            Estamos aquí para responder todas tus dudas y ayudarte a elegir el mejor curso para ti
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="text-lg font-medium">¡Mensaje enviado!</h3>
                  </div>
                  <p>Gracias por contactarnos. Uno de nuestros asesores se comunicará contigo lo antes posible.</p>
                  <Button 
                    className="mt-4 bg-green-600 hover:bg-green-700" 
                    onClick={() => setFormSubmitted(false)}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tucorreo@ejemplo.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                    <Input id="phone" placeholder="Tu número de teléfono" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Curso de interés</Label>
                    <select 
                      id="course" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Selecciona un curso</option>
                      <option value="pollos">Crianza de Pollos de Engorde</option>
                      <option value="gallinas">Crianza de Gallinas de Postura</option>
                      <option value="cerdos">Crianza y Engorde de Cerdos</option>
                      <option value="peces">Crianza de Peces en Estanques</option>
                      <option value="alimentos">Fabricación de Alimentos para Animales</option>
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="¿En qué podemos ayudarte? ¿Tienes alguna pregunta específica sobre nuestros cursos?" 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Enviar mensaje
                  </Button>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
              
              <div className="space-y-8">
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">Respuesta inmediata</p>
                      <Button 
                        variant="outline" 
                        className="flex items-center text-green-600 border-green-600" 
                        onClick={contactWhatsApp}
                      >
                        <svg className="h-4 w-4 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                        +57 314 528 7412
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Correo electrónico</h3>
                      <p className="text-gray-600 mb-2">Te respondemos en 24 horas</p>
                      <a href="mailto:contacto@agriedupro.com" className="text-green-600 hover:underline">
                        contacto@agriedupro.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-green-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Horario de atención</h3>
                      <p className="text-gray-600">
                        Lunes a Viernes: 8:00 AM - 6:00 PM<br />
                        Sábados: 8:00 AM - 1:00 PM<br />
                        Domingos y festivos: Cerrado
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors">
                    <svg className="h-6 w-6 text-green-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Los cursos son presenciales o virtuales?</h3>
              <p className="text-gray-600">
                Nuestros cursos son 100% virtuales, lo que te permite aprender a tu propio ritmo desde cualquier lugar. El acompañamiento veterinario se realiza a través de WhatsApp y videollamadas.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Cómo funciona el acompañamiento veterinario gratuito?</h3>
              <p className="text-gray-600">
                Al comprar cualquier curso, recibes acceso a nuestro equipo de veterinarios y zootecnistas durante un año completo. Podrás hacer consultas ilimitadas a través de WhatsApp y tendrás acceso a videollamadas programadas para resolver dudas específicas.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Realmente me ayudan a vender mi producción?</h3>
              <p className="text-gray-600">
                ¡Sí! Contamos con una red de compradores en diferentes regiones del país. Te ayudamos a conectar con restaurantes, supermercados y compradores directos interesados en productos de calidad. Este servicio está disponible para estudiantes que compren su primer curso.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-medium mb-2">¿Qué métodos de pago aceptan?</h3>
              <p className="text-gray-600">
                Aceptamos transferencias bancarias, pagos por Nequi, Daviplata y pagos en efectivo a través de Efecty. Una vez realices tu compra, te enviaremos todas las instrucciones de pago.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}