import { MapPin, Clock, Star, ArrowLeft } from 'lucide-react';

interface PerfilProfesionalProps {
  professional: any;
  onAgendar: () => void;
  onBack: () => void;
}

export default function PerfilProfesional({ professional, onAgendar, onBack }: PerfilProfesionalProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver a explorar
      </button>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] h-32"></div>

        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row gap-6 -mt-16 mb-6">
            <img
              src={professional.foto}
              alt={professional.nombre}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div className="flex-1 mt-16 md:mt-16">
              <h1 className="text-[#A78BFA] mb-2 font-bold text-2xl">{professional.nombre}</h1>
              <p className="text-[#9CA3AF] mb-2">{professional.especialidad}</p>
              <div className="flex items-center gap-4 text-[#9CA3AF] mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{professional.ubicacion}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#FBCFE8] fill-[#FBCFE8]" />
                  <span>4.8 (32 reseñas)</span>
                </div>
              </div>
              <p className="text-[#A78BFA] font-semibold">{professional.precio}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-[#A78BFA] mb-3 font-semibold">Sobre el profesional</h3>
              <p className="text-[#9CA3AF]">
                Profesional certificado con más de 5 años de experiencia en el área.
                Comprometido con brindar un servicio de calidad y personalizado para cada cliente.
                Utilizo técnicas modernas y productos de alta calidad para garantizar los mejores resultados.
              </p>
            </div>

            <div>
              <h3 className="text-[#A78BFA] mb-3 font-semibold">Disponibilidad</h3>
              <div className="flex items-start gap-2 text-[#9CA3AF]">
                <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>{professional.disponibilidad}</p>
                  <p className="mt-2">Sábados y domingos: Consultar disponibilidad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[#A78BFA] mb-3 font-semibold">Servicios ofrecidos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#F3F4F6] p-3 rounded-lg">
                <p className="text-[#A78BFA]">Servicio básico - {professional.precio}</p>
              </div>
              <div className="bg-[#F3F4F6] p-3 rounded-lg">
                <p className="text-[#A78BFA]">Servicio premium - $70/hora</p>
              </div>
              <div className="bg-[#F3F4F6] p-3 rounded-lg">
                <p className="text-[#A78BFA]">Paquete mensual - $200/mes</p>
              </div>
              <div className="bg-[#F3F4F6] p-3 rounded-lg">
                <p className="text-[#A78BFA]">Consulta inicial - Gratis</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-[#A78BFA] mb-3 font-semibold">Reseñas recientes</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-[#FBCFE8] pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 text-[#FBCFE8] fill-[#FBCFE8]" />
                    ))}
                  </div>
                  <span className="text-[#9CA3AF]">hace 2 días</span>
                </div>
                <p className="text-[#9CA3AF]">
                  "Excelente servicio, muy profesional y puntual. Los resultados superaron mis expectativas."
                </p>
              </div>
              <div className="border-l-4 border-[#FBCFE8] pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} className="w-4 h-4 text-[#FBCFE8] fill-[#FBCFE8]" />
                    ))}
                  </div>
                  <span className="text-[#9CA3AF]">hace 1 semana</span>
                </div>
                <p className="text-[#9CA3AF]">
                  "Muy recomendado! Gran atención al detalle y excelente calidad en el trabajo."
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onAgendar}
            className="w-full md:w-auto bg-[#FBCFE8] text-[#1F2937] px-8 py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
          >
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
}
