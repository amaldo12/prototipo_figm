import { useState } from 'react';

interface RegisterProps {
  onRegister: (role: 'cliente' | 'profesional') => void;
  onGoToLogin: () => void;
}

export default function Register({ onRegister, onGoToLogin }: RegisterProps) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'cliente' | 'profesional'>('cliente');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    onRegister(role);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-[#A78BFA] mb-6 text-center font-bold text-2xl">BeautiQ – Registro</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#A78BFA] mb-2">Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="Juan Pérez"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="correo@ejemplo.com"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Teléfono</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="+1 234 567 890"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
            placeholder="••••••••"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Tipo de usuario</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="cliente"
                checked={role === 'cliente'}
                onChange={() => setRole('cliente')}
                className="w-4 h-4 text-[#A78BFA]"
              />
              <span className="text-[#A78BFA]">Cliente</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="profesional"
                checked={role === 'profesional'}
                onChange={() => setRole('profesional')}
                className="w-4 h-4 text-[#A78BFA]"
              />
              <span className="text-[#A78BFA]">Profesional</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
        >
          Registrarse
        </button>

        <div className="text-center">
          <button
            type="button"
            onClick={onGoToLogin}
            className="text-[#A78BFA] hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </form>
    </div>
  );
}
