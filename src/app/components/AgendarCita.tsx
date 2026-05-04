import { useState } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

interface AgendarCitaProps {
  professional: any;
  onConfirmar: () => void;
  onBack: () => void;
}

export default function AgendarCita({ professional, onConfirmar, onBack }: AgendarCitaProps) {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<string>('');
  const [horaSeleccionada, setHoraSeleccionada] = useState<string>('');
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const horasDisponibles = [
    '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const getDiasDelMes = () => {
    const hoy = new Date();
    const primerDia = new Date(hoy.getFullYear(), hoy.getMonth(), 1);
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0);

    const dias = [];
    const primerDiaSemana = primerDia.getDay();

    for (let i = 0; i < primerDiaSemana; i++) {
      dias.push(null);
    }

    for (let dia = 1; dia <= ultimoDia.getDate(); dia++) {
      const fecha = new Date(hoy.getFullYear(), hoy.getMonth(), dia);
      dias.push({
        dia,
        fecha: fecha.toISOString().split('T')[0],
        esHoy: dia === hoy.getDate(),
        esPasado: fecha < new Date(hoy.setHours(0, 0, 0, 0))
      });
    }

    return dias;
  };

  const handleConfirmar = () => {
    if (!fechaSeleccionada || !horaSeleccionada) {
      alert('Por favor selecciona una fecha y hora');
      return;
    }
    setMostrarConfirmacion(true);
    setTimeout(() => {
      onConfirmar();
    }, 2000);
  };

  const dias = getDiasDelMes();
  const mesActual = new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver al perfil
      </button>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-[#A78BFA] mb-2 font-bold text-2xl">Agendar cita</h1>
        <p className="text-[#9CA3AF] mb-6">con {professional.nombre}</p>

        {mostrarConfirmacion ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#FBCFE8] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[#A78BFA] mb-2 font-bold">¡Cita confirmada!</h2>
            <p className="text-[#9CA3AF]">Redirigiendo a subir comprobante...</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-[#A78BFA]" />
                <h3 className="text-[#A78BFA] font-semibold">Selecciona una fecha</h3>
              </div>

              <div className="bg-[#F3F4F6] rounded-lg p-4">
                <p className="text-[#A78BFA] text-center mb-4 capitalize font-semibold">{mesActual}</p>

                <div className="grid grid-cols-7 gap-2 mb-2">
                  {diasSemana.map(dia => (
                    <div key={dia} className="text-center text-[#9CA3AF] p-2">
                      {dia}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {dias.map((dia, index) => (
                    <button
                      key={index}
                      onClick={() => dia && !dia.esPasado && setFechaSeleccionada(dia.fecha)}
                      disabled={!dia || dia.esPasado}
                      className={`
                        p-3 rounded-lg transition-colors
                        ${!dia ? 'invisible' : ''}
                        ${dia?.esPasado ? 'text-gray-300 cursor-not-allowed' : ''}
                        ${dia?.esHoy ? 'border-2 border-[#A78BFA]' : ''}
                        ${fechaSeleccionada === dia?.fecha ? 'bg-[#A78BFA] text-white' : 'bg-white text-[#A78BFA] hover:bg-gray-100'}
                        ${dia && !dia.esPasado ? '' : ''}
                      `}
                    >
                      {dia?.dia}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-[#A78BFA]" />
                <h3 className="text-[#A78BFA] font-semibold">Selecciona una hora</h3>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {horasDisponibles.map(hora => (
                  <button
                    key={hora}
                    onClick={() => setHoraSeleccionada(hora)}
                    className={`
                      p-3 rounded-lg transition-colors
                      ${horaSeleccionada === hora ? 'bg-[#A78BFA] text-white' : 'bg-[#F3F4F6] text-[#A78BFA] hover:bg-[#E0E7FF]'}
                    `}
                  >
                    {hora}
                  </button>
                ))}
              </div>
            </div>

            {fechaSeleccionada && horaSeleccionada && (
              <div className="bg-[#FAF5FF] border border-[#FBCFE8] rounded-lg p-4 mb-6">
                <p className="text-[#A78BFA]">
                  Has seleccionado: <span className="font-semibold">{new Date(fechaSeleccionada + 'T00:00:00').toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' })} a las {horaSeleccionada}</span>
                </p>
                <p className="text-[#9CA3AF] mt-2">Precio: {professional.precio}</p>
              </div>
            )}

            <button
              onClick={handleConfirmar}
              className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
              disabled={!fechaSeleccionada || !horaSeleccionada}
            >
              Confirmar cita
            </button>
          </>
        )}
      </div>
    </div>
  );
}
