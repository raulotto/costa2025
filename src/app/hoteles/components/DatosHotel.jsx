
import React from "react";

const DatosHotel = ({ textoBienvenida }) => {
  if (!textoBienvenida || textoBienvenida.length === 0) {
    return <p>Texto de bienvenida no disponible.</p>;
  }

  return (
    <div>
  <strong>Texto de bienvenida:</strong>
  {textoBienvenida.map((paragraph, index) => {
    const textContent = paragraph.children?.[0]?.text?.trim();

    if (!textContent) {
      // Renderiza un salto de línea independiente si el texto está vacío
      return <br key={index} />;
    }

    // Renderiza un párrafo normal si hay contenido
    return <p key={index}>{textContent}</p>;
  })}
</div>

  

  );
};


export default DatosHotel;

