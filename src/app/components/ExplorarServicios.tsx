import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface ExplorarServiciosProps {
  onSelectProfessional: (professional: any) => void;
}

const mockProfessionals = [
  {
    id: 1,
    nombre: 'María González',
    categoria: 'Belleza',
    especialidad: 'Peluquería y Maquillaje',
    precio: '$50/hora',
    ubicacion: 'Centro',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    disponibilidad: 'Lunes a Viernes: 9:00 - 18:00'
  },
  {
    id: 2,
    nombre: 'Carlos Ramírez',
    categoria: 'Fitness',
    especialidad: 'Entrenador Personal',
    precio: '$40/hora',
    ubicacion: 'Norte',
    foto: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop',
    disponibilidad: 'Lunes a Sábado: 6:00 - 20:00'
  },
  {
    id: 3,
    nombre: 'Ana Martínez',
    categoria: 'Cuidado corporal',
    especialidad: 'Spa',
    precio: '$30/hora',
    ubicacion: 'Sur',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    disponibilidad: 'Lunes a Viernes: 14:00 - 20:00'
  },
  {
    id: 4,
    nombre: 'Luis Torres',
    categoria: 'Estetica',
    especialidad: 'Tatuador',
    precio: '$60/hora',
    ubicacion: 'Este',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    disponibilidad: 'Lunes a Sábado: 8:00 - 17:00'
  },
  {
    id: 5,
    nombre: 'Patricia Vargas',
    categoria: 'Belleza',
    especialidad: 'Manicura y Pedicura',
    precio: '$35/hora',
    ubicacion: 'Centro',
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    disponibilidad: 'Martes a Domingo: 10:00 - 19:00'
  },
  {
    id: 6,
    nombre: 'Jorge Méndez',
    categoria: 'Fitness',
    especialidad: 'Yoga',
    precio: '$35/hora',
    ubicacion: 'Oeste',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    disponibilidad: 'Lunes a Viernes: 7:00 - 12:00'
  }
];

const categorias = ['Todas', 'Belleza', 'Fitness', 'Educación', 'Hogar'];
const ubicaciones = ['Todas', 'Centro', 'Norte', 'Sur', 'Este', 'Oeste'];

export default function ExplorarServicios({ onSelectProfessional }: ExplorarServiciosProps) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const professionalsFiltrados = mockProfessionals.filter(prof => {
    const coincideCategoria = categoriaSeleccionada === 'Todas' || prof.categoria === categoriaSeleccionada;
    const coincideUbicacion = ubicacionSeleccionada === 'Todas' || prof.ubicacion === ubicacionSeleccionada;
    const coincideBusqueda = prof.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                             prof.especialidad.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideUbicacion && coincideBusqueda;
  });

  return (
    <div>
      {/* Header solo con título */}
      <div className="flex justify-start items-center mb-6">
        <h1 className="text-[#A78BFA] font-bold text-2xl">Explorar Servicios</h1>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Aquí puedes añadir tus filtros de búsqueda, categoría y ubicación */}
        </div>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {professionalsFiltrados.map(prof => (
          <div key={prof.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={prof.foto} alt={prof.nombre} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-[#A78BFA] mb-2">{prof.nombre}</h3>
              <p className="text-[#9CA3AF] mb-1">{prof.especialidad}</p>
              <div className="flex items-center gap-1 text-[#9CA3AF] mb-2">
                <MapPin className="w-4 h-4" />
                <span>{prof.ubicacion}</span>
              </div>
              <p className="text-[#A78BFA] font-semibold mb-3">{prof.precio}</p>
              <button
                onClick={() => onSelectProfessional(prof)}
                className="w-full bg-[#FBCFE8] text-[#1F2937] py-2 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>

      {professionalsFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#9CA3AF]">No se encontraron profesionales con los filtros seleccionados</p>
        </div>
      )}
    </div>
  );
}
