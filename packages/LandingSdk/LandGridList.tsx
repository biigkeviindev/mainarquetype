import React from "react";
import Layout from "../Layout/Layout";

const LandGridList = ({ list = [] }: any) => {
  return (
    <Layout>
      <section className="px-8 pt-[70px]">
        <div className="text-center">
          <h2 className="mb-0 font-extrabold">Aumenta Tu Visibilidad Online</h2>
          <h3 className="text-[20px]">
            Llega a más clientes potenciales y haz crecer tu negocio en el mundo
            digital.
          </h3>
        </div>
        <section className="mt-[3rem]">
          <div className="flex flex-wrap gap-2">
            {list.map((entry: any, key: any) => (
              <ItemList entry={entry} key={key} />
            ))}
          </div>
        </section>
      </section>
    </Layout>
  );
};

const ItemList = ({ entry }: any) => {
  return (
    <section className="w-full py-[20px] px-[10px] bg-[#f1f2f3] rounded-lg shadow-md">
      <div className="flex gap-3">
        <div className="flex items-center">{entry.icon}</div>
        <div>
          <h4>{entry?.title}</h4>
        </div>
      </div>
      <div>
        <p>{entry?.description}</p>
      </div>
    </section>
  );
};

export default LandGridList;
