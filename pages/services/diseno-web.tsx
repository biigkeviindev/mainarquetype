import Banner from "@/packages/Banner/Banner";
import Footer from "@/packages/Footer/Footer";
import LandHeader from "@/packages/LandingSdk/LandHeader";
import Layout from "@/packages/Layout/Layout";
import MainBanner from "@/packages/Main/components/MainBanner";
import MktBanner from "@/packages/Main/components/MktBanner";
import {
  linksFooterPage,
  MainBannerText,
  MENU_ITEMS,
} from "@/packages/Main/constants/common";
import Menu from "@/packages/Menu/Menu";

export default function Home() {
  return (
    <main>
      <Menu items={MENU_ITEMS} />
      <LandHeader
        title="Soluciones para dropshippers y compra al por mayor"
        subtitle="Subtitulo"
      />
      dise´ño web
      <Banner title={MainBannerText} />
      <Footer links={linksFooterPage} />
    </main>
  );
}
