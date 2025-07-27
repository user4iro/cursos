import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";

export default function NotFound() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="space-y-8 max-w-md">
          <div className="flex flex-col items-center">
            <span className="text-9xl font-bold text-green-600">404</span>
            <h1 className="text-3xl font-bold mt-6 mb-2">Página no encontrada</h1>
            <p className="text-gray-500 max-w-sm">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link to="/">Volver al inicio</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/cursos">Ver cursos</Link>
            </Button>
          </div>
          
          <div className="border-t pt-6 mt-6">
            <p className="text-gray-500">
              ¿No encuentras lo que buscas? 
              <Link to="/contacto" className="text-green-600 hover:underline ml-1">
                Contáctanos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}