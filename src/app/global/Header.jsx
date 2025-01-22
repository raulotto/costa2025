"use client";

import React from "react";
import useStrapiData from "./StrapiConex";

const Header = () => {
  const { data: menuData, error } = useStrapiData("menus?populate=menuItems");

  if (error) {
    return (
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            <li>Error al cargar el menú</li>
          </ul>
        </nav>
      </header>
    );
  }

  const menuItems = menuData?.menuItems || [];

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          {menuItems.length > 0 ? (
            menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  target={item.new_tab ? "_blank" : "_self"}
                  rel={item.new_tab ? "noopener noreferrer" : ""}
                  className="hover:text-yellow-400"
                >
                  {item.title}
                </a>
              </li>
            ))
          ) : (
            <li>No hay elementos en el menú</li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
