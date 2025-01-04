"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="bg-blue-600">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold">REDESCUBRE</h2>
            <p className="text-2xl md:text-3xl mt-4">EL SUR DEL PERÚ</p>
            <p className="text-lg md:text-xl mt-2">CUSCO Y AREQUIPA</p>
            <a
              href="#"
              className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded"
            >
              Descubre más aquí →
            </a>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-full flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-purple-500 to-indigo-700">
            <h2 className="text-4xl md:text-6xl font-bold">¡Recibe el 2025!</h2>
            <p className="text-2xl md:text-3xl mt-4">Con paquetes especiales</p>
            <a
              href="#"
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded"
            >
              Ver más →
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
