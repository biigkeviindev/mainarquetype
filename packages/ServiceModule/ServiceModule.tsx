import React from "react";
import Layout from "../Layout/Layout";

type ServiceInfo = {
  title: string;
  description: string;
  btnTitle: string;
  btnLink: string;
  imgLink: string;
};

type ServiceModule = {
  content: ServiceInfo;
  reverse?: boolean;
};
const ServiceModule = ({ content, reverse = false }: ServiceModule) => {
  return (
    <Layout>
      <section className="container mx-auto">
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : "flex"
          }  pt-24 px-7`}
        >
          <div className="w-1/2">
            <h4 className="font-bold mb-5">{content.title}</h4>
            <p className="mb-8">{content.description}</p>
            <button className="w-full">{content.btnTitle}</button>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <img src={content.imgLink} className="w-[10rem]" alt="Service" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceModule;
