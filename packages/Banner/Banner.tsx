import React from "react";
import Layout from "../Layout/Layout";

const Banner = ({ title }: any) => {
  return (
    <Layout>
      <section className="container mx-auto bg-black">
        <div className="py-10 px-7 mt-10">
          <p className="text-[20px] text-white">{title}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Banner;
