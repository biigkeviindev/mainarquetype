import React, { ReactNode, useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";

type Item = {
  content: string | ReactNode;
};

type MenuProps = {
  items: Item[];
};

const Menu = ({ items }: MenuProps) => {
  const [scrollActive, setScrollActive] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    // Añadir el event listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect;

  console.log(scrollActive ? "mostrar" : "ocultar");

  return (
    <>
      <header
        className={`${
          scrollActive ? " sticky top-0 bg-black shadow-md" : " relative "
        } flex border-b border-[#f1f2f3] w-full items-center py-2 backdrop-blur-lg h-20 `}
      >
        <div className="flex items-center justify-between w-full px-[18px]">
          <h2
            className={
              scrollActive
                ? "flex flex-col items-center text-white mb-0"
                : "flex flex-col items-center mb-0"
            }
          >
            {!scrollActive && <img className="w-[40px] mb-2" src="/logo.png" />}
            <img
              className={`${scrollActive ? "w-[8rem]" : "w-[52px]"}`}
              src={`${scrollActive ? "/logo-alphatek.svg" : "/logoname.svg"}`}
            />
          </h2>
          <div>
            <nav className="hidden lg:flex gap-8 text-sm">
              {items.map((item, key: number) => (
                <div key={key}>{item?.content}</div>
              ))}
            </nav>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <button
              className={
                scrollActive
                  ? "bg-white text-black cursor-pointer shadow-md"
                  : " cursor-pointer shadow-md"
              }
            >
              Hablar con un experto
            </button>
            <TiThMenu
              className="cursor-pointer"
              color={scrollActive ? "white" : "black"}
              size={22}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
