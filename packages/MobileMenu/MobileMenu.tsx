import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";

const MobileMenu = ({ items, colorIcon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef?.current?.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative inline-block">
      <TiThMenu
        onClick={toggleMenu}
        className="cursor-pointer"
        color={colorIcon}
        size={22}
      />
      {isOpen && (
        <div
          ref={menuRef}
          className="right-0 absolute mt-8 py-2 min-w-[20rem] bg-white rounded-lg shadow-md"
        >
          <nav className="flex flex-col  px-3">
            <Link href="/">
              <p className="px-[20px] py-[15px] font-semibold cursor-pointer text-[13px] text-[#444444] border-b border-custom-gray">
                INICIO
              </p>
            </Link>
            {items.map((item: any, key: number) => (
              <Link href={item.url} key={key}>
                <p className="px-[20px] py-[15px] font-semibold cursor-pointer text-[13px] text-[#444444] border-b border-custom-gray">
                  {item.content}
                </p>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
