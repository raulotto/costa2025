import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-blue-600 font-bold mb-4">Nuestros Hoteles</h3>
          <ul className="space-y-2">
            {[
              "Tumbes",
              "Piura",
              "Chiclayo",
              "Trujillo Golf",
              "Trujillo Centro",
              "Cajamarca",
              "Lima Ciudad",
              "Lima Aeropuerto",
              "Arequipa",
              "Cusco",
              "Pucallpa",
            ].map((hotel) => (
              <li key={hotel}>
                <Link href="#" className="hover:text-blue-600">
                  {hotel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-blue-600 font-bold mb-4">Sobre Nosotros</h3>
          <ul className="space-y-2">
            {["Lee nuestro Blog", "Somos Dog Friendly", "Reservas Grupos", "Alcance y Políticas del Sistema Integrado de Gestión"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-blue-600 font-bold mb-4">Atención al Cliente</h3>
          <ul className="space-y-2">
            {[
              "Preguntas Frecuentes",
              "Facturación Electrónica",
              "Facturación Electrónica Hoteles",
              "Facturación Electrónica Pucallpa",
              "Modificar Reserva",
              "Términos y condiciones de reservas",
              "Política de uso de datos personales",
              "Política de uso aceptable",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-blue-600">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-blue-600 font-bold mb-4">Contáctanos</h3>
          <ul className="space-y-2">
            <li>Av. Salaverry 3060, Magdalena del Mar – Lima, Perú</li>
            <li>Reservas: (+51) 01 200 9200</li>
            <li className="text-blue-600">reservas@costadelsolperu.com</li>
            <li>fits@costadelsolperu.com</li>
            <li>eventos@costadelsolperu.com</li>
            <li>corporativo@costadelsolperu.com</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Policies */}
      <div className="container mx-auto px-4 py-4 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            <Link href="#"><Image src="/facebook-icon.svg" alt="Facebook" width={24} height={24} /></Link>
            <Link href="#"><Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} /></Link>
            <Link href="#"><Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} /></Link>
            <Link href="#"><Image src="/tiktok-icon.svg" alt="TikTok" width={24} height={24} /></Link>
            <Link href="#"><Image src="/dog-friendly-icon.svg" alt="Dog Friendly" width={24} height={24} /></Link>
          </div>
          <div className="text-center text-sm mt-4 md:mt-0">
            © 2025 Costa del Sol Wyndham Hoteles. All rights reserved.
          </div>
        </div>
        <div className="mt-4 text-center space-x-6 text-sm">
          <Link href="#" className="hover:underline">Términos y condiciones</Link>
          <Link href="#" className="hover:underline">Política Web de Privacidad</Link>
          <Link href="#" className="hover:underline">Términos y condiciones Dog Friendly</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
