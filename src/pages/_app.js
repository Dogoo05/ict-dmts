import "../styles/globals.css";

import { useRouter } from "next/router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const hideMenuFooterRoutes = ["/login"];
  const shouldHideMenuFooter = hideMenuFooterRoutes.includes(router.pathname);

  return (
    <div className="">
      {!shouldHideMenuFooter && <Menu />}
      <Component {...pageProps} />
      {!shouldHideMenuFooter && <Footer />}
    </div>
  );
}
