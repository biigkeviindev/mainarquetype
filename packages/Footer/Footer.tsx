import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { IoMdArrowDown } from "react-icons/io";

const Footer = ({ links = [] }: any) => {
  return (
    <Layout>
      <>
        <section className=" bg-black text-white">
          <div className="pt-10 pb-10 px-7">
            <div>
              {links.map((mainSection: any, key: number) => (
                <FooterLinkItem key={key} mainSection={mainSection} />
              ))}
            </div>
          </div>
        </section>
        <section className="flex justify-center border-[#f1f2f3] border-2 gap-7 py-4">
          <img
            src="/new-facebook.svg"
            className="w-[20px] h-[20px]"
            alt="Enlace facebook"
          />
          <img
            src="/new-linkedin.svg"
            className="w-[20px] h-[20px]"
            alt="Enlace linkedIn"
          />
          <img
            src="/new-instagram.svg"
            className="w-[20px] h-[20px]"
            alt="Enlace instagram"
          />
        </section>
        <section className=" bg-black text-white">
          <div className="pt-10 pb-10 px-7 text-center fotn-bold">
            <span className="text-[22px]">PIXELCODE</span>
            <p className="text-[13px] text-[#c5c5c7]">
              © 2010 - 2024 CodeAi Europe. Todos los derechos reservados.
            </p>
          </div>
        </section>
      </>
    </Layout>
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
