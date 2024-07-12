import React, { ReactNode } from "react";
import { TiThMenu } from "react-icons/ti";

type Item = {
  content: string | ReactNode;
};

type MenuProps = {
  items: Item[];
};

const Menu = ({ items }: MenuProps) => {
  return (
    <>
      <header className="flex items-center py-2 bg-white backdrop-blur-lg h-20 shadow-md">
        <div className="flex items-center justify-between w-full px-[18px]">
          <h2>PixelCode</h2>
          <div>
            <nav className="hidden lg:flex gap-8 text-sm">
              {items.map((item, key: number) => (
                <div key={key}>{item?.content}</div>
              ))}
            </nav>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <button>Hablar con un experto</button>
            <TiThMenu size={22} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Menu;
