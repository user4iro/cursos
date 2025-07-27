import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', { 
      style: 'currency', 
      currency: 'COP',
      maximumFractionDigits: 0 
    }).format(price);
  };

  const handleBuyClick = () => {
    const message = `Hola, quiero comprar este curso ${course.title} por ${formatPrice(course.discountPrice)}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/573145287412?text=${encodedMessage}`, '_blank');
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden border-2 hover:border-green-500 transition-all">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            {course.category}
          </Badge>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 line-through mr-2">
              {formatPrice(course.fullPrice)}
            </span>
            <Badge variant="destructive" className="bg-red-500">50% OFF</Badge>
          </div>
        </div>
        <CardTitle className="text-xl md:text-2xl">{course.title}</CardTitle>
        <CardDescription className="text-gray-600">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          <h4 className="font-medium">Este curso incluye:</h4>
          <ul className="space-y-1">
            {course.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
            {course.features.length > 4 && (
              <li className="text-sm text-gray-500 italic pl-6">Y {course.features.length - 4} temas más...</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t pt-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500">Precio con descuento:</span>
            <span className="text-2xl font-bold text-green-700">{formatPrice(course.discountPrice)}</span>
          </div>
          <Button 
            onClick={handleBuyClick} 
            className="bg-green-600 hover:bg-green-700 text-white font-medium"
          >
            Comprar Ahora
          </Button>
        </div>
        <div className="w-full text-center">
          <p className="text-xs text-gray-500">
            Incluye acompañamiento veterinario gratuito por 1 año
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}