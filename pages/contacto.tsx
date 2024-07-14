import Footer from "@/packages/Footer/Footer";
import ContactoSection from "@/packages/Main/components/ContactoSection";
import { linksFooterPage, MENU_ITEMS } from "@/packages/Main/constants/common";
import Menu from "@/packages/Menu/Menu";
import React from "react";

const contacto = () => {
  return (
    <main>
      <Menu items={MENU_ITEMS} />
      <ContactoSection />
      <Footer links={linksFooterPage} />
    </main>
  );
};

export default contacto;
