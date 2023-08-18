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

export default Layout;
