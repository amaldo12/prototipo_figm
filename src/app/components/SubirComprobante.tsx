import { useState } from 'react';
import { Upload, ArrowLeft, CheckCircle } from 'lucide-react';

interface SubirComprobanteProps {
  onEnviar: () => void;
  onBack: () => void;
}

export default function SubirComprobante({ onEnviar, onBack }: SubirComprobanteProps) {
  const [archivo, setArchivo] = useState<File | null>(null);
  const [previsualizacion, setPrevisualizacion] = useState<string>('');
  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setArchivo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrevisualizacion(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnviar = () => {
    if (!archivo) {
      alert('Por favor selecciona un comprobante');
      return;
    }
    setMostrarConfirmacion(true);
    setTimeout(() => {
      onEnviar();
    }, 2000);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-[#A78BFA] hover:text-[#8B5CF6] mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver
      </button>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-[#A78BFA] mb-2 font-bold text-2xl">Subir comprobante de pago</h1>
        <p className="text-[#9CA3AF] mb-6">
          Por favor, sube una imagen del comprobante de transferencia o pago realizado
        </p>

        {mostrarConfirmacion ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#FBCFE8] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-[#1F2937]" />
            </div>
            <h2 className="text-[#A78BFA] mb-2 font-bold">¡Comprobante enviado!</h2>
            <p className="text-[#9CA3AF]">El profesional validará tu pago pronto. Redirigiendo al historial...</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-[#A78BFA] mb-3 font-semibold">Información de pago</h3>
              <div className="bg-[#F3F4F6] rounded-lg p-4 space-y-2">
                <p className="text-[#A78BFA]">
                  <span className="text-[#9CA3AF]">Banco:</span> Banco Nacional
                </p>
                <p className="text-[#A78BFA]">
                  <span className="text-[#9CA3AF]">Cuenta:</span> 1234-5678-9012-3456
                </p>
                <p className="text-[#A78BFA]">
                  <span className="text-[#9CA3AF]">Titular:</span> BeautiQ S.A.
                </p>
                <p className="text-[#A78BFA]">
                  <span className="text-[#9CA3AF]">Referencia:</span> Cita #12345
                </p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[#A78BFA] mb-3 font-semibold">Comprobante de pago</label>

              {!previsualizacion ? (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-[#A78BFA] rounded-lg cursor-pointer bg-[#F3F4F6] hover:bg-[#E0E7FF] transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-12 h-12 text-[#A78BFA] mb-3" />
                    <p className="mb-2 text-[#A78BFA]">
                      Haz clic para subir o arrastra el archivo
                    </p>
                    <p className="text-[#9CA3AF]">PNG, JPG o PDF (MAX. 5MB)</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                  />
                </label>
              ) : (
                <div className="relative">
                  <img
                    src={previsualizacion}
                    alt="Comprobante"
                    className="w-full h-auto rounded-lg border-2 border-[#FBCFE8]"
                  />
                  <button
                    onClick={() => {
                      setArchivo(null);
                      setPrevisualizacion('');
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                  <div className="mt-2 text-[#9CA3AF]">
                    Archivo seleccionado: {archivo?.name}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#FAF5FF] border border-[#FBCFE8] rounded-lg p-4 mb-6">
              <p className="text-[#A78BFA]">
                <strong>Nota:</strong> Una vez que envíes el comprobante, el profesional lo validará.
                Recibirás una notificación cuando tu pago sea confirmado.
              </p>
            </div>

            <button
              onClick={handleEnviar}
              className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed font-semibold"
              disabled={!archivo}
            >
              Enviar comprobante
            </button>
          </>
        )}
      </div>
    </div>
  );
}
