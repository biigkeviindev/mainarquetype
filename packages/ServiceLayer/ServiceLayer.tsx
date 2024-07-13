import React from "react";
import { SERVICE_LIST_ITEMS } from "../Main/constants/common";

type Service = {
  title: string;
  description: string;
  price: number | string;
  link: string;
  logo: string;
};

type ServiceLayerProps = {
  list: Service[];
  title: string;
};

const ServiceLayer = ({ list, title = "Default Title" }: ServiceLayerProps) => {
  return (
    <section className="pt-24 px-7">
      <div className="flex items-center mb-14">
        <img src="/animated-arrow.svg" className="w-10 mr-5 rotate-90" alt="" />
        <h2 className="mb-0 font-bold">{title}</h2>
      </div>
      <div className="flex flex-wrap">
        {list.map((service, key) => (
          <ServiceItem key={key} item={service} />
        ))}
      </div>
    </section>
  );
};

const ServiceItem = ({ item }: any) => {
  return (
    <div className="w-1/2 flex flex-col items-center mb-10">
      <img src={item.logo} alt={item.title} className="w-[4rem] h-[4rem]" />
      <h4 className="text-center font-medium mb-7">{item.title}</h4>
      <p className="text-center m-h-20 mb-4">{item.description}</p>
      <button className="border border-black bg-white text-black shadow-md">
        Desde {item.price} {typeof item.price !== "string" && "€"}
      </button>
    </div>
  );
};

export default ServiceLayer;
