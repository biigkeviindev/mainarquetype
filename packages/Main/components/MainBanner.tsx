import Layout from "@/packages/Layout/Layout";
import React, { useEffect, useState } from "react";
import { generarCadenaRandomFc } from "../utils";

const MainBanner = () => {
  const services = ["Web", "Ecommerce", "Marketing"];
  const [generatedTitle, setGeneratedTitle] = useState(
    services[Math.floor(Math.random() * 4)]
  );
  const [showGeneretedTitle, setShowGeneratedTitle] = useState(true);

  const [serviceOption, setUseOption] = useState("Web");

  const changeTitle = () => {};

  useEffect(() => {
    let randomServiceOpt = Math.floor(Math.random() * 2);

    const modifyServiceTitle = setInterval(() => {
      setUseOption(services[randomServiceOpt]);
    }, 2000);
    return () => clearInterval(modifyServiceTitle);
  }, []);

  useEffect(() => {
    const modifyServiceTitle = setInterval(() => {
      setGeneratedTitle((prevEstado: any) => generarCadenaRandomFc());
      changeTitle();
    }, 200);
    return () => clearInterval(modifyServiceTitle);
  }, []);

  useEffect(() => {
    const modifyServiceTitle = setInterval(() => {
      setGeneratedTitle((prevEstado: any) => generarCadenaRandomFc());
      setShowGeneratedTitle(false);
    }, 5000);
    return () => clearInterval(modifyServiceTitle);
  }, []);

  useEffect(() => {
    const modifyServiceTitle = setInterval(() => {
      setShowGeneratedTitle(true);
    }, 10000);
    return () => clearInterval(modifyServiceTitle);
  }, []);

  return (
    <Layout>
      <section className="pt-12 px-7 !mt-6">
        <div className="bg-black rounded-lg mb-8 shadow-md">
          <img src="/services.png" alt="" />
        </div>
        <div className="mb-4 pr-20">
          <h1>
            Desarrollamos el mundo de tu{" "}
            <span className="font-bold text-[27px]">
              {showGeneretedTitle ? generatedTitle : serviceOption}
            </span>
          </h1>
          <span>
            Somos una agencia súper digital con más de 87.600 horas de
            experiencia. Ayudamos a empresas, grandes y pequeñas, diseñando
            logos de alto nivel, desarrollando webs inolvidables y creando
            tiendas que venden. Conectamos redes sociales, hacemos SEO bueno,
            bonito y barato. ¡Estamos aquí para llevar tu marca al siguiente
            nivel!
          </span>
        </div>
        <div>
          <button className="mr-8">Nuestros servicios</button>
          <span className="!underline-offset-2">Descubre más</span>
        </div>
      </section>
    </Layout>
  );
};

export default MainBanner;
