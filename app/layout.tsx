import { Metadata } from "next";
import { ReactNode } from "react";

import "~/assets/styles/base.css";

interface LayoutProps {
  children?: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Decor - Theme Builder",
  description: "Yet another Discord Streamkit Overlay customizable theme builder",
};

export default Layout;
