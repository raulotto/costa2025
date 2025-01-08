import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-1/3 bg-gray-50 p-6 border-l border-gray-200">
    {/* Sección Derecha */}
    <div className="bg-blue-100 p-4 rounded-lg text-center mb-6">
      <p className="text-lg font-semibold">
        Check in: <span className="text-blue-600">15:00</span>
      </p>
      <p className="text-lg font-semibold">
        Check out: <span className="text-blue-600">12:00</span>
      </p>
    </div>
  
    {/* Aviso */}
    <div className="bg-yellow-100 p-4 rounded-lg text-center text-yellow-800 mb-6">
      <p>
        El horario de piscina cambiará a partir del 16 de diciembre:
      </p>
      <p>Lunes a Domingo, de 9:00 a.m. a 5:30 p.m.</p>
    </div>
  
    {/* Ubicación */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
      <iframe
        src="https://www.google.com/maps/embed?..."
        className="w-full h-48 rounded-lg border"
        loading="lazy"
      ></iframe>
    </div>
  </aside>
  );
}
