"use client";

import { useParams } from "next/navigation";
import useStrapiData from "../components/StrapiConex";
import DatosHotel from "../components/DatosHotel";

export default function HotelPage() {
  const { slug } = useParams(); // Obtener el slug dinámico
  const { data: hotel, error } = useStrapiData(`hoteles?filters[slug][$eq]=${slug}`);

  if (error) {
    return <p>{error}</p>;
  }

  if (!hotel) {
    return <p>Cargando datos del hotel...</p>;
  }

  return (
    <div>
      <h1>{hotel.nombre_pagina || "Nombre no disponible"}</h1>
      <p>
        <strong>Slug:</strong> {hotel.slug || "Slug no disponible"}
      </p>
      <p>
        <strong>Ubicación:</strong> {hotel.ubicacion || "Ubicación no disponible"}
      </p>
      <p>
        <strong>Email:</strong> {hotel.email || "Email no disponible"}
      </p>
      <p>
        <strong>Teléfono:</strong> {hotel.telefono || "Teléfono no disponible"}
      </p>
      {/* Nuevo componente para texto de bienvenida */}
      <DatosHotel textoBienvenida={hotel.texto_bienvenida} />
    </div>
  );
}
