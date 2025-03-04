import { Button } from "@/components/ui/button";
import { Hospital, Stethoscope } from "lucide-react";

export default function CardsSection() {
  return (
    <section className="flex flex-wrap gap-12 justify-around py-30 px-4 sm:px-30 bg-gray-200">
      <div className="bg-white rounded-lg shadow-lg p-8 md:max-w-xl">
        <Stethoscope className="w-12 h-12 text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          ¿Eres médico o trabajas en una clínica? ¡Únete a nuestro directorio!
        </h2>
        <p className="text-gray-600 mb-6 text-xl">
          Aumenta tu visibilidad online y llega a más pacientes en Nariño. Nuestro directorio te conectará con quienes buscan tus servicios. ¡No pierdas la oportunidad de destacar!
        </p>
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Regístrese como médico ahora</Button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 md:max-w-xl">
        <Hospital className="w-12 h-12 text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          ¿Buscas atención médica de calidad? Encuentra fácilmente al especialista adecuado para ti.
        </h2>
        <p className="text-gray-600 mb-6 text-xl">
          Nuestro directorio contará con todas las especialidades y médicos certificados en Nariño. ¡Regístrate para ser el primero en acceder a nuestra plataforma cuando esté lista!
        </p>
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Regístrate para recibir notificaciones
        </Button>
      </div>
    </section>
  )
}