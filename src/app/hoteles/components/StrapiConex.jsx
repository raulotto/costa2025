import { useState, useEffect } from "react";

const useStrapiData = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:1337/api/${endpoint}`);
        const responseData = await res.json();

        const extractedData = responseData?.data?.[0] || null;

        if (extractedData) {
          setData(extractedData);
        } else {
          setError("Datos no encontrados o incompletos.");
        }
      } catch (err) {
        console.error("Error al cargar los datos de la API:", err);
        setError("Error al cargar los datos de la API.");
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  return { data, error };
};

export default useStrapiData;
