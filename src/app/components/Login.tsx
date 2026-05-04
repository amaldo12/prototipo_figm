import { useState } from 'react';

interface LoginProps {
  onLogin: (role: 'cliente' | 'profesional') => void;
  onGoToRegister: () => void;
  onGoToRecover: () => void; 
}

export default function Login({ onLogin, onGoToRegister, onGoToRecover }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'cliente' | 'profesional'>('cliente');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(role);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-[#A78BFA] mb-6 text-center font-bold text-2xl">
        BeautiQ – Iniciar Sesión
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
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

        {/* Password */}
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

        {/* Role */}
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
        >
          Ingresar
        </button>

        {/* Extra options */}
        <div className="text-center space-y-2">
          <button
            type="button"
            onClick={onGoToRegister}
            className="text-[#A78BFA] hover:underline"
          >
            ¿No tienes cuenta? Regístrate
          </button>
          <br />
          <button
            type="button"
            onClick={onGoToRecover} 
            className="text-[#9CA3AF] hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </form>
    </div>
  );
}