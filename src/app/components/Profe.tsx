import { useState } from 'react';

export default function Profe() {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [reseñas, setReseñas] = useState('');
  const [precio, setPrecio] = useState('');
  const [sobre, setSobre] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  const [servicios, setServicios] = useState('');
  const [foto, setFoto] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const oferta = {
      nombre,
      especialidad,
      ubicacion,
      reseñas,
      precio,
      sobre,
      disponibilidad,
      servicios,
      foto,
    };
    console.log(oferta);
    alert('Oferta creada correctamente');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-[#A78BFA] mb-6 text-center font-bold text-2xl">
        Crear Oferta Profesional
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#A78BFA] mb-2">Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: María González"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Especialidad</label>
          <input
            type="text"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: Peluquería y Maquillaje"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Ubicación</label>
          <input
            type="text"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: Centro"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Reseñas (ej: 4.8 (32 reseñas))</label>
          <input
            type="text"
            value={reseñas}
            onChange={(e) => setReseñas(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: 4.8 (32 reseñas)"
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Precio</label>
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: $50/hora"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Sobre el profesional</label>
          <textarea
            value={sobre}
            onChange={(e) => setSobre(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Describe tu experiencia y compromiso..."
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Disponibilidad</label>
          <textarea
            value={disponibilidad}
            onChange={(e) => setDisponibilidad(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: Lunes a Viernes: 9:00 - 18:00"
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Servicios ofrecidos</label>
          <textarea
            value={servicios}
            onChange={(e) => setServicios(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Ejemplo: Servicio básico - $50/hora, Servicio premium - $70/hora..."
            required
          />
        </div>

        <div>
          <label className="block text-[#A78BFA] mb-2">Foto (URL)</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#F3F4F6] border border-gray-300"
            placeholder="Pega aquí el enlace de tu foto"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#FBCFE8] text-[#1F2937] py-3 rounded-lg hover:bg-[#F9A8D4] transition-colors font-semibold"
        >
          Crear Oferta
        </button>
      </form>
    </div>
  );
}