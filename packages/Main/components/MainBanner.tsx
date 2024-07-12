import Layout from "@/packages/Layout/Layout";
import React from "react";

const MainBanner = () => {
  return (
    <Layout
      children={
        <section className="pt-24 px-7">
          <div className="mb-4 pr-20">
            <h1>Diseñamos el universo de tu web</h1>
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
      }
    />
  );
};

export default MainBanner;
