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
};

const ServiceLayer = ({ list }: ServiceLayerProps) => {
  return (
    <section className="pt-24 px-7">
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
      <h4 className="text-center font-medium mb-7">{item.title}</h4>
      <p className="text-center m-h-20 mb-4">{item.description}</p>
      <button className="border border-black bg-white text-black">
        Desde {item.price} {typeof item.price !== "string" && "€"}
      </button>
    </div>
  );
};

export default ServiceLayer;
