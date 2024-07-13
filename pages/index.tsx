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
      <Head>
        <script src="https://kit.fontawesome.com/5334a5f967.js"></script>
      </Head>
      <Menu items={MENU_ITEMS} />
      <MainBanner />
      <div className="container mx-auto w-full">
        <div className="pt-24 px-7 flex justify-center">
          <img
            className="w-full"
            src="https://nexbu.es/wp-content/uploads/2023/11/266aadf1-4345543_10ww0ww000000000000028-800x800.png"
            alt="Banner principal movil"
          />
        </div>
      </div>
      <section className="container mx-auto">
        <Layout children={<ServiceLayer list={SERVICE_LIST_ITEMS} />} />
      </section>
      <ServiceModule content={ServiceConnectionModule} />
      <Banner title={MainBannerText} />
      <ServiceModule reverse content={ServiceMktModule} />
      <MktBanner />
      <Footer links={linksFooterPage} />
    </main>
  );
}
