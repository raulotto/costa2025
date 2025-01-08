"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Image
            src="/logo-costa-color-2025.svg"
            alt="Costa del Sol Logo"
            width={350}
            height={50}
            className="h-8"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-blue-500">
          <Link
            href="#"
            className="border border-white px-3 py-1 rounded-lg hover:bg-white hover:text-blue-600"
          >
            ÚLTIMA OPORTUNIDAD
          </Link>

          <Link href="/hoteles/hotel" className="hover:text-orange-400">
             HOTELES
          </Link>

          <Link href="#" className="hover:text-orange-400">
            PAQUETES
          </Link>

          <Link href="#" className="hover:text-orange-400">
            PROMOCIONES
          </Link>

          <Link href="#" className="hover:text-orange-400">
            ORGANIZA TU EVENTO
          </Link>

          <Link href="#" className="">
            ES
          </Link>

          <Link href="tel:+51012009200" className="hover:underline">
            (+51) 01 200 9200
          </Link>

          <Link href="#" className="hover:underline">
            Agencias/Empresas
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white text-blue-600 w-full px-4 py-4 space-y-4">
          <Link
            href="#"
            className="w-full border border-blue-600 text-blue-600 px-3 py-1 rounded-lg block"
          >
            ÚLTIMA OPORTUNIDAD
          </Link>
          <Link href="#" className="block text-left text-orange-400">
            HOTELES
          </Link>
          <Link href="#" className="block text-left">
            PAQUETES
          </Link>
          <Link href="#" className="block text-left">
            PROMOCIONES
          </Link>
          <Link href="#" className="block text-left">
            ORGANIZA TU EVENTO
          </Link>
          <Link href="#" className="block text-left">
            ES
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
