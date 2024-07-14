import Layout from "@/packages/Layout/Layout";
import React from "react";
import FormularioContacto from "../Formularios/FormularioContacto";

const ContactoSection = () => {
  return (
    <Layout>
      <main className="container mx-auto">
        <section className="px-7 pt-24 pb-5 bg-black text-white">
          <div className="w-full mb-6">
            <h1 className="mb-6">Transformemos problemas en oportunidades</h1>
            <p className="mb-4">
              Buscamos relaciones duraderas para ayudar a nuestros clientes a
              avanzar en un crecimiento rápido de manera eficiente. Cuéntanos
              dónde estás y dónde quieres estar.
            </p>
            <h3 className="text-[15px]">Ahora estás en buena compañía</h3>
          </div>
          <div className="w-full py-8 px-4 bg-white text-black rounded-lg shadow min-h-[200px]">
            <div>
              <h2 className="text-[14px] font-semibold<">
                NOS ENCANTARÍA CONOCER TU PROYECTO
              </h2>
              <p>
                Nuestro equipo se contactará dentro de las próximas dos horas
                hábiles.
              </p>
            </div>
            <div>
              <FormularioContacto />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactoSection;
