import { useState } from 'react';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface HistorialCitasProps {
  userRole: 'cliente' | 'profesional' | null;
}

const mockCitas = [
  {
    id: 1,
    profesional: 'María González',
    cliente: 'Juan Pérez',
    servicio: 'Peluquería y Maquillaje',
    fecha: '2026-05-08',
    hora: '10:00',
    precio: '$50',
    estado: 'confirmada' as const,
    comprobante: true
  },
  {
    id: 2,
    profesional: 'Carlos Ramírez',
    cliente: 'Ana Torres',
    servicio: 'Entrenamiento Personal',
    fecha: '2026-05-10',
    hora: '15:00',
    precio: '$40',
    estado: 'pendiente' as const,
    comprobante: true
  },
  {
    id: 3,
    profesional: 'Ana Martínez',
    cliente: 'Luis Vargas',
    servicio: 'Clases de Matemáticas',
    fecha: '2026-04-28',
    hora: '16:00',
    precio: '$30',
    estado: 'confirmada' as const,
    comprobante: true
  },
  {
    id: 4,
    profesional: 'Luis Torres',
    cliente: 'Patricia Méndez',
    servicio: 'Plomería',
    fecha: '2026-05-12',
    hora: '09:00',
    precio: '$60',
    estado: 'pendiente' as const,
    comprobante: false
  }
];

export default function HistorialCitas({ userRole }: HistorialCitasProps) {
  const [citas, setCitas] = useState(mockCitas);

  const handleValidarComprobante = (citaId: number, accion: 'validar' | 'rechazar') => {
    setCitas(prevCitas =>
      prevCitas.map(cita =>
        cita.id === citaId
          ? { ...cita, estado: accion === 'validar' ? 'confirmada' as const : 'pendiente' as const }
          : cita
      )
    );
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'confirmada':
        return 'text-[#FBCFE8]';
      case 'pendiente':
        return 'text-[#f59e0b]';
      default:
        return 'text-[#9CA3AF]';
    }
  };

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'confirmada':
        return <CheckCircle className="w-5 h-5" />;
      case 'pendiente':
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <XCircle className="w-5 h-5" />;
    }
  };

  return (
    <div>
      <h1 className="text-[#A78BFA] mb-6 font-bold text-2xl">
        {userRole === 'profesional' ? 'Citas y Pagos' : 'Mi Historial'}
      </h1>

      <div className="space-y-4">
        {citas.map(cita => (
          <div key={cita.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[#A78BFA] font-semibold">
                    {userRole === 'profesional' ? `Cliente: ${cita.cliente}` : cita.profesional}
                  </h3>
                  <div className={`flex items-center gap-1 ${getEstadoColor(cita.estado)}`}>
                    {getEstadoIcon(cita.estado)}
                    <span className="capitalize">{cita.estado}</span>
                  </div>
                </div>

                <p className="text-[#9CA3AF] mb-2">{cita.servicio}</p>

                <div className="flex flex-wrap gap-4 text-[#9CA3AF]">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(cita.fecha).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{cita.hora}</span>
                  </div>
                  <div>
                    <span className="text-[#A78BFA] font-semibold">{cita.precio}</span>
                  </div>
                </div>

                {cita.comprobante && (
                  <div className="mt-3 inline-flex items-center gap-1 text-[#FBCFE8]">
                    <CheckCircle className="w-4 h-4" />
                    <span>Comprobante recibido</span>
                  </div>
                )}
              </div>

              {userRole === 'profesional' && cita.estado === 'pendiente' && cita.comprobante && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleValidarComprobante(cita.id, 'validar')}
                    className="bg-[#FBCFE8] text-[#1F2937] px-4 py-2 rounded-lg hover:bg-[#F9A8D4] transition-colors flex items-center gap-1 font-semibold"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Validar
                  </button>
                  <button
                    onClick={() => handleValidarComprobante(cita.id, 'rechazar')}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1"
                  >
                    <XCircle className="w-4 h-4" />
                    Rechazar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {citas.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Calendar className="w-16 h-16 text-[#9CA3AF] mx-auto mb-4" />
          <p className="text-[#9CA3AF]">No tienes citas registradas</p>
        </div>
      )}

      {userRole === 'profesional' && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-[#A78BFA] mb-4 font-semibold">Resumen de ingresos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FAF5FF] border border-[#FBCFE8] rounded-lg p-4">
              <p className="text-[#9CA3AF] mb-1">Confirmados</p>
              <p className="text-[#FBCFE8] font-bold text-xl">
                ${citas.filter(c => c.estado === 'confirmada').reduce((sum, c) => sum + parseInt(c.precio.replace('$', '')), 0)}
              </p>
            </div>
            <div className="bg-[#fef3c7] border border-[#f59e0b] rounded-lg p-4">
              <p className="text-[#9CA3AF] mb-1">Pendientes</p>
              <p className="text-[#f59e0b] font-bold text-xl">
                ${citas.filter(c => c.estado === 'pendiente').reduce((sum, c) => sum + parseInt(c.precio.replace('$', '')), 0)}
              </p>
            </div>
            <div className="bg-[#EDE9FE] border border-[#A78BFA] rounded-lg p-4">
              <p className="text-[#9CA3AF] mb-1">Total</p>
              <p className="text-[#A78BFA] font-bold text-xl">
                ${citas.reduce((sum, c) => sum + parseInt(c.precio.replace('$', '')), 0)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
