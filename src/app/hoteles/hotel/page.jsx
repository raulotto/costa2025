import MenuInterno from '../components/MenuInterno';
import Sidebar from '../components/Sidebar';

export default function LimaPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Contenedor principal */}
      <div className="bg-white max-w-7xl mx-auto rounded-lg shadow-lg overflow-hidden">
        
        {/* Menú interno */}
        <MenuInterno /> 
        

        

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row">
          {/* Sección Izquierda */}
          <div className="flex-1 p-6">
            {/* Sección Resumen */}
            <div id="resumen">
              <h1 className="text-2xl font-bold mb-4">
                ¡Bienvenido al Hotel Costa del Sol Wyndham Lima City!
              </h1>
              <p className="text-gray-700 mb-4">
                En la ciudad de los reyes y la capital gastronómica de Latinoamérica...
              </p>
              <p className="text-gray-700 mb-4">
                Lima, es la única capital de Sudamérica con una envidiable vista y
                acceso al mar. Costa del Sol Wyndham Lima City es el hotel ideal
                para hacer turismo y negocios en la ciudad por su fácil acceso a
                los principales puntos turísticos y centros financieros.
              </p>
              <p className="text-gray-700 mb-4">
                Descubre un escape perfecto para turistas y viajeros en Lima.
                Nuestro hotel ubicado en una de las zonas más seguras y exclusivas
                de Lima, te coloca a pasos de los mejores cafés, restaurantes y
                tiendas de clase mundial. Además, disfruta de un acceso rápido a
                los icónicos atractivos turísticos como el encantador centro
                colonial de Lima y el famoso malecón de la Costa Verde, que ofrece
                vistas impresionantes del océano Pacífico.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Dirección:</strong> Av. Salaverry 3060, Magdalena del
                  Mar Lima, Perú
                </li>
                <li>
                  <strong>Email:</strong> reservas@costadelsolperu.com
                </li>
                <li>
                  <strong>Teléfono:</strong> (+511) 2009200
                </li>
              </ul>
            </div>

            {/* Sección Fotos */}
            <div id="fotos" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Galería de Fotos</h2>
              <p className="text-gray-700 mb-4">
                Aquí puedes ver algunas de las fotos más representativas del
                hotel y las instalaciones.
              </p>
              {/* Aquí puedes agregar tus fotos */}
              <div className="grid grid-cols-2 gap-4">
                <img src="foto1.jpg" alt="Foto 1" className="rounded-lg" />
                <img src="foto2.jpg" alt="Foto 2" className="rounded-lg" />
              </div>
            </div>

            {/* Sección Habitaciones */}
            <div id="habitaciones" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Habitaciones</h2>
              <p className="text-gray-700 mb-4">
                Ofrecemos una variedad de habitaciones con servicios exclusivos
                para una experiencia única.
              </p>
            </div>

            {/* Sección Experiencias */}
            <div id="experiencias" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Experiencias</h2>
              <p className="text-gray-700 mb-4">
                Disfruta de experiencias únicas en Lima, desde tours culturales
                hasta aventuras en la Costa Verde.
              </p>
            </div>

            {/* Sección Restaurantes */}
            <div id="restaurantes" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Restaurantes</h2>
              <p className="text-gray-700 mb-4">
                Disfruta de nuestra oferta gastronómica en nuestros restaurantes
                de alta calidad.
              </p>
            </div>

            {/* Sección Beneficios */}
            <div id="beneficios" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Beneficios</h2>
              <p className="text-gray-700 mb-4">
                Nuestros huéspedes disfrutan de una serie de beneficios exclusivos,
                como descuentos y promociones especiales.
              </p>
            </div>

            {/* Sección Comentarios */}
            <div id="comentarios" className="mt-10">
              <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
              <p className="text-gray-700 mb-4">
                Lee lo que nuestros huéspedes dicen sobre su experiencia en el
                hotel.
              </p>
            </div>
          </div>

        {/* componente Sidebar */}
         <Sidebar />
         
        </div>
      </div>
    </div>
  );
}
