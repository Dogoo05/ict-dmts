import "@/styles/globals.css";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const hideMenuFooterRoutes = ["/login"];
  const shouldHideMenuFooter = hideMenuFooterRoutes.includes(router.pathname);

  return (
    <div>
      {!shouldHideMenuFooter && <Menu />}
      <Component {...pageProps} />
      {!shouldHideMenuFooter && <Footer />}
    </div>
  );
}
