import React from "react";
import Layout from "../Layout/Layout";

const LandHeader = ({ title, subtitle }: any) => {
  const sectionStyle = {
    backgroundImage: 'url("/bg-banner.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "12px",
    borderBottom: "1px solid #f1f2f3",
  };

  return (
    <Layout>
      <section
        style={sectionStyle}
        className="container flex items-center justify-center mx-auto py-10 px-7 h-72"
      >
        <div className="flex flex-col w-full h-full justify-center ">
          <h1 className="text-[28px] text-white font-bold">{title}</h1>
          <h2 className="text-[22px] text-[#f1f2f3] font-medium mt-3">
            {subtitle}
          </h2>
        </div>
      </section>
    </Layout>
  );
};

export default LandHeader;
