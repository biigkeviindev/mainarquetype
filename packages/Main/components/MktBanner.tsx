import Layout from "@/packages/Layout/Layout";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const servicios = [
  "SEO",
  "Redacción de artículos",
  "Campañas de Facebook",
  "AdWords",
  "Mail Marketing",
  "Campañas de Instagram",
];

const MktBanner = () => {
  return (
    <Layout>
      <section className="container bg-[#f1f2f3] mx-auto pt-24 mt-6 px-7 pb-12">
        <div className="flex mb-4">
          <div className="w-full">
            <h2 className="font-bold mb-5">Hacemos campañas como estas</h2>
            <p className="mb-8">
              Llegar a lo más alto y construir una relación positiva con
              nuestros clientes potenciales, estos son los dos pilares que
              sostienen nuestra filosofía si hablamos de posicionamiento y redes
              sociales.
            </p>
            <div className="flex flex-wrap">
              {servicios.map((service, key) => (
                <p className="w-1/2 mb-4 flex gap-2" key={key}>
                  <span>
                    <MdArrowForwardIos />
                  </span>
                  <b>{service}</b>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-full">
            <img src="/facebook.svg" alt="Facebook" />
            <img src="/instagram.svg" alt="Instagram" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MktBanner;
