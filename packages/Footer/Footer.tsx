import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { IoMdArrowDown } from "react-icons/io";

const Footer = ({ links = [] }: any) => {
  return (
    <Layout
      children={
        <section className=" bg-black text-white">
          <div className="pt-10 pb-10 px-7">
            <div>
              {links.map((mainSection: any, key: number) => (
                <FooterLinkItem mainSection={mainSection} />
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
};

const FooterLinkItem = ({ mainSection }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between py-3 items-center"
      >
        <p className="text-[16px] font-bold">{mainSection.title}</p>
        <IoMdArrowDown
          className={`w-[20px] h-[20px] cursor-pointer ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && (
        <div>
          <p className="text-[13px]">{mainSection.title}</p>
        </div>
      )}
    </div>
  );
};

export default Footer;
