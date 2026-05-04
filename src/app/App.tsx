import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Login from './components/Login';
import Register from './components/Register';
import ExplorarServicios from './components/ExplorarServicios';
import PerfilProfesional from './components/PerfilProfesional';
import AgendarCita from './components/AgendarCita';
import SubirComprobante from './components/SubirComprobante';
import HistorialCitas from './components/HistorialCitas';
import Profe from './components/Profe';
import Recuperar from './components/recuperar'; 

type Screen =
  | 'login'
  | 'register'
  | 'explorar'
  | 'perfil'
  | 'agendar'
  | 'comprobante'
  | 'historial'
  | 'profe'
  | 'recuperar';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [userRole, setUserRole] = useState<'cliente' | 'profesional' | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);

  const handleLogin = (role: 'cliente' | 'profesional') => {
    setUserRole(role);
    if (role === 'profesional') {
      setCurrentScreen('profe'); // 👈 si es profesional, va a Profe.tsx
    } else {
      setCurrentScreen('explorar'); // 👈 si es cliente, va a ExplorarServicios
    }
  };

  const handleSelectProfessional = (professional: any) => {
    setSelectedProfessional(professional);
    setCurrentScreen('perfil');
  };

  const handleLogout = () => {
    setUserRole(null);
    setSelectedProfessional(null);
    setCurrentScreen('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-[#A78BFA]" />
            <span
              className="text-2xl font-bold text-[#A78BFA]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              BeautiQ
            </span>
          </div>
          {userRole && (
            <nav className="flex gap-4 items-center">
              <button
                onClick={() => setCurrentScreen('explorar')}
                className="text-[#9CA3AF] hover:text-[#A78BFA] transition-colors"
              >
                Explorar
              </button>
              <button
                onClick={() => setCurrentScreen('historial')}
                className="text-[#9CA3AF] hover:text-[#A78BFA] transition-colors"
              >
                Historial
              </button>
              {userRole === 'profesional' && (
                <button
                  onClick={() => setCurrentScreen('profe')}
                  className="text-[#9CA3AF] hover:text-[#A78BFA] transition-colors"
                >
                  Mis Ofertas
                </button>
              )}
              <button
                onClick={handleLogout}
                className="bg-[#FBCFE8] text-[#1F2937] px-4 py-2 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
              >
                Cerrar sesión
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentScreen === 'login' && (
          <Login
            onLogin={handleLogin}
            onGoToRegister={() => setCurrentScreen('register')}
            onGoToRecover={() => setCurrentScreen('recuperar')}
          />
        )}

        {currentScreen === 'register' && (
          <Register
            onRegister={handleLogin}
            onGoToLogin={() => setCurrentScreen('login')}
          />
        )}

        {currentScreen === 'recuperar' && (
          <Recuperar onBack={() => setCurrentScreen('login')} />
        )}

        {currentScreen === 'explorar' && (
          <ExplorarServicios onSelectProfessional={handleSelectProfessional} />
        )}

        {currentScreen === 'perfil' && selectedProfessional && (
          <PerfilProfesional
            professional={selectedProfessional}
            onAgendar={() => setCurrentScreen('agendar')}
            onBack={() => setCurrentScreen('explorar')}
          />
        )}

        {currentScreen === 'agendar' && (
          <AgendarCita
            professional={selectedProfessional}
            onConfirmar={() => setCurrentScreen('comprobante')}
            onBack={() => setCurrentScreen('perfil')}
          />
        )}

        {currentScreen === 'comprobante' && (
          <SubirComprobante
            onEnviar={() => setCurrentScreen('historial')}
            onBack={() => setCurrentScreen('agendar')}
          />
        )}

        {currentScreen === 'historial' && <HistorialCitas userRole={userRole} />}

        {currentScreen === 'profe' && <Profe />} 
      </main>
    </div>
  );
}
