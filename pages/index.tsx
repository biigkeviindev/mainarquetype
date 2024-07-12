import MainBanner from "@/packages/Main/components/MainBanner";
import { MENU_ITEMS } from "@/packages/Main/constants/common";
import Menu from "@/packages/Menu/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <script src="https://kit.fontawesome.com/5334a5f967.js"></script>
      </Head>
      <Menu items={MENU_ITEMS} />
      <MainBanner />
    </main>
  );
}
