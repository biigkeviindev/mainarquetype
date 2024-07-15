import Banner from "@/packages/Banner/Banner";
import Footer from "@/packages/Footer/Footer";
import LandGridList from "@/packages/LandingSdk/LandGridList";
import LandHeader from "@/packages/LandingSdk/LandHeader";
import Layout from "@/packages/Layout/Layout";
import MainBanner from "@/packages/Main/components/MainBanner";
import MktBanner from "@/packages/Main/components/MktBanner";
import {
  linksFooterPage,
  MainBannerText,
  MENU_ITEMS,
  serviceWebAdvantages,
} from "@/packages/Main/constants/common";
import Menu from "@/packages/Menu/Menu";

export default function Home() {
  return (
    <main>
      <Menu items={MENU_ITEMS} />
      <LandHeader
        title="El Socio Ideal para el Desarrollo de tu Página Web"
        subtitle="Soluciones innovadoras para mejorar tu presencia en línea."
        btnTitle="Solicita una Consulta Gratis"
      />
      <LandGridList list={serviceWebAdvantages} />
      <Banner title={MainBannerText} />
      <Footer links={linksFooterPage} />
    </main>
  );
}
