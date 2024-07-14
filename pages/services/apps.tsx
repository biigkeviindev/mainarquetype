import Banner from "@/packages/Banner/Banner";
import Footer from "@/packages/Footer/Footer";
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
      apps
      <Banner title={MainBannerText} />
      <Footer links={linksFooterPage} />
    </main>
  );
}
