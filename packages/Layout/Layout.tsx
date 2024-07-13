import React, { ReactNode } from "react";

type LayoutProp = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProp) => {
  return <section className="container mx-auto w-full">{children}</section>;
};

export default Layout;
