import Banner from "@/packages/Banner/Banner";
import Footer from "@/packages/Footer/Footer";
import Layout from "@/packages/Layout/Layout";
import MainBanner from "@/packages/Main/components/MainBanner";
import MktBanner from "@/packages/Main/components/MktBanner";
import {
  linksFooterPage,
  MainBannerText,
  MENU_ITEMS,
  SERVICE_LIST_ITEMS,
  ServiceConnectionModule,
  ServiceMktModule,
} from "@/packages/Main/constants/common";
import Menu from "@/packages/Menu/Menu";
import ServiceLayer from "@/packages/ServiceLayer/ServiceLayer";
import ServiceModule from "@/packages/ServiceModule/ServiceModule";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Menu items={MENU_ITEMS} />
      <MainBanner />
      <div className="container mx-auto w-full">
        <div className="pt-24 px-7 flex justify-center">
          <img
            className="w-full bg-[#fff8dc] rounded-lg shadow-lg"
            src="/mkt-image.png"
            alt="Banner principal movil"
          />
        </div>
      </div>
      <section className="container mx-auto">
        <Layout>
          <ServiceLayer
            title="Los mejores servicios en:"
            list={SERVICE_LIST_ITEMS}
          />
        </Layout>
      </section>
      <ServiceModule content={ServiceConnectionModule} />
      <Banner title={MainBannerText} />
      <ServiceModule reverse content={ServiceMktModule} />
      <MktBanner />
      <Footer links={linksFooterPage} />
    </main>
  );
}
