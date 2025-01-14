"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import DatosHotel from "../components/DatosHotel";

export default function HotelPage() {
  const { slug } = useParams(); // Obtener el slug dinámico
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        console.log("Slug recibido:", slug);

        const res = await fetch(`http://localhost:1337/api/hoteles?filters[slug][$eq]=${slug}`);
        const responseData = await res.json();
        console.log("Datos completos recibidos de la API:", responseData);

        // Extraer directamente los datos del hotel
        const hotelData = responseData?.data?.[0] || null;
        console.log("Datos del hotel extraídos:", hotelData);

        if (hotelData) {
          setHotel(hotelData); // Guardar los datos completos del hotel
        } else {
          setError("Hotel no encontrado o datos incompletos.");
        }
      } catch (err) {
        console.error("Error al cargar los datos del hotel:", err);
        setError("Error al cargar los datos del hotel.");
      }
    };

    if (slug) {
      fetchHotelData();
    }
  }, [slug]);

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
