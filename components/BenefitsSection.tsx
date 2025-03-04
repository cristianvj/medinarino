import { Bell, Calendar, CheckCircle, Hospital } from "lucide-react";

export default function BenefitsSection () {
  return (
    <section className="p-30">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Beneficios del Directorio Médico</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Acceso Rápido</h3>
              <p className="text-gray-600">Encuentra a los mejores especialistas en Nariño rápido y fácil.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Hospital className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Amplia Gama de Especialidades</h3>
              <p className="text-gray-600">Más de 50 especialistas médicos disponibles.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Reserva Fácil</h3>
              <p className="text-gray-600">Próximamente reserva de citas online.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Bell className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Mantente Actualizado</h3>
              <p className="text-gray-600">Actualizaciones y notificaciones personalizadas.</p>
            </div>
          </div>
        </section>
  )
}