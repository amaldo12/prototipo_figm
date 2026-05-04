import { useState } from 'react';

interface RecuperarProps {
  onBack: () => void;
}

export default function Recuperar({ onBack }: RecuperarProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí podrías enviar el correo al backend para generar el link de recuperación
    alert(`Se ha enviado un enlace de recuperación a: ${email}`);
    onBack(); // 👈 vuelve al login después de enviar
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-[#A78BFA] mb-6 text-center font-bold text-2xl">
        Recuperar Contraseña
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#A78BFA] mb-2">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
        >
          Restablecer contraseña
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full mt-4 bg-gray-200 text-[#1F2937] py-2 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
        >
          Volver al inicio de sesión
        </button>
      </form>
    </div>
  );
}