import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-lg font-medium leading-none">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
              <p className="text-sm text-green-600 font-medium">{testimonial.course}</p>
            </div>
            <p className="text-gray-600">"{testimonial.text}"</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}