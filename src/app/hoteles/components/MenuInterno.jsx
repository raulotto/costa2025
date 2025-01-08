import React from 'react'
import Link from 'next/link'    

const MenuInterno = () => {
  return (
    <div>
      {/* Menú interno */}
      <nav className="flex space-x-6 border-b border-gray-200 p-4 text-sm font-medium">
          <Link href="#resumen" className="text-blue-600 hover:text-blue-800">
            Resumen
          </Link>
          <Link href="#fotos" className="text-gray-600 hover:text-blue-800">
            Fotos
          </Link>
          <Link href="#habitaciones" className="text-gray-600 hover:text-blue-800">
            Habitaciones
          </Link>
          <Link href="#experiencias" className="text-gray-600 hover:text-blue-800">
            Experiencias
          </Link>
          <Link href="#restaurantes" className="text-gray-600 hover:text-blue-800">
            Restaurantes
          </Link>
          <Link href="#beneficios" className="text-gray-600 hover:text-blue-800">
            Beneficios
          </Link>
          <Link href="#comentarios" className="text-gray-600 hover:text-blue-800">
            Comentarios
          </Link>
        </nav>
    </div>
  )
}

export default MenuInterno
